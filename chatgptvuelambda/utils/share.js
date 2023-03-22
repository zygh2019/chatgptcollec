import http from '../api/home'
export default {
	onShareAppMessage: function() {
		http.shareNumber({
			id: 1
		}).then((res) => {
			console.log(res);
		})
		return {
			title: '人工智能AI对话，给你一个不一样的体验',
			success: (e) => {

			}
		};
	},
	onShareTimeline: function() {
		return {
			title: '人工智能AI对话，给你一个不一样的体验',
			success: function(e) {
				console.log(e);
			}
		};
	},
}
