/**
 * 工具文件
 */
export default {
	checkHttp(url){
		retrun (/^http/).test(url)
	},
	checkPhone(phone){
		return  (/[1][3,4,5,7,8][0-9]{9}$/).test(phone)
		},
		checkHXcode(HXcode){
			return (/^\d{16}$/).test(HXcode)
		},
		checkCode(code){
			return (/^\d{6}$/).test(code)
		},
		checkCardID(cardId){
			return (/^(\d{18,18}|\d{15,15}|(\d{17,17}[x|X]))$/).test(cardId)
		},
    _toast(param, fn) {
        uni.showToast({
            ...param
        })
        setTimeout(() => {
            typeof fn === 'function' && fn()
        }, parseInt((param.duration || 1500) * 0.9))
    },
    toast(title, fn) {
        this._toast({
            title,
            duration: 2000,
            icon: 'none'
        }, fn)
    },
    successToast(title, fn) {
        this._toast({
            title,
            duration: 2000,
            icon: 'success'
        }, fn)
    },
    loadingToast(title, fn) {
        this._toast({
            title,
            duration: 2000,
            icon: 'loading'
        }, fn)
    },
    debugFn(devFn, fn) {
        if (process.env.NODE_ENV === 'development') {
            typeof devFn === 'function' && devFn()
        }else {
            typeof fn === 'function' && fn()
        }
    },
    // 获取当前页面信息
    getCurrentPage() {
        const c = getCurrentPages()
        return c[c.length - 1]
    },
	
    // 更新
    uploadApp() {
        const updateManager = uni.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
        });

        updateManager.onUpdateReady(function (res) {
            updateManager.applyUpdate();
        });

        updateManager.onUpdateFailed(function (res) {
        });
    }
}