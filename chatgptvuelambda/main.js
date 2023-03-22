import Vue from 'vue'
import App from './App'
import requsetApi from './api/home'
import uView from '@/uni_modules/uview-ui'
import share from './utils/share.js'
Vue.use(uView)
Vue.mixin(share)
Vue.prototype.$http = requsetApi
// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI)

Vue.config.productionTip = false

Vue.prototype.$getTime = (msd) => {
	let date = new Date(msd);
	let y = date.getFullYear();
	let MM = date.getMonth() + 1;
	MM = MM < 10 ? ('0' + MM) : MM;
	let d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	let h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	let m = date.getMinutes();
	m = m < 10 ? ('0' + m) : m;
	let s = date.getSeconds();
	s = s < 10 ? ('0' + s) : s;
	return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
}

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
