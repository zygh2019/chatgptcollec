<template>
	<view>
		<view v-if="ptzt==0">
			<view class="container">
			<view class="form1">
				<view class="logo">
					<u--image src="/static/wxlogo.png" shape="circle" width="200rpx" height="200rpx">
					</u--image>
				</view>
				<u-transition :show="true" mode="slide-left">
					<view class="title"> 登录令牌</view>
				</u-transition>
				<u-transition :show="true" mode="slide-right">
					<view class="desc">令牌密码是唯一通行凭证，有效期7天</view>
				</u-transition>
				<view style="width: 100%;height: 30rpx;"></view>
				<view  style="display: flex;justify-content: center; ">
					<u-code-input v-model="lpmvl" :maxlength="6" disabledKeyboard='true'></u-code-input>
				</view>
				</view>
			</view>
		</view>
	<view v-if="ptzt==1" class="container">
		<view class="bg"></view>
		<view class="form">
			<view class="header">
				<view class="title">人工智能回答你需要的问题</view>
			</view>
			<u-transition :show="true" mode="fade-left">
				<view class="panel">
					<view class="head">
						<view class="title">填写您的问题</view>
						<view class="tips">每次对话消耗5积分</view>
					</view>
					<view class="textarea">
						<u--textarea v-model="wtvalue" height="140" placeholder="支持长按粘贴您的问题"></u--textarea>
					</view>
					<view class="btn-group">
						<view class="btn paste">
							<u-button icon="file-text" text="粘贴问题"></u-button>
						</view>
						<view class="btn get">
							<u-button @click="tolts" iconColor="#ffffff" color="#26B3A0" icon="edit-pen" text="获取问题答案">
							</u-button>
						</view>
					</view>
				</view>
			</u-transition>
		</view>
		<view class="alert">
			<u-alert title="当前使用人数过多,获取答案可能超过30秒钟" type="error"></u-alert>
		</view>
		<!-- 	<view class="ad-box">
			<ad unit-id="adunit-945b550bf5840494"></ad>
		</view> -->
		<view class="tool">
			<view class="header">
				<view class="title">功能特性</view>
			</view>
			<u-transition :show="true" mode="slide-up">
				<view class="grid">
					<view class="item">
						<view class="icon">
							<u-icon size="28"
								name="https://img.alicdn.com/imgextra/i1/2064565174/O1CN01v7Y9311o5k2r5Rwaq_!!2064565174.png">
							</u-icon>
						</view>
						<view class="title">AI回答</view>
						<view class="desc">轻松获取</view>
					</view>
					<view class="item">
						<view class="icon">
							<u-icon size="28"
								name="https://img.alicdn.com/imgextra/i1/2064565174/O1CN01H200mY1o5k2ythU1B_!!2064565174.png">
							</u-icon>
						</view>
						<view class="title">智能答案</view>
						<view class="desc">免去千篇一律</view>
					</view>
					<view class="item">
						<view class="icon">
							<u-icon size="28"
								name="https://img.alicdn.com/imgextra/i1/2064565174/O1CN01FDSoxG1o5k2xjTHUD_!!2064565174.png">
							</u-icon>
						</view>
						<view class="title">自动代码</view>
						<view class="desc">免去繁琐搜索</view>
					</view>
					<view class="item">
						<view class="icon">
							<u-icon size="28"
								name="https://img.alicdn.com/imgextra/i4/2064565174/O1CN01UP4ksa1o5k2rDpdOP_!!2064565174.png">
							</u-icon>
						</view>
						<view class="title">引导写作</view>
						<view class="desc">AI发散思维</view>
					</view>
					<view class="item">
						<view class="icon">
							<u-icon size="28"
								name="https://img.alicdn.com/imgextra/i2/2064565174/O1CN01Oep4C01o5k2zlWs2q_!!2064565174.png">
							</u-icon>
						</view>
						<view class="title">存在限制</view>
						<view class="desc">会有偏见内容</view>
					</view>
					<view class="item">
						<view class="icon">
							<u-icon size="28"
								name="https://img.alicdn.com/imgextra/i1/2064565174/O1CN01onUFC01o5k2uPHOqj_!!2064565174.png">
							</u-icon>
						</view>
						<view class="title">在线工具</view>
						<view class="desc">无需下载软件</view>
					</view>
				</view>
			</u-transition>
		</view>
		<!-- <view class="share">
			<u-button open-type="share" shape="circle" color="#26B3A0" :plain="true" icon="share" text="推荐给朋友"></u-button>
		</view> -->
	</view>
	</view>
</template>

<script>
	let videoAd = null;
	// 在页面中定义插屏广告
	let interstitialAd = null
	export default {
		data() {
			return {
				wtvalue: '',
				ptzt: 0,
				lpmvl:'819761'
			};
		},
		async onLoad() {
			// this.videoAdLoad()
			// this.interstitialAdLoad()
			this.lpzt()
			setTimeout(() => {
				this.interstitialAdClick()
			}, 2 * 1000)
		},
		methods: {
			onSubmitGPT() {
				console.log(1)
				uni.navigateTo({
					url: '/pages/main/answer/index'
				})
			},
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
			videoAdClick() {
				var that = this
				uni.showLoading({
					title: '加载中'
				});
				if (videoAd) {
					videoAd.show().then(() => {
						uni.hideLoading()
					}).catch(err => {
						// 失败重试
						videoAd.load().then(() => {
							uni.hideLoading()
							videoAd.show()
						}).catch(err => {
							uni.hideLoading()
							uni.showToast({
								icon: 'none',
								title: '访问人数过多，请稍后再试',
								duration: 3000
							});
							console.log('激励视频 广告显示失败')
						})
					})
				} else {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '访问人数过多，请稍后再试',
						duration: 3000
					});
				}
			},
			videoAdLoad() {
				var that = this
				if (wx.createRewardedVideoAd) {
					// 加载激励视频广告
					videoAd = wx.createRewardedVideoAd({
						adUnitId: "adunit-d2d7b511afea2339"
					});
					//捕捉错误
					videoAd.onError(err => {
						// 进行适当的提示
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: '访问人数过多，请稍后再试',
							duration: 3000
						});
						console.log('videoAd onError', err);
					});
					// 监听关闭
					videoAd.onClose(status => {
						uni.hideLoading()
						if ((status && status.isEnded) || status === undefined) {
							// 正常播放结束，下发奖励
							that.onSubmitGPT()
						} else {
							// 播放中途退出，进行提示
							console.log('中途退出')
						}
					});
				}
			},
			interstitialAdClick() {
				// 在适合的场景显示插屏广告
				if (interstitialAd) {
					interstitialAd.show().catch((err) => {
						console.error(err)
					})
				}
			},
			interstitialAdLoad() {
				if (wx.createInterstitialAd) {
					interstitialAd = wx.createInterstitialAd({
						adUnitId: 'adunit-42f2e4d677e3b37c'
					})
					interstitialAd.onLoad(() => {
						console.log('onLoad')
					})
					interstitialAd.onError((err) => {
						console.log('err')
					})
					interstitialAd.onClose(() => {
						console.log('关闭')
					})
				}
			},
			tolts() {
				if (uni.getStorageSync('token') != undefined && uni.getStorageSync('token') != null && uni.getStorageSync(
						'token') != '') {
					uni.navigateTo({
						url: '/pages/liaotian/index?data=' + this.wtvalue
					})
				} else {
					this.tologo()
				}

			},
			tologo() {
				uni.navigateTo({
					url: '/pages/logoin/index'
				})
			}
			// 
		}
	}
</script>

<style lang="scss" scoped>
	.share {
		position: fixed;
		right: 40rpx;
		bottom: 40rpx;
		width: 40%;

		.u-button {
			box-shadow: 0rpx 10rpx 10rpx #eee !important;
		}
	}

	.ad-box {
		width: 90%;
		margin: 15rpx auto;
	}

	.tool {
		width: 90%;
		margin: 15rpx auto;
		padding-bottom: 50rpx;

		.header {
			.title {
				margin-bottom: 30rpx;
			}
		}

		.grid {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;

			.item {
				width: 30%;
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: #F0FAF8;
				margin: 15rpx 0rpx;
				padding: 30rpx 0rpx;
				border-radius: 10rpx;

				.title {
					color: #1B2B20;
					margin-top: 15rpx;
				}

				.desc {
					color: #67776C;
					font-size: 24rpx;
				}
			}
		}
	}

	.alert {
		width: 90%;
		margin: 30rpx auto;
	}

	.form {
		width: 90%;
		margin: 0 auto;
		z-index: 999;

		.header {
			margin-bottom: 30rpx;

			.title {
				text-align: center;
				color: #fff;
				margin: 30rpx 0rpx;
			}
		}

		.panel {
			padding: 30rpx;
			background-color: #fff;
			border-radius: 15rpx;
			box-shadow: 0rpx 10rpx 10rpx #eee;

			.head {
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.tips {
					color: #dd6161;
				}
			}

			.textarea {
				margin-top: 30rpx;
			}

			.btn-group {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-top: 30rpx;

				.paste {
					width: 40%;
				}

				.get {
					width: 56%;
				}
			}
		}
	}

	.bg {
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		width: 100%;
		background-color: #26B3A0;
		min-height: 200rpx;
		border-radius: 0rpx 0rpx 140rpx 140rpx;
		z-index: -1;
	}
	.form1 {
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
