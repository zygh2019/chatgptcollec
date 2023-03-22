import * as config from './config'
import utils from './utils';
import storage from "./storage.js"
import APIPath from "./APIPath";

// 授权请求锁
let authLock = false

// http队列，主要用于未获取到openid前发送的请求缓存
const httpQueue = []



/**
 * 请求封装
 */
export default {
	checkLock: false,
	/**
	 * url: 地址，不需要域名
	 * type: 请求方式，若用post, get, delete, put方法则不需要此字段
	 * data: 参数，openid不需要传，已默认传递
	 * header: 请求头需要参数
	 *
	 * 以下字段默认为false，若为true则不进行相应处理
	 * nocheck：不对后台返回的code进行校验，直接返回成功
	 * noPushQueue：校验用户授权时不将当前请求添加进对列，否则会在当前页面校验通过后恢复执行该请求
	 * hideLoading：发送请求时不显示loading效果
	 * noCheckLogin：不校验用户是否登录
	 *
	 * @param httpParam
	 * @returns {Promise<unknown>}
	 */
	request(httpParam) {
		return new Promise((resolve, reject) => {

			if (!httpParam.hideLoading) {
				// uni.showLoading({
				// 	title: '加载中'
				// })
			}



			const {
				data,
				header,
				param
			} = this.resetHttpData(httpParam)
		
			uni.request({
				url: `${config.HTTP_URL}${param.url}`,
				data,
				header:{
				"Authorization":uni.getStorageSync('token')==undefined?'':uni.getStorageSync('token')
			},
				method: param.method,
				success: res => {
					if (!param.hideLoading) {
						// uni.hideLoading({
						// 	title: '加载中'
						// })
					}
					this.checkCode(param, res, reject, resolve)
				},
				fail(err) {
					if (!param.hideLoading) {
						// uni.hideLoading({
						// 	title: '加载中'
						// })
					}
					utils.toast('网络异常')
					typeof param.fail === 'function' && param.fail(err)
				}
			})

		})
	},

	// 授权，获取openid
	authorRequest(data, fn) {
		if (authLock) return
		authLock = true
		this.post({
			url: APIPath.login.authorization,
			data,
			noCheckLogin: true,
			noPushQueue: true,
			noCheckOpenid: true,
			fail() {
				config.setInitOpenidStatus(2)
				authLock = false
			},
		}).then(res => {
			//设置openid
			authLock = false
			storage.setOpenId(res.content.openId)
			config.setInitOpenidStatus(1)
			typeof fn === 'function' && fn(res)
		}, err => {
			config.setInitOpenidStatus(2)
			this.gotoAuthPage()
			authLock = false
		})
	},

	// 初始化请求数据
	resetHttpData(param) {
		utils.debugFn(() => {
			if (!param.url) {
				utils.toast('异常：请求url为空')
				console.error('异常：请求url为空')
			}
		})

		const urlData = []

		let header = {
				'content-type': 'application/json'
			},
			data = {
				// openId:"oruas1Zua2Q5TTyKXfqYfAw0YnHE"
				// openId: storage.getOpenId()
			}

		if (param.header) header = Object.assign({}, header, param.header);
		if (param.data) data = Object.assign({}, data, param.data);

		param.method = param.method || 'get'
		if ((param.method.toLocaleLowerCase() === 'get' || param.method.toLocaleLowerCase() === 'delete') && data &&

			typeof data === 'object') {
			for (let i in data) {
				urlData.push(`${i}=${data[i]}`)
			}
			param.url += (param.url.indexOf('?') > -1 ? '&' : '?') + urlData.join('&')
		}

		return {
			data,
			header,
			param
		}
	},

	// 检验code
	checkCode(param, res, reject, resolve) {
		if (param.noCheck) {
			resolve(res.data)
		} else {
			if (res.data.code == 1001 || res.data.code == 1002 || res.data.code == 1003) {
				utils.toast(res.data.msg)
				uni.showToast({
					icon: 'none',
					title: '令牌失效或者访问人数过多，请稍后再试',
					duration: 3000
				});
				resolve(res.data)
			} else if (res.data.code == 1000) {
				resolve(res.data)
			} else {
				utils.debugFn(() => {
					utils.toast(`未知code，返回信息：${JSON.stringify(res.data)}`)
					console.error(`未知code，返回信息：${res.data}`)
				}, () => {
					utils.toast(res.data.msg)
				})
			}
		}
	},

	//get方法
	get(param) {
		return this.request({
			...param,
			method: 'get'
		})
	},
	//post方法
	post(param) {
		return this.request({
			...param,
			method: 'post'
		})
	},
	//put方法
	put(param) {
		return this.request({
			...param,
			method: 'PUT'
		});
	},
	//delete方法
	delete(param) {
		return this.request({
			...param,
			method: 'DELETE'
		});
	},
	getCode() {
		const appid = config.APP_ID; // 微信授权的公众号的appid
		const redirectUrlCode = "http://chplat.shqunqiu.com/h5/pages/index/index"
		const redirectUrl = escape(redirectUrlCode);
		let url =
			`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base#wechat_redirect`;
		// window.location.href = url
		uni.redirectTo({
			url: "../index/index?code=071RR30w3QQPiX28Fo3w3ZUTlv4RR302&state=#/",
		});
	}




}
