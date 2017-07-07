<template>
	<div class="enter">
		<form action="" method="post">
			
		<div class="input1">
			<input type="text" placeholder="手机号" pattern="^1[3|4|5|6|8]\d{9}$"/>
			<br />
			<label ></label>
		</div>
		<div class="input2">
			<input type="password" placeholder="密码"/>
			<br />
			<label></label>
		</div>
		<div class="verify">
			<p>请点击下方图片，将它们翻转到正确方向
				<a href="#">换一组</a>
			</p>
			<ul>
				<li v-for="i in imgs">
					<img :style="'transform: rotate('+i.num*90+'deg);'" @click="i.num+=1" :src="i.img" />
				</li>
			</ul>
		</div>
		<div class="go-enter">
			<input type="submit" />
		</div>
		</form>
	</div>
</template>

<style>
	.enter {
		width: 100%;
	}
	
	.input1,
	.input2 {
		text-align: center;
	}
	
	.input1 input,
	.input2 input {
		width: 90%;
		height: 1.066666rem;
		background: #f2f2f2;
		border: none;
		border-radius: 0.133333rem;
		font-size: 0.4rem;
		text-indent: 0.266666rem;
		outline: none;
	}
	
	.input2 {
		margin-top: 0.266666rem;
	}
	
	.verify {
		width: 92%;
		margin: 0 auto;
		/*display: none;*/
	}
	
	.verify p {
		font-size: 0.32rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin: 0.266666rem 0;
	}
	
	.verify a {
		color: #f36;
		margin-right: 0.133333rem;
		text-decoration: underline;
	}
	
	.verify ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	
	.verify ul li {
		width: 25%;
		margin: 0 0.08rem;
	}
	
	.verify ul li img {
		width: 100%;
		transition: transform 0.5s;
		margin: 0 auto;
		transform: rotate(0deg);
	}
	
	.go-enter {
		width: 100%;
	}
	
	.go-enter input {
		width: 90%;
		margin: 0.266666rem auto;
		height: 0.933333rem;
		font-size: 0.4rem;
		display: block;
		border: none;
		border-radius: 0.133333rem;
		background: #ff5777;
	}
</style>

<script>
//	var myRules = {
//			phone: {
//				test: /^1[3|4|5|7|8]\d{9}$/,
//				message: ""
//			},
//			pwd:{
//				test:
//					/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/,
//					message:""
//				
//			}
//	}
//	

	export default {
		data() {
			return {
//				username: "",
//				pwd: "",
				imgs: [{
						img: '/static/imgs/1.gif',
						num: 0
					},
					{
						img: '/static/imgs/2.gif',
						num: 0
					},
					{
						img: '/static/imgs/3.gif',
						num: 0
					},
					{
						img: '/static/imgs/4.gif',
						num: 0
					}
				]
	
			}
		}
//		methods: {
//			submit() {
//				if(this.$verify.check()) {
//	//							alert('验证成功')
//				}
//			}
//		},
//		verify: {
//			username: [
//				"required",
//				{
//					test(val) {
//						if(myRules.phone.test) {
//							return false;
//						}
//						return true;
//					},
//					message: "输入不合法"
//				}
//			],
//			pwd: [
//				"required",
//				{
//					test(val) {
//						if(myRules.pwd.test) {
//							return false;
//						}
//						
//						return true;
//					},
//					message: "输入不合法"
//				}
//			]
//		},
//		computed: {
//			verifyError() {
//				return this.$verify.$errors;
//			}
//		}
	}
</script>