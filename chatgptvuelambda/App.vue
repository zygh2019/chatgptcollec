<script>
	import updateCustomBarInfo from './utils/index.js'
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS || H5
			let user = uni.getStorageSync('user_token');
			if (!user) {
				uni.reLaunch({
					url: '/pages/login/index'
				})
			}
			// #endif
			// #ifdef MP-WEIXIN
			updateCustomBarInfo.getWeixinCode().then((code) => {
				console.log(code);
				return this.$http.user({
					action: 'loginByWeixin',
					params: {
						code,
						type: 'MP-WEIXIN'
					},
				})
			}).then((res) => {
				if (res.code != 0) {
					this.$http.show(res.msg)
				} else {
					console.log(res);
					// 登陆成功
					// 储存token?
					uni.setStorageSync('user_token', res.token)
					uni.setStorageSync('user_token_expired', res.tokenExpired)
					// 登录成功进行跳转
				}
			}).catch((e) => {
				console.error(e)
				uni.showModal({
					showCancel: false,
					content: '微信登录失败，请稍后再试'
				})
			})
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	// @import "uview-ui/index.scss";
	@import "@/uni_modules/uview-ui/index.scss";
	@import './tuniao-ui/index.scss';
	@import './tuniao-ui/iconfont.css';

	page {
		font-size: 28rpx;
	}
</style>
