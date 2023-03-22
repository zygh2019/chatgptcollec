import sendRequest from '@/http/request.js'
export default {
	show(data) {
		uni.showToast({
			title: data,
			icon: 'none'
		})
	},
	login(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'login',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	member(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'member',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	openai(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'openai',
				data: data,
				secretType: 'both',
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	vip_list(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'vip_list',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	type_list(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'type_list',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	addNumber(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'addNumber',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	wx_pay(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'wx_pay',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	apikey(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'apikey',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	redeemMember(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'redeemMember',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},

	apikeyCode(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'apikeyCode',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	openImg(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'openImg',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	openai_open(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'openai_open',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	user(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'uni-id-test',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	advertisement(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'advertisement',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	integral(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'integral',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	shareNumber(data) {
		return new Promise((resolve, reject) => {
			sendRequest.sendRequest({
				name: 'shareNumber',
				data: data,
				success: (res) => {
					resolve(res.result)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
}
