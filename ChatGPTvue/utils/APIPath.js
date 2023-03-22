/**
 * API地址管理
 */
export default {
	user: {
		wxregister: '/App/user/user/user/wxregister' ,// 微信登录
		wxgetmobilenumber:'/App/user/user/user/wxgetmobilenumber',// 微信获取手机号
		dyregister: '/App/user/user/user/dyregister' ,// 抖音登录
		Loginwithtoken:'/App/user/user/user/Loginwithtoken',
		getuserinformation:'/App/user/user/user/getuserinformation',//获取用户信息
		Cardactivationmember:'/App/user/user/user/Cardactivationmember',//激活卡密
		Aiconversation:'/App/user/user/user/Aiconversation',//ai对话
		signin:'/App/user/user/user/signin',//签到
		QueryTokenAuditMode:'/App/user/user/user/QueryTokenAuditMode'//令牌状态
	},

}
