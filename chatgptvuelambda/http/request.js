const sendRequest = function(param) {
	var name = param.name,
		data = param.data || {},
		secretType = param.secretType || ''
	let user = uni.getStorageSync('user_token');
	if (user) {
		data.uniIdToken = user
	}
	console.log(secretType);
	uniCloud.callFunction({
		name: name,
		data: data,
		success: (res) => {
			if (res.result.code != 0) {
				uni.showToast({
					title: res.result.msg,
					icon: 'none'
				});
			} else {
				typeof param.success == "function" && param.success(res);
			}
		},
		fail: (e) => {
			console.log(e);
			uni.hideLoading()
			uni.showToast({
				title: "云函数错误",
				icon: 'none'
			});
		},
	})
}
export default {
	sendRequest,
}
