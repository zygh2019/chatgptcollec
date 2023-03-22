<template>
	<view class="template-loading">
		<view style="position: relative;padding: 0 20rpx;height: 85vh;">
			<scroll-view scroll-y="true" :scroll-top="scrollTop" :style="{paddingTop:statusBarHeight}" class="scroll-Y"
				:scroll-with-animation="true" @scroll="scroll">
				<view class="chat-item" v-for="(item, index) in chat" :key="index">
					<!-- 问题框 -->
					<u-transition :show="true" mode="fade-right" v-if="item.problem != ''">
						<view class="chat-item__right">
							<view class="chat-item__right-message" @longtap="copy(item.problem)">
								{{ item.problem }}
							</view>
							<u-avatar shape="square" :src="item.client_avatar"></u-avatar>
						</view>
					</u-transition>
					<!-- 答案框 -->
					<u-transition :show="true" mode="fade-left">
						<view class="chat-item__left u-flex">
							<u-avatar src="/static/wxlogo.png" shape="square"></u-avatar>
							<view class="chat-item__left-right">
								<view class="chat-item__left-name"> ai </view>
								<view class="chat-item__left-bottom">
									<view class="chat-item__left-message" @longtap="copy(item.answer)">
										<text v-if="item.answer == 'error'">网路错误</text>
										<text v-if="item.answer != 'error'">{{ item.answer || "思考中..." }}</text>
									</view>
									<u-loading-icon v-if="item.answer == ''"></u-loading-icon>
									<u-icon v-if="item.answer == 'error'" name="error"></u-icon>
									<view style="margin-top:auto;">
										<u-icon v-if="item.answer && item.answer != 'error'" @tap="copy(item.answer)"
											name="file-text"></u-icon>
									</view>
								</view>
							</view>
						</view>
					</u-transition>
				</view>
			</scroll-view>
		</view>
		<!-- 底部输入框 -->
		<view class="input-box">
			<view style="flex: 1;margin-right: 10rpx;">
				<u--input placeholder="请输入内容" border="surround" v-model="problem">
				</u--input>
			</view>
			<view>
				<u-button iconColor="#ffffff" color="#98e4f3" size="normal" text="发送" @tap="getAnswer">
				</u-button>
			</view>
		</view>
		<!-- 页面内容 -->
		<view class="bg-contaniner" style="padding: 0 25rpx;">
		</view>
		<tn-fab :btnList="btnList" :left="left" :right="right" :bottom="bottom" :width="width" :height="height"
			:iconSize="iconSize" :backgroundColor="backgroundColor" :fontColor="fontColor" :icon="icon"
			:animationType="animationType" :showMask="showMask" @click="clickFabItem">
		</tn-fab>

	</view>
</template>

<script>
	export default {
		name: 'TemplateLoading',
		data() {
			return {
				chat: [],
				openData: [],
				problem: '',
				answer: '',
				upOption: {
					use: false,
					noMoreSize: 0
				},
				downOption: {
					auto: false
				},
				scrollTop: 9999999999,
				left: 'auto',
				right: 40,
				bottom: 300,
				width: 64,
				height: 64,
				iconSize: 48,
				backgroundColor: '#01BEFF',
				fontColor: '#FFFFFF',
				icon: 'open',
				animationType: 'around',
				showMask: true,
				btnList: [{
						icon: 'power',
						text: '返回',
						bgColor: '#E72F8C'
					},
					{
						text: 'UI',
						textSize: 32,
						bgColor: '#FF7043'
					},
					{
						icon: 'share-triangle',
						text: '分享',
						iconSize: 32,
						iconColor: '#AAAAAA',
						bgColor: '#24F083',
					}
				],
				statusBarHeight: 20
			}
		},
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
			this.getChat()
		},
		methods: {
			// 点击悬浮按钮的内容
			clickFabItem(e) {
				switch (e.index) {
					case 0: {
						uni.navigateBack()
						break;
					}
					case 1: {
						this.openData = []
						this.chat = []
						this.$tn.message.toast(`已清屏`)
						break;
					}
					case 2: {
						// this.$tn.message.toast(`暂未开放`)
						break;
					}
				}
			},
			scroll(e) {
				console.log(e);
			},
			getChat() {
				this.chat.push({
					problem: '',
					answer: '我是智能机器人ai，开始你的提问吧！'
				});
			},
			copy(val) {
				uni.setClipboardData({
					data: this.answer || val,
					success: function() {
						uni.showToast({
							title: '复制成功',
							icon: 'none'
						})
					}
				});
			},
			async getAnswer() {
				let user = uni.getStorageSync('user');
				let index = this.chat.length
				if (!this.problem) {
					uni.showToast({
						title: '你还没有输入问题呢！',
						icon: 'none'
					});
					return
				}
				this.chat.push({
					problem: this.problem,
					answer: '',
					client_avatar: 'this.userInfo.avatar'
				})
				this.openData.push({
					"role": "user",
					"content": this.problem
				})




				setTimeout(() => {
					this.scrollTop = this.scrollTop + 1;
				}, 100)
				this.$http.openai({
					type: 'color',
					data: 'CSS颜色代码' + this.problem,
				}).then((res) => {
					console.log(res);
					if (res.code == 0) {
						this.$set(this.chat, index, {
							...this.chat[index],
							answer: res.text,
						});
						this.$nextTick(() => {
							this.mescroll.scrollTo(99999999);
						});
					} else {
						this.openData.splice(this.openData.length - 1, 1)
						this.$set(this.chat, index, {
							...this.chat[index],
							answer: 'error'
						});
						this.$nextTick(() => {
							this.mescroll.scrollTo(99999999);
						});
					}
				})
				this.problem = ""
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/static/css/templatePage/custom_nav_bar.scss';
	@import '@/static/css/demo.scss';

	.chat {
		padding: 20rpx;
		box-sizing: border-box;

		&-item {
			&__left {
				display: flex;
				margin-top: 20rpx;

				&-right {
					margin-left: 20rpx;
				}

				&-name {
					font-size: 24rpx;
				}

				&-message {
					margin-top: 10rpx;
					background: #98e4f3;
					padding: 20rpx;
					border-radius: 10rpx;
					font-size: 28rpx;
					color: #fff;
					margin-right: 20rpx;
				}

				&-bottom {
					display: flex;
				}
			}

			&__right {
				display: flex;
				margin-top: 20rpx;
				justify-content: flex-end;

				&-message {
					margin-right: 20rpx;
					background: #f6f6f6;
					padding: 20rpx;
					border-radius: 10rpx;
					font-size: 28rpx;
				}
			}
		}
	}

	.scroll-Y {
		height: 100vh;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.input-box {
		box-sizing: border-box;
		display: flex;
		position: fixed;
		bottom: calc(110rpx + env(safe-area-inset-bottom));
		left: 0;
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
	}
</style>
