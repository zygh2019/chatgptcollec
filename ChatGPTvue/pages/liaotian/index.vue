<template>
	<view>
		<view v-if="ptzt==0">
			
		</view>
		<view v-if="ptzt==1" >
		<scroll-view scroll-with-animation scroll-y="true" style="width: 100%;">
			<!-- 用来获取消息体高度 -->
			<view id="okk" scroll-with-animation>
				<!-- 消息 -->
				<view class="flex-column-start" v-for="(x,i) in msgList" :key="i">
					<!-- 用户消息 头像可选加入-->
					<view v-if="x.my" class="flex justify-end padding-right one-show  align-start  padding-top">
						<!-- 	<image v-if="!x.my" class="chat-img" src="../../static/..." mode="aspectFill" ></image> -->
						<view class="flex justify-end" style="width: 400rpx;" @click="fzfn(x.msg)">
							<view class="margin-left padding-chat bg-cyan" style="border-radius: 35rpx;">
								<text style="word-break: break-all;">{{x.msg}}</text>
							</view>
						</view>
						<!-- <image class="chat-img margin-left" src="../../static/..." mode="aspectFill" ></image> -->
					</view>
					<!-- 机器人消息 -->
					<view v-if="!x.my" class="flex-row-start margin-left margin-top one-show">
						<view class="chat-img flex-row-center">
							<image style="height: 75rpx;width: 75rpx;" src="../../static/image/robt.png"
								mode="aspectFit"></image>
						</view>
						<view class="flex" style="width: 500rpx;" @click="fzfn(x.msg)">
							<view class="margin-left padding-chat flex-column-start"
								style="border-radius: 35rpx;background-color: #f9f9f9;">
								<text style="word-break: break-all;">{{x.msg}}</text>
							</view>
						</view>
					</view>
				</view>
				<!-- loading是显示 -->
				<view v-show="msgLoad" class="flex-row-start margin-left margin-top">
					<view class="chat-img flex-row-center">
						<image style="height: 75rpx;width: 75rpx;" src="../../static/image/robt.png" mode="aspectFit">
						</image>
					</view>
					<view class="flex" style="width: 500rpx;" >
						<view class="margin-left padding-chat flex-column-start"
							style="border-radius: 35rpx;background-color: #f9f9f9;">
							<view class="cuIcon-loading turn-load" style="font-size: 35rpx;color: #3e9982;">

							</view>
						</view>
					</view>
				</view>
				<!-- 防止消息底部被遮 -->
				<view style="height: 130rpx;">

				</view>
			</view>

		</scroll-view>

		<!-- 底部导航栏 -->
		<view class="flex-column-center" style="position: fixed;bottom:0px;width: 100%;">
			<view class="bottom-dh-char flex-row-around" style="font-size: 55rpx;">
				<!-- vue无法使用软键盘"发送" -->
				<input v-model="msg" class="dh-input" type="text" style="background-color: #f0f0f0;font-size: 25rpx;"
					@confirm="sendMsg" confirm-type="search" placeholder-class="my-neirong-sm"
					placeholder="用一句简短的话描述您的问题" />
				<button @click="sendMsg" :disabled="msgLoad" class="btn bg-cyan round">发送</button>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	// import {
	// 	Configuration,
	// 	OpenAIApi
	// } from "openai";

	// const configuration = new Configuration({
	// 	apiKey: "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",
	// });
	// const openai = new OpenAIApi(configuration);

	export default {
		data() {
			return {
				msgLoad: false,
				anData: {},
				userId: "",
				animationData: {},
				showTow: false,
				msgList: [{
					my: false,
					msg: "你好我是openAI机器人,请问有什么问题可以帮助您?"
				}],
				msgContent: "",
				msg: "",
				ptzt: 0
			}
		},
		onLoad(option) {
			this.yhxx()
			this.lpzt()
			//imagesGenerations
			if (option.data != null && option.data != undefined && option.data != '') {
				this.msg = option.data
				this.sendMsg()
			}
			// this.userId = new Date().getTime()
			// this.$nextTick(() => {  // 一定要用nextTick
			//   this.$refs.list.scrollTop = this.$refs.list.scrollHeight
			// })

		},
		methods: {
			lpzt() {
				let this_ = this
				this_.httpClient
					.post({
						url: this_.APIPath.user.QueryTokenAuditMode,
						data: {}
					})
					.then(res => {
						this.ptzt = res.data.data
					})
			
			},
			yhxx() {
				let this_ = this
				this_.httpClient
					.post({
						url: this_.APIPath.user.getuserinformation,
						data: {}
					})
					.then(res => {
						this.userId = res.data.data.InviterID
					})
			},
			fzfn(e) {
				let this_ = this
				uni.setClipboardData({
					data: e, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				});
			},
			sendMsg() {
				let this_ = this
				// 消息为空不做任何操作
				if (this.msg == "") {
					return 0;
				}
				this.msgList.push({
					"msg": this.msg,
					"my": true
				})

				//是为了综合上下文。
				this.msgContent += (this.userId + ":" + this.msg + "\n")

				this.msgLoad = true
				// 清除消息
				this.msg = ""

				this_.httpClient
					.post({
						url: this_.APIPath.user.Aiconversation,
						data: {
							text: this.msgContent,
						}
					})
					.then(res => {
						console.log(res.data.data)
						if(res.data.state==1){
							let text = res.data.data.choices[0].message.content
								.replace("openai:", "")
								.replace("openai：", "")
								.replace("OpenAi:", "")
								.replace("OpenAi：", "")
								.replace("OpenAI：", "")
								.replace("OpenAI:", "")
								.replace(this.userId + ":", "")
								.replace(this.userId + "：", "")
								.replace(/^\n|\n$/g, "")
							this.msgList.push({
								"msg": text,
								"my": false
							})
							this.msgContent += ("openai:" + this.msg + "\n")
							this.msgLoad = false
						}else if(res.data.state==0){
							let text = '积分不足请先获取积分或开通会员再重试！'
								.replace("openai:", "")
								.replace("openai：", "")
								.replace("OpenAi:", "")
								.replace("OpenAi：", "")
								.replace("OpenAI：", "")
								.replace("OpenAI:", "")
								.replace(this.userId + ":", "")
								.replace(this.userId + "：", "")
								.replace(/^\n|\n$/g, "")
							this.msgList.push({
								"msg": text,
								"my": false
							})
							this.msgContent += ("openai:" + this.msg + "\n")
							this.msgLoad = false
						}else{
							let text = '当前咨询人数过多，请重试...'
								.replace("openai:", "")
								.replace("openai：", "")
								.replace("OpenAi:", "")
								.replace("OpenAi：", "")
								.replace("OpenAI：", "")
								.replace("OpenAI:", "")
								.replace(this.userId + ":", "")
								.replace(this.userId + "：", "")
								.replace(/^\n|\n$/g, "")
							this.msgList.push({
								"msg": text,
								"my": false
							})
							this.msgContent += ("openai:" + this.msg + "\n")
							this.msgLoad = false
						}
						
					})

				// let dada = {
				// 	"id": "cmpl-6iZB0Mp4SbgUytBeqMYY0cpczphDY",
				// 	"object": "text_completion",
				// 	"created": 1676079670,
				// 	"model": "text-davinci-003",
				// 	"choices": [{
				// 		"text": "\n\n贝索斯是一个企业家，创立了全球最大的航空公司之一--波音。\n\n贝索斯是一位企业家，创立了全球最大的航空公司之一波音公司。",
				// 		"index": 0,
				// 		"logprobs": null,
				// 		"finish_reason": "stop"
				// 	}],
				// 	"usage": {
				// 		"prompt_tokens": 17,
				// 		"completion_tokens": 113,
				// 		"total_tokens": 130
				// 	}
				// }
				// let text = dada.choices[0].text
				// 	.replace("openai:", "")
				// 	.replace("openai：", "")
				// 	.replace("OpenAi:", "")
				// 	.replace("OpenAi：", "")
				// 	.replace("OpenAI：", "")
				// 	.replace("OpenAI:", "")
				// 	.replace(this.userId + ":", "")
				// 	.replace(this.userId + "：", "")
				// 	.replace(/^\n|\n$/g, "")
				// this.msgList.push({
				// 	"msg": text,
				// 	"my": false
				// })
				// this.msgContent += ("OpenAI:" + this.msg + "\n")
				// this.msgLoad = false
				// this.$nextTick(() => {
				// 	uni.pageScrollTo({
				// 		scrollTop: 2000000, //滚动到页面的目标位置（单位px）
				// 		duration: 0 //滚动动画的时长，默认300ms，单位 ms
				// 	});
				// })
				// uniCloud.callFunction({
				// 	name: "openai-api",
				// 	data: {
				// 		type: "generations",
				// 		message: this.msgContent,
				// 		user: this.userId + ""
				// 	},
				// 	success: (completion) => {
				// 		console.log(completion)
				// 		let text = completion.result.choices[0].text
				// 			.replace("openai:", "")
				// 			.replace("openai：", "")
				// 			.replace("OpenAi:", "")
				// 			.replace("OpenAi：", "")
				// 			.replace("OpenAI：", "")
				// 			.replace("OpenAI:", "")
				// 			.replace(this.userId + ":", "")
				// 			.replace(this.userId + "：", "")
				// 			.replace(/^\n|\n$/g, "")
				// 		this.msgList.push({
				// 			"msg": text,
				// 			"my": false
				// 		})
				// 		this.msgContent += ("OpenAI:" + this.msg + "\n")
				// 		this.msgLoad = false
				// 	}
				// })

				// openai.createCompletion({
				// 	model: "text-davinci-003",
				// 	prompt: this.msgContent,
				// 	max_tokens: 2048,
				// 	user: this.userId + ""
				// }).then(completion => {
				// 	console.log(completion)

				// });
			},

			hideKey() {
				uni.hideKeyboard()
			},
		}
	}
</script>

<style>
	.wrapper {
		height: auto !important;
	}

	.bottom-dh-char {
		background-color: #f9f9f9;
		width: 100%;
		height: 110rpx;
	}

	.center-box {
		width: 720rpx;
		padding-left: 25rpx;
	}

	.btn {
		height: 90rpx;
		width: 20%;
	}

	.flex-row-start {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}

	.hui-box {
		width: 750rpx;
		height: 100%;

	}

	.dh-input {
		width: 75%;
		height: 90rpx;
		border-radius: 100rpx;
		padding-left: 40rpx;
		margin-left: 20rpx;
		background-color: #FFFFFF;
	}

	.box-normal {
		width: 750rpx;
		height: 180px;
		background-color: #FFFFFF;
	}

	.tb-text view {
		font-size: 65rpx;
	}

	.tb-text text {
		font-size: 25rpx;
		color: #737373;
	}

	.chat-img {
		border-radius: 50%;
		width: 100rpx;
		height: 100rpx;
		background-color: #f7f7f7;
	}

	.padding-chat {
		padding: 17rpx 20rpx;
	}

	.tb-nv {
		width: 50rpx;
		height: 50rpx;
	}
</style>
