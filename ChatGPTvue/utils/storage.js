/**
 * 本地数据缓存
 * 存储在这里面的必须是 全局 多处 长期 需要使用的数据
 */
export default {
	/**
	 * 登录信息缓存
	 */
	setOpenId(openid) {
		uni.setStorageSync('STORAGE_OPENID', openid)
	},
	// 授权成功后会返回promote字段，如果该字段有值则可以登录
	setIsLogin(promote) {
		uni.setStorageSync('STORAGE_PROMOTE', promote)
	},
	getpromote() {
		return uni.getStorageSync('STORAGE_PROMOTE')
	},
	getOpenId() {
		return uni.getStorageSync('STORAGE_OPENID')
	},
	// 储存CODE 在登录的时候缓存作为登录凭证
	setCode(code) {
		uni.setStorageSync('STORAGE_CODE',code)
	},
	
	
}
