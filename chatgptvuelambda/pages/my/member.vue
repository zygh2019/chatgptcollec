<template>
	<view class="template-loading">
		<!-- 顶部自定义导航 -->
		<view slot="back" class='tn-custom-nav-bar__back' @click="goBack" :style="{marginTop: statusBarHeight}">
			<text class='icon tn-icon-left'></text>
		</view>

		<!-- 页面内容 -->
		<view class="bg-contaniner">
		</view>

		<view class="container-content hex-border">
			<view class="hexagons">
				<view class="hexagon"></view>
				<view class="hexagon"></view>
				<view class="hexagon"></view>
				<view class="hexagon"></view>
				<view class="hexagon"></view>
				<view class="hexagon"></view>
				<view class="hexagon"></view>
			</view>
		</view>
		<view style="position: fixed;bottom: 150rpx;margin-bottom: 35rpx;padding: 0 30rpx;width: 100%;">
			<scroll-view scroll-x>
				<view class="recharge">
					<view class="recharge-item" :class="current == index ? 'recharge-item-active': ''"
						v-for="(item, index) in vip_list" :key="index" :style="{marginLeft: !index ? '30rpx': ''}"
						@click="rechargeChange(index)">
						<view class="recharge-tag">
							<text class="recharge-tag-text">限时特价 送豪礼</text>
						</view>
						<text class="recharge-item-duration" style="color: #fff;">{{ item.vip_name }}</text>
						<view class="recharge-item-price">
							<text class="rmb">￥</text>
							<text class="recharge-item-price-text">{{ item.vip_price }}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="okmem" @click="updateNow">
			立即购买
		</view>
		<uni-pay ref="uniPay" height="70vh" return-url="/pages/order-detail/order-detail" logo="/static/logo.png"
			@success="onSuccess"></uni-pay>
	</view>
</template>

<script>
	export default {
		name: 'TemplateLoading',
		data() {
			return {
				current: 0,
				statusBarHeight: 20,
				vip_list: [],
				order_no: "",
				out_trade_no: "",
				description: "会员充值", // 支付描述
				type: "test",
			}
		},
		onLoad() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
			this.$http.vip_list().then((res) => {
				console.log(res);
				this.vip_list = res.data
			})
		},
		methods: {
			onSuccess(res) {
				if (res.user_order_success) {
					console.log(res);
					// 代表用户已付款，且你自己写的回调成功并正确执行了
					this.$http.wx_pay({
						type: 'suss',
						vip_month: this.vip_list[this.current].vip_month,
						is_open: this.vip_list[this.current].is_open
					}).then((res) => {
						console.log(res);
					})
				} else {
					this.$http.wx_pay({
						type: 'err',
						vip_month: this.vip_list[this.current].vip_month,
						is_open: this.vip_list[this.current].is_open
					}).then((res) => {
						console.log(res);
					})
					// 代表用户已付款，但你自己写的回调执行失败（通常是因为你的回调代码有问题）

				}
			},
			updateNow() {
				this.order_no = `test` + Date.now();
				this.out_trade_no = `${this.order_no}-1`;
				// 发起支付
				this.$refs.uniPay.createOrder({
					provider: 'wxpay', // 支付供应商
					total_fee: this.vip_list[this.current].vip_price * 100, // 支付金额，单位分 100 = 1元
					order_no: this.order_no, // 业务系统订单号（即你自己业务系统的订单表的订单号）
					out_trade_no: this.out_trade_no, // 插件支付单号
					description: this.description, // 支付描述
					type: this.type, // 支付回调类型
				});
			},
			rechargeChange(index) {
				this.current = index
			},
			goBack() {
				uni.navigateBack()
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/static/css/templatePage/custom_nav_bar.scss';
	@import '@/static/css/demo.scss';

	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 50rpx;
		height: 50rpx;
		position: relative;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.15);
		border-radius: 1000rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.5);
		color: #FFFFFF;
		font-size: 18px;
		position: fixed;
		margin-left: 20rpx;

		.icon {
			display: block;
			flex: 1;
			margin: auto;
			text-align: center;
		}

		&:before {
			content: " ";
			width: 1rpx;
			height: 110%;
			position: absolute;
			top: 22.5%;
			left: 0;
			right: 0;
			margin: auto;
			transform: scale(0.5);
			transform-origin: 0 0;
			pointer-events: none;
			box-sizing: border-box;
			opacity: 0.7;
			background-color: #FFFFFF;
		}
	}

	.recharge {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #fff;

		&-tag {
			position: absolute;
			top: -2rpx;
			left: -2rpx;
			width: 170rpx;
			height: 36rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			background-color: #F4B4C4;
			border-radius: 12rpx;
			// background-image: url('~@/static/tag.png');
			background-size: 100%;

			&-text {
				font-size: 20rpx;
				color: #FFFFFF;
				text-align: center;
			}
		}

		&-item {
			position: relative;
			padding: 40rpx 0;
			margin-left: 15rpx;
			width: 200rpx;
			flex-shrink: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			border: solid 2rpx #98e4f3;
			border-radius: 12rpx;

			&-active {
				border-color: #F4B4C4;
				background-color: #98e4f3;
				opacity: 0.6;
			}

			&-duration {
				margin-bottom: 30rpx;
				font-size: 26rpx;
				color: #1C1C1C;
			}

			&-price {
				margin-bottom: 20rpx;
				display: flex;
				flex-direction: row;
				align-items: baseline;

				&-text {
					font-size: 48rpx;
					color: #fff;
				}
			}

			&-des {
				font-size: 22rpx;
				color: #fff;
			}
		}
	}

	.okmem {
		width: 400rpx;
		height: 80rpx;
		position: fixed;
		bottom: 50rpx;
		left: calc(50% - 200rpx);
		text-align: center;
		line-height: 80rpx;
		border-radius: 40rpx;
		background-color: #98e4f3;
		color: #fff;
		font-weight: bold;
		font-size: 30rpx;
	}
</style>
