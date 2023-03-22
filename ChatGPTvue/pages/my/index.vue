<template>
	<view>
		<view v-if="ptzt==0" style="">
			<u--text text="令牌是验证身份一个辅助工具保证本次不会出现异常，令牌切记要妥善保管不要泄露。"></u--text>

		</view>
		<view v-if="ptzt==1">
			<view>
				<u-row>
					<u-col span="11" offset="0.5">
						<view class="top_k">
							<view style="width: 100%;height: 150rpx;">
								<u-row>
									<u-col span="3">
										<view style="margin-left: 30rpx;margin-top: 20rpx;">
											<u-avatar :src="imgsrc"></u-avatar>
										</view>

									</u-col>
									<u-col span="6">
										<view style="width: 100%;height: 30rpx;"></view>
										<u-row>
											<u-col span="4">
												用户ID：
											</u-col>
											<u-col span="8">
												<view @click="fzfn">{{userId}}</view>
											</u-col>
										</u-row>
										<view style="width: 100%;height: 10rpx;"></view>
										<u-row>
											<u-col span="4">
												<view style="color: #636363;">积分：</view>
											</u-col>
											<u-col span="8">
												<view style="color: #636363;">{{usdata.accountbalance}}</view>
											</u-col>
										</u-row>

									</u-col>
									<u-col span="3">
										<view v-if="usdata.hystatus==1" style="margin-left: 50rpx;">
											<image src="../../static/huiyuanl.png" style="width: 65rpx;height: 65rpx;">
											</image>
										</view>
										<view v-if="usdata.hystatus==0" style="margin-left: 50rpx;">
											<image src="../../static/huiyuanh.png" style="width: 65rpx;height: 65rpx;">
											</image>
										</view>
										<view v-if="usdata.hystatus==1" style="ont-size: 18rpx; text-align: center;">
											{{usdata.hystatus==1?''+toDate(usdata.hytim)+'止':'未开通'}}
										</view>
									</u-col>
								</u-row>
							</view>

						</view>
					</u-col>
				</u-row>
			</view>
			<view style="width: 100%;height: 50rpx;"></view>
			<view>
				<u-row>
					<u-col span="11" offset="0.5">
						<view style="width: 100%;height: 30rpx;"></view>
						<view style="height: 80rpx;">
							<u-row customStyle="margin-bottom: 10px">
								<u-col span="4">
									<view style="color: #373737;">签到领取积分</view>
								</u-col>
								<u-col span="5.5">
									<view style="color: #939393; float: right;font-size: 22rpx;"> 10积分/1次</view>
								</u-col>
								<u-col span="2" offset="0.5">
									<view>
										<u-button v-if="qdstate==0" color="#26B3A0" size='mini' text="签到"
											@click='qdfn()'>
										</u-button>
										<u-button v-if="qdstate==1" :disabled="disabled" color="#26B3A0" size='mini'
											text="今日已签"></u-button>
									</view>

								</u-col>
							</u-row>
							<view style="width: 100%;height: 10rpx;"></view>
							<u-line></u-line>
						</view>
					</u-col>
				</u-row>

				<!-- <u-row>
				<u-col span="11" offset="0.5">
					<view style="width: 100%;height: 30rpx;"></view>
					<view style="height: 80rpx;">
						<u-row customStyle="margin-bottom: 10px">
							<u-col span="4">
								<view style="color: #373737;">完整观看视频</view>
							</u-col>
							<u-col span="5.5">
								<view style="color: #939393; float: right;font-size: 22rpx;"> 5积分/1次</view>
							</u-col>
							<u-col span="2" offset="0.5">
								<view>
									<u-button color="#26B3A0" size='mini' text="去看视频"></u-button>
								</view>

							</u-col>
						</u-row>
						<view style="width: 100%;height: 10rpx;"></view>
						<u-line></u-line>
					</view>
				</u-col>
			</u-row>
			<u-row>
				<u-col span="11" offset="0.5">
					<view style="width: 100%;height: 30rpx;"></view>
					<view style="height: 80rpx;">
						<u-row customStyle="margin-bottom: 10px">
							<u-col span="4">
								<view style="color: #373737;">邀请好友使用</view>
							</u-col>
							<u-col span="5.5">
								<view style="color: #939393; float: right;font-size: 22rpx;"> 20积分/1次</view>
							</u-col>
							<u-col span="2" offset="0.5">
								<view>
									<u-button color="#26B3A0" size='mini' text="去分享"></u-button>
								</view>

							</u-col>
						</u-row>
						<view style="width: 100%;height: 10rpx;"></view>
						<u-line></u-line>
					</view>
				</u-col>
			</u-row> -->
				<!-- <u-row>
				<u-col span="11" offset="0.5">
					<view style="width: 100%;height: 30rpx;"></view>
					<view style="height: 80rpx;">
						<u-row customStyle="margin-bottom: 10px">
							<u-col span="5">
								<view style="color: #373737;">关注公众号获取积分</view>
							</u-col>
							<u-col span="4.5">
								<view style="color: #939393; float: right;"> </view>
							</u-col>
							<u-col span="2" offset="0.5">
								<view>
									<u-button color="#26B3A0" size='mini' text="去关注"></u-button>
								</view>

							</u-col>
						</u-row>
						<view style="width: 100%;height: 10rpx;"></view>
						<u-line></u-line>
					</view>
				</u-col>
			</u-row> -->
				<u-row>
					<u-col span="11" offset="0.5">
						<view style="width: 100%;height: 30rpx;"></view>
						<view style="height: 80rpx;">
							<u-row customStyle="margin-bottom: 10px">
								<u-col span="5">
									<view style="color: #373737;">通过激活码激活会员</view>
								</u-col>
								<u-col span="4.5">
									<view style="color: #939393; float: right;"> </view>
								</u-col>
								<u-col span="2" offset="0.5">
									<view>
										<u-button color="#26B3A0" size='mini' text="立即激活"
											@click="jhmvalue='',jhmshow=true"></u-button>
									</view>

								</u-col>
							</u-row>
							<view style="width: 100%;height: 10rpx;"></view>
							<u-line></u-line>
						</view>
					</u-col>
				</u-row>
				<view style="width: 100%;height: 50rpx;"></view>
				<u-row>
					<u-col span="11" offset="0.5">
						<view class="btn">
							<u-button shape="circle" iconColor="#ffffff" color="#26B3A0" text="跳转令牌小程序(购买会员、开通代理)"
								@click='tolingpcx()'>
							</u-button>
						</view>
					</u-col>
				</u-row>
			</view>
			<u-popup :show="jhmshow" mode='center' closeable='true' :round="10" @close="jhmshow=false" @open="open">
				<view style="padding: 30rpx; width: 500rpx;height: 300rpx;">
					<u-row customStyle="margin-bottom: 10px">
						<u-col span="12">
							<u--text size='30rpx' text="激活码:"></u--text>
							<view style="width: 100%;height: 30rpx;"></view>
							<u--input :clearable='true' placeholder="请输入激活码" border="surround" v-model="jhmvalue">
							</u--input>
						</u-col>
					</u-row>
					<view style="width: 100%;height: 30rpx;"></view>
					<view>
						<u-button type="primary" text="立即激活" color="#26B3A0" @click='jhkm()'></u-button>
					</view>
					<view style="width: 100%;height: 30rpx;"></view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import * as config from '@/utils/config.js'
	export default {
		components: {

		},
		data() {
			return {
				phoneNumber: null,
				platformType: null,
				hyzt: 1,
				usdata: {},
				usdata2: {},
				imgsrc: require('../../static/WX20230213-220145@2x.png'),
				dqpt: 0,
				qdstate: 0,
				jhmshow: false,
				jhmvalue: '',
				userId: '',
				ptzt: 0
			}
		},
		onLoad() {
			this.platformType = config.platform_type
			let port = uni.getSystemInfoSync()
			if (port.uniPlatform == 'Android' || port.uniPlatform == 'ios' || port.uniPlatform == 'app') {
				this.dqpt = 1
			} else if (port.uniPlatform == 'mp-weixin') {
				this.dqpt = 0
			}
			console.log(config.platform_type)



		},
		onShow() {
			this.lpzt()


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
						if (this.ptzt == 1) {
							let this_ = this
							setTimeout(function() {
								if (uni.getStorageSync('token') != undefined && uni.getStorageSync('token') !=
									null && uni
									.getStorageSync(
										'token') != '') {
									this.hqqd()
									this.yhxx()
								} else {
									this_.tologo()
								}
								// 时间间隔
							}, 100);
						}
					})

			},
			fzfn() {
				let this_ = this
				uni.setClipboardData({
					data: this_.userId, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				});
			},
			jhkm() {
				let this_ = this
				this_.httpClient
					.post({
						url: this_.APIPath.user.Cardactivationmember,
						data: {
							code: this.jhmvalue
						}
					})
					.then(res => {

						if (res.data.state == 1) {
							this.jhmvalue = ''
							this.jhmshow = false
							this.hqqd()
							this.yhxx()
							uni.showToast({ //提示
								title: '激活成功',
							})
						} else {
							uni.showToast({ //提示
								icon: 'none',
								title: '激活码已失效',
							})
						}
					})

			},
			yhxx() {
				let this_ = this
				this_.httpClient
					.post({
						url: this_.APIPath.user.getuserinformation,
						data: {}
					})
					.then(res => {
						if (res.data.code == 200) {
							this_.usdata = res.data.data
							this_.usdata2 = res.data.data1
							this_.userId = res.data.data.InviterID
							// this_.hqgtlist()
						} else {
							uni.showToast({ //提示
								icon: 'none',
								title: '获取用户信息失败',
							})
						}
					})
			},
			hqqd() {
				let this_ = this
				this_.httpClient
					.post({
						url: this_.APIPath.user.signin,
						data: {
							type: '1'
						}
					})
					.then(res => {
						this.qdstate = res.data.state
					})
			},
			qdfn() {
				let this_ = this
				this_.httpClient
					.post({
						url: this_.APIPath.user.signin,
						data: {
							type: '2'
						}
					})
					.then(res => {
						this.qdstate = res.data.state
						this.hqqd()
						this.yhxx()
						if (res.data.state == 1) {
							uni.showToast({ //提示
								title: '签到成功',
							})
						}
					})
			},
			login() {
				let this_ = this
				wx.login({
					success(res) {
						if (res.code) {
							console.log('登录成功！', res)
							//发起网络请求
							let params = {
								code: res.code,
								phone: this_.phoneNumber
							}
							this_.httpClient
								.post({
									url: this_.APIPath.user.wxregister,
									data: params
								})
								.then(res => {
									uni.setStorageSync('id', res.data.id);
									uni.setStorageSync('status', res.data.status);
									uni.setStorageSync('token', res.data.token);
								})

						} else {
							console.log('登录失败！' + res.errMsg)
						}
					}
				})
			},
			toDate(stamp) {
				const now1 = new Date(Number(stamp));
				const yeark1 = now1.getFullYear();
				const month1 =
					now1.getMonth() >= 9 ? now1.getMonth() + 1 : `0${now1.getMonth() + 1}`;
				const date1 = now1.getDate() >= 10 ? now1.getDate() : `0${now1.getDate()}`;
				const hour1 =
					now1.getHours() >= 10 ? now1.getHours() : `0${now1.getHours()}`;
				const minutes1 =
					now1.getMinutes() >= 10 ? now1.getMinutes() : `0${now1.getMinutes()}`;
				const seconds1 =
					now1.getSeconds() >= 10 ? now1.getSeconds() : `0${now1.getSeconds()}`;
				let dataTime1 = `${yeark1}-${month1}-${date1} ${hour1}:${minutes1}:${seconds1}`;
				return dataTime1
			},
			wxgetmobilenumber(e) {
				let params = {
					code: e.detail.code
				}
				if (!this.phoneNumber) {
					this.httpClient
						.post({
							url: this.APIPath.user.wxgetmobilenumber,
							data: params,
						}).then((res) => {
							this.phoneNumber = res.data.phone_info.phoneNumber
							this.login()
						});
				} else {
					this.login()
				}

			},
			tologo() {
				uni.navigateTo({
					url: '/pages/logoin/index'
				})
			},
			// 跳转小程
			tolingpcx() {

				if (this.dqpt == 0) {
					wx.navigateToMiniProgram({
						appId: config.lifeId, // 此为生活缴费appid
						path: 'pages/index/index', // 此为生活缴费首页路径
						extraData: {
							foo: 'bar'
						},
						envVersion: 'release',
						success(res) {
							// 打开成功
						}
					})
				} else {
					plus.share.getServices(
						res => {
							let sweixin = null;
							for (let i in res) {
								if (res[i].id == 'weixin') {
									sweixin = res[i];
								}
							}
							if (sweixin) {
								uni.hideLoading()
								sweixin.launchMiniProgram({
									id: config.appId, // 小程序的原始ID，微信公众平台设置里有
									type: 0, //小程序版本  0-正式版； 1-测试版； 2-体验版。
									path: '/pages/index/index' //小程序的页面,用传的参数在小程序接值判断跳转指定页面
								})
							}
						}
					)
				}

			},
			dylogin() {
				let this_ = this
				tt.login({
					force: true,
					success(res) {
						console.log(`login 调用成功${res.code} ${res.anonymousCode}`);
						//发起网络请求
						let params = {
							code: res.code,
							phone: '17532046932',
							anonymousCode: res.anonymousCode
						}
						this_.httpClient
							.post({
								url: this_.APIPath.user.dyregister,
								data: params
							})
							.then(res => {
								uni.setStorageSync('id', res.data.id);
								uni.setStorageSync('status', res.data.status);
								uni.setStorageSync('token', res.data.token);
							})

					},
					fail(res) {
						console.log(`login 调用失败`);
					},
				});
			}
		}
	}
</script>
<style>
	page {
		background-color: #fff;
	}
</style>
<style lang="scss" scoped>
	.top_k {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #F0FAF8;
		margin: 15rpx 0rpx;
		padding: 30rpx 0rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
		box-shadow: 0rpx 8rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);

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
</style>
