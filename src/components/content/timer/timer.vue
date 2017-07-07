<template>
	<div id="timer">
		<p class="text"><i>－限时特惠距活动结束仅剩－</i></p>

		<p class="startimer">{{time}}</p>

	</div>

</template>

<style>
	#timer{
		height: 1.333333rem;
		background: white;
	}
	.text {
		font-size: 0.346666rem;
		text-align: center;
		font-size: 0.346666rem;
		font-weight: bold;
		height: 0.8rem;
		line-height: 0.8rem;
	}
	
	.startimer {
		width: 3rem;
		height: 0.45rem;
		line-height: 0.45rem;
		background: #000000;
		color: #FFFFFF;
		text-align: center;
		font-size: 0.346666rem;
		border-radius: 0.066666rem;
		margin-left: 3.5rem;
	}
</style>

<script>
	export default {
		data() {
			return {
				time: ''
			}
		},
		mounted() {		
			this.timeDown()
		},
		props: {
			endTime: {
				type: String
			}
		},
		methods: {
			timeDown() {
				const endTime = new Date(this.endTime)
				const nowTime = new Date();
				let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
				let h = this.formate(parseInt(leftTime / (60 * 60) % 24))
				let m = this.formate(parseInt(leftTime / 60 % 60))
				let s = this.formate(parseInt(leftTime % 60))
				let time = setInterval(() => {
					s--;
					if(s <= 0) {
						s = 59;
						m--;
						
						if(m <= 0) {
							m = 59;
							h--;
							if(h <= 0) {
								h = 0;
								m = 0;
								s = 0;
								this.time = `game over`
							}
						}
					}
					
					this.time = `${h}小时${m}分${s}秒`;
					
				}, 1000)
			},

			formate(time) {
				
				time = -time;
				if(time >= 10) {
					return time
				} else {
					return `0${time}`
				}
			}
		}
	}
</script>