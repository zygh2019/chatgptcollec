<template>
	<view>
		<view v-if="ptzt==0">
			
		</view>
		<view v-if="ptzt==1" class="container">
			<view class="form">
				<view class="logo">
					<u--image src="/static/wxlogo.png" shape="circle" width="200rpx" height="200rpx">
					</u--image>
				</view>
				<u-transition :show="true" mode="slide-left">
					<view class="title"> 请打开令牌获取登录密码</view>
				</u-transition>
				<u-transition :show="true" mode="slide-right">
					<view class="desc">AI界的新神器，ChatGPT帮你写答案</view>
				</u-transition>
				<view style="width: 100%;height: 30rpx;"></view>
				<view style="display: flex;justify-content: center; ">
					<u-code-input v-model="lpmvl" :maxlength="6"></u-code-input>
				</view>
				<view class="btn-group">
					<view class="btn">
						<u-button shape="circle" iconColor="#ffffff" color="#26B3A0" text="立即登录" @click='denglu'>
						</u-button>
					</view>
					<view class="btn">
						<u-button shape="circle" color="#26B3A0" :plain="true" icon="fingerprint" text="打开令牌小程序">
						</u-button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lpmvl: '',
				ptzt: 0

			};
		},
		onLoad(option) {
			this.lpzt()
			this.yhxx()
			


		},
		methods: {
			lpzt() {
				let this_ = this
				this_.httpClient
					.post({
						url: this_.APIPath.user.QueryTokenAuditMode,
						data: {}
					})
					.then(res => {
						this.ptzt = res.data.data
					})

			},
			onToForm() {
				let pages = getCurrentPages(); // 页面栈
				let beforePage = pages[pages.length - 2]; // 上一页
				uni.navigateBack({
					success: () => {
						beforePage.onLoad(beforePage.options); // 执行上一页的onLoad方法
					}
				});
			},
			denglu() {
				let this_ = this
				let params = {
					code: this_.lpmvl
				}
				this_.httpClient
					.post({
						url: this_.APIPath.user.Loginwithtoken,
						data: params
					})
					.then(res => {
						console.log(res.data)
						if (res.data.code == 200) {
							uni.setStorageSync('id', res.data.id);
							uni.setStorageSync('status', res.data.status);
							uni.setStorageSync('token', res.data.token);
							this_.onToForm()
						} else {
							uni.showToast({
								icon: 'none',
								title: '令牌密码已失效',
								duration: 3000
							});
						}

					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 30%;

		.title {
			font-size: 38rpx;
			font-weight: bolder;
			margin-top: 15rpx;
		}

		.desc {
			margin-top: 15rpx;
			font-size: 28rpx;
			color: #666;
		}

		.btn-group {
			width: 80%;

			.btn {
				margin: 30rpx 0rpx;

				.u-button {
					height: 100rpx;
				}
			}
		}
	}
</style>
