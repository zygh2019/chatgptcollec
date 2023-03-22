<template>
	<view class="chat">
		<!-- 聊天记录 -->
		<mescroll-body ref="mescrollRef" :auto="false" @init="mescrollInit" :down="downOption" @down="downCallback"
			:up="upOption" @up="upCallback">
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
			<view class="seize" style="height: 200rpx"></view>
		</mescroll-body>
		<!-- 底部输入框 -->
		<view class="input-box">
			<view style="flex: 1;margin-right: 10rpx;">
				<u--input placeholder="请输入内容" border="surround" v-model="problem">
				</u--input>
			</view>
			<view>
				<u-button iconColor="#ffffff" color="#26B3A0" size="normal" text="发送" @tap="getAnswer">
				</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin],
		data() {
			return {
				problem: '',
				answer: '',
				show: false,
				key: '',
				chat: [],
				type: 'chat',
				nomore: false,
				pagenum: 1,
				upOption: {
					use: false,
					noMoreSize: 0
				},
				downOption: {
					auto: false
				},
				userInfo: {},
				openData: []
			}
		},
		onLoad() {
			this.getChat()
		},
		methods: {
			getChat() {
				this.chat.push({
					problem: '',
					answer: '我是智能机器人ai，开始你的提问吧！'
				});
			},
			downCallback() {
				if (this.pagenum <= 1 || this.nomore) {
					this.mescroll.endErr();
					return false;
				}
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
					client_avatar: this.userInfo.avatar
				})
				this.openData.push({
					"role": "user",
					"content": this.problem
				})
				this.$http.openai({
					type: 'chat',
					data: this.openData,
				}).then((res) => {
					if (res.code == 0) {
						this.$set(this.chat, index, {
							...this.chat[index],
							answer: res.text
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
					background: #26b3a0;
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

	.input-box {
		display: flex;
		background: #fff;
		position: fixed;
		// #ifdef H5
		bottom: calc(env(safe-area-inset-bottom) + 50px);
		bottom: calc(constant(safe-area-inset-bottom) + 50px);
		// #endif
		// #ifndef H5
		bottom: 0;
		// #endif
		left: 0;
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
	}
</style>
