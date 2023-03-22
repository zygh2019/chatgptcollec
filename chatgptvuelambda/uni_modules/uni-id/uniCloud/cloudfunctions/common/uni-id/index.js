"use strict";

function e(e) {
	return e && "object" == typeof e && "default" in e ? e.default : e
}
var t = e(require("crypto")),
	r = e(require("buffer")),
	n = e(require("stream")),
	i = e(require("util"));
const o = {
		PARAM_ERROR: {
			errCode: "param-error"
		},
		PARAM_REQUIRED: {
			errCode: "param-required"
		},
		USER_NOT_EXIST: {
			errCode: "user-not-exist"
		},
		ROLE_NOT_EXIST: {
			errCode: "role-not-exist"
		},
		PERMISSION_NOT_EXIST: {
			errCode: "permission-not-exist"
		},
		MULTI_USER_MATCHED: {
			errCode: "multi-user-matched"
		},
		USER_INFO_ERROR: {
			errCode: "user-info-error"
		},
		USER_ACCOUNT_CONFLICT: {
			errCode: "user-account-conflict"
		},
		USER_ACCOUNT_CLOSED: {
			errCode: "user-account-closed"
		},
		ACCOUNT_EXISTS: {
			errCode: "account-exists"
		},
		ACCOUNT_NOT_EXISTS: {
			errCode: "account-not-exists"
		},
		ACCOUNT_BOUND: {
			errCode: "account-bound"
		},
		UNBIND_FAILED: {
			errCode: "unbind-failed"
		},
		INVALID_INVITE_CODE: {
			errCode: "invalid-invite-code"
		},
		SET_INVITE_CODE_FAILED: {
			errCode: "set-invite-code-failed"
		},
		GET_THIRD_PARTY_ACCOUNT_FAILED: {
			errCode: "get-third-party-account-failed"
		},
		GET_THIRD_PARTY_USER_INFO_FAILED: {
			errCode: "get-third-party-user-info-failed"
		}
	},
	s = {
		0: {
			errCode: 0,
			errMsg: ""
		},
		10001: {
			errCode: "account-banned"
		},
		10002: o.USER_NOT_EXIST,
		10003: o.MULTI_USER_MATCHED,
		10004: o.USER_INFO_ERROR,
		10005: o.USER_ACCOUNT_CONFLICT,
		10006: o.USER_ACCOUNT_CLOSED,
		10102: {
			errCode: "password-error"
		},
		10103: {
			errCode: "password-error-exceed-limit"
		},
		10201: o.ACCOUNT_EXISTS,
		10202: o.ACCOUNT_NOT_EXISTS,
		10203: o.INVALID_INVITE_CODE,
		10301: o.ACCOUNT_EXISTS,
		10302: o.ACCOUNT_NOT_EXISTS,
		10401: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10402: o.ACCOUNT_EXISTS,
		10403: o.ACCOUNT_NOT_EXISTS,
		10501: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10502: o.ACCOUNT_EXISTS,
		10503: o.ACCOUNT_NOT_EXISTS,
		10601: o.ACCOUNT_EXISTS,
		10602: o.ACCOUNT_NOT_EXISTS,
		10701: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10702: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10703: o.ACCOUNT_EXISTS,
		10704: o.ACCOUNT_NOT_EXISTS,
		10705: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10706: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10801: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10802: o.ACCOUNT_EXISTS,
		10803: o.ACCOUNT_NOT_EXISTS,
		20101: o.PARAM_REQUIRED,
		20102: o.ACCOUNT_EXISTS,
		30101: o.PARAM_REQUIRED,
		30201: {
			errCode: "check-device-feature-failed"
		},
		30202: {
			errCode: "token-not-exist"
		},
		30203: {
			errCode: "token-expired"
		},
		30204: {
			errCode: "check-token-failed"
		},
		40201: o.USER_NOT_EXIST,
		40202: {
			errCode: "invalid-old-password"
		},
		50101: o.PARAM_REQUIRED,
		50102: o.PARAM_ERROR,
		50201: o.PARAM_REQUIRED,
		50203: o.PARAM_ERROR,
		50202: {
			errCode: "invalid-verify-code"
		},
		50301: {
			errCode: "send-sms-code-failed"
		},
		60101: o.ACCOUNT_BOUND,
		60201: o.ACCOUNT_BOUND,
		60301: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		60302: o.ACCOUNT_BOUND,
		60401: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		60402: o.ACCOUNT_BOUND,
		60501: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		60502: o.ACCOUNT_BOUND,
		70101: o.UNBIND_FAILED,
		70201: o.UNBIND_FAILED,
		70301: o.UNBIND_FAILED,
		70401: o.UNBIND_FAILED,
		70501: o.UNBIND_FAILED,
		80301: o.USER_NOT_EXIST,
		80401: o.SET_INVITE_CODE_FAILED,
		80402: o.SET_INVITE_CODE_FAILED,
		80501: o.INVALID_INVITE_CODE,
		80502: o.USER_NOT_EXIST,
		80503: {
			errCode: "modify-invite-code-is-not-allowed"
		},
		80601: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80602: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80701: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80702: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80801: {
			errCode: "decrypt-weixin-data-failed"
		},
		80802: {
			errCode: "decrypt-weixin-data-failed"
		},
		80803: {
			errCode: "invalid-weixin-appid"
		},
		80804: o.PARAM_REQUIRED,
		80805: o.PARAM_REQUIRED,
		80806: o.PARAM_REQUIRED,
		80901: o.GET_THIRD_PARTY_USER_INFO_FAILED,
		90001: {
			errCode: "database-operation-failed"
		},
		90002: o.PARAM_REQUIRED,
		90003: o.PARAM_ERROR,
		90004: o.USER_NOT_EXIST,
		90005: o.ROLE_NOT_EXIST,
		90006: o.PERMISSION_NOT_EXIST
	};
class a extends Error {
	constructor(e) {
		super(e.message), this.errMsg = e.message || "", Object.defineProperties(this, {
			message: {
				get() {
					return `errCode: ${e.code||""} | errMsg: ` + this.errMsg
				},
				set(e) {
					this.errMsg = e
				}
			}
		})
	}
}
const c = Object.prototype.toString,
	u = Object.prototype.hasOwnProperty;

function d(e, t) {
	return u.call(e, t)
}

function p(e) {
	return "[object Object]" === c.call(e)
}

function l(e) {
	return "function" == typeof e
}

function f(e) {
	return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
}

function m(e) {
	return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
}
const h = /_(\w)/g,
	g = /[A-Z]/g;

function y(e) {
	return e.replace(h, (e, t) => t ? t.toUpperCase() : "")
}

function w(e) {
	return e.replace(g, e => "_" + e.toLowerCase())
}

function v(e, t) {
	let r, n;
	switch (t) {
		case "snake2camel":
			n = y, r = h;
			break;
		case "camel2snake":
			n = w, r = g
	}
	for (const i in e)
		if (d(e, i) && r.test(i)) {
			const r = n(i);
			e[r] = e[i], delete e[i], p(e[r]) ? e[r] = v(e[r], t) : Array.isArray(e[r]) && (e[r] = e[r].map(e => v(e,
				t)))
		} return e
}

function _(e) {
	return v(e, "snake2camel")
}

function b(e) {
	return v(e, "camel2snake")
}

function T(e) {
	return function(e, t = "-") {
		e = e || new Date;
		const r = [];
		return r.push(e.getFullYear()), r.push(("00" + (e.getMonth() + 1)).substr(-2)), r.push(("00" + e.getDate())
			.substr(-2)), r.join(t)
	}(e = e || new Date) + " " + function(e, t = ":") {
		e = e || new Date;
		const r = [];
		return r.push(("00" + e.getHours()).substr(-2)), r.push(("00" + e.getMinutes()).substr(-2)), r.push(("00" +
			e.getSeconds()).substr(-2)), r.join(t)
	}(e)
}

function E() {
	"development" === process.env.NODE_ENV && console.log(...arguments)
}

function C(e = 6) {
	let t = "";
	for (let r = 0; r < e; r++) t += Math.floor(10 * Math.random());
	return t
}

function A(e) {
	return Array.from(new Set(e))
}

function x(e = {}, t) {
	if (!t || !e) return e;
	const r = ["_pre", "_purify", "_post"];
	t._pre && (e = t._pre(e));
	let n = {
		shouldDelete: new Set([])
	};
	if (t._purify) {
		const e = t._purify;
		for (const t in e) e[t] = new Set(e[t]);
		n = Object.assign(n, e)
	}
	if (p(t))
		for (const i in t) {
			const o = t[i];
			l(o) && -1 === r.indexOf(i) ? e[i] = o(e) : "string" == typeof o && -1 === r.indexOf(i) && (e[i] = e[o], n
				.shouldDelete.add(o))
		} else l(t) && (e = t(e));
	if (n.shouldDelete)
		for (const t of n.shouldDelete) delete e[t];
	return t._post && (e = t._post(e)), e
}

function I(e, t) {
	const r = new e(t);
	return new Proxy(r, {
		get: function(e, t) {
			if ("function" == typeof e[t] && 0 !== t.indexOf("_") && e._protocols && e._protocols[t]) {
				const r = e._protocols[t];
				return async function(n) {
					n = x(n, r.args);
					let i = await e[t](n);
					return i = x(i, r.returnValue), i
				}
			}
			return e[t]
		}
	})
}

function S(e) {
	if (p(e))
		if (0 === e.code) e.errCode = e.code, e.message = e.errMsg = e.msg, delete e.messageValues;
		else if (d(s, e.code)) {
		const t = s[e.code];
		e.errCode = "uni-id-" + t.errCode, e.errMsg = this.t(t.errCode, e.messageValues || {}) || e.msg, e.message = e
			.msg = e.errMsg, delete e.messageValues
	} else e.code && console.warn(`error code not found, error code: ${e.code}, please contact us`)
}
var k = {
	"zh-Hans": {
		alipay: "支付宝",
		wechat: "微信",
		user: "用户",
		"user-id": "用户ID",
		"dcloud-appid": "应用Appid",
		"dcloud-appid-list": "应用列表",
		account: "账号",
		username: "用户名",
		email: "邮箱",
		mobile: "手机号",
		sms: "短信",
		"wechat-openid": "微信openid",
		"wechat-account": "微信账号",
		"alipay-account": "支付宝账号",
		"qq-openid": "QQ openid",
		"qq-account": "QQ账号",
		"apple-account": "苹果账号",
		password: "密码",
		"verify-code": "验证码",
		"verify-code-type": "验证码类型",
		"user-unique-param": "用户名、邮箱或手机号",
		"role-id": "角色ID",
		"permission-id": "权限ID",
		login: "登录",
		"verify-mobile": "验证手机",
		"context-param-required": "context内缺少{param}，请使用uniID.createInstance传入客户端信息",
		"config-param-require": "uni-id的配置内缺少{param}",
		"uni-verify-config-required": "请在config.json中配置service.univerify下一键登录相关参数",
		"login-with-invite-type-required": "强制使用邀请码注册时，需指明type为register还是login",
		"type-array-required": "{param}应为数组形式",
		"query-field-warning": "检测到当前使用queryField匹配多字段进行登录操作，需要注意：uni-id并未限制用户名不能是手机号或邮箱，需要开发者自行限制。否则可能出现用户输入abc@xx.com会同时匹配到邮箱为此值的用户和用户名为此值的用户，导致登录失败",
		"add-role-admin-is-not-allowed": "不可新增roleID为admin的角色",
		"password-secret-type-error": "config内passwordSecret类型错误，只可设置string类型和array类型",
		"token-expires-config-warning": "tokenExpiresIn不可小于或等于tokenExpiresThreshold",
		"type-function-required": "{param}应为function类型",
		"dev-warning": "当前正在使用uniID.dev属性，注意此属性仅可用于开发调试",
		"config-file-invalid": "请确保公用模块uni-id对应的配置文件（common/uni-config-center/uni-id/config.json）格式正确（不可包含注释）",
		"config-file-not-found": "请在common/uni-config-center/uni-id/config.json内添加uni-id相关配置信息",
		"hx-version-warning": "当前使用的HBuilderX版本过低，请升级HBuilderX到最新版本",
		"account-banned": "账号已禁用",
		"user-not-exist": "用户不存在",
		"multi-user-matched": "匹配到多个账号",
		"user-info-error": "用户信息不正确",
		"user-account-conflict": "用户账号冲突",
		"user-account-closed": "此账号已注销",
		"password-error": "密码错误",
		"password-error-exceed-limit": "密码错误次数过多，请稍后再试",
		"account-exists": "此账号已注册",
		"account-not-exists": "此账号尚未注册",
		"invalid-invite-code": "邀请码无效",
		"get-third-party-account-failed": "获取{account}失败",
		"get-third-party-user-info-failed": "获取用户信息失败",
		"param-required": "{param}不可为空",
		"check-device-feature-failed": "设备特征校验未通过",
		"token-not-exist": "登录状态无效，云端已不包含此token",
		"token-expired": "token已过期",
		"check-token-failed": "token校验未通过",
		"invalid-old-password": "旧密码错误",
		"param-error": "{param}参数错误，{reason}",
		"invalid-verify-code": "{type}验证码错误或已失效",
		"send-sms-code-failed": "短信验证码发送失败",
		"account-bound": "此账号已被绑定",
		"unbind-failed": "解绑失败",
		"set-invite-code-failed": "邀请码设置失败",
		"modify-invite-code-is-not-allowed": "邀请码不可修改",
		"decrypt-weixin-data-failed": "解密失败",
		"invalid-weixin-appid": "appid不匹配",
		"database-operation-failed": "数据库读写异常",
		"role-not-exist": "角色不存在",
		"permission-not-exist": "权限不存在",
		"context-required": "uni-id无法获取context.{key}，请使用uniID.createInstance方法传入",
		"limit-client-platform": "当前客户端平台不支持此接口"
	},
	en: {
		alipay: "alipay",
		wechat: "wechat",
		user: "user",
		"user-id": "user id",
		"dcloud-appid": "DCloud appid",
		"dcloud-appid-list": "DCloud appid list",
		account: "account",
		username: "username",
		email: "email",
		mobile: "phone number",
		sms: "sms",
		"wechat-openid": "wechat openid",
		"wechat-account": "wechat account",
		"alipay-account": "alipay account",
		"qq-openid": "QQ openid",
		"qq-account": "QQ account",
		"apple-account": "apple account",
		password: "password",
		"verify-code": "verify code",
		"verify-code-type": "verify code type",
		"user-unique-param": "username, email or mobile phone number",
		"role-id": "role id",
		"permission-id": "permission id",
		login: "login",
		"verify-mobile": "verify mobile phone number",
		"context-param-required": "You should pass {param} in context using uniID.createInstance",
		"config-param-require": "{param} is required in uni-id's config",
		"uni-verify-config-required": "Univerify config required: service.univerify",
		"login-with-invite-type-required": "Parameter type is required when forceInviteCode set to true",
		"type-array-required": "Type of {param} must be array",
		"query-field-warning": "You are using multi query field to login, be aware that uni-id will not check username's fromat, eg: abc@xx.com is a valid username for uni-id. You should check username in your code.",
		"add-role-admin-is-not-allowed": 'Add role with an id of "admin" is not allowed',
		"password-secret-type-error": '"passwordSecret" in config must be string or array',
		"token-expires-config-warning": '"tokenExpiresIn" must be greater than "tokenExpiresThreshold"',
		"type-function-required": "{param} must be a function",
		"dev-warning": "warning: uniID.dev is only for development",
		"config-file-invalid": "Invalid config file (common/uni-config-center/uni-id/config.json), please note that comment is not allowed",
		"config-file-not-found": "Config file (common/uni-config-center/uni-id/config.json) not found",
		"hx-version-warning": "The HBuilderX you are using is too old, please upgrade to the latest version of HBuilderX",
		"account-banned": "Account is banned",
		"user-not-exist": "User does not exist",
		"multi-user-matched": "Multiple users are matched",
		"user-info-error": "User info error",
		"user-account-conflict": "User account conflict",
		"user-account-closed": "User account has been closed",
		"password-error": "The password is incorrect",
		"password-error-exceed-limit": "The number of password errors exceeded the limit",
		"account-exists": "Account exists",
		"account-not-exists": "Account does not exists",
		"invalid-invite-code": "Invalid invite code",
		"get-third-party-account-failed": "Get {account} failed",
		"get-third-party-user-info-failed": "Get user info failed",
		"param-required": "{param} is required",
		"check-device-feature-failed": "Check device feature failed",
		"token-not-exist": "The login status is invalid, token does not exist",
		"token-expired": "The login status is invalid, token has expired",
		"check-token-failed": "Check token failed",
		"invalid-old-password": "Invalid old password",
		"param-error": "{param} error, {reason}",
		"invalid-verify-code": "Invalid {type} verify code",
		"send-sms-code-failed": "Send sms code failed",
		"account-bound": "Account has been bound",
		"unbind-failed": "Unbind failed",
		"set-invite-code-failed": "Set invite code failed",
		"modify-invite-code-is-not-allowed": "Modifying the invitation code is prohibited",
		"decrypt-weixin-data-failed": "Decrypt weixin data failed",
		"invalid-weixin-appid": "Invalid weixin appid",
		"database-operation-failed": "Database operation failed",
		"role-not-exist": "Role does not exist",
		"permission-not-exist": "Permission does not exist",
		"context-required": '"context.{key}" is required, you should pass context using uniID.createInstance',
		"limit-client-platform": "Unsupported client platform"
	}
};
const O = uniCloud.database(),
	P = O.collection("uni-id-users"),
	R = O.collection("opendb-verify-codes"),
	j = O.collection("uni-id-roles"),
	D = O.collection("uni-id-permissions"),
	q = {
		username: "username",
		mobile: "mobile",
		email: "email",
		wx_unionid: "wechat-account",
		"wx_openid.app-plus": "wechat-account",
		"wx_openid.app": "wechat-account",
		"wx_openid.mp-weixin": "wechat-account",
		qq_unionid: "qq-account",
		"qq_openid.app-plus": "qq-account",
		"qq_openid.app": "qq-account",
		"qq_openid.mp-weixin": "qq-account",
		ali_openid: "alipay-account",
		apple_openid: "alipay-account"
	},
	N = 90002,
	U = 90003,
	L = 90004,
	V = 90005,
	M = 0,
	B = 1,
	F = 4;
async function $({
	uid: e,
	status: t
} = {}) {
	return e ? (await P.doc(e).update({
		status: t,
		status_update_date: Date.now()
	}), {
		code: 0
	}) : {
		code: N,
		messageValues: {
			param: this.t("user-id")
		}
	}
}
async function H({
	name: e,
	url: t,
	data: r,
	options: n,
	defaultOptions: i
}) {
	let o = {};
	const s = b(Object.assign({}, r));
	s && s.access_token && delete s.access_token;
	try {
		n = Object.assign({}, i, n, {
			data: s
		}), o = await uniCloud.httpclient.request(t, n)
	} catch (t) {
		return function(e, t) {
			throw new a({
				code: t.code || -2,
				message: t.message || e + " fail"
			})
		}(e, t)
	}
	let c = o.data;
	const u = o.headers["content-type"];
	if (!Buffer.isBuffer(c) || 0 !== u.indexOf("text/plain") && 0 !== u.indexOf("application/json")) Buffer
		.isBuffer(c) && (c = {
			buffer: c,
			contentType: u
		});
	else try {
		c = JSON.parse(c.toString())
	} catch (e) {
		c = c.toString()
	}
	return _(function(e, t) {
		if (t.errcode) throw new a({
			code: t.errcode || -2,
			message: t.errmsg || e + " fail"
		});
		return delete t.errcode, delete t.errmsg, {
			...t,
			errMsg: e + " ok",
			errCode: 0
		}
	}(e, c || {
		errCode: -2,
		errMsg: "Request failed"
	}))
}

function K(e, t) {
	let r = "";
	if (t && t.accessToken) {
		r = `${e.indexOf("?")>-1?"&":"?"}access_token=${t.accessToken}`
	}
	return `${e}${r}`
}
class G {
	constructor(e) {
		this.options = Object.assign({
			baseUrl: "https://api.weixin.qq.com",
			timeout: 5e3
		}, e)
	}
	async _requestWxOpenapi({
		name: e,
		url: t,
		data: r,
		options: n
	}) {
		const i = {
			method: "GET",
			dataType: "json",
			dataAsQueryString: !0,
			timeout: this.options.timeout
		};
		return await H({
			name: "auth." + e,
			url: `${this.options.baseUrl}${K(t,r)}`,
			data: r,
			options: n,
			defaultOptions: i
		})
	}
	async code2Session(e) {
		return await this._requestWxOpenapi({
			name: "code2Session",
			url: "/sns/jscode2session",
			data: {
				grant_type: "authorization_code",
				appid: this.options.appId,
				secret: this.options.secret,
				js_code: e
			}
		})
	}
	async getOauthAccessToken(e) {
		const t = await this._requestWxOpenapi({
			name: "getOauthAccessToken",
			url: "/sns/oauth2/access_token",
			data: {
				grant_type: "authorization_code",
				appid: this.options.appId,
				secret: this.options.secret,
				code: e
			}
		});
		return t.expiresIn && (t.expired = Date.now() + 1e3 * t.expiresIn), t
	}
	async getUserInfo({
		accessToken: e,
		openid: t
	} = {}) {
		const {
			nickname: r,
			headimgurl: n
		} = await this._requestWxOpenapi({
			name: "getUserInfo",
			url: "/sns/userinfo",
			data: {
				accessToken: e,
				openid: t,
				appid: this.options.appId,
				secret: this.options.secret,
				scope: "snsapi_userinfo"
			}
		});
		return {
			nickname: r,
			avatar: n
		}
	}
}
async function Q({
	name: e,
	url: t,
	data: r,
	options: n,
	defaultOptions: i
}) {
	let o;
	n = Object.assign({}, i, n, {
		data: b(Object.assign({}, r))
	});
	try {
		o = await uniCloud.httpclient.request(t, n)
	} catch (t) {
		return function(e, t) {
			throw new a({
				code: t.code || -2,
				message: t.message || e + " fail"
			})
		}(e, t)
	}
	let s = o.data;
	const c = o.headers["content-type"];
	if (!Buffer.isBuffer(s) || 0 !== c.indexOf("text/plain") && 0 !== c.indexOf("application/json")) Buffer
		.isBuffer(s) && (s = {
			buffer: s,
			contentType: c
		});
	else try {
		s = JSON.parse(s.toString())
	} catch (e) {
		s = s.toString()
	}
	return _(function(e, t) {
		if (t.ret || t.error) {
			const r = t.ret || t.error || t.errcode || -2,
				n = t.msg || t.error_description || t.errmsg || e + " fail";
			throw new a({
				code: r,
				message: n
			})
		}
		return delete t.ret, delete t.msg, delete t.error, delete t.error_description, delete t.errcode,
			delete t.errmsg, {
				...t,
				errMsg: e + " ok",
				errCode: 0
			}
	}(e, s || {
		errCode: -2,
		errMsg: "Request failed"
	}))
}
class X {
	constructor(e) {
		this.options = Object.assign({
			baseUrl: "https://graph.qq.com",
			timeout: 5e3
		}, e)
	}
	async _requestQQOpenapi({
		name: e,
		url: t,
		data: r,
		options: n
	}) {
		const i = {
			method: "GET",
			dataType: "json",
			dataAsQueryString: !0,
			timeout: this.options.timeout
		};
		var o, s;
		return await Q({
			name: "auth." + e,
			url: (o = this.options.baseUrl, s = t, /^https?:/.test(s) ? s : o + s),
			data: r,
			options: n,
			defaultOptions: i
		})
	}
	async getOpenidByToken({
		accessToken: e
	} = {}) {
		const t = await this._requestQQOpenapi({
			name: "getOpenidByToken",
			url: "/oauth2.0/me",
			data: {
				accessToken: e,
				unionid: 1,
				fmt: "json"
			}
		});
		if (t.clientId !== this.options.appId) throw new a({
			code: "APPID_NOT_MATCH",
			message: "appid not match"
		});
		return {
			openid: t.openid,
			unionid: t.unionid
		}
	}
	async code2Session({
		code: e
	} = {}) {
		return await this._requestQQOpenapi({
			name: "getOpenidByToken",
			url: "https://api.q.qq.com/sns/jscode2session",
			data: {
				grant_type: "authorization_code",
				appid: this.options.appId,
				secret: this.options.secret,
				js_code: e
			}
		})
	}
}
const Y = {
	RSA: "RSA-SHA1",
	RSA2: "RSA-SHA256"
};
var z = {
	code2Session: {
		returnValue: {
			openid: "userId"
		}
	}
};
class W extends class {
	constructor(e = {}) {
		if (!e.appId) throw new Error("appId required");
		if (!e.privateKey) throw new Error("privateKey required");
		const t = {
			gateway: "https://openapi.alipay.com/gateway.do",
			timeout: 5e3,
			charset: "utf-8",
			version: "1.0",
			signType: "RSA2",
			timeOffset: -(new Date).getTimezoneOffset() / 60,
			keyType: "PKCS8"
		};
		e.sandbox && (e.gateway = "https://openapi.alipaydev.com/gateway.do"), this.options = Object.assign({}, t,
			e);
		const r = "PKCS8" === this.options.keyType ? "PRIVATE KEY" : "RSA PRIVATE KEY";
		this.options.privateKey = this._formatKey(this.options.privateKey, r), this.options.alipayPublicKey && (this
			.options.alipayPublicKey = this._formatKey(this.options.alipayPublicKey, "PUBLIC KEY"))
	}
	_formatKey(e, t) {
		return `-----BEGIN ${t}-----\n${e}\n-----END ${t}-----`
	}
	_formatUrl(e, t) {
		let r = e;
		const n = ["app_id", "method", "format", "charset", "sign_type", "sign", "timestamp", "version",
			"notify_url", "return_url", "auth_token", "app_auth_token"
		];
		for (const e in t)
			if (n.indexOf(e) > -1) {
				const n = encodeURIComponent(t[e]);
				r = `${r}${r.includes("?")?"&":"?"}${e}=${n}`, delete t[e]
			} return {
			execParams: t,
			url: r
		}
	}
	_getSign(e, r) {
		const n = r.bizContent || null;
		delete r.bizContent;
		const i = Object.assign({
			method: e,
			appId: this.options.appId,
			charset: this.options.charset,
			version: this.options.version,
			signType: this.options.signType,
			timestamp: T((o = this.options.timeOffset, new Date(Date.now() + 6e4 * ((new Date)
				.getTimezoneOffset() + 60 * (o || 0)))))
		}, r);
		var o;
		n && (i.bizContent = JSON.stringify(b(n)));
		const s = b(i),
			a = Object.keys(s).sort().map(e => {
				let t = s[e];
				return "[object String]" !== Array.prototype.toString.call(t) && (t = JSON.stringify(t)),
					`${e}=${t}`
			}).join("&"),
			c = t.createSign(Y[this.options.signType]).update(a, "utf8").sign(this.options.privateKey, "base64");
		return Object.assign(s, {
			sign: c
		})
	}
	async _exec(e, t = {}, r = {}) {
		const n = this._getSign(e, t),
			{
				url: i,
				execParams: o
			} = this._formatUrl(this.options.gateway, n),
			{
				status: s,
				data: a
			} = await uniCloud.httpclient.request(i, {
				method: "POST",
				data: o,
				dataType: "text",
				timeout: this.options.timeout
			});
		if (200 !== s) throw new Error("request fail");
		const c = JSON.parse(a),
			u = e.replace(/\./g, "_") + "_response",
			d = c[u],
			p = c.error_response;
		if (d) {
			if (!r.validateSign || this._checkResponseSign(a, u)) {
				if (!d.code || "10000" === d.code) {
					return {
						errCode: 0,
						errMsg: d.msg || "",
						..._(d)
					}
				}
				const e = d.sub_code ? `${d.sub_code} ${d.sub_msg}` : "" + (d.msg || "unkonwn error");
				throw new Error(e)
			}
			throw new Error("check sign error")
		}
		if (p) throw new Error(p.sub_msg || p.msg || "request fail");
		throw new Error("request fail")
	}
	_checkResponseSign(e, r) {
		if (!this.options.alipayPublicKey || "" === this.options.alipayPublicKey) return console.warn(
			"options.alipayPublicKey is empty"), !0;
		if (!e) return !1;
		const n = this._getSignStr(e, r),
			i = JSON.parse(e).sign,
			o = t.createVerify(Y[this.options.signType]);
		return o.update(n, "utf8"), o.verify(this.options.alipayPublicKey, i, "base64")
	}
	_getSignStr(e, t) {
		let r = e.trim();
		const n = e.indexOf(t + '"'),
			i = e.lastIndexOf('"sign"');
		return r = r.substr(n + t.length + 1), r = r.substr(0, i), r = r.replace(/^[^{]*{/g, "{"), r = r.replace(
			/\}([^}]*)$/g, "}"), r
	}
} {
	constructor(e) {
		super(e), this._protocols = z
	}
	async code2Session(e) {
		return await this._exec("alipay.system.oauth.token", {
			grantType: "authorization_code",
			code: e
		})
	}
}

function J(e) {
	var t = e[0];
	return t < "0" || t > "7" ? "00" + e : e
}

function Z(e) {
	var t = e.toString(16);
	return t.length % 2 ? "0" + t : t
}

function ee(e) {
	if (e <= 127) return Z(e);
	var t = Z(e);
	return Z(128 + t.length / 2) + t
}

function te(e, t) {
	return e(t = {
		exports: {}
	}, t.exports), t.exports
}
var re = te((function(e, t) {
		var n = r.Buffer;

		function i(e, t) {
			for (var r in e) t[r] = e[r]
		}

		function o(e, t, r) {
			return n(e, t, r)
		}
		n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = o), o
			.prototype = Object.create(n.prototype), i(n, o), o.from = function(e, t, r) {
				if ("number" == typeof e) throw new TypeError("Argument must not be a number");
				return n(e, t, r)
			}, o.alloc = function(e, t, r) {
				if ("number" != typeof e) throw new TypeError("Argument must be a number");
				var i = n(e);
				return void 0 !== t ? "string" == typeof r ? i.fill(t, r) : i.fill(t) : i.fill(0), i
			}, o.allocUnsafe = function(e) {
				if ("number" != typeof e) throw new TypeError("Argument must be a number");
				return n(e)
			}, o.allocUnsafeSlow = function(e) {
				if ("number" != typeof e) throw new TypeError("Argument must be a number");
				return r.SlowBuffer(e)
			}
	})),
	ne = (re.Buffer, re.Buffer);

function ie(e) {
	if (this.buffer = null, this.writable = !0, this.readable = !0, !e) return this.buffer = ne.alloc(0), this;
	if ("function" == typeof e.pipe) return this.buffer = ne.alloc(0), e.pipe(this), this;
	if (e.length || "object" == typeof e) return this.buffer = e, this.writable = !1, process.nextTick(function() {
		this.emit("end", e), this.readable = !1, this.emit("close")
	}.bind(this)), this;
	throw new TypeError("Unexpected data type (" + typeof e + ")")
}
i.inherits(ie, n), ie.prototype.write = function(e) {
	this.buffer = ne.concat([this.buffer, ne.from(e)]), this.emit("data", e)
}, ie.prototype.end = function(e) {
	e && this.write(e), this.emit("end", e), this.emit("close"), this.writable = !1, this.readable = !1
};
var oe = ie,
	se = r.Buffer,
	ae = r.SlowBuffer,
	ce = ue;

function ue(e, t) {
	if (!se.isBuffer(e) || !se.isBuffer(t)) return !1;
	if (e.length !== t.length) return !1;
	for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n];
	return 0 === r
}
ue.install = function() {
	se.prototype.equal = ae.prototype.equal = function(e) {
		return ue(this, e)
	}
};
var de = se.prototype.equal,
	pe = ae.prototype.equal;

function le(e) {
	return (e / 8 | 0) + (e % 8 == 0 ? 0 : 1)
}
ue.restore = function() {
	se.prototype.equal = de, ae.prototype.equal = pe
};
var fe = {
	ES256: le(256),
	ES384: le(384),
	ES512: le(521)
};
var me = function(e) {
		var t = fe[e];
		if (t) return t;
		throw new Error('Unknown algorithm "' + e + '"')
	},
	he = re.Buffer;

function ge(e) {
	if (he.isBuffer(e)) return e;
	if ("string" == typeof e) return he.from(e, "base64");
	throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")
}

function ye(e, t, r) {
	for (var n = 0; t + n < r && 0 === e[t + n];) ++n;
	return e[t + n] >= 128 && --n, n
}
var we = {
		derToJose: function(e, t) {
			e = ge(e);
			var r = me(t),
				n = r + 1,
				i = e.length,
				o = 0;
			if (48 !== e[o++]) throw new Error('Could not find expected "seq"');
			var s = e[o++];
			if (129 === s && (s = e[o++]), i - o < s) throw new Error('"seq" specified length of "' + s +
				'", only "' + (i - o) + '" remaining');
			if (2 !== e[o++]) throw new Error('Could not find expected "int" for "r"');
			var a = e[o++];
			if (i - o - 2 < a) throw new Error('"r" specified length of "' + a + '", only "' + (i - o - 2) +
				'" available');
			if (n < a) throw new Error('"r" specified length of "' + a + '", max of "' + n + '" is acceptable');
			var c = o;
			if (o += a, 2 !== e[o++]) throw new Error('Could not find expected "int" for "s"');
			var u = e[o++];
			if (i - o !== u) throw new Error('"s" specified length of "' + u + '", expected "' + (i - o) + '"');
			if (n < u) throw new Error('"s" specified length of "' + u + '", max of "' + n + '" is acceptable');
			var d = o;
			if ((o += u) !== i) throw new Error('Expected to consume entire buffer, but "' + (i - o) +
				'" bytes remain');
			var p = r - a,
				l = r - u,
				f = he.allocUnsafe(p + a + l + u);
			for (o = 0; o < p; ++o) f[o] = 0;
			e.copy(f, o, c + Math.max(-p, 0), c + a);
			for (var m = o = r; o < m + l; ++o) f[o] = 0;
			return e.copy(f, o, d + Math.max(-l, 0), d + u), f = (f = f.toString("base64")).replace(/=/g, "")
				.replace(/\+/g, "-").replace(/\//g, "_")
		},
		joseToDer: function(e, t) {
			e = ge(e);
			var r = me(t),
				n = e.length;
			if (n !== 2 * r) throw new TypeError('"' + t + '" signatures must be "' + 2 * r + '" bytes, saw "' + n +
				'"');
			var i = ye(e, 0, r),
				o = ye(e, r, e.length),
				s = r - i,
				a = r - o,
				c = 2 + s + 1 + 1 + a,
				u = c < 128,
				d = he.allocUnsafe((u ? 2 : 3) + c),
				p = 0;
			return d[p++] = 48, u ? d[p++] = c : (d[p++] = 129, d[p++] = 255 & c), d[p++] = 2, d[p++] = s, i < 0 ? (
					d[p++] = 0, p += e.copy(d, p, 0, r)) : p += e.copy(d, p, i, r), d[p++] = 2, d[p++] = a, o < 0 ?
				(d[p++] = 0, e.copy(d, p, r)) : e.copy(d, p, r + o), d
		}
	},
	ve = re.Buffer,
	_e = "secret must be a string or buffer",
	be = "key must be a string or a buffer",
	Te = "function" == typeof t.createPublicKey;

function Ee(e) {
	if (!ve.isBuffer(e) && "string" != typeof e) {
		if (!Te) throw Ie(be);
		if ("object" != typeof e) throw Ie(be);
		if ("string" != typeof e.type) throw Ie(be);
		if ("string" != typeof e.asymmetricKeyType) throw Ie(be);
		if ("function" != typeof e.export) throw Ie(be)
	}
}

function Ce(e) {
	if (!ve.isBuffer(e) && "string" != typeof e && "object" != typeof e) throw Ie(
		"key must be a string, a buffer or an object")
}

function Ae(e) {
	return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function xe(e) {
	var t = 4 - (e = e.toString()).length % 4;
	if (4 !== t)
		for (var r = 0; r < t; ++r) e += "=";
	return e.replace(/\-/g, "+").replace(/_/g, "/")
}

function Ie(e) {
	var t = [].slice.call(arguments, 1),
		r = i.format.bind(i, e).apply(null, t);
	return new TypeError(r)
}

function Se(e) {
	var t;
	return t = e, ve.isBuffer(t) || "string" == typeof t || (e = JSON.stringify(e)), e
}

function ke(e) {
	return function(r, n) {
		! function(e) {
			if (!ve.isBuffer(e)) {
				if ("string" == typeof e) return e;
				if (!Te) throw Ie(_e);
				if ("object" != typeof e) throw Ie(_e);
				if ("secret" !== e.type) throw Ie(_e);
				if ("function" != typeof e.export) throw Ie(_e)
			}
		}(n), r = Se(r);
		var i = t.createHmac("sha" + e, n);
		return Ae((i.update(r), i.digest("base64")))
	}
}

function Oe(e) {
	return function(t, r, n) {
		var i = ke(e)(t, n);
		return ce(ve.from(r), ve.from(i))
	}
}

function Pe(e) {
	return function(r, n) {
		Ce(n), r = Se(r);
		var i = t.createSign("RSA-SHA" + e);
		return Ae((i.update(r), i.sign(n, "base64")))
	}
}

function Re(e) {
	return function(r, n, i) {
		Ee(i), r = Se(r), n = xe(n);
		var o = t.createVerify("RSA-SHA" + e);
		return o.update(r), o.verify(i, n, "base64")
	}
}

function je(e) {
	return function(r, n) {
		Ce(n), r = Se(r);
		var i = t.createSign("RSA-SHA" + e);
		return Ae((i.update(r), i.sign({
			key: n,
			padding: t.constants.RSA_PKCS1_PSS_PADDING,
			saltLength: t.constants.RSA_PSS_SALTLEN_DIGEST
		}, "base64")))
	}
}

function De(e) {
	return function(r, n, i) {
		Ee(i), r = Se(r), n = xe(n);
		var o = t.createVerify("RSA-SHA" + e);
		return o.update(r), o.verify({
			key: i,
			padding: t.constants.RSA_PKCS1_PSS_PADDING,
			saltLength: t.constants.RSA_PSS_SALTLEN_DIGEST
		}, n, "base64")
	}
}

function qe(e) {
	var t = Pe(e);
	return function() {
		var r = t.apply(null, arguments);
		return r = we.derToJose(r, "ES" + e)
	}
}

function Ne(e) {
	var t = Re(e);
	return function(r, n, i) {
		return n = we.joseToDer(n, "ES" + e).toString("base64"), t(r, n, i)
	}
}

function Ue() {
	return function() {
		return ""
	}
}

function Le() {
	return function(e, t) {
		return "" === t
	}
}
Te && (be += " or a KeyObject", _e += "or a KeyObject");
var Ve = function(e) {
		var t = {
				hs: ke,
				rs: Pe,
				ps: je,
				es: qe,
				none: Ue
			},
			r = {
				hs: Oe,
				rs: Re,
				ps: De,
				es: Ne,
				none: Le
			},
			n = e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
		if (!n) throw Ie(
			'"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".',
			e);
		var i = (n[1] || n[3]).toLowerCase(),
			o = n[2];
		return {
			sign: t[i](o),
			verify: r[i](o)
		}
	},
	Me = r.Buffer,
	Be = function(e) {
		return "string" == typeof e ? e : "number" == typeof e || Me.isBuffer(e) ? e.toString() : JSON.stringify(e)
	},
	Fe = re.Buffer;

function $e(e, t) {
	return Fe.from(e, t).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function He(e) {
	var t = e.header,
		r = e.payload,
		n = e.secret || e.privateKey,
		o = e.encoding,
		s = Ve(t.alg),
		a = function(e, t, r) {
			r = r || "utf8";
			var n = $e(Be(e), "binary"),
				o = $e(Be(t), r);
			return i.format("%s.%s", n, o)
		}(t, r, o),
		c = s.sign(a, n);
	return i.format("%s.%s", a, c)
}

function Ke(e) {
	var t = e.secret || e.privateKey || e.key,
		r = new oe(t);
	this.readable = !0, this.header = e.header, this.encoding = e.encoding, this.secret = this.privateKey = this.key =
		r, this.payload = new oe(e.payload), this.secret.once("close", function() {
			!this.payload.writable && this.readable && this.sign()
		}.bind(this)), this.payload.once("close", function() {
			!this.secret.writable && this.readable && this.sign()
		}.bind(this))
}
i.inherits(Ke, n), Ke.prototype.sign = function() {
	try {
		var e = He({
			header: this.header,
			payload: this.payload.buffer,
			secret: this.secret.buffer,
			encoding: this.encoding
		});
		return this.emit("done", e), this.emit("data", e), this.emit("end"), this.readable = !1, e
	} catch (e) {
		this.readable = !1, this.emit("error", e), this.emit("close")
	}
}, Ke.sign = He;
var Ge = Ke,
	Qe = re.Buffer,
	Xe = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

function Ye(e) {
	if (function(e) {
			return "[object Object]" === Object.prototype.toString.call(e)
		}(e)) return e;
	try {
		return JSON.parse(e)
	} catch (e) {
		return
	}
}

function ze(e) {
	var t = e.split(".", 1)[0];
	return Ye(Qe.from(t, "base64").toString("binary"))
}

function We(e) {
	return e.split(".")[2]
}

function Je(e) {
	return Xe.test(e) && !!ze(e)
}

function Ze(e, t, r) {
	if (!t) {
		var n = new Error("Missing algorithm parameter for jws.verify");
		throw n.code = "MISSING_ALGORITHM", n
	}
	var i = We(e = Be(e)),
		o = function(e) {
			return e.split(".", 2).join(".")
		}(e);
	return Ve(t).verify(o, i, r)
}

function et(e, t) {
	if (t = t || {}, !Je(e = Be(e))) return null;
	var r = ze(e);
	if (!r) return null;
	var n = function(e, t) {
		t = t || "utf8";
		var r = e.split(".")[1];
		return Qe.from(r, "base64").toString(t)
	}(e);
	return ("JWT" === r.typ || t.json) && (n = JSON.parse(n, t.encoding)), {
		header: r,
		payload: n,
		signature: We(e)
	}
}

function tt(e) {
	var t = (e = e || {}).secret || e.publicKey || e.key,
		r = new oe(t);
	this.readable = !0, this.algorithm = e.algorithm, this.encoding = e.encoding, this.secret = this.publicKey = this
		.key = r, this.signature = new oe(e.signature), this.secret.once("close", function() {
			!this.signature.writable && this.readable && this.verify()
		}.bind(this)), this.signature.once("close", function() {
			!this.secret.writable && this.readable && this.verify()
		}.bind(this))
}
i.inherits(tt, n), tt.prototype.verify = function() {
	try {
		var e = Ze(this.signature.buffer, this.algorithm, this.key.buffer),
			t = et(this.signature.buffer, this.encoding);
		return this.emit("done", e, t), this.emit("data", e), this.emit("end"), this.readable = !1, e
	} catch (e) {
		this.readable = !1, this.emit("error", e), this.emit("close")
	}
}, tt.decode = et, tt.isValid = Je, tt.verify = Ze;
var rt = tt,
	nt = {
		ALGORITHMS: ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384",
			"ES512"
		],
		sign: Ge.sign,
		verify: rt.verify,
		decode: rt.decode,
		isValid: rt.isValid,
		createSign: function(e) {
			return new Ge(e)
		},
		createVerify: function(e) {
			return new rt(e)
		}
	},
	it = function(e, t) {
		t = t || {};
		var r = nt.decode(e, t);
		if (!r) return null;
		var n = r.payload;
		if ("string" == typeof n) try {
			var i = JSON.parse(n);
			null !== i && "object" == typeof i && (n = i)
		} catch (e) {}
		return !0 === t.complete ? {
			header: r.header,
			payload: n,
			signature: r.signature
		} : n
	},
	ot = function(e, t) {
		Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name =
			"JsonWebTokenError", this.message = e, t && (this.inner = t)
	};
(ot.prototype = Object.create(Error.prototype)).constructor = ot;
var st = ot,
	at = function(e, t) {
		st.call(this, e), this.name = "NotBeforeError", this.date = t
	};
(at.prototype = Object.create(st.prototype)).constructor = at;
var ct = at,
	ut = function(e, t) {
		st.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t
	};
(ut.prototype = Object.create(st.prototype)).constructor = ut;
var dt = ut,
	pt = 1e3,
	lt = 60 * pt,
	ft = 60 * lt,
	mt = 24 * ft,
	ht = function(e, t) {
		t = t || {};
		var r = typeof e;
		if ("string" === r && e.length > 0) return function(e) {
			if ((e = String(e)).length > 100) return;
			var t =
				/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i
				.exec(e);
			if (!t) return;
			var r = parseFloat(t[1]);
			switch ((t[2] || "ms").toLowerCase()) {
				case "years":
				case "year":
				case "yrs":
				case "yr":
				case "y":
					return 315576e5 * r;
				case "weeks":
				case "week":
				case "w":
					return 6048e5 * r;
				case "days":
				case "day":
				case "d":
					return r * mt;
				case "hours":
				case "hour":
				case "hrs":
				case "hr":
				case "h":
					return r * ft;
				case "minutes":
				case "minute":
				case "mins":
				case "min":
				case "m":
					return r * lt;
				case "seconds":
				case "second":
				case "secs":
				case "sec":
				case "s":
					return r * pt;
				case "milliseconds":
				case "millisecond":
				case "msecs":
				case "msec":
				case "ms":
					return r;
				default:
					return
			}
		}(e);
		if ("number" === r && isFinite(e)) return t.long ? function(e) {
			var t = Math.abs(e);
			if (t >= mt) return gt(e, t, mt, "day");
			if (t >= ft) return gt(e, t, ft, "hour");
			if (t >= lt) return gt(e, t, lt, "minute");
			if (t >= pt) return gt(e, t, pt, "second");
			return e + " ms"
		}(e) : function(e) {
			var t = Math.abs(e);
			if (t >= mt) return Math.round(e / mt) + "d";
			if (t >= ft) return Math.round(e / ft) + "h";
			if (t >= lt) return Math.round(e / lt) + "m";
			if (t >= pt) return Math.round(e / pt) + "s";
			return e + "ms"
		}(e);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
	};

function gt(e, t, r, n) {
	var i = t >= 1.5 * r;
	return Math.round(e / r) + " " + n + (i ? "s" : "")
}
var yt = function(e, t) {
		var r = t || Math.floor(Date.now() / 1e3);
		if ("string" == typeof e) {
			var n = ht(e);
			if (void 0 === n) return;
			return Math.floor(r + n / 1e3)
		}
		return "number" == typeof e ? r + e : void 0
	},
	wt = te((function(e, t) {
		var r;
		t = e.exports = G, r = "object" == typeof process && process.env && process.env.NODE_DEBUG &&
			/\bsemver\b/i.test(process.env.NODE_DEBUG) ? function() {
				var e = Array.prototype.slice.call(arguments, 0);
				e.unshift("SEMVER"), console.log.apply(console, e)
			} : function() {}, t.SEMVER_SPEC_VERSION = "2.0.0";
		var n = Number.MAX_SAFE_INTEGER || 9007199254740991,
			i = t.re = [],
			o = t.src = [],
			s = 0,
			a = s++;
		o[a] = "0|[1-9]\\d*";
		var c = s++;
		o[c] = "[0-9]+";
		var u = s++;
		o[u] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
		var d = s++;
		o[d] = "(" + o[a] + ")\\.(" + o[a] + ")\\.(" + o[a] + ")";
		var p = s++;
		o[p] = "(" + o[c] + ")\\.(" + o[c] + ")\\.(" + o[c] + ")";
		var l = s++;
		o[l] = "(?:" + o[a] + "|" + o[u] + ")";
		var f = s++;
		o[f] = "(?:" + o[c] + "|" + o[u] + ")";
		var m = s++;
		o[m] = "(?:-(" + o[l] + "(?:\\." + o[l] + ")*))";
		var h = s++;
		o[h] = "(?:-?(" + o[f] + "(?:\\." + o[f] + ")*))";
		var g = s++;
		o[g] = "[0-9A-Za-z-]+";
		var y = s++;
		o[y] = "(?:\\+(" + o[g] + "(?:\\." + o[g] + ")*))";
		var w = s++,
			v = "v?" + o[d] + o[m] + "?" + o[y] + "?";
		o[w] = "^" + v + "$";
		var _ = "[v=\\s]*" + o[p] + o[h] + "?" + o[y] + "?",
			b = s++;
		o[b] = "^" + _ + "$";
		var T = s++;
		o[T] = "((?:<|>)?=?)";
		var E = s++;
		o[E] = o[c] + "|x|X|\\*";
		var C = s++;
		o[C] = o[a] + "|x|X|\\*";
		var A = s++;
		o[A] = "[v=\\s]*(" + o[C] + ")(?:\\.(" + o[C] + ")(?:\\.(" + o[C] + ")(?:" + o[m] + ")?" + o[y] +
			"?)?)?";
		var x = s++;
		o[x] = "[v=\\s]*(" + o[E] + ")(?:\\.(" + o[E] + ")(?:\\.(" + o[E] + ")(?:" + o[h] + ")?" + o[y] +
			"?)?)?";
		var I = s++;
		o[I] = "^" + o[T] + "\\s*" + o[A] + "$";
		var S = s++;
		o[S] = "^" + o[T] + "\\s*" + o[x] + "$";
		var k = s++;
		o[k] = "(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
		var O = s++;
		o[O] = "(?:~>?)";
		var P = s++;
		o[P] = "(\\s*)" + o[O] + "\\s+", i[P] = new RegExp(o[P], "g");
		var R = s++;
		o[R] = "^" + o[O] + o[A] + "$";
		var j = s++;
		o[j] = "^" + o[O] + o[x] + "$";
		var D = s++;
		o[D] = "(?:\\^)";
		var q = s++;
		o[q] = "(\\s*)" + o[D] + "\\s+", i[q] = new RegExp(o[q], "g");
		var N = s++;
		o[N] = "^" + o[D] + o[A] + "$";
		var U = s++;
		o[U] = "^" + o[D] + o[x] + "$";
		var L = s++;
		o[L] = "^" + o[T] + "\\s*(" + _ + ")$|^$";
		var V = s++;
		o[V] = "^" + o[T] + "\\s*(" + v + ")$|^$";
		var M = s++;
		o[M] = "(\\s*)" + o[T] + "\\s*(" + _ + "|" + o[A] + ")", i[M] = new RegExp(o[M], "g");
		var B = s++;
		o[B] = "^\\s*(" + o[A] + ")\\s+-\\s+(" + o[A] + ")\\s*$";
		var F = s++;
		o[F] = "^\\s*(" + o[x] + ")\\s+-\\s+(" + o[x] + ")\\s*$";
		var $ = s++;
		o[$] = "(<|>)?=?\\s*\\*";
		for (var H = 0; H < 35; H++) r(H, o[H]), i[H] || (i[H] = new RegExp(o[H]));

		function K(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof G) return e;
			if ("string" != typeof e) return null;
			if (e.length > 256) return null;
			if (!(t.loose ? i[b] : i[w]).test(e)) return null;
			try {
				return new G(e, t)
			} catch (e) {
				return null
			}
		}

		function G(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof G) {
				if (e.loose === t.loose) return e;
				e = e.version
			} else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
			if (e.length > 256) throw new TypeError("version is longer than 256 characters");
			if (!(this instanceof G)) return new G(e, t);
			r("SemVer", e, t), this.options = t, this.loose = !!t.loose;
			var o = e.trim().match(t.loose ? i[b] : i[w]);
			if (!o) throw new TypeError("Invalid Version: " + e);
			if (this.raw = e, this.major = +o[1], this.minor = +o[2], this.patch = +o[3], this.major > n || this
				.major < 0) throw new TypeError("Invalid major version");
			if (this.minor > n || this.minor < 0) throw new TypeError("Invalid minor version");
			if (this.patch > n || this.patch < 0) throw new TypeError("Invalid patch version");
			o[4] ? this.prerelease = o[4].split(".").map((function(e) {
				if (/^[0-9]+$/.test(e)) {
					var t = +e;
					if (t >= 0 && t < n) return t
				}
				return e
			})) : this.prerelease = [], this.build = o[5] ? o[5].split(".") : [], this.format()
		}
		t.parse = K, t.valid = function(e, t) {
			var r = K(e, t);
			return r ? r.version : null
		}, t.clean = function(e, t) {
			var r = K(e.trim().replace(/^[=v]+/, ""), t);
			return r ? r.version : null
		}, t.SemVer = G, G.prototype.format = function() {
			return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease
				.length && (this.version += "-" + this.prerelease.join(".")), this.version
		}, G.prototype.toString = function() {
			return this.version
		}, G.prototype.compare = function(e) {
			return r("SemVer.compare", this.version, this.options, e), e instanceof G || (e = new G(e, this
				.options)), this.compareMain(e) || this.comparePre(e)
		}, G.prototype.compareMain = function(e) {
			return e instanceof G || (e = new G(e, this.options)), X(this.major, e.major) || X(this.minor, e
				.minor) || X(this.patch, e.patch)
		}, G.prototype.comparePre = function(e) {
			if (e instanceof G || (e = new G(e, this.options)), this.prerelease.length && !e.prerelease
				.length) return -1;
			if (!this.prerelease.length && e.prerelease.length) return 1;
			if (!this.prerelease.length && !e.prerelease.length) return 0;
			var t = 0;
			do {
				var n = this.prerelease[t],
					i = e.prerelease[t];
				if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
				if (void 0 === i) return 1;
				if (void 0 === n) return -1;
				if (n !== i) return X(n, i)
			} while (++t)
		}, G.prototype.inc = function(e, t) {
			switch (e) {
				case "premajor":
					this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc(
						"pre", t);
					break;
				case "preminor":
					this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
					break;
				case "prepatch":
					this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
					break;
				case "prerelease":
					0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
					break;
				case "major":
					0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
						this.minor = 0, this.patch = 0, this.prerelease = [];
					break;
				case "minor":
					0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this
						.prerelease = [];
					break;
				case "patch":
					0 === this.prerelease.length && this.patch++, this.prerelease = [];
					break;
				case "pre":
					if (0 === this.prerelease.length) this.prerelease = [0];
					else {
						for (var r = this.prerelease.length; --r >= 0;) "number" == typeof this.prerelease[
							r] && (this.prerelease[r]++, r = -2); - 1 === r && this.prerelease.push(0)
					}
					t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t,
						0
					]) : this.prerelease = [t, 0]);
					break;
				default:
					throw new Error("invalid increment argument: " + e)
			}
			return this.format(), this.raw = this.version, this
		}, t.inc = function(e, t, r, n) {
			"string" == typeof r && (n = r, r = void 0);
			try {
				return new G(e, r).inc(t, n).version
			} catch (e) {
				return null
			}
		}, t.diff = function(e, t) {
			if (J(e, t)) return null;
			var r = K(e),
				n = K(t),
				i = "";
			if (r.prerelease.length || n.prerelease.length) {
				i = "pre";
				var o = "prerelease"
			}
			for (var s in r)
				if (("major" === s || "minor" === s || "patch" === s) && r[s] !== n[s]) return i + s;
			return o
		}, t.compareIdentifiers = X;
		var Q = /^[0-9]+$/;

		function X(e, t) {
			var r = Q.test(e),
				n = Q.test(t);
			return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
		}

		function Y(e, t, r) {
			return new G(e, r).compare(new G(t, r))
		}

		function z(e, t, r) {
			return Y(e, t, r) > 0
		}

		function W(e, t, r) {
			return Y(e, t, r) < 0
		}

		function J(e, t, r) {
			return 0 === Y(e, t, r)
		}

		function Z(e, t, r) {
			return 0 !== Y(e, t, r)
		}

		function ee(e, t, r) {
			return Y(e, t, r) >= 0
		}

		function te(e, t, r) {
			return Y(e, t, r) <= 0
		}

		function re(e, t, r, n) {
			switch (t) {
				case "===":
					return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version),
						e === r;
				case "!==":
					return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version),
						e !== r;
				case "":
				case "=":
				case "==":
					return J(e, r, n);
				case "!=":
					return Z(e, r, n);
				case ">":
					return z(e, r, n);
				case ">=":
					return ee(e, r, n);
				case "<":
					return W(e, r, n);
				case "<=":
					return te(e, r, n);
				default:
					throw new TypeError("Invalid operator: " + t)
			}
		}

		function ne(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof ne) {
				if (e.loose === !!t.loose) return e;
				e = e.value
			}
			if (!(this instanceof ne)) return new ne(e, t);
			r("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === ie ?
				this.value = "" : this.value = this.operator + this.semver.version, r("comp", this)
		}
		t.rcompareIdentifiers = function(e, t) {
			return X(t, e)
		}, t.major = function(e, t) {
			return new G(e, t).major
		}, t.minor = function(e, t) {
			return new G(e, t).minor
		}, t.patch = function(e, t) {
			return new G(e, t).patch
		}, t.compare = Y, t.compareLoose = function(e, t) {
			return Y(e, t, !0)
		}, t.rcompare = function(e, t, r) {
			return Y(t, e, r)
		}, t.sort = function(e, r) {
			return e.sort((function(e, n) {
				return t.compare(e, n, r)
			}))
		}, t.rsort = function(e, r) {
			return e.sort((function(e, n) {
				return t.rcompare(e, n, r)
			}))
		}, t.gt = z, t.lt = W, t.eq = J, t.neq = Z, t.gte = ee, t.lte = te, t.cmp = re, t.Comparator = ne;
		var ie = {};

		function oe(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof oe) return e.loose === !!t.loose && e.includePrerelease === !!t
				.includePrerelease ? e : new oe(e.raw, t);
			if (e instanceof ne) return new oe(e.value, t);
			if (!(this instanceof oe)) return new oe(e, t);
			if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this
				.raw = e, this.set = e.split(/\s*\|\|\s*/).map((function(e) {
					return this.parseRange(e.trim())
				}), this).filter((function(e) {
					return e.length
				})), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
			this.format()
		}

		function se(e) {
			return !e || "x" === e.toLowerCase() || "*" === e
		}

		function ae(e, t, r, n, i, o, s, a, c, u, d, p, l) {
			return ((t = se(r) ? "" : se(n) ? ">=" + r + ".0.0" : se(i) ? ">=" + r + "." + n + ".0" : ">=" +
				t) + " " + (a = se(c) ? "" : se(u) ? "<" + (+c + 1) + ".0.0" : se(d) ? "<" + c + "." + (
				+u +
				1) + ".0" : p ? "<=" + c + "." + u + "." + d + "-" + p : "<=" + a)).trim()
		}

		function ce(e, t, n) {
			for (var i = 0; i < e.length; i++)
				if (!e[i].test(t)) return !1;
			if (t.prerelease.length && !n.includePrerelease) {
				for (i = 0; i < e.length; i++)
					if (r(e[i].semver), e[i].semver !== ie && e[i].semver.prerelease.length > 0) {
						var o = e[i].semver;
						if (o.major === t.major && o.minor === t.minor && o.patch === t.patch) return !0
					} return !1
			}
			return !0
		}

		function ue(e, t, r) {
			try {
				t = new oe(t, r)
			} catch (e) {
				return !1
			}
			return t.test(e)
		}

		function de(e, t, r, n) {
			var i, o, s, a, c;
			switch (e = new G(e, n), t = new oe(t, n), r) {
				case ">":
					i = z, o = te, s = W, a = ">", c = ">=";
					break;
				case "<":
					i = W, o = ee, s = z, a = "<", c = "<=";
					break;
				default:
					throw new TypeError('Must provide a hilo val of "<" or ">"')
			}
			if (ue(e, t, n)) return !1;
			for (var u = 0; u < t.set.length; ++u) {
				var d = t.set[u],
					p = null,
					l = null;
				if (d.forEach((function(e) {
						e.semver === ie && (e = new ne(">=0.0.0")), p = p || e, l = l || e, i(e.semver,
							p.semver, n) ? p = e : s(e.semver, l.semver, n) && (l = e)
					})), p.operator === a || p.operator === c) return !1;
				if ((!l.operator || l.operator === a) && o(e, l.semver)) return !1;
				if (l.operator === c && s(e, l.semver)) return !1
			}
			return !0
		}
		ne.prototype.parse = function(e) {
			var t = this.options.loose ? i[L] : i[V],
				r = e.match(t);
			if (!r) throw new TypeError("Invalid comparator: " + e);
			this.operator = r[1], "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new G(
				r[2], this.options.loose) : this.semver = ie
		}, ne.prototype.toString = function() {
			return this.value
		}, ne.prototype.test = function(e) {
			return r("Comparator.test", e, this.options.loose), this.semver === ie || ("string" ==
				typeof e && (e = new G(e, this.options)), re(e, this.operator, this.semver, this
					.options))
		}, ne.prototype.intersects = function(e, t) {
			if (!(e instanceof ne)) throw new TypeError("a Comparator is required");
			var r;
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), "" === this.operator) return r = new oe(e.value, t), ue(this.value, r, t);
			if ("" === e.operator) return r = new oe(this.value, t), ue(e.semver, r, t);
			var n = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e
					.operator),
				i = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e
					.operator),
				o = this.semver.version === e.semver.version,
				s = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e
					.operator),
				a = re(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this
					.operator) && ("<=" === e.operator || "<" === e.operator),
				c = re(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this
					.operator) && (">=" === e.operator || ">" === e.operator);
			return n || i || o && s || a || c
		}, t.Range = oe, oe.prototype.format = function() {
			return this.range = this.set.map((function(e) {
				return e.join(" ").trim()
			})).join("||").trim(), this.range
		}, oe.prototype.toString = function() {
			return this.range
		}, oe.prototype.parseRange = function(e) {
			var t = this.options.loose;
			e = e.trim();
			var n = t ? i[F] : i[B];
			e = e.replace(n, ae), r("hyphen replace", e), e = e.replace(i[M], "$1$2$3"), r(
					"comparator trim", e, i[M]), e = (e = (e = e.replace(i[P], "$1~")).replace(i[q], "$1^"))
				.split(/\s+/).join(" ");
			var o = t ? i[L] : i[V],
				s = e.split(" ").map((function(e) {
					return function(e, t) {
						return r("comp", e, t), e = function(e, t) {
							return e.trim().split(/\s+/).map((function(e) {
								return function(e, t) {
									r("caret", e, t);
									var n = t.loose ? i[U] : i[N];
									return e.replace(n, (function(t, n, i,
										o, s) {
										var a;
										return r("caret", e, t,
												n, i, o, s), se(
												n) ? a = "" :
											se(i) ? a = ">=" +
											n + ".0.0 <" + (+n +
												1) + ".0.0" :
											se(o) ? a = "0" ===
											n ? ">=" + n + "." +
											i + ".0 <" + n +
											"." + (+i + 1) +
											".0" : ">=" + n +
											"." + i + ".0 <" + (
												+n + 1) +
											".0.0" : s ? (r(
													"replaceCaret pr",
													s), a =
												"0" === n ?
												"0" === i ?
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												n + "." + i +
												"." + (+o + 1) :
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												n + "." + (+i +
													1) + ".0" :
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												(+n + 1) +
												".0.0") : (r(
													"no pr"),
												a = "0" === n ?
												"0" === i ?
												">=" + n + "." +
												i + "." + o +
												" <" + n + "." +
												i + "." + (+o +
													1) : ">=" +
												n + "." + i +
												"." + o + " <" +
												n + "." + (+i +
													1) + ".0" :
												">=" + n + "." +
												i + "." + o +
												" <" + (+n +
													1) + ".0.0"
											), r(
												"caret return",
												a), a
									}))
								}(e, t)
							})).join(" ")
						}(e, t), r("caret", e), e = function(e, t) {
							return e.trim().split(/\s+/).map((function(e) {
								return function(e, t) {
									var n = t.loose ? i[j] : i[R];
									return e.replace(n, (function(t, n, i,
										o, s) {
										var a;
										return r("tilde", e, t,
												n, i, o, s), se(
												n) ? a = "" :
											se(i) ? a = ">=" +
											n + ".0.0 <" + (+n +
												1) + ".0.0" :
											se(o) ? a = ">=" +
											n + "." + i +
											".0 <" + n + "." + (
												+i + 1) + ".0" :
											s ? (r("replaceTilde pr",
													s), a =
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												n + "." + (+i +
													1) + ".0") :
											a = ">=" + n + "." +
											i + "." + o + " <" +
											n + "." + (+i + 1) +
											".0", r(
												"tilde return",
												a), a
									}))
								}(e, t)
							})).join(" ")
						}(e, t), r("tildes", e), e = function(e, t) {
							return r("replaceXRanges", e, t), e.split(/\s+/).map((function(
								e) {
								return function(e, t) {
									e = e.trim();
									var n = t.loose ? i[S] : i[I];
									return e.replace(n, (function(t, n, i,
										o, s, a) {
										r("xRange", e, t, n, i,
											o, s, a);
										var c = se(i),
											u = c || se(o),
											d = u || se(s);
										return "=" === n && d &&
											(n = ""), c ? t =
											">" === n || "<" ===
											n ? "<0.0.0" : "*" :
											n && d ? (u && (o =
													0), s = 0,
												">" === n ? (n =
													">=", u ? (
														i = +i +
														1, o =
														0, s = 0
													) : (
														o = +o +
														1, s = 0
													)) :
												"<=" === n && (
													n = "<", u ?
													i = +i + 1 :
													o = +o + 1),
												t = n + i +
												"." + o + "." +
												s) : u ? t =
											">=" + i +
											".0.0 <" + (+i +
												1) + ".0.0" :
											d && (
												t = ">=" + i +
												"." + o +
												".0 <" + i +
												"." + (+o + 1) +
												".0"), r(
												"xRange return",
												t), t
									}))
								}(e, t)
							})).join(" ")
						}(e, t), r("xrange", e), e = function(e, t) {
							return r("replaceStars", e, t), e.trim().replace(i[$], "")
						}(e, t), r("stars", e), e
					}(e, this.options)
				}), this).join(" ").split(/\s+/);
			return this.options.loose && (s = s.filter((function(e) {
				return !!e.match(o)
			}))), s = s.map((function(e) {
				return new ne(e, this.options)
			}), this)
		}, oe.prototype.intersects = function(e, t) {
			if (!(e instanceof oe)) throw new TypeError("a Range is required");
			return this.set.some((function(r) {
				return r.every((function(r) {
					return e.set.some((function(e) {
						return e.every((function(e) {
							return r.intersects(e, t)
						}))
					}))
				}))
			}))
		}, t.toComparators = function(e, t) {
			return new oe(e, t).set.map((function(e) {
				return e.map((function(e) {
					return e.value
				})).join(" ").trim().split(" ")
			}))
		}, oe.prototype.test = function(e) {
			if (!e) return !1;
			"string" == typeof e && (e = new G(e, this.options));
			for (var t = 0; t < this.set.length; t++)
				if (ce(this.set[t], e, this.options)) return !0;
			return !1
		}, t.satisfies = ue, t.maxSatisfying = function(e, t, r) {
			var n = null,
				i = null;
			try {
				var o = new oe(t, r)
			} catch (e) {
				return null
			}
			return e.forEach((function(e) {
				o.test(e) && (n && -1 !== i.compare(e) || (i = new G(n = e, r)))
			})), n
		}, t.minSatisfying = function(e, t, r) {
			var n = null,
				i = null;
			try {
				var o = new oe(t, r)
			} catch (e) {
				return null
			}
			return e.forEach((function(e) {
				o.test(e) && (n && 1 !== i.compare(e) || (i = new G(n = e, r)))
			})), n
		}, t.minVersion = function(e, t) {
			e = new oe(e, t);
			var r = new G("0.0.0");
			if (e.test(r)) return r;
			if (r = new G("0.0.0-0"), e.test(r)) return r;
			r = null;
			for (var n = 0; n < e.set.length; ++n) {
				e.set[n].forEach((function(e) {
					var t = new G(e.semver.version);
					switch (e.operator) {
						case ">":
							0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t
								.raw = t.format();
						case "":
						case ">=":
							r && !z(r, t) || (r = t);
							break;
						case "<":
						case "<=":
							break;
						default:
							throw new Error("Unexpected operation: " + e.operator)
					}
				}))
			}
			if (r && e.test(r)) return r;
			return null
		}, t.validRange = function(e, t) {
			try {
				return new oe(e, t).range || "*"
			} catch (e) {
				return null
			}
		}, t.ltr = function(e, t, r) {
			return de(e, t, "<", r)
		}, t.gtr = function(e, t, r) {
			return de(e, t, ">", r)
		}, t.outside = de, t.prerelease = function(e, t) {
			var r = K(e, t);
			return r && r.prerelease.length ? r.prerelease : null
		}, t.intersects = function(e, t, r) {
			return e = new oe(e, r), t = new oe(t, r), e.intersects(t)
		}, t.coerce = function(e) {
			if (e instanceof G) return e;
			if ("string" != typeof e) return null;
			var t = e.match(i[k]);
			if (null == t) return null;
			return K(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"))
		}
	})),
	vt = (wt.SEMVER_SPEC_VERSION, wt.re, wt.src, wt.parse, wt.valid, wt.clean, wt.SemVer, wt.inc, wt.diff, wt
		.compareIdentifiers, wt.rcompareIdentifiers, wt.major, wt.minor, wt.patch, wt.compare, wt.compareLoose, wt
		.rcompare, wt.sort, wt.rsort, wt.gt, wt.lt, wt.eq, wt.neq, wt.gte, wt.lte, wt.cmp, wt.Comparator, wt.Range, wt
		.toComparators, wt.satisfies, wt.maxSatisfying, wt.minSatisfying, wt.minVersion, wt.validRange, wt.ltr, wt.gtr,
		wt.outside, wt.prerelease, wt.intersects, wt.coerce, wt.satisfies(process.version, "^6.12.0 || >=8.0.0")),
	_t = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512"],
	bt = ["RS256", "RS384", "RS512"],
	Tt = ["HS256", "HS384", "HS512"];
vt && (_t.splice(3, 0, "PS256", "PS384", "PS512"), bt.splice(3, 0, "PS256", "PS384", "PS512"));
var Et = /^\s+|\s+$/g,
	Ct = /^[-+]0x[0-9a-f]+$/i,
	At = /^0b[01]+$/i,
	xt = /^0o[0-7]+$/i,
	It = /^(?:0|[1-9]\d*)$/,
	St = parseInt;

function kt(e) {
	return e != e
}

function Ot(e, t) {
	return function(e, t) {
		for (var r = -1, n = e ? e.length : 0, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
		return i
	}(t, (function(t) {
		return e[t]
	}))
}
var Pt, Rt, jt = Object.prototype,
	Dt = jt.hasOwnProperty,
	qt = jt.toString,
	Nt = jt.propertyIsEnumerable,
	Ut = (Pt = Object.keys, Rt = Object, function(e) {
		return Pt(Rt(e))
	}),
	Lt = Math.max;

function Vt(e, t) {
	var r = Ft(e) || function(e) {
			return function(e) {
				return Kt(e) && $t(e)
			}(e) && Dt.call(e, "callee") && (!Nt.call(e, "callee") || "[object Arguments]" == qt.call(e))
		}(e) ? function(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}(e.length, String) : [],
		n = r.length,
		i = !!n;
	for (var o in e) !t && !Dt.call(e, o) || i && ("length" == o || Bt(o, n)) || r.push(o);
	return r
}

function Mt(e) {
	if (r = (t = e) && t.constructor, n = "function" == typeof r && r.prototype || jt, t !== n) return Ut(e);
	var t, r, n, i = [];
	for (var o in Object(e)) Dt.call(e, o) && "constructor" != o && i.push(o);
	return i
}

function Bt(e, t) {
	return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || It.test(e)) && e > -1 && e % 1 == 0 &&
		e < t
}
var Ft = Array.isArray;

function $t(e) {
	return null != e && function(e) {
		return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
	}(e.length) && ! function(e) {
		var t = Ht(e) ? qt.call(e) : "";
		return "[object Function]" == t || "[object GeneratorFunction]" == t
	}(e)
}

function Ht(e) {
	var t = typeof e;
	return !!e && ("object" == t || "function" == t)
}

function Kt(e) {
	return !!e && "object" == typeof e
}
var Gt = function(e, t, r, n) {
		var i;
		e = $t(e) ? e : (i = e) ? Ot(i, function(e) {
			return $t(e) ? Vt(e) : Mt(e)
		}(i)) : [], r = r && !n ? function(e) {
			var t = function(e) {
					if (!e) return 0 === e ? e : 0;
					if ((e = function(e) {
							if ("number" == typeof e) return e;
							if (function(e) {
									return "symbol" == typeof e || Kt(e) && "[object Symbol]" == qt.call(e)
								}(e)) return NaN;
							if (Ht(e)) {
								var t = "function" == typeof e.valueOf ? e.valueOf() : e;
								e = Ht(t) ? t + "" : t
							}
							if ("string" != typeof e) return 0 === e ? e : +e;
							e = e.replace(Et, "");
							var r = At.test(e);
							return r || xt.test(e) ? St(e.slice(2), r ? 2 : 8) : Ct.test(e) ? NaN : +e
						}(e)) === 1 / 0 || e === -1 / 0) {
						return 17976931348623157e292 * (e < 0 ? -1 : 1)
					}
					return e == e ? e : 0
				}(e),
				r = t % 1;
			return t == t ? r ? t - r : t : 0
		}(r) : 0;
		var o = e.length;
		return r < 0 && (r = Lt(o + r, 0)),
			function(e) {
				return "string" == typeof e || !Ft(e) && Kt(e) && "[object String]" == qt.call(e)
			}(e) ? r <= o && e.indexOf(t, r) > -1 : !!o && function(e, t, r) {
				if (t != t) return function(e, t, r, n) {
					for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
						if (t(e[o], o, e)) return o;
					return -1
				}(e, kt, r);
				for (var n = r - 1, i = e.length; ++n < i;)
					if (e[n] === t) return n;
				return -1
			}(e, t, r) > -1
	},
	Qt = Object.prototype.toString;
var Xt = function(e) {
		return !0 === e || !1 === e || function(e) {
			return !!e && "object" == typeof e
		}(e) && "[object Boolean]" == Qt.call(e)
	},
	Yt = /^\s+|\s+$/g,
	zt = /^[-+]0x[0-9a-f]+$/i,
	Wt = /^0b[01]+$/i,
	Jt = /^0o[0-7]+$/i,
	Zt = parseInt,
	er = Object.prototype.toString;

function tr(e) {
	var t = typeof e;
	return !!e && ("object" == t || "function" == t)
}
var rr = function(e) {
		return "number" == typeof e && e == function(e) {
			var t = function(e) {
					if (!e) return 0 === e ? e : 0;
					if ((e = function(e) {
							if ("number" == typeof e) return e;
							if (function(e) {
									return "symbol" == typeof e || function(e) {
										return !!e && "object" == typeof e
									}(e) && "[object Symbol]" == er.call(e)
								}(e)) return NaN;
							if (tr(e)) {
								var t = "function" == typeof e.valueOf ? e.valueOf() : e;
								e = tr(t) ? t + "" : t
							}
							if ("string" != typeof e) return 0 === e ? e : +e;
							e = e.replace(Yt, "");
							var r = Wt.test(e);
							return r || Jt.test(e) ? Zt(e.slice(2), r ? 2 : 8) : zt.test(e) ? NaN : +e
						}(e)) === 1 / 0 || e === -1 / 0) {
						return 17976931348623157e292 * (e < 0 ? -1 : 1)
					}
					return e == e ? e : 0
				}(e),
				r = t % 1;
			return t == t ? r ? t - r : t : 0
		}(e)
	},
	nr = Object.prototype.toString;
var ir = function(e) {
	return "number" == typeof e || function(e) {
		return !!e && "object" == typeof e
	}(e) && "[object Number]" == nr.call(e)
};
var or = Function.prototype,
	sr = Object.prototype,
	ar = or.toString,
	cr = sr.hasOwnProperty,
	ur = ar.call(Object),
	dr = sr.toString,
	pr = function(e, t) {
		return function(r) {
			return e(t(r))
		}
	}(Object.getPrototypeOf, Object);
var lr = function(e) {
		if (! function(e) {
				return !!e && "object" == typeof e
			}(e) || "[object Object]" != dr.call(e) || function(e) {
				var t = !1;
				if (null != e && "function" != typeof e.toString) try {
					t = !!(e + "")
				} catch (e) {}
				return t
			}(e)) return !1;
		var t = pr(e);
		if (null === t) return !0;
		var r = cr.call(t, "constructor") && t.constructor;
		return "function" == typeof r && r instanceof r && ar.call(r) == ur
	},
	fr = Object.prototype.toString,
	mr = Array.isArray;
var hr = function(e) {
		return "string" == typeof e || !mr(e) && function(e) {
			return !!e && "object" == typeof e
		}(e) && "[object String]" == fr.call(e)
	},
	gr = /^\s+|\s+$/g,
	yr = /^[-+]0x[0-9a-f]+$/i,
	wr = /^0b[01]+$/i,
	vr = /^0o[0-7]+$/i,
	_r = parseInt,
	br = Object.prototype.toString;

function Tr(e, t) {
	var r;
	if ("function" != typeof t) throw new TypeError("Expected a function");
	return e = function(e) {
			var t = function(e) {
					if (!e) return 0 === e ? e : 0;
					if ((e = function(e) {
							if ("number" == typeof e) return e;
							if (function(e) {
									return "symbol" == typeof e || function(e) {
										return !!e && "object" == typeof e
									}(e) && "[object Symbol]" == br.call(e)
								}(e)) return NaN;
							if (Er(e)) {
								var t = "function" == typeof e.valueOf ? e.valueOf() : e;
								e = Er(t) ? t + "" : t
							}
							if ("string" != typeof e) return 0 === e ? e : +e;
							e = e.replace(gr, "");
							var r = wr.test(e);
							return r || vr.test(e) ? _r(e.slice(2), r ? 2 : 8) : yr.test(e) ? NaN : +e
						}(e)) === 1 / 0 || e === -1 / 0) {
						return 17976931348623157e292 * (e < 0 ? -1 : 1)
					}
					return e == e ? e : 0
				}(e),
				r = t % 1;
			return t == t ? r ? t - r : t : 0
		}(e),
		function() {
			return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = void 0), r
		}
}

function Er(e) {
	var t = typeof e;
	return !!e && ("object" == t || "function" == t)
}
var Cr = function(e) {
		return Tr(2, e)
	},
	Ar = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
vt && Ar.splice(3, 0, "PS256", "PS384", "PS512");
var xr = {
		expiresIn: {
			isValid: function(e) {
				return rr(e) || hr(e) && e
			},
			message: '"expiresIn" should be a number of seconds or string representing a timespan'
		},
		notBefore: {
			isValid: function(e) {
				return rr(e) || hr(e) && e
			},
			message: '"notBefore" should be a number of seconds or string representing a timespan'
		},
		audience: {
			isValid: function(e) {
				return hr(e) || Array.isArray(e)
			},
			message: '"audience" must be a string or array'
		},
		algorithm: {
			isValid: Gt.bind(null, Ar),
			message: '"algorithm" must be a valid string enum value'
		},
		header: {
			isValid: lr,
			message: '"header" must be an object'
		},
		encoding: {
			isValid: hr,
			message: '"encoding" must be a string'
		},
		issuer: {
			isValid: hr,
			message: '"issuer" must be a string'
		},
		subject: {
			isValid: hr,
			message: '"subject" must be a string'
		},
		jwtid: {
			isValid: hr,
			message: '"jwtid" must be a string'
		},
		noTimestamp: {
			isValid: Xt,
			message: '"noTimestamp" must be a boolean'
		},
		keyid: {
			isValid: hr,
			message: '"keyid" must be a string'
		},
		mutatePayload: {
			isValid: Xt,
			message: '"mutatePayload" must be a boolean'
		}
	},
	Ir = {
		iat: {
			isValid: ir,
			message: '"iat" should be a number of seconds'
		},
		exp: {
			isValid: ir,
			message: '"exp" should be a number of seconds'
		},
		nbf: {
			isValid: ir,
			message: '"nbf" should be a number of seconds'
		}
	};

function Sr(e, t, r, n) {
	if (!lr(r)) throw new Error('Expected "' + n + '" to be a plain object.');
	Object.keys(r).forEach((function(i) {
		var o = e[i];
		if (o) {
			if (!o.isValid(r[i])) throw new Error(o.message)
		} else if (!t) throw new Error('"' + i + '" is not allowed in "' + n + '"')
	}))
}
var kr = {
		audience: "aud",
		issuer: "iss",
		subject: "sub",
		jwtid: "jti"
	},
	Or = ["expiresIn", "notBefore", "noTimestamp", "audience", "issuer", "subject", "jwtid"],
	Pr = function(e, t, r, n) {
		var i;
		if ("function" != typeof r || n || (n = r, r = {}), r || (r = {}), r = Object.assign({}, r), i = n || function(
				e, t) {
				if (e) throw e;
				return t
			}, r.clockTimestamp && "number" != typeof r.clockTimestamp) return i(new st(
			"clockTimestamp must be a number"));
		if (void 0 !== r.nonce && ("string" != typeof r.nonce || "" === r.nonce.trim())) return i(new st(
			"nonce must be a non-empty string"));
		var o = r.clockTimestamp || Math.floor(Date.now() / 1e3);
		if (!e) return i(new st("jwt must be provided"));
		if ("string" != typeof e) return i(new st("jwt must be a string"));
		var s, a = e.split(".");
		if (3 !== a.length) return i(new st("jwt malformed"));
		try {
			s = it(e, {
				complete: !0
			})
		} catch (e) {
			return i(e)
		}
		if (!s) return i(new st("invalid token"));
		var c, u = s.header;
		if ("function" == typeof t) {
			if (!n) return i(new st(
				"verify must be called asynchronous if secret or public key is provided as a callback"));
			c = t
		} else c = function(e, r) {
			return r(null, t)
		};
		return c(u, (function(t, n) {
			if (t) return i(new st("error in secret or public key callback: " + t.message));
			var c, d = "" !== a[2].trim();
			if (!d && n) return i(new st("jwt signature is required"));
			if (d && !n) return i(new st("secret or public key must be provided"));
			if (d || r.algorithms || (r.algorithms = ["none"]), r.algorithms || (r.algorithms = ~n
					.toString().indexOf("BEGIN CERTIFICATE") || ~n.toString().indexOf("BEGIN PUBLIC KEY") ?
					_t : ~n.toString().indexOf("BEGIN RSA PUBLIC KEY") ? bt : Tt), !~r.algorithms.indexOf(s
					.header.alg)) return i(new st("invalid algorithm"));
			try {
				c = nt.verify(e, s.header.alg, n)
			} catch (e) {
				return i(e)
			}
			if (!c) return i(new st("invalid signature"));
			var p = s.payload;
			if (void 0 !== p.nbf && !r.ignoreNotBefore) {
				if ("number" != typeof p.nbf) return i(new st("invalid nbf value"));
				if (p.nbf > o + (r.clockTolerance || 0)) return i(new ct("jwt not active", new Date(1e3 * p
					.nbf)))
			}
			if (void 0 !== p.exp && !r.ignoreExpiration) {
				if ("number" != typeof p.exp) return i(new st("invalid exp value"));
				if (o >= p.exp + (r.clockTolerance || 0)) return i(new dt("jwt expired", new Date(1e3 * p
					.exp)))
			}
			if (r.audience) {
				var l = Array.isArray(r.audience) ? r.audience : [r.audience];
				if (!(Array.isArray(p.aud) ? p.aud : [p.aud]).some((function(e) {
						return l.some((function(t) {
							return t instanceof RegExp ? t.test(e) : t === e
						}))
					}))) return i(new st("jwt audience invalid. expected: " + l.join(" or ")))
			}
			if (r.issuer && ("string" == typeof r.issuer && p.iss !== r.issuer || Array.isArray(r.issuer) &&
					-1 === r.issuer.indexOf(p.iss))) return i(new st("jwt issuer invalid. expected: " + r
				.issuer));
			if (r.subject && p.sub !== r.subject) return i(new st("jwt subject invalid. expected: " + r
				.subject));
			if (r.jwtid && p.jti !== r.jwtid) return i(new st("jwt jwtid invalid. expected: " + r.jwtid));
			if (r.nonce && p.nonce !== r.nonce) return i(new st("jwt nonce invalid. expected: " + r.nonce));
			if (r.maxAge) {
				if ("number" != typeof p.iat) return i(new st("iat required when maxAge is specified"));
				var f = yt(r.maxAge, p.iat);
				if (void 0 === f) return i(new st(
					'"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
				));
				if (o >= f + (r.clockTolerance || 0)) return i(new dt("maxAge exceeded", new Date(1e3 * f)))
			}
			if (!0 === r.complete) {
				var m = s.signature;
				return i(null, {
					header: u,
					payload: p,
					signature: m
				})
			}
			return i(null, p)
		}))
	},
	Rr = function(e, t, r, n) {
		"function" == typeof r ? (n = r, r = {}) : r = r || {};
		var i = "object" == typeof e && !Buffer.isBuffer(e),
			o = Object.assign({
				alg: r.algorithm || "HS256",
				typ: i ? "JWT" : void 0,
				kid: r.keyid
			}, r.header);

		function s(e) {
			if (n) return n(e);
			throw e
		}
		if (!t && "none" !== r.algorithm) return s(new Error("secretOrPrivateKey must have a value"));
		if (void 0 === e) return s(new Error("payload is required"));
		if (i) {
			try {
				! function(e) {
					Sr(Ir, !0, e, "payload")
				}(e)
			} catch (e) {
				return s(e)
			}
			r.mutatePayload || (e = Object.assign({}, e))
		} else {
			var a = Or.filter((function(e) {
				return void 0 !== r[e]
			}));
			if (a.length > 0) return s(new Error("invalid " + a.join(",") + " option for " + typeof e + " payload"))
		}
		if (void 0 !== e.exp && void 0 !== r.expiresIn) return s(new Error(
			'Bad "options.expiresIn" option the payload already has an "exp" property.'));
		if (void 0 !== e.nbf && void 0 !== r.notBefore) return s(new Error(
			'Bad "options.notBefore" option the payload already has an "nbf" property.'));
		try {
			! function(e) {
				Sr(xr, !1, e, "options")
			}(r)
		} catch (e) {
			return s(e)
		}
		var c = e.iat || Math.floor(Date.now() / 1e3);
		if (r.noTimestamp ? delete e.iat : i && (e.iat = c), void 0 !== r.notBefore) {
			try {
				e.nbf = yt(r.notBefore, c)
			} catch (e) {
				return s(e)
			}
			if (void 0 === e.nbf) return s(new Error(
				'"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
			))
		}
		if (void 0 !== r.expiresIn && "object" == typeof e) {
			try {
				e.exp = yt(r.expiresIn, c)
			} catch (e) {
				return s(e)
			}
			if (void 0 === e.exp) return s(new Error(
				'"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
			))
		}
		Object.keys(kr).forEach((function(t) {
			var n = kr[t];
			if (void 0 !== r[t]) {
				if (void 0 !== e[n]) return s(new Error('Bad "options.' + t +
					'" option. The payload already has an "' + n + '" property.'));
				e[n] = r[t]
			}
		}));
		var u = r.encoding || "utf8";
		if ("function" != typeof n) return nt.sign({
			header: o,
			payload: e,
			secret: t,
			encoding: u
		});
		n = n && Cr(n), nt.createSign({
			header: o,
			privateKey: t,
			payload: e,
			encoding: u
		}).once("error", n).once("done", (function(e) {
			n(null, e)
		}))
	};
let jr = [];
class Dr {
	constructor(e) {
		this.options = Object.assign({
			baseUrl: "https://appleid.apple.com",
			timeout: 1e4
		}, e)
	}
	async _fetch(e, t) {
		const {
			baseUrl: r
		} = this.options;
		return uniCloud.httpclient.request(r + e, t)
	}
	async verifyIdentityToken(e) {
		const t = e.split(".")[0],
			{
				kid: r
			} = JSON.parse(Buffer.from(t, "base64").toString());
		if (!jr.length) try {
			jr = await this.getAuthKeys()
		} catch (e) {
			return {
				code: 10705,
				msg: e.message
			}
		}
		const n = this.getUsedKey(jr, r);
		if (!Object.keys(n).length && !this.fetched) try {
			jr = await this.getAuthKeys()
		} catch (e) {
			return {
				code: 10705,
				msg: e.message
			}
		}
		let i = null;
		try {
			i = Pr(e, function(e, t) {
				var r = Buffer.from(e, "base64"),
					n = Buffer.from(t, "base64"),
					i = r.toString("hex"),
					o = n.toString("hex");
				i = J(i), o = J(o);
				var s = i.length / 2,
					a = o.length / 2,
					c = ee(s),
					u = ee(a),
					d = "30" + ee(s + a + c.length / 2 + u.length / 2 + 2) + "02" + c + i + "02" + u + o;
				return "-----BEGIN RSA PUBLIC KEY-----\n" + Buffer.from(d, "hex").toString("base64").match(
					/.{1,64}/g).join("\n") + "\n-----END RSA PUBLIC KEY-----\n"
			}(n.n, n.e), {
				algorithms: n.alg
			})
		} catch (e) {
			return {
				code: 10705,
				msg: e.message
			}
		}
		return {
			code: 0,
			msg: i
		}
	}
	async getAuthKeys() {
		const {
			status: e,
			data: t
		} = await this._fetch("/auth/keys", {
			method: "GET",
			dataType: "json",
			timeout: this.options.timeout
		});
		if (200 !== e) throw new Error("request https://appleid.apple.com/auth/keys fail");
		return t.keys
	}
	getUsedKey(e, t) {
		let r = {};
		for (let n = 0; n < e.length; n++) {
			const i = e[n];
			if (i.kid === t) {
				r = i;
				break
			}
		}
		return r
	}
}
var qr = function(e = {}) {
		return e.appId = e.appid, e.secret = e.appsecret, I(G, e)
	},
	Nr = function(e = {}) {
		return e.appId = e.appid, e.secret = e.appsecret, I(X, e)
	},
	Ur = function(e = {}) {
		return e.appId = e.appid, I(W, e)
	},
	Lr = function(e = {}) {
		return I(Dr, e)
	};

function Vr(e = 6) {
	const t = ["2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N",
		"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
	];
	let r = "";
	for (let n = 0; n < e; n++) r += t[Math.floor(Math.random() * t.length)];
	return r
}
const Mr = O.command;
async function Br({
	uid: e,
	dcloudAppidList: t
} = {}) {
	if (!e) return {
		code: N,
		messageValues: {
			param: this.t("user-id")
		}
	};
	if (!t || 0 === t.length || t.some(e => void 0 === e)) return {
		code: N,
		messageValues: {
			param: this.t("dcloud-appid")
		}
	};
	const r = await P.doc(e).get(),
		n = r && r.data && r.data[0];
	if (!n) return {
		code: 10002
	};
	const i = Object.keys(q).reduce((e, t) => {
		const r = t,
			i = function(e, t) {
				return t.split(".").reduce((e, t) => e && e[t], e)
			}(n, t);
		return i && e.push({
			[r]: i
		}), e
	}, []);
	let o;
	const s = {
			dcloud_appid: Mr.in(t),
			_id: Mr.neq(n._id)
		},
		a = {
			dcloud_appid: Mr.exists(!1),
			_id: Mr.neq(n._id)
		};
	switch (i.length) {
		case 0:
			return {
				code: 10004
			};
		case 1:
			o = Mr.or([Mr.and([i[0], s]), Mr.and([i[0], a])]);
			break;
		default:
			o = Mr.or([Mr.and([Mr.or(i), s]), Mr.and([Mr.or(i), a])])
	}
	const c = await P.where(o).limit(1).get();
	return c && c.data && c.data[0] ? {
		code: 10005
	} : {
		code: 0
	}
}
const Fr = uniCloud.database().command;
const $r = uniCloud.database();
const Hr = uniCloud.database().command;
const Kr = uniCloud.database();
const Gr = uniCloud.database();
async function Qr(e) {
	const t = ["apiKey", "apiSecret"];
	for (let r = 0, n = t.length; r < n; r++) {
		const n = t[r];
		if (!e[n]) throw new Error(this.t("config-param-requred", {
			param: "service.univerify." + n
		}))
	}
	if (!e.openid || !e.access_token) throw new Error(this.t("config-param-requred", {
		param: "openid, access_token"
	}));
	return function(e, t) {
		const r = {
			0: "",
			4e3: "缺失参数",
			4001: "apiKey不存在",
			4002: "sign校验不通过",
			4003: "appid不存在",
			4004: "应用未开通一键登录服务",
			4005: "应用开通的一键登录服务正在审核中",
			4006: "服务空间不在白名单中",
			4100: "账户余额不足",
			5e3: "获取手机号失败，请稍后重试(或其他未知错误)"
		};
		return {
			...e,
			msg: r[e.code] ? "[getPhoneNumber] 获取手机号: " + r[e.code] : e.errMsg
		}
	}(await uniCloud.getPhoneNumber({
		provider: "univerify",
		...e
	}))
}
const Xr = uniCloud.database();
const Yr = uniCloud.database();
const zr = uniCloud.database();
const Wr = uniCloud.database().command;
const Jr = uniCloud.database();
const Zr = uniCloud.database();
const en = uniCloud.database();
const tn = uniCloud.database();
const rn = uniCloud.database();
const nn = uniCloud.database();
const on = uniCloud.database();
const sn = {
	"mobile-code": function(e) {
		return !!(e.service && e.service.sms && e.service.sms.smsKey)
	},
	univerify: function(e) {
		return !!(e.service && e.service.univerify && e.service.univerify.apiKey)
	},
	weixin: function(e) {
		return !!(e.oauth && e.oauth.weixin && e.oauth.weixin.appsecret)
	},
	qq: function(e) {
		return !!(e.oauth && e.oauth.qq && e.oauth.qq.appsecret)
	},
	apple: function(e) {
		return !!(e.oauth && e.oauth.apple && e.oauth.apple.bundleId)
	},
	alipay: function(e) {
		return !!(e.oauth && e.oauth.alipay && e.oauth.alipay.privateKey)
	}
};
const an = uniCloud.database();
var cn = Object.freeze({
	__proto__: null,
	addUser: async function({
		username: e,
		nickname: t,
		password: r,
		mobile: n,
		email: i,
		role: o = [],
		authorizedApp: s = []
	} = {}) {
		const a = O.command,
			c = [];
		if (!e && !n && !i) throw new Error("username, mobile or email required");
		let u;
		if (e && c.push({
				username: e
			}), n && c.push({
				mobile: n,
				mobile_confirmed: 1
			}), i && c.push({
				email: i,
				email_confirmed: 1
			}), s.length > 0) {
			u = a.and(a.or(c), a.or({
				dcloud_appid: a.in(s)
			}, {
				dcloud_appid: a.exists(!1)
			}));
			if ((await P.where(u).limit(1).get()).data.length > 0) return {
				code: 10201,
				messageValues: {
					type: this.t("username")
				}
			}
		}
		const d = {
			role: o,
			nickname: t,
			dcloud_appid: s,
			register_date: Date.now()
		};
		if (e && (d.username = e), r) {
			const {
				passwordHash: e,
				version: t
			} = this.encryptPwd(r);
			d.password = e, t && (d.password_secret_version = t)
		}
		return n && (d.mobile = n, d.mobile_confirmed = 1), i && (d.email = i, d.email_confirmed = 1), {
			code: 0,
			uid: (await P.add(d)).id
		}
	},
	getUserInfo: async function({
		uid: e,
		field: t
	}) {
		if (!e) return {
			code: N,
			messageValues: {
				param: this.t("user-id")
			}
		};
		let r;
		if (t && t.length) {
			const n = {};
			for (let e = 0; e < t.length; e++) n[t[e]] = !0;
			r = await P.doc(e).field(n).get()
		} else r = await P.doc(e).get();
		return 0 === r.data.length ? {
			code: 80301
		} : {
			code: 0,
			msg: "",
			userInfo: r.data[0]
		}
	},
	getUserInfoByToken: async function(e) {
		const t = this._verifyToken(e);
		return t.code || (delete t.iat, delete t.exp), t
	},
	resetPwd: async function({
		uid: e,
		password: t
	}) {
		const {
			passwordHash: r,
			version: n
		} = this.encryptPwd(t), i = {
			password: r,
			token: []
		};
		return n && (i.password_secret_version = n), E("upRes", await P.doc(e).update(i)), {
			code: 0,
			msg: ""
		}
	},
	resetPwdBySms: async function({
		mobile: e,
		code: t,
		password: r
	}) {
		const n = await this.verifyCode({
			mobile: e,
			code: t,
			type: "reset-pwd"
		});
		if (0 !== n.code) return n;
		const i = (await P.where({
			mobile: e
		}).get()).data.filter(e => void 0 === e.dcloud_appid || e.dcloud_appid.includes(this.context
			.APPID));
		if (0 === i.length) return {
			code: 10002
		};
		if (i.length > 1) return {
			code: 10005
		};
		const o = i[0]._id;
		return this.resetPwd({
			uid: o,
			password: r
		})
	},
	setAvatar: async function(e) {
		return await P.doc(e.uid).update({
			avatar: e.avatar,
			nickname: e.nickname
		}), {
			code: 0,
			msg: ""
		}
	},
	updatePwd: async function(e) {
		const t = await P.doc(e.uid).get();
		if (t && t.data && t.data.length > 0) {
			if (0 === this._checkPwd(t.data[0], e.oldPassword).code) {
				const {
					passwordHash: r,
					version: n
				} = this.encryptPwd(e.newPassword), i = {
					password: r,
					token: []
				};
				n && (i.password_secret_version = n);
				return E("upRes", await P.doc(t.data[0]._id).update(i)), {
					code: 0,
					msg: ""
				}
			}
			return {
				code: 40202
			}
		}
		return {
			code: 40201
		}
	},
	updateUser: async function(e) {
		const t = e.uid;
		if (!t) return {
			code: N,
			messageValues: {
				param: this.t("user-id")
			}
		};
		delete e.uid;
		const {
			username: r,
			email: n
		} = e, {
			usernameToLowerCase: i,
			emailToLowerCase: o
		} = this._getConfig();
		let s = r && r.trim(),
			a = n && n.trim();
		return s && (i && (s = s.toLowerCase()), e.username = s), a && (o && (a = a.toLowerCase()), e
			.email = a), E("update -> upRes", await P.doc(t).update(e)), {
			code: 0,
			msg: ""
		}
	},
	banAccount: async function({
		uid: e
	} = {}) {
		return $.call(this, {
			uid: e,
			status: B
		})
	},
	unbanAccount: async function({
		uid: e
	} = {}) {
		return $.call(this, {
			uid: e,
			status: M
		})
	},
	closeAccount: async function({
		uid: e
	} = {}) {
		return $.call(this, {
			uid: e,
			status: F
		})
	},
	openAccount: async function({
		uid: e
	} = {}) {
		return $.call(this, {
			uid: e,
			status: M
		})
	},
	_getAlipayApi: function() {
		const e = this.context.PLATFORM,
			t = this._getConfig();
		if (!t.oauth || !t.oauth.alipay) throw new Error(this.t("config-param-require", {
			param: e + ".alipay"
		}));
		return ["appid", "privateKey"].forEach(r => {
			if (!t.oauth.alipay[r]) throw new Error(this.t("config-param-require", {
				param: `${e}.alipay.${r}`
			}))
		}), Ur({
			...t.oauth.alipay
		})
	},
	_getValidInviteCode: async function({
		inviteCode: e
	}) {
		let t, r = 10;
		e ? (r = 1, t = e) : t = Vr();
		let n = !1;
		try {
			for (; r > 0 && !n;) {
				r--;
				if (0 === (await P.where({
						my_invite_code: t
					}).get()).data.length) {
					n = !0;
					break
				}
				t = Vr()
			}
			t = Vr()
		} catch (e) {}
		return n ? {
			code: 0,
			inviteCode: t
		} : e ? {
			code: 80401
		} : {
			code: 80402
		}
	},
	_addUser: async function(e, {
		needPermission: t,
		autoSetDcloudAppid: r = !0
	} = {}) {
		const n = this._getConfig(),
			i = {
				...e,
				dcloud_appid: r ? [this.context.APPID] : [],
				register_date: Date.now()
			},
			o = (await P.add(i)).id;
		let s;
		if (n.removePermissionAndRoleFromToken) s = await this.createToken({
			uid: o,
			needPermission: t
		});
		else {
			const t = e.role || [];
			let r;
			r = 0 === t.length || t.includes("admin") ? [] : await this._getPermissionListByRoleList(t), s =
				await this.createToken({
					uid: o,
					role: t,
					permission: r
				})
		}
		const {
			token: a,
			tokenExpired: c
		} = s;
		return await P.doc(o).update({
			token: [a]
		}), {
			token: a,
			tokenExpired: c,
			uid: o,
			type: "register",
			userInfo: Object.assign({}, i, {
				token: [a]
			})
		}
	},
	_loginExec: async function(e, t = {}) {
		if (e.status === B) return {
			code: 10001
		};
		if (e.status === F) return {
			code: 10006
		};
		const r = this._getConfig();
		let n = e.token || [];
		"string" == typeof n && (n = [n]);
		const i = this._getExpiredToken(n);
		let o;
		if (n = n.filter(e => -1 === i.indexOf(e)), r.removePermissionAndRoleFromToken) {
			const r = t.needPermission;
			o = await this.createToken({
				uid: e._id,
				needPermission: r
			})
		} else {
			const t = e.role || [];
			let r;
			r = 0 === t.length || t.includes("admin") ? [] : await this._getPermissionListByRoleList(t), o =
				await this.createToken({
					uid: e._id,
					role: t,
					permission: r
				})
		}
		const {
			token: s,
			tokenExpired: a
		} = o;
		n.push(s), e.token = n;
		const c = {
			last_login_date: Date.now(),
			last_login_ip: this.context.CLIENTIP,
			token: n,
			...t.extraData
		};
		await P.doc(e._id).update(c);
		const u = Object.assign({}, e, c);
		return {
			code: 0,
			msg: "",
			token: s,
			uid: u._id,
			username: u.username,
			type: "login",
			userInfo: u,
			tokenExpired: a
		}
	},
	_registerExec: async function(e, {
		needPermission: t,
		autoSetDcloudAppid: r = !0
	} = {}) {
		const {
			my_invite_code: n
		} = e;
		if (this._getConfig().autoSetInviteCode || n) {
			const t = await this._getValidInviteCode({
				inviteCode: n
			});
			if (t.code) return t;
			e.my_invite_code = t.inviteCode
		}
		const {
			PLATFORM: i,
			appId: o,
			appid: s,
			APPID: a,
			uniPlatform: c,
			appName: u,
			appVersion: d,
			appVersionCode: p,
			channel: l,
			clientIP: f,
			CLIENTIP: m,
			OS: h,
			osName: g
		} = this.context;
		return e.register_env = {
			appid: o || s || a || "",
			uni_platform: c || i || "",
			os_name: g || h || "",
			app_name: u || "",
			app_version: d || "",
			app_version_code: p || "",
			channel: l ? l + "" : "",
			client_ip: f || m || ""
		}, {
			code: 0,
			msg: "",
			...await this._addUser(e, {
				needPermission: t,
				autoSetDcloudAppid: r
			})
		}
	},
	_getWeixinApi: function() {
		const e = this.context.PLATFORM,
			t = this._getConfig();
		if (!t.oauth || !t.oauth.weixin) throw new Error(this.t("config-param-require", {
			param: e + ".weixin"
		}));
		return ["appid", "appsecret"].forEach(r => {
			if (!t.oauth.weixin[r]) throw new Error(this.t("config-param-require", {
				param: `${e}.weixin.${r}`
			}))
		}), qr({
			...t.oauth.weixin
		})
	},
	_getQQApi: function() {
		const e = this.context.PLATFORM,
			t = this._getConfig();
		if (!t.oauth || !t.oauth.qq) throw new Error(this.t("config-param-require", {
			param: e + ".qq"
		}));
		return ["appid", "appsecret"].forEach(r => {
			if (!t.oauth.qq[r]) throw new Error(this.t("config-param-require", {
				param: `${e}.qq.${r}`
			}))
		}), Nr({
			...t.oauth.qq
		})
	},
	_getMatchedUser: function(e, t) {
		if (0 === e.length) return {
			code: 10002
		};
		let r;
		const n = {},
			i = {};
		for (let r = e.length - 1; r >= 0; r--) {
			const o = e[r];
			for (let s = 0; s < t.length; s++) {
				const {
					field: a,
					value: c,
					fallbackValue: u
				} = t[s];
				c && o[a] === c ? (n[a] = o, e.splice(r, 1)) : u && o[a] === u && (n[a] || (n[a] = o), i[
					a] = !0, e.splice(r, 1))
			}
		}
		const o = Object.keys(n);
		let s;
		switch (o.length) {
			case 0:
				r = e[0], e.splice(0, 1);
				break;
			case 1:
				s = o[0], r = n[s];
				break;
			default:
				return {
					code: 10003, messageValues: {
						target: "用户"
					}
				}
		}
		return e.length > 0 ? {
			code: 10003,
			messageValues: {
				target: "用户"
			}
		} : {
			code: 0,
			msg: "",
			userMatched: r,
			fieldMatched: s,
			isFallbackValueMatched: !!s && i[s]
		}
	},
	_getCurrentAppUser: function(e) {
		const t = this.context.APPID;
		return e.filter(e => void 0 === e.dcloud_appid || null === e.dcloud_appid || e.dcloud_appid.indexOf(
			t) > -1 || e.dcloud_appid.indexOf(null) > -1)
	},
	_checkLoginUserList: function(e) {
		if (e && 1 !== e.length) return e[0].status === F ? {
			code: 10006
		} : {
			code: 10005
		}
	},
	setAuthorizedAppLogin: async function({
		uid: e,
		dcloudAppidList: t
	} = {}) {
		if ("array" !== m(t)) return {
			code: U,
			messageValues: {
				param: "dcloudAppidList",
				reason: this.t("type-array-required", {
					param: this.t("dcloud-appid-list")
				})
			}
		};
		if (t && 0 !== t.length) {
			const r = await Br.bind(this)({
				uid: e,
				dcloudAppidList: t
			});
			if (r.code) return r
		}
		return await P.doc(e).update({
			dcloud_appid: Mr.set(t)
		}), {
			code: 0
		}
	},
	authorizeAppLogin: async function({
		uid: e,
		dcloudAppid: t
	} = {}) {
		const r = await Br.bind(this)({
			uid: e,
			dcloudAppidList: [t]
		});
		return r.code ? r : (await P.doc(e).update({
			dcloud_appid: Mr.push(t)
		}), {
			code: 0
		})
	},
	forbidAppLogin: async function({
		uid: e,
		dcloudAppid: t
	} = {}) {
		return e ? (await P.doc(e).update({
			dcloud_appid: Mr.pull(t)
		}), {
			code: 0
		}) : {
			code: N,
			messageValues: {
				param: this.t("user-id")
			}
		}
	},
	acceptInvite: async function({
		uid: e,
		inviteCode: t
	}) {
		const r = await P.where({
			_id: Fr.neq(e),
			inviter_uid: Fr.not(Fr.all([e])),
			my_invite_code: t
		}).get();
		if (1 !== r.data.length) return {
			code: 80501,
			msg: "邀请码无效"
		};
		const n = [r.data[0]._id].concat(r.data[0].inviter_uid || []),
			i = await P.doc(e).field({
				my_invite_code: !0,
				inviter_uid: !0
			}).get();
		if (0 === i.data.length) return {
			code: 80502
		};
		if (i.data[0].inviter_uid && i.data[0].inviter_uid.length > 0) return {
			code: 80503,
			msg: "邀请码不可修改"
		};
		const o = Date.now();
		return await P.doc(e).update({
			inviter_uid: n,
			invite_time: o
		}), await P.where({
			inviter_uid: e
		}).update({
			inviter_uid: Fr.push(n)
		}), {
			code: 0,
			msg: ""
		}
	},
	getInvitedUser: async function({
		uid: e,
		level: t = 1,
		limit: r = 20,
		offset: n = 0,
		needTotal: i = !1
	}) {
		const o = {
			code: 0,
			msg: "",
			invitedUser: (await P.where({
				["inviter_uid." + (t - 1)]: e
			}).field({
				_id: !0,
				username: !0,
				mobile: !0,
				invite_time: !0
			}).orderBy("invite_time", "desc").skip(n).limit(r).get()).data
		};
		if (i) {
			const r = await P.where({
				["inviter_uid." + (t - 1)]: e
			}).count();
			o.total = r.total
		}
		return o
	},
	setUserInviteCode: async function({
		uid: e,
		myInviteCode: t
	}) {
		const r = await this._getValidInviteCode({
			inviteCode: t
		});
		return r.code ? r : (await P.doc(e).update({
			my_invite_code: r.inviteCode
		}), {
			code: 0,
			msg: "",
			myInviteCode: r.inviteCode
		})
	},
	loginByAlipay: async function(e) {
		"string" == typeof e && (e = {
			code: e
		});
		const {
			needPermission: t,
			code: r,
			myInviteCode: n,
			role: i,
			type: o
		} = e, {
			openid: s
		} = await this._getAlipayApi().code2Session(r);
		if (!s) return {
			code: 10501,
			messageValues: {
				account: this.t("alipay-account")
			}
		};
		let a = await P.where({
			ali_openid: s
		}).get();
		if (a = this._getCurrentAppUser(a.data), a && a.length > 0) {
			if ("register" === o) return {
				code: 10502,
				messageValues: {
					type: this.t("alipay-account")
				}
			};
			if (1 !== a.length) return {
				code: 10005
			};
			const e = a[0],
				r = await this._loginExec(e, {
					needPermission: t
				});
			if (0 !== r.code) return r;
			const {
				userInfo: n
			} = r;
			return {
				...r,
				openid: s,
				mobileConfirmed: 1 === n.mobile_confirmed,
				emailConfirmed: 1 === n.email_confirmed
			}
		} {
			if ("login" === o) return {
				code: 10503,
				messageValues: {
					type: this.t("alipay-account")
				}
			};
			const e = {
				ali_openid: s
			};
			e.my_invite_code = n, e.role = i;
			const r = await this._registerExec(e, {
				needPermission: t
			});
			return 0 !== r.code ? r : {
				...r,
				openid: s,
				mobileConfirmed: !1,
				emailConfirmed: !1
			}
		}
	},
	loginByEmail: async function(e) {
		let {
			email: t,
			code: r,
			password: n,
			myInviteCode: i,
			type: o,
			needPermission: s,
			role: a
		} = e || {};
		if (t = t && t.trim(), !t) return {
			code: N,
			messageValues: {
				param: "邮箱"
			}
		};
		const {
			emailToLowerCase: c
		} = this._getConfig();
		let u = t;
		c && (u = t.toLowerCase());
		const d = await this.verifyCode({
			email: u,
			code: r,
			type: o || "login"
		});
		if (0 !== d.code) return d;
		let p = {
			email: t,
			email_confirmed: 1
		};
		const l = {
				field: "email",
				value: t
			},
			f = $r.command;
		u !== t && (p = f.or(p, {
			email: u,
			email_confirmed: 1
		}), l.fallbackValue = u);
		let m = await P.where(p).get();
		if (m = this._getCurrentAppUser(m.data), m && m.length > 0) {
			if ("register" === o) return {
				code: 10301,
				messageValues: {
					type: "邮箱"
				}
			};
			const e = this._getMatchedUser(m, [l]);
			if (e.code) return e;
			const {
				userMatched: t
			} = e, r = await this._loginExec(t, {
				needPermission: s
			});
			return 0 !== r.code ? r : {
				...r,
				email: u
			}
		} {
			if ("login" === o) return {
				code: 10302,
				messageValues: {
					type: "邮箱"
				}
			};
			const e = {
					email: u,
					email_confirmed: 1
				},
				t = n && n.trim();
			if (t) {
				const {
					passwordHash: r,
					version: n
				} = this.encryptPwd(t);
				e.password = r, n && (e.password_secret_version = n)
			}
			e.my_invite_code = i, e.role = a;
			const r = await this._registerExec(e, {
				needPermission: s
			});
			return 0 !== r.code ? r : {
				...r,
				email: u
			}
		}
	},
	loginBySms: async function({
		mobile: e,
		code: t,
		password: r,
		inviteCode: n,
		myInviteCode: i,
		type: o,
		needPermission: s,
		role: a
	}) {
		if (!(e = e && e.trim())) return {
			code: N,
			messageValues: {
				param: this.t("mobile")
			}
		};
		const c = this._getConfig();
		if (c.forceInviteCode && !o) throw new Error(this.t("login-with-invite-type-required"));
		const u = await this.verifyCode({
			mobile: e,
			code: t,
			type: o || "login"
		});
		if (0 !== u.code) return u;
		const d = {
			mobile: e,
			mobile_confirmed: 1
		};
		let p = await P.where(d).get();
		if (p = this._getCurrentAppUser(p.data), p && p.length > 0) {
			if ("register" === o) return {
				code: 10201,
				messageValues: {
					type: this.t("mobile")
				}
			};
			if (1 !== p.length) return {
				code: 10005
			};
			const t = p[0],
				r = await this._loginExec(t, {
					needPermission: s
				});
			return 0 !== r.code ? r : {
				...r,
				mobile: e
			}
		} {
			const t = Date.now();
			if ("login" === o) return {
				code: 10202,
				messageValues: {
					type: this.t("mobile")
				}
			};
			const u = {
					mobile: e,
					mobile_confirmed: 1,
					register_ip: this.context.CLIENTIP,
					register_date: t
				},
				d = r && r.trim();
			if (d) {
				const {
					passwordHash: e,
					version: t
				} = this.encryptPwd(d);
				u.password = e, t && (u.password_secret_version = t)
			}
			if (n) {
				const e = await P.where({
					my_invite_code: n
				}).get();
				if (1 !== e.data.length) return {
					code: 10203
				};
				u.inviter_uid = [e.data[0]._id].concat(e.data[0].inviter_uid || []), u.invite_time = t
			} else if (c.forceInviteCode) return {
				code: 10203
			};
			u.my_invite_code = i, u.role = a;
			const p = await this._registerExec(u, {
				needPermission: s
			});
			return 0 !== p.code ? p : {
				...p,
				mobile: e
			}
		}
	},
	loginByWeixin: async function(e) {
		"string" == typeof e && (e = {
			code: e
		});
		const {
			needPermission: t,
			platform: r,
			code: n,
			myInviteCode: i,
			role: o,
			type: s
		} = e, a = r || this.context.PLATFORM, c = function({
			clientPlatform: e,
			userAgent: t
		} = {}) {
			switch (e) {
				case "app":
				case "app-plus":
					return "app";
				case "mp-weixin":
					return "mp";
				case "h5":
				case "web":
					return t.indexOf("MicroMessenger") > -1 ? "h5" : "web";
				default:
					throw new Error("Unsupported weixin platform")
			}
		}({
			clientPlatform: a,
			userAgent: this.context.CLIENTUA
		}), u = "mp-weixin" === a, {
			openid: d,
			unionid: p,
			sessionKey: l,
			accessToken: f,
			refreshToken: m,
			expired: h
		} = await this._getWeixinApi()[u ? "code2Session" : "getOauthAccessToken"](n);
		if (a != 'mp-weixin') {
			const pspsp = await this.getWeixinUserInfo({
				openid: d,
				accessToken: f,
			})
		}
		// console.log(pspsp);
		if (!d) return {
			code: 10401,
			messageValues: {
				account: "微信openid"
			}
		};
		const g = {
				dcloudAppid: this.context.APPID,
				openid: d,
				platform: "weixin-" + c
			},
			y = require("uni-open-bridge-common");
		let w;
		u ? (w = {
			sessionKey: l
		}, await y.setSessionKey(g, {
			session_key: l
		}, 2592e3)) : (w = {
			accessToken: f,
			refreshToken: m,
			accessTokenExpired: h
		}, await y.setUserAccessToken(g, {
			access_token: f,
			refresh_token: m,
			access_token_expired: h
		}, 2592e3));
		const v = Kr.command,
			_ = [{
				wx_openid: {
					[a]: d
				}
			}];
		p && _.push({
			wx_unionid: p
		});
		let b = await P.where(v.or(..._)).get();
		if (b = this._getCurrentAppUser(b.data), b && b.length > 0) {
			if ("register" === s) return {
				code: 10402,
				messageValues: {
					type: this.t("wechat-account")
				}
			};
			if (1 !== b.length) return {
				code: 10005
			};
			const e = b[0],
				r = {
					wx_openid: {
						[a]: d
					}
				};
			p && (r.wx_unionid = p);
			const n = await this._loginExec(e, {
				needPermission: t,
				extraData: r
			});
			if (0 !== n.code) return n;
			const {
				userInfo: i
			} = n;
			return {
				...n,
				openid: d,
				unionid: p,
				...w,
				mobileConfirmed: 1 === i.mobile_confirmed,
				emailConfirmed: 1 === i.email_confirmed
			}
		} {
			if ("login" === s) return {
				code: 10403,
				messageValues: {
					type: this.t("wechat-account")
				}
			};
			const e = {
				wx_openid: {
					[a]: d
				},
				wx_unionid: p
			};
			e.number = 10
			e.openNum = 0
			e.isvip = 0
			e.endTime = null
			e.broadNumber = 0
			if (a != 'mp-weixin') {
				e.nickname = pspsp.nickname
				e.avatar = pspsp.avatar
			}
			e.my_invite_code = i, e.role = o;
			const r = await this._registerExec(e, {
				needPermission: t
			});
			return 0 !== r.code ? r : {
				...r,
				openid: d,
				unionid: p,
				...w,
				mobileConfirmed: !1,
				emailConfirmed: !1
			}
		}
	},
	loginByQQ: async function({
		code: e,
		accessToken: t,
		accessTokenExpired: r,
		myInviteCode: n,
		needPermission: i,
		role: o,
		type: s
	} = {}) {
		const a = this.context.PLATFORM,
			c = "mp-qq" === a,
			{
				openid: u,
				unionid: d,
				sessionKey: p
			} = await this._getQQApi()[c ? "code2Session" : "getOpenidByToken"]({
				code: e,
				accessToken: t
			});
		if (!u) return {
			code: 10801,
			messageValues: {
				account: "qq openid"
			}
		};
		const l = function({
				clientPlatform: e
			} = {}) {
				switch (e) {
					case "app":
					case "app-plus":
						return "app";
					case "mp-qq":
						return "mp";
					default:
						throw new Error("Unsupported qq platform")
				}
			}({
				clientPlatform: a
			}),
			f = {
				dcloudAppid: this.context.APPID,
				openid: u,
				platform: "qq-" + l
			},
			m = require("uni-open-bridge-common");
		let h;
		c ? (h = {
			sessionKey: p
		}, await m.setSessionKey(f, {
			session_key: p
		}, 2592e3)) : (h = {
			accessToken: t,
			accessTokenExpired: r
		}, await m.setUserAccessToken(f, {
			access_token: t,
			access_token_expired: r
		}, r ? Math.floor((r - Date.now()) / 1e3) : 2592e3));
		const g = Gr.command,
			y = [{
				qq_openid: {
					[a]: u
				}
			}];
		d && y.push({
			qq_unionid: d
		});
		let w = await P.where(g.or(...y)).get();
		if (w = this._getCurrentAppUser(w.data), w && w.length > 0) {
			if ("register" === s) return {
				code: 10802,
				messageValues: {
					type: this.t("qq-account")
				}
			};
			if (1 !== w.length) return {
				code: 10005
			};
			const e = w[0],
				t = {
					qq_openid: {
						[a]: u
					}
				};
			d && (t.qq_unionid = d);
			const r = await this._loginExec(e, {
				needPermission: i,
				extraData: t
			});
			if (0 !== r.code) return r;
			const {
				userInfo: n
			} = r;
			return {
				...r,
				openid: u,
				unionid: d,
				...h,
				mobileConfirmed: 1 === n.mobile_confirmed,
				emailConfirmed: 1 === n.email_confirmed
			}
		} {
			if ("login" === s) return {
				code: 10803,
				messageValues: {
					type: this.t("qq-account")
				}
			};
			const e = {
				qq_openid: {
					[a]: u
				},
				qq_unionid: d
			};
			e.my_invite_code = n, e.role = o;
			const t = await this._registerExec(e);
			return 0 !== t.code ? t : {
				...t,
				openid: u,
				unionid: d,
				...h,
				mobileConfirmed: !1,
				emailConfirmed: !1
			}
		}
	},
	loginByUniverify: async function({
		openid: e,
		access_token: t,
		password: r,
		inviteCode: n,
		myInviteCode: i,
		type: o,
		needPermission: s,
		role: a
	}) {
		const c = this._getConfig(),
			u = c && c.service && c.service.univerify;
		if (!u) throw new Error(this.t("uni-verify-config-required"));
		if (c.forceInviteCode && !o) throw new Error(this.t("login-with-invite-type-required"));
		const d = await Qr.bind(this)({
			...u,
			openid: e,
			access_token: t
		});
		if (0 !== d.code) return d;
		const p = String(d.phoneNumber);
		let l = await P.where({
			mobile: p,
			mobile_confirmed: 1
		}).get();
		if (l = this._getCurrentAppUser(l.data), l && l.length > 0) {
			if ("register" === o) return {
				code: 10601,
				messageValues: {
					type: this.t("mobile")
				}
			};
			if (1 !== l.length) return {
				code: 10005
			};
			const e = l[0],
				t = await this._loginExec(e, {
					needPermission: s
				});
			return 0 !== t.code ? t : {
				...t,
				mobile: p
			}
		}
		if ("login" === o) return {
			code: 10602,
			messageValues: {
				type: this.t("mobile")
			}
		};
		const f = Date.now(),
			m = {
				mobile: p,
				my_invite_code: i,
				mobile_confirmed: 1,
				role: a
			},
			h = r && r.trim();
		if (h) {
			const {
				passwordHash: e,
				version: t
			} = this.encryptPwd(h);
			m.password = e, t && (m.password_secret_version = t)
		}
		if (n) {
			let e = await P.where({
				my_invite_code: n
			}).get();
			if (1 !== e.data.length) return {
				code: 10203
			};
			e = e.data[0], m.inviter_uid = [e._id].concat(e.inviter_uid || []), m.invite_time = f
		} else if (c.forceInviteCode) return {
			code: 10203
		};
		m.my_invite_code = i;
		const g = await this._registerExec(m, {
			needPermission: s
		});
		return 0 !== g.code ? g : {
			...g,
			mobile: p
		}
	},
	loginByApple: async function({
		nickName: e,
		fullName: t,
		identityToken: r,
		myInviteCode: n,
		type: i,
		needPermission: o,
		role: s
	}) {
		const a = this._getConfig(),
			c = a && a.oauth && a.oauth.apple,
			u = c && c.bundleId;
		if (!u) throw new Error(this.t("config-param-require", {
			param: "(app || app-plus).apple.bundleId"
		}));
		if (!r) return {
			code: N,
			messageValues: {
				param: "identityToken"
			}
		};
		t = e || (t && Object.keys(t).length > 0 ? t.familyName + t.givenName : "");
		const {
			code: d,
			msg: p
		} = await Lr().verifyIdentityToken(r);
		if (0 !== d) return {
			code: d,
			msg: p,
			messageValues: {
				account: this.t("apple-account")
			}
		};
		const {
			iss: l,
			sub: f,
			aud: m,
			email: h
		} = p;
		if ("https://appleid.apple.com" !== l) return {
			code: 10706,
			messageValues: {
				account: this.t("apple-account")
			}
		};
		if (!f) return {
			code: 10701,
			messageValues: {
				account: this.t("apple-account")
			}
		};
		if (u !== m) return {
			code: 10702,
			messageValues: {
				account: this.t("apple-account")
			}
		};
		const g = t || "User-" + (h ? h.split("@")[0] : Math.random().toString(32).slice(2));
		let y = await P.where({
			apple_openid: f
		}).get();
		if (y = this._getCurrentAppUser(y.data), y && y.length > 0) {
			if ("register" === i) return {
				code: 10703,
				messageValues: {
					type: this.t("apple-account")
				}
			};
			if (1 !== y.length) return {
				code: 10005
			};
			const e = y[0],
				t = await this._loginExec(e, {
					needPermission: o
				});
			return 0 !== t.code ? t : {
				...t,
				openid: f
			}
		}
		if ("login" === i) return {
			code: 10704,
			messageValues: {
				type: this.t("apple-account")
			}
		};
		const w = {
				nickname: g,
				apple_openid: f,
				my_invite_code: n,
				role: s
			},
			v = await this._registerExec(w, {
				needPermission: o
			});
		return 0 !== v.code ? v : {
			...v,
			openid: f
		}
	},
	login: async function({
		username: e,
		password: t,
		queryField: r = [],
		needPermission: n
	}) {
		const i = Xr.command,
			o = [];
		r && r.length || (r = ["username"]), r.length > 1 && console.warn(this.t("query-field-warning"));
		const {
			usernameToLowerCase: s,
			emailToLowerCase: a,
			passwordErrorLimit: c,
			passwordErrorRetryTime: u
		} = this._getConfig(), d = {
			email: {
				email_confirmed: 1
			},
			mobile: {
				mobile_confirmed: 1
			}
		}, p = {}, l = e && e.trim();
		if (!l) return {
			code: N,
			messageValues: {
				param: this.t("username")
			}
		};
		s && (p.username = l.toLowerCase()), a && (p.email = l.toLowerCase());
		const f = [];
		r.forEach(t => {
			o.push({
				[t]: e,
				...d[t]
			});
			const r = {
				field: t,
				value: e
			};
			"username" === t && p.username !== e ? (o.push({
				[t]: p.username,
				...d[t]
			}), r.fallbackValue = p.username) : "email" === t && p.email !== e && (o.push({
				[t]: p.email,
				...d[t]
			}), r.fallbackValue = p.email), f.push(r)
		});
		let m = await P.where(i.or(...o)).get();
		m = this._getCurrentAppUser(m.data);
		const h = this.context.CLIENTIP,
			g = this._getMatchedUser(m, f);
		if (g.code) return g;
		const {
			userMatched: y
		} = g;
		let w = y.login_ip_limit || [];
		w = w.filter(e => e.last_error_time > Date.now() - 1e3 * u);
		let v = w.find(e => e.ip === h);
		if (v && v.error_times >= c) return {
			code: 10103
		};
		const _ = t && t.trim();
		if (!_) return {
			code: N,
			messageValues: {
				param: "密码"
			}
		};
		const b = this._checkPwd(y, _);
		if (0 === b.code) {
			const e = w.indexOf(v);
			e > -1 && w.splice(e, 1);
			const t = {
					login_ip_limit: w
				},
				{
					passwordHash: r,
					passwordVersion: i
				} = b;
			r && i && (t.password = r, t.password_secret_version = i);
			const o = await this._loginExec(y, {
				needPermission: n,
				extraData: t
			});
			return o.code, o
		}
		return v ? (v.error_times++, v.last_error_time = Date.now()) : (v = {
			ip: h,
			error_times: 1,
			last_error_time: Date.now()
		}, w.push(v)), await P.doc(y._id).update({
			login_ip_limit: w
		}), {
			code: 10102,
			msg: "密码错误"
		}
	},
	register: async function(e) {
		const t = [],
			r = [{
				name: "username",
				desc: this.t("username")
			}, {
				name: "email",
				desc: this.t("email"),
				extraCond: {
					email_confirmed: 1
				}
			}, {
				name: "mobile",
				desc: this.t("mobile"),
				extraCond: {
					mobile_confirmed: 1
				}
			}],
			{
				usernameToLowerCase: n,
				emailToLowerCase: i
			} = this._getConfig();
		r.forEach(r => {
			const o = r.name;
			let s = e[o] && e[o].trim();
			s ? (("username" === r.name && n || "email" === r.name && i) && (s = s.toLowerCase()),
				e[o] = s, t.push({
					[o]: s,
					...r.extraCond
				})) : delete e[o]
		});
		const {
			username: o,
			email: s,
			mobile: a,
			myInviteCode: c,
			needPermission: u,
			autoSetDcloudAppid: d = !0
		} = e;
		if ("needPermission" in e && delete e.needPermission, "autoSetDcloudAppid" in e && delete e
			.autoSetDcloudAppid, 0 === t.length) return {
			code: 20101,
			messageValues: {
				param: this.t("user-unique-param")
			}
		};
		const p = Yr.command;
		let l = await P.where(p.or(...t)).get();
		if (l = this._getCurrentAppUser(l.data), l && l.length > 0) {
			const t = l[0];
			if (t.status === F) return {
				code: 10006
			};
			for (let n = 0; n < r.length; n++) {
				const i = r[n];
				let o = !0;
				if (i.extraCond && (o = Object.keys(i.extraCond).every(e => t[e] === i.extraCond[e])), t[i
						.name] === e[i.name] && o) return {
					code: 20102,
					messageValues: {
						type: i.desc
					}
				}
			}
		}
		const f = e.password && e.password.trim();
		if (!f) return {
			code: N,
			messageValues: {
				param: this.t("password")
			}
		};
		const {
			passwordHash: m,
			version: h
		} = this.encryptPwd(f);
		e.password = m, h && (e.password_secret_version = h), e.my_invite_code = c, delete e.myInviteCode;
		const g = await this._registerExec(e, {
			needPermission: u,
			autoSetDcloudAppid: d
		});
		return 0 !== g.code ? g : {
			...g,
			username: o,
			email: s,
			mobile: a
		}
	},
	logout: async function(e) {
		const t = await this.checkToken(e);
		if (t.code) return t;
		const r = zr.command;
		return await P.doc(t.uid).update({
			token: r.pull(e)
		}), {
			code: 0,
			msg: ""
		}
	},
	getRoleByUid: async function({
		uid: e
	}) {
		if (!e) return {
			code: N,
			messageValues: {
				param: this.t("user-id")
			}
		};
		const t = await P.doc(e).get();
		return 0 === t.data.length ? {
			code: L
		} : {
			code: 0,
			msg: "",
			role: t.data[0].role || []
		}
	},
	getPermissionByRole: async function({
		roleID: e
	}) {
		if (!e) return {
			code: N,
			messageValues: {
				param: "roleID"
			}
		};
		if ("admin" === e) {
			return {
				code: 0,
				msg: "",
				permission: (await D.limit(1e3).get()).data.map(e => e.permission_id)
			}
		}
		const t = await j.where({
			role_id: e
		}).get();
		return 0 === t.data.length ? {
			code: V
		} : {
			code: 0,
			msg: "",
			permission: t.data[0].permission || []
		}
	},
	getPermissionByUid: async function({
		uid: e
	} = {}) {
		const t = await P.aggregate().match({
				_id: e
			}).project({
				role: !0
			}).unwind("$role").lookup({
				from: "uni-id-roles",
				localField: "role",
				foreignField: "role_id",
				as: "roleDetail"
			}).unwind("$roleDetail").replaceRoot({
				newRoot: "$roleDetail"
			}).end(),
			r = [],
			n = [];
		return t.data.forEach(e => {
			n.push(e.role_id), r.push(...e.permission)
		}), {
			code: 0,
			msg: "",
			role: n,
			permission: A(r)
		}
	},
	bindRole: async function({
		uid: e,
		roleList: t,
		reset: r = !1
	}) {
		const n = {};
		return "string" == typeof t && (t = [t]), n.role = r ? t : Wr.push(t), await P.doc(e).update(n), {
			code: 0,
			msg: ""
		}
	},
	bindPermission: async function({
		roleID: e,
		permissionList: t,
		reset: r = !1
	}) {
		const n = {};
		return "string" == typeof t && (t = [t]), n.permission = r ? t : Wr.push(t), await j.where({
			role_id: e
		}).update(n), {
			code: 0,
			msg: ""
		}
	},
	unbindRole: async function({
		uid: e,
		roleList: t
	}) {
		return "string" == typeof t && (t = [t]), await P.doc(e).update({
			role: Wr.pull(Wr.in(t))
		}), {
			code: 0,
			msg: ""
		}
	},
	unbindPermission: async function({
		roleID: e,
		permissionList: t
	}) {
		return "string" == typeof t && (t = [t]), await j.where({
			role_id: e
		}).update({
			permission: Wr.pull(Wr.in(t))
		}), {
			code: 0,
			msg: ""
		}
	},
	addRole: async function({
		roleID: e,
		roleName: t,
		comment: r,
		permission: n = []
	}) {
		return e ? "admin" === e ? {
			code: U,
			messageValues: {
				param: "roleID",
				reason: this.t("add-role-admin-is-not-allowed")
			}
		} : (await j.add({
			role_id: e,
			role_name: t,
			comment: r,
			permission: n,
			create_date: Date.now()
		}), {
			code: 0,
			msg: ""
		}) : {
			code: N,
			messageValues: {
				param: this.t("role-id")
			}
		}
	},
	addPermission: async function({
		permissionID: e,
		permissionName: t,
		comment: r
	}) {
		return e ? (await D.add({
			permission_id: e,
			permission_name: t,
			comment: r,
			create_date: Date.now()
		}), {
			code: 0,
			msg: ""
		}) : {
			code: N,
			messageValues: {
				param: this.t("permission-id")
			}
		}
	},
	getRoleList: async function({
		limit: e = 20,
		offset: t = 0,
		needTotal: r = !0
	}) {
		const n = {
			code: 0,
			msg: "",
			roleList: (await j.skip(t).limit(e).get()).data
		};
		if (r) {
			const {
				total: e
			} = await j.where({
				_id: Wr.exists(!0)
			}).count();
			n.total = e
		}
		return n
	},
	getRoleInfo: async function(e) {
		const t = await j.where({
			role_id: e
		}).get();
		return 0 === t.data.length ? {
			code: V
		} : {
			code: 0,
			...t.data[0]
		}
	},
	updateRole: async function({
		roleID: e,
		roleName: t,
		comment: r,
		permission: n
	}) {
		return e ? (await j.where({
			role_id: e
		}).update({
			role_name: t,
			comment: r,
			permission: n
		}), {
			code: 0,
			msg: ""
		}) : {
			code: N,
			messageValues: {
				param: this.t("role-id")
			}
		}
	},
	deleteRole: async function({
		roleID: e
	}) {
		const t = m(e);
		if ("string" === t) e = [e];
		else if ("array" !== t) throw new Error("typeof roleID must be array or string");
		return await j.where({
			role_id: Wr.in(e)
		}).remove(), await P.where({
			role: Wr.elemMatch(Wr.in(e))
		}).update({
			role: Wr.pullAll(e)
		}), {
			code: 0,
			msg: ""
		}
	},
	getPermissionList: async function({
		limit: e = 20,
		offset: t = 0,
		needTotal: r = !0
	}) {
		const n = {
			code: 0,
			msg: "",
			permissionList: (await D.skip(t).limit(e).get()).data
		};
		if (r) {
			const {
				total: e
			} = await D.where({
				_id: Wr.exists(!0)
			}).count();
			n.total = e
		}
		return n
	},
	getPermissionInfo: async function(e) {
		const t = await D.where({
			permission_id: e
		}).get();
		return 0 === t.data.length ? {
			code: N,
			messageValues: {
				param: this.t("permission-id")
			}
		} : {
			code: 0,
			...t.data[0]
		}
	},
	updatePermission: async function({
		permissionID: e,
		permissionName: t,
		comment: r
	}) {
		return e ? (await D.where({
			permission_id: e
		}).update({
			permission_name: t,
			comment: r
		}), {
			code: 0,
			msg: ""
		}) : {
			code: N,
			messageValues: {
				param: this.t("permission-id")
			}
		}
	},
	deletePermission: async function({
		permissionID: e
	}) {
		const t = m(e);
		if ("string" === t) e = [e];
		else if ("array" !== t) throw new Error("typeof permissionID must be array or string");
		return await D.where({
			permission_id: Wr.in(e)
		}).remove(), await j.where({
			permission: Wr.elemMatch(Wr.in(e))
		}).update({
			permission: Wr.pullAll(e)
		}), {
			code: 0,
			msg: ""
		}
	},
	bindAlipay: async function({
		uid: e,
		code: t,
		platform: r
	}) {
		const n = r || this.context.PLATFORM,
			{
				openid: i
			} = await this._getAlipayApi({
				platform: n
			}).code2Session(t);
		if (!i) return {
			code: 60401,
			messageValues: {
				account: this.t("alipay-account")
			}
		};
		let o = await P.where({
			ali_openid: i
		}).get();
		return o = this._getCurrentAppUser(o.data), o && o.length > 0 ? {
			code: 60402,
			messageValues: {
				type: this.t("alipay-account")
			}
		} : (await P.doc(e).update({
			ali_openid: i
		}), {
			code: 0,
			openid: i,
			msg: ""
		})
	},
	bindEmail: async function(e) {
		let {
			uid: t,
			email: r,
			code: n
		} = e || {};
		if (r = r && r.trim(), !r) return {
			code: N,
			messageValues: {
				param: this.t("email")
			}
		};
		if (!n) return {
			code: N,
			messageValues: {
				param: this.t("verify-code")
			}
		};
		const {
			emailToLowerCase: i
		} = this._getConfig();
		i && (r = r.toLowerCase());
		let o = await P.where({
			email: r,
			email_confirmed: 1
		}).get();
		if (o = this._getCurrentAppUser(o.data), o && o.length > 0) return {
			code: 60201,
			messageValues: {
				type: this.t("email")
			}
		};
		const s = await this.verifyCode({
			email: r,
			code: n,
			type: "bind"
		});
		return 0 !== s.code ? s : (await P.doc(t).update({
			email: r,
			email_confirmed: 1
		}), {
			code: 0,
			msg: "",
			email: r
		})
	},
	bindMobile: async function(e) {
		let {
			uid: t,
			mobile: r,
			code: n,
			openid: i,
			access_token: o,
			type: s = "sms"
		} = e || {};
		if ("univerify" === s) {
			const e = this._getConfig(),
				t = e && e.service && e.service.univerify;
			if (!t) throw new Error("请在config.json中配置service.univerify下一键登录相关参数");
			const n = await Qr.bind(this)({
				...t,
				openid: i,
				access_token: o
			});
			if (0 !== n.code) return n;
			r = "" + n.phoneNumber
		}
		let a = await P.where({
			mobile: r,
			mobile_confirmed: 1
		}).get();
		if (a = this._getCurrentAppUser(a.data), a && a.length > 0) return {
			code: 60101,
			messageValues: {
				type: "手机号"
			}
		};
		if ("sms" === s && "code" in e) {
			if (!r) return {
				code: N,
				messageValues: {
					param: this.t("mobile")
				}
			};
			if (!n) return {
				code: N,
				messageValues: {
					param: this.t("verify-code")
				}
			};
			const e = await this.verifyCode({
				mobile: r,
				code: n,
				type: "bind"
			});
			if (0 !== e.code) return e
		}
		return await P.doc(t).update({
			mobile: r,
			mobile_confirmed: 1
		}), {
			code: 0,
			msg: "",
			mobile: r
		}
	},
	bindWeixin: async function({
		uid: e,
		code: t,
		platform: r
	}) {
		const n = r || this.context.PLATFORM,
			i = "mp-weixin" === n,
			{
				openid: o,
				unionid: s,
				sessionKey: a,
				accessToken: c,
				refreshToken: u,
				expired: d
			} = await this._getWeixinApi({
				platform: n
			})[i ? "code2Session" : "getOauthAccessToken"](t);

		if (!o) return {
			code: 60301,
			messageValues: {
				account: "微信openid"
			}
		};
		const p = Jr.command,
			l = [{
				wx_openid: {
					[n]: o
				}
			}];
		s && l.push({
			wx_unionid: s
		});
		let f = await P.where(p.or(...l)).get();
		if (f = this._getCurrentAppUser(f.data), f && f.length > 0) return {
			code: 60302,
			messageValues: {
				type: this.t("wechat-account")
			}
		};
		const m = {
			wx_openid: {
				[n]: o
			}
		};
		let h;
		return s && (m.wx_unionid = s), await P.doc(e).update(m), h = i ? {
			sessionKey: a
		} : {
			accessToken: c,
			refreshToken: u,
			accessTokenExpired: d
		}, {
			code: 0,
			msg: "",
			openid: o,
			unionid: s,
			...h
		}
	},
	bindQQ: async function({
		uid: e,
		code: t,
		accessToken: r,
		platform: n
	} = {}) {
		const i = n || this.context.PLATFORM,
			o = "mp-qq" === i,
			{
				openid: s,
				unionid: a,
				sessionKey: c
			} = await this._getQQApi()[o ? "code2Session" : "getOpenidByToken"]({
				code: t,
				accessToken: r
			});
		if (!s) return {
			code: 60501,
			messageValues: {
				account: "qq openid"
			}
		};
		const u = Zr.command,
			d = [{
				qq_openid: {
					[i]: s
				}
			}];
		a && d.push({
			qq_unionid: a
		});
		let p = await P.where(u.or(...d)).get();
		if (p = this._getCurrentAppUser(p.data), p && p.length > 0) return {
			code: 60502,
			messageValues: {
				type: this.t("qq-account")
			}
		};
		const l = {
			qq_openid: {
				[i]: s
			}
		};
		return a && (l.qq_unionid = a), await P.doc(e).update(l), {
			code: 0,
			msg: "",
			openid: s,
			unionid: a,
			...{
				accessToken: r,
				sessionKey: c
			}
		}
	},
	unbindAlipay: async function(e) {
		const t = en.command,
			r = await P.doc(e).update({
				ali_openid: t.remove()
			});
		return E("upRes:", r), 1 === r.updated ? {
			code: 0,
			msg: ""
		} : {
			code: 70401
		}
	},
	unbindEmail: async function(e) {
		let {
			uid: t,
			email: r,
			code: n
		} = e || {};
		if (r = r && r.trim(), !t || !r) return {
			code: N,
			messageValues: {
				param: t ? this.t("email") : this.t("user-id")
			}
		};
		const {
			emailToLowerCase: i
		} = this._getConfig();
		if ("code" in e) {
			const e = await this.verifyCode({
				email: r,
				code: n,
				type: "unbind"
			});
			if (0 !== e.code) return e
		}
		const o = tn.command;
		let s = {
			_id: t,
			email: r
		};
		if (i) {
			const e = r.toLowerCase();
			e !== r && (s = o.or(s, {
				_id: t,
				email: e
			}))
		}
		return 1 === (await P.where(s).update({
			email: o.remove(),
			email_confirmed: o.remove()
		})).updated ? {
			code: 0,
			msg: ""
		} : {
			code: 70201
		}
	},
	unbindMobile: async function(e) {
		const {
			uid: t,
			mobile: r,
			code: n
		} = e || {};
		if ("code" in e) {
			const e = await this.verifyCode({
				mobile: r,
				code: n,
				type: "unbind"
			});
			if (0 !== e.code) return e
		}
		const i = rn.command;
		return 1 === (await P.where({
			_id: t,
			mobile: r
		}).update({
			mobile: i.remove(),
			mobile_confirmed: i.remove()
		})).updated ? {
			code: 0,
			msg: ""
		} : {
			code: 70101
		}
	},
	unbindWeixin: async function(e) {
		const t = nn.command,
			r = await P.doc(e).update({
				wx_openid: t.remove(),
				wx_unionid: t.remove()
			});
		return E("upRes:", r), 1 === r.updated ? {
			code: 0,
			msg: ""
		} : {
			code: 70301
		}
	},
	unbindQQ: async function(e) {
		const t = on.command,
			r = await P.doc(e).update({
				qq_openid: t.remove(),
				qq_unionid: t.remove()
			});
		return E("upRes:", r), 1 === r.updated ? {
			code: 0,
			msg: ""
		} : {
			code: 70501
		}
	},
	getSupportedLoginType: function({
		appid: e,
		platform: t
	} = {}) {
		if (!e || !t) throw new Error("Parameter appid and platform is required");
		const r = this._getConfig({
				appid: e,
				platform: t
			}),
			n = ["username-password", "mobile-password", "email-password"];
		for (const e in sn) sn[e](r) && n.push(e);
		return {
			supportedLoginType: n
		}
	},
	code2SessionAlipay: async function(e) {
		let t = e;
		"string" == typeof e && (t = {
			code: e
		});
		try {
			const e = t.platform || this.context.PLATFORM,
				r = await this._getAlipayApi({
					platform: e
				}).code2Session(t.code);
			return r.openid ? {
				code: 0,
				msg: "",
				...r
			} : {
				code: 80701,
				messageValues: {
					account: this.t("alipay-account")
				}
			}
		} catch (e) {
			return console.error(e), {
				code: 80702,
				messageValues: {
					account: this.t("alipay-account")
				}
			}
		}
	},
	code2SessionWeixin: async function(e) {
		let t = e;
		"string" == typeof e && (t = {
			code: e
		});
		try {
			const e = t.platform || this.context.PLATFORM,
				r = await this._getWeixinApi({
					platform: e
				})["mp-weixin" === e ? "code2Session" : "getOauthAccessToken"](t.code);
			return r.openid ? {
				code: 0,
				msg: "",
				...r
			} : {
				code: 80601,
				messageValues: {
					account: "微信openid"
				}
			}
		} catch (e) {
			return console.error(e), {
				code: 80602,
				messageValues: {
					account: "微信openid"
				}
			}
		}
	},
	verifyAppleIdentityToken: async function({
		identityToken: e,
		platform: t
	}) {
		const r = t || this.context.PLATFORM,
			{
				code: n,
				msg: i
			} = await Lr({
				clientType: r
			}).verifyIdentityToken(e);
		return 0 !== n ? {
			code: n,
			msg: i
		} : {
			code: n,
			msg: "验证通过",
			...i
		}
	},
	wxBizDataCrypt: async function({
		code: e,
		sessionKey: r,
		encryptedData: n,
		iv: i
	}) {
		if (!n) return {
			code: N,
			messageValues: {
				param: "encryptedData"
			}
		};
		if (!i) return {
			code: N,
			messageValues: {
				param: "iv"
			}
		};
		if (!e && !r) return {
			code: N,
			messageValues: {
				param: "sessionKey"
			}
		};
		const o = this._getWeixinApi();
		if (!r) {
			const t = await o.code2Session(e);
			if (!t.sessionKey) return {
				code: 80801
			};
			r = t.sessionKey
		}
		r = Buffer.from(r, "base64"), n = Buffer.from(n, "base64"), i = Buffer.from(i, "base64");
		try {
			var s = t.createDecipheriv("aes-128-cbc", r, i);
			s.setAutoPadding(!0);
			var a = s.update(n, "binary", "utf8");
			a += s.final("utf8"), a = JSON.parse(a)
		} catch (e) {
			return console.error(e), {
				code: 80802
			}
		}
		return a.watermark.appid !== o.options.appId ? {
			code: 80803
		} : {
			code: 0,
			msg: "",
			...a
		}
	},
	getWeixinUserInfo: async function({
		accessToken: e,
		openid: t
	} = {}) {
		const r = this.context.PLATFORM;
		if ("app" !== r && "app-plus" !== r) throw new Error(this.t("limit-client-platform"));
		try {
			return {
				code: 0,
				msg: "",
				...await this._getWeixinApi().getUserInfo({
					accessToken: e,
					openid: t
				})
			}
		} catch (e) {
			return console.error(e), {
				code: 80901
			}
		}
	},
	encryptPwd: function(e, {
		value: r,
		version: n
	} = {}) {
		if (!(e = e && e.trim())) throw new Error(this.t("param-required", {
			param: this.t("password")
		}));
		if (!r) {
			const e = this._getConfig(),
				{
					passwordSecret: t
				} = e;
			if ("array" === m(t)) {
				const e = t.sort((e, t) => e.version - t.version);
				r = e[e.length - 1].value, n = e[e.length - 1].version
			} else r = t
		}
		if (!r) throw new Error(this.t("param-error", {
			param: "passwordSecret",
			reason: "invalid passwordSecret"
		}));
		const i = t.createHmac("sha1", r.toString("ascii"));
		return i.update(e), {
			passwordHash: i.digest("hex"),
			version: n
		}
	},
	checkToken: async function(e, {
		needPermission: t,
		needUserInfo: r = !0
	} = {}) {
		const n = this._getConfig(),
			i = this._verifyToken(e);
		if (i.code) return i;
		const {
			uid: o,
			needPermission: s,
			role: a,
			permission: c,
			exp: u,
			iat: d,
			...p
		} = i, l = a && c;
		t = void 0 === t ? s : t;
		const f = n.removePermissionAndRoleFromToken || !l || r,
			m = !n.removePermissionAndRoleFromToken && !l || n.removePermissionAndRoleFromToken && l || n
			.tokenExpiresThreshold && u - Date.now() / 1e3 < n.tokenExpiresThreshold;
		let h = {};
		if (f || m) {
			const t = await P.doc(o).get();
			if (!t.data || 0 === t.data.length || !t.data[0].token) return {
				code: 30202
			};
			if (h = t.data[0], h.status === B) return {
				code: 10001
			};
			if (h.status === F) return {
				code: 10006
			};
			let r = h.token;
			if (r ? "string" == typeof r && (r = [r]) : r = [], -1 === r.indexOf(e)) return {
				code: 30202
			}
		}
		const g = {
			code: 0,
			uid: o,
			...p
		};
		let y, w;
		if (l && (g.role = a, g.permission = c), r && (g.userInfo = h), (!l && t || m) && (y = g.role = h
				.role || [], w = 0 === y.length || y.includes("admin") ? g.permission = [] : g.permission =
				await this._getPermissionListByRoleList(g.role), t && (g.role = y, g.permission = w)), m) {
			let e;
			e = n.removePermissionAndRoleFromToken ? await this.createToken({
				uid: o,
				needPermission: s
			}) : await this.createToken({
				uid: o,
				role: y,
				permission: w
			});
			const t = h.token;
			return await this._updateToken({
				uid: o,
				tokenList: t,
				addToken: [e.token]
			}), {
				...g,
				...e
			}
		}
		return g
	},
	createToken: function({
		uid: e,
		needPermission: t,
		role: r,
		permission: n
	}) {
		if (!e) return {
			code: 30101,
			messageValues: {
				param: this.t("user-id")
			}
		};
		const i = {
				uid: e,
				needPermission: t,
				role: r,
				permission: n
			},
			o = this._getConfig();
		if (!this.interceptorMap.has("customToken")) {
			const e = {
				...i
			};
			return this._createTokenInternal({
				signContent: e,
				config: o
			})
		}
		const s = this.interceptorMap.get("customToken");
		if ("function" != typeof s) throw new Error(this.t("type-function-required", "customToken"));
		const a = s(i);
		return a instanceof Promise ? a.then(e => this._createTokenInternal({
			signContent: e,
			config: o
		})) : this._createTokenInternal({
			signContent: a,
			config: o
		})
	},
	_updateToken: async function({
		uid: e,
		tokenList: t,
		removeToken: r = [],
		addToken: n = []
	} = {}) {
		if (!t) {
			const r = await P.doc(e).get(),
				n = r.data && r.data[0];
			t = n && n.token || []
		}
		"string" == typeof t && (t = [t]);
		const i = this._getExpiredToken(t);
		(t = t.filter(e => -1 === i.indexOf(e))).push(...n);
		for (let e = 0; e < r.length; e++) {
			const n = t.indexOf(r[e]);
			t.splice(n, 1)
		}
		await P.doc(e).update({
			token: t,
			last_login_date: Date.now(),
			last_login_ip: this.context.CLIENTIP
		})
	},
	refreshToken: async function({
		token: e
	} = {}) {
		const t = this._getConfig(),
			r = this._verifyToken(e);
		if (r.code) return r;
		const {
			uid: n,
			needPermission: i
		} = r;
		let o;
		if (t.removePermissionAndRoleFromToken) o = await this.createToken({
			uid: n,
			needPermission: i
		});
		else {
			const {
				role: e,
				permission: t
			} = await this.getPermissionByUid({
				uid: n
			});
			o = await this.createToken({
				uid: n,
				role: e,
				permission: t
			})
		}
		return await this._updateToken({
			uid: n,
			addToken: [o.token],
			removeToken: [e]
		}), o
	},
	_checkPwd: function(e, t) {
		if (!t) return {
			code: 1
		};
		const {
			password: r,
			password_secret_version: n
		} = e, i = this._getConfig(), {
			passwordSecret: o
		} = i, s = m(o);
		if ("string" === s) {
			const {
				passwordHash: e
			} = this.encryptPwd(t, {
				value: o
			});
			return e === r ? {
				code: 0,
				message: ""
			} : {
				code: 2
			}
		}
		if ("array" !== s) throw new Error(this.t("password-secret-type-error"));
		const a = o.sort((e, t) => e.version - t.version);
		let c;
		if (c = n ? a.find(e => e.version === n) : a[0], !c) return {
			code: 3
		};
		const u = a[a.length - 1],
			{
				passwordHash: d
			} = this.encryptPwd(t, c);
		if (d === r) {
			const e = {
				code: 0
			};
			if (c !== u) {
				const {
					passwordHash: r,
					version: n
				} = this.encryptPwd(t, u);
				e.passwordHash = r, e.passwordVersion = n
			}
			return e
		}
		return {
			code: 4,
			message: ""
		}
	},
	_verifyToken: function(e) {
		const t = this._getConfig();
		let r;
		try {
			r = Pr(e, t.tokenSecret)
		} catch (e) {
			return "TokenExpiredError" === e.name ? {
				code: 30203,
				err: e
			} : {
				code: 30204,
				err: e
			}
		}
		return t.bindTokenToDevice && r.clientId && r.clientId !== this._getClientUaHash() ? {
			code: 30201
		} : {
			code: 0,
			message: "",
			...r
		}
	},
	_getExpiredToken: function(e) {
		const t = this._getConfig(),
			r = [];
		return e.forEach(e => {
			try {
				Pr(e, t.tokenSecret)
			} catch (t) {
				r.push(e)
			}
		}), r
	},
	_getPermissionListByRoleList: async function(e) {
		if (!Array.isArray(e)) return [];
		if (0 === e.length) return [];
		if (e.includes("admin")) {
			return (await D.limit(500).get()).data.map(e => e.permission_id)
		}
		const t = await j.where({
				role_id: Hr.in(e)
			}).get(),
			r = [];
		return t.data.forEach(e => {
			Array.prototype.push.apply(r, e.permission)
		}), A(r)
	},
	_getClientUaHash: function() {
		const e = t.createHash("md5"),
			r = /MicroMessenger/i.test(this.context.CLIENTUA) ? this.context.CLIENTUA.replace(
				/(MicroMessenger\S+).*/i, "$1") : this.context.CLIENTUA;
		return e.update(r), e.digest("hex")
	},
	_createTokenInternal: function({
		signContent: e,
		config: t
	}) {
		if (t.tokenExpiresIn && t.tokenExpiresThreshold && t.tokenExpiresIn <= t.tokenExpiresThreshold)
			throw new Error(this.t("token-expires-config-warning"));
		return "object" === m(e) && e.uid ? (t.bindTokenToDevice && (e.clientId = this
			._getClientUaHash()), {
			token: Rr(e, t.tokenSecret, {
				expiresIn: t.tokenExpiresIn
			}),
			tokenExpired: Date.now() + 1e3 * t.tokenExpiresIn
		}) : {
			code: 30101,
			messageValues: {
				param: this.t("user-id")
			}
		}
	},
	setVerifyCode: async function({
		mobile: e,
		email: t,
		code: r,
		expiresIn: n,
		type: i
	}) {
		if (t = t && t.trim(), e = e && e.trim(), t) {
			const {
				emailToLowerCase: e
			} = this._getConfig();
			e && (t = t.toLowerCase())
		}
		if (!e && !t) return {
			code: 50101,
			messageValues: {
				param: "手机号或邮箱"
			}
		};
		if (e && t) return {
			code: 50102,
			messageValues: {
				param: "参数",
				reason: "手机号和邮箱不可同时存在"
			}
		};
		r || (r = C()), n || (n = 180);
		const o = Date.now(),
			s = {
				mobile: e,
				email: t,
				type: i,
				code: r,
				state: 0,
				ip: this.context.CLIENTIP,
				created_at: o,
				expired_at: o + 1e3 * n
			};
		return await R.add(s), {
			code: 0,
			mobile: e,
			email: t
		}
	},
	verifyCode: async function({
		mobile: e,
		email: t,
		code: r,
		type: n
	}) {
		if (t = t && t.trim(), e = e && e.trim(), t) {
			const {
				emailToLowerCase: e
			} = this._getConfig();
			e && (t = t.toLowerCase())
		}
		if (!e && !t) return {
			code: 50201,
			messageValues: {
				param: "手机号或邮箱"
			}
		};
		if (e && t) return {
			code: 50203,
			messageValues: {
				param: "参数",
				reason: "手机号和邮箱不可同时存在"
			}
		};
		if (!r) return {
			code: 50202,
			messageValues: {
				type: this.t(e ? "sms" : "email")
			}
		};
		const i = an.command,
			o = Date.now(),
			s = {
				mobile: e,
				email: t,
				type: n,
				code: r,
				state: 0,
				expired_at: i.gt(o)
			},
			a = await R.where(s).orderBy("created_at", "desc").limit(1).get();
		if (a && a.data && a.data.length > 0) {
			const e = a.data[0];
			return await R.doc(e._id).update({
				state: 1
			}), {
				code: 0,
				msg: "验证通过"
			}
		}
		return {
			code: 50202,
			messageValues: {
				type: this.t(e ? "sms" : "email")
			}
		}
	},
	sendSmsCode: async function({
		mobile: e,
		code: t,
		type: r,
		templateId: n
	}) {
		if (!e) return {
			code: N,
			messageValues: {
				param: this.t("mobile")
			}
		};
		if (t || (t = C()), !r) return {
			code: N,
			messageValues: {
				param: this.t("verify-code-type")
			}
		};
		const i = this._getConfig();
		let o = i && i.service && i.service.sms;
		if (!o) throw new Error(this.t("config-param-required", {
			param: "service.sms"
		}));
		o = Object.assign({
			codeExpiresIn: 300
		}, o);
		const s = ["smsKey", "smsSecret"];
		for (let e = 0, t = s.length; e < t; e++) {
			const t = s[e];
			if (!o[t]) throw new Error(this.t("config-param-required", {
				param: "service.sms." + t
			}))
		}
		const {
			name: a,
			smsKey: c,
			smsSecret: u,
			codeExpiresIn: d
		} = o;
		let p;
		switch (r) {
			case "login":
				p = this.t("login");
				break;
			default:
				p = this.t("verify-mobile")
		}
		try {
			const i = {
				name: a,
				code: t,
				action: p,
				expMinute: "" + Math.round(d / 60)
			};
			a && (i.name = a), await uniCloud.sendSms({
				smsKey: c,
				smsSecret: u,
				phone: e,
				templateId: n || "uniID_code",
				data: i
			});
			const o = await this.setVerifyCode({
				mobile: e,
				code: t,
				expiresIn: d,
				type: r
			});
			return o.code >= 0 ? o : {
				code: 0,
				msg: ""
			}
		} catch (e) {
			return console.error(e), {
				code: 50301
			}
		}
	}
});
let un;
try {
	un = require("uni-config-center")
} catch (e) {
	throw new Error("Plugin[uni-config-center] was not found")
}
class dn {
	constructor({
		context: e,
		clientInfo: t,
		config: r
	} = {}) {
		const n = un({
			pluginId: "uni-id"
		});
		this.pluginConfig = n, this.config = r || this._getConfigContent(), this._configCache = {}, Object
			.defineProperty(this, "context", {
				get() {
					let r;
					r = t ? {
						OS: t.os,
						CLIENTIP: t.clientIP,
						CLIENTUA: t.userAgent,
						PLATFORM: t.platform,
						APPID: t.appId,
						LOCALE: t.locale,
						DEVICEID: t.deviceId
					} : Object.assign({}, e || global.__ctx__ || {});
					const n = ["CLIENTIP", "PLATFORM", "APPID", "LOCALE"];
					for (let e = 0; e < n.length; e++) {
						const t = n[e];
						void 0 === r[t] && console.warn(i.t("context-required", {
							key: t
						}))
					}
					const o = r.APPID,
						s = r.PLATFORM,
						a = this._getAppConfig(this.config, o);
					if (!a) throw new Error(
						`Config for current app (${o}) was not found, please check your config file or client appId`
					);
					if ("app" === s || "app-plus" === s ? r.PLATFORM = a.preferedAppPlatform || s :
						"web" !== s && "h5" !== s || (r.PLATFORM = a.preferedWebPlatform || s), "app" === r
						.PLATFORM && a["app-plus"] || "app-plus" === r.PLATFORM && a.app) throw new Error(
						`Client platform is ${r.PLATFORM}, but ${"app"===r.PLATFORM?"app-plus":"app"} was found in config. Please refer to: https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=prefered-app-platform`
					);
					if ("web" === r.PLATFORM && a.h5 || "h5" === r.PLATFORM && a.web) throw new Error(
						`Client platform is ${r.PLATFORM}, but ${"web"===r.PLATFORM?"h5":"web"} was found in config. Please refer to: https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=prefered-web-platform`
					);
					return r
				}
			}), this.interceptorMap = new Map, n && n.hasFile("custom-token.js") && this.setInterceptor(
				"customToken", require(n.resolve("custom-token.js")));
		let i, o = k;
		if (n && n.hasFile("lang/index.js")) {
			const e = n.requireFile("lang/index.js");
			o = function(e, t) {
				const r = Object.keys(e);
				r.push(...Object.keys(t));
				const n = {};
				for (let i = 0; i < r.length; i++) {
					const o = r[i];
					n[o] = Object.assign({}, e[o], t[o])
				}
				return n
			}(k, e)
		}
		if (!uniCloud.initI18n) throw new Error(
			"The HBuilderX version is too old, please upgrade to the latest version of HBuilderX");
		i = uniCloud.initI18n({
			locale: "en",
			fallbackLocale: "zh-Hans",
			messages: o
		}), Object.defineProperty(this, "t", {
			get() {
				return i.setLocale(this.context.LOCALE || "zh-Hans"), i.t.bind(i)
			}
		})
	}
	get dev() {
		return console.warn(this.t("dev-warning")), {
			getConfig: this._getConfig.bind(this)
		}
	}
	_getAppConfig(e, t) {
		return Array.isArray(e) ? e.find(e => e.dcloudAppid === t) || e.find(e => e.isDefaultConfig) : e
	}
	_parseConfigContent(e) {
		return Array.isArray(e) ? e : e[0] ? Object.values(e) : e
	}
	_getConfigContent() {
		if (this.pluginConfig && this.pluginConfig.hasFile("config.json")) {
			let e;
			try {
				e = this.pluginConfig.config()
			} catch (e) {
				throw new Error("Invalid uni-id config file\n" + e.message)
			}
			return this._parseConfigContent(e)
		} {
			let e;
			try {
				e = require("./config.json")
			} catch (e) {
				if ("MODULE_NOT_FOUND" === e.code || "ENOENT" === e.code) throw new Error(
					"uni-id config file[uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json] not found"
				);
				throw e
			}
			return this._parseConfigContent(e)
		}
	}
	init() {
		throw new Error("uniID.init has been deprecated, use uniID.createInstance instead")
	}
	setInterceptor(e, t) {
		this.interceptorMap.set(e, t)
	}
	_getConfig({
		appid: e,
		platform: t
	} = {}) {
		const r = `${e=e||this.context.APPID}_${t=t||this.context.PLATFORM}`;
		if (this._configCache[r]) return this._configCache[r];
		if (!(this.config && 0 !== Object.keys(this.config).length)) throw new Error(this.t(
			"config-file-not-found"));
		const n = this._getAppConfig(this.config, e);
		"app" !== t && "app-plus" !== t || (t = n.preferedAppPlatform || t), "web" !== t && "h5" !== t || (t = n
			.preferedWebPlatform || t);
		const i = Object.assign(n, n[t]) || {},
			o = Object.assign({
				bindTokenToDevice: !1,
				tokenExpiresIn: 7200,
				tokenExpiresThreshold: 1200,
				passwordErrorLimit: 6,
				passwordErrorRetryTime: 3600,
				usernameToLowerCase: !0,
				emailToLowerCase: !0
			}, i);
		return ["passwordSecret", "tokenSecret", "tokenExpiresIn", "passwordErrorLimit", "passwordErrorRetryTime"]
			.forEach(e => {
				if (!o || !o[e]) throw new Error(this.t("config-param-required", {
					param: e
				}))
			}), this._configCache[r] = o, o
	}
}
for (const e in cn) dn.prototype[e] = cn[e];

function pn(e) {
	const t = new dn(e);
	return new Proxy(t, {
		get(e, t) {
			if (t in e && 0 !== t.indexOf("_")) {
				if ("function" == typeof e[t]) return (r = e[t], function() {
					const e = r.apply(this, arguments);
					return f(e) ? e.then(e => (S.bind(this)(e), e)) : (S.bind(this)(e), e)
				}).bind(e);
				if ("context" !== t && "config" !== t) return e[t]
			}
			var r
		}
	})
}
dn.prototype.createInstance = pn;
var ln = pn();
module.exports = ln;
