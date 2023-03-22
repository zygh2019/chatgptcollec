import Vue from 'vue';
import Vuex from 'vuex';
import App from '@/App';
import uView from '@/uview-ui/';
import httpClient from '@/utils/httpClient';
import * as config from '@/utils/config';
import storage from '@/utils/storage';
import utils from '@/utils/utils';
import APIPath from '@/utils/APIPath';
import store from "@/store";
import filters from '@/utils/filters'
import share from './common/share.js'
Vue.config.productionTip = false;

App.mpType = 'app';

Vue.mixin(share)
Vue.use(uView);
Vue.use(Vuex);

Vue.prototype.httpClient = httpClient;
Vue.prototype.utils = utils;
Vue.prototype.APIPath = APIPath;
Vue.prototype.storage = storage;
Vue.prototype.globalConfig = config;

// 添加全局filter
Object.keys(filters).map(v => {
	Vue.filter(v, filters[v])
})

const app = new Vue({
	store,
	...App
});

app.$mount();
