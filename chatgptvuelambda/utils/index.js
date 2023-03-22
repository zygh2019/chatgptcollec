export default {
	getWeixinCode() {
		return new Promise((resolve, reject) => {
			// #ifdef MP-WEIXIN
			uni.login({
				provider: 'weixin',
				success(res) {
					resolve(res.code)
				},
				fail(err) {
					reject(new Error('微信登录失败'))
				}
			})
			// #endif
		})
	},
}
