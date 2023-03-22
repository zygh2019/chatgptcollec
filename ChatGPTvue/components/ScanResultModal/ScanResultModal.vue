<style lang="scss" scoped>
	@import "../../style/them";

	.dialog {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
		background: rgba(0, 0, 0, .5);

		.dialog-icon {
			top: 0;
			width: 190rpx;
			height: 156rpx;
		}

		.dialog-con {
			width: 100%;
			background: #fff;
			border-radius: 12rpx;
			padding: 130rpx 0rpx 41rpx 0rpx;
			text-align: center;
			overflow: auto;

			.dialog-text {
				margin-bottom: 65rpx;

				.dialog-text-tit {
					color: #FF5C53;
					font-size: 42rpx;
				}

				.dialog-text-desc {
					color: #303133;
					font-size: 30rpx;
					margin-top: 12rpx;
					text-align: center;
				}
			}

			.dialog-btn {
				font-size: 36rpx;
				color: #fff;
				text-align: center;
				background: $themColor;
				height: 90rpx;
				line-height: 90rpx;
				border-radius: 90rpx;
				margin-left: 57rpx;
				margin-right: 57rpx;

			}
		}
	}

	.dialog-container {
		padding-top: 66rpx;
		width: calc(100% - 150rpx);
		overflow: auto;
		visibility: auto;
	}
</style>

<template>
	<cover-view class="dialog" v-if="dialogParam.visible">
		<cover-view class="dialog-container center">
			<cover-view class="dialog-con">
				<cover-view class="dialog-text">
					<cover-view class="dialog-text-tit">
						{{dialogParam.titleType ? '恭喜您！' : '很抱歉！'}}
					</cover-view>
					<cover-view class="dialog-text-desc">
						{{dialogParam.descType | descText}}
					</cover-view>
				</cover-view>
				<cover-view class="dialog-btn" @click="close">
					我知道了
				</cover-view>
			</cover-view>

			<cover-view class="dialog-icon center-x">
				<cover-image class="center max-wh" mode="aspectFit" :src="('../../static/' + (dialogParam.iconType ? 'smiling-face' : 'cry-face') + '.png') | getPic"></cover-image>
			</cover-view>
		</cover-view>
	</cover-view>
</template>

<script>
	export default {
		props: ['dialogParam'],
		filters: {
			descText(val) {
				switch (val) {
					case 1:
						return '核销成功，可以在首页查看核销记录'
					case 2:
						return '该礼品券已核销，感谢您参与本次活动'
					case 3:
						return '该礼品券已过期，感谢您参与本次活动'
					case 4:
						return '商户还未绑定推广二维码'
					case 5:
						return '当前扫描核销码无效，请更换二维码'
				}


			}
		},
		onShow() {

		},
		created() {

		},
		data() {
			return {}
		},
		methods: {
			close() {
				this.$emit('close')
			},
		}
	}
</script>
