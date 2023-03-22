'use strict';
const db = uniCloud.database();
const memberCode = db.collection('memberCode');
let uniID = require('uni-id')
exports.main = async (event, context) => {
	uniID = uniID.createInstance({
		context
	})
	let params = event.params || {}
	let payload = {}
	var data_eve = {}
	if (!event.uniIdToken) {
		return {
			code: 403,
			msg: '缺少token'
		}
	}
	payload = await uniID.checkToken(event.uniIdToken, {
		needPermission: true
	})
	if (payload.code && payload.code > 0) {
		return payload
	}
	params.uid = payload.uid
	const {
		userInfo,
	} = await uniID.checkToken(event.uniIdToken, {
		needPermission: true
	})
	const {
		type,
		vip_month
	} = event
	let res = {}
	if (userInfo.broadNumber) {
		const {
			uid,
		} = params
		res = await uniID.updateUser({
			uid,
			broadNumber: Number(userInfo.broadNumber) + Number(5),
			number: Number(userInfo.number) + Number(5),
		});
	} else {
		const {
			uid,
		} = params
		res = await uniID.updateUser({
			uid,
			broadNumber: 0 + Number(5),
			number: Number(userInfo.number) + Number(5),
		});
	}
	return {
		code: 0,
		msg: "广告观看成功"
	}
};
