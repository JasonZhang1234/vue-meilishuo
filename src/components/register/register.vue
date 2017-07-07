<template>
	<div class="register">
		<div class="register-header">
			<router-link to="home"><img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png" /></router-link>
			<div class="car-name">注册</div>
			<router-link to="home"><div class="tohome">首页</div></router-link>
		</div>
		<div class="register-main">
			<div class="register-address">
				<span class="register-address-name">国家与地区</span>
				<span class="register-address-china">中国</span>
			</div>
			<div class="register-main-phone">
				<span>+86</span>
				<div class="register-main-phoneNum">
					<input type="number" v-model="userphone"  placeholder="手机号"/>
					<label ></label>
				</div>
			</div>
			<div class="register-main-verify">
				<input type="text" name="usermessage" placeholder="请输入短信验证码"/>
				<span>获取验证码</span>
			</div>
			<button class="zhucebtn" @click='submit'>立即注册</button>
			<p class="warning">* 注册代表同意《美丽说网络服务使用协议》</p>
		</div>
	</div>
</template>


<style scoped>
	
	.register-header {
		width: 100%;
		height:1.28rem ;
		display: flex;
		padding: 0 0.4rem;
		justify-content: space-between;
		align-items: center;
		font-size: 0.5rem;
		color: #3F2A20;
		border-bottom: 0.04rem solid #f0f0f0;
	}
	.register-header img{
		width: 0.34rem;
		height: 0.486666rem;
	}
	.register-main{
		padding: 0 0.4rem;
		position: absolute;
		z-index: 10;
	}
	.register-address{
		padding: 0 0.6rem;
		height: 1.38rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 0.04rem solid #f0f0f0;
		font-size: 0.45rem;
	}
	.register-address-name{
		color: gray;
	}
	
	
	.register-main-phone{
		padding: 0 0.6rem;
		height: 1.38rem;
		display: flex;
		align-items: center;
		border-bottom: 0.04rem solid #f0f0f0;
		font-size: 0.45rem;
	}
	.register-main-phone span{
		width: 1.5rem;
	}
	.register-main-phoneNum{
		height: 0.8rem;
		border-left: 0.04rem solid #ccc;
		display:flex ;
		align-items: center;
		padding-left: 40px;
	}
	.register-main-phoneNum input{
		width: 3rem;
		height: 0.8rem;
		border: none;
		font-size: 0.45rem;
		padding-left: 0.266666rem;
	}
	.register-main-verify{
		padding: 0 0.6rem;
		height: 1.38rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 0.04rem solid #f0f0f0;
		font-size: 0.38rem;
	}
	.register-main-verify span{
		width: 2.666666rem;
		height: 0.8rem;
		border-left: 0.04rem solid #ccc;
		line-height: 0.8rem;
		text-align: center;
		font-size: 0.4rem;
	}
	.register-main-verify input{
		height: 0.4rem;
		font-size: 0.4rem;
		border: none;
		outline: none;
	}
	.zhucebtn{
		width: 100%;
		height: 1.3rem;
		line-height: 1.3rem;
		text-align: center;
		font-size: 0.45rem;
		color: #fff;
		background: #ff5777;
		margin-top: 0.4rem;
		border: none;
		outline: none;
		border-radius: 0.133333rem;
	}
	.warning{
		margin-top: 0.1rem;
		font-size: 0.38rem;
		color: gray;
	}
	label{
		font-size: .4rem;
		color: red;
	}
</style>



<script>
//	let myRules={
//		phone:{
//  		test:/^1[34578]\d{9}$/,
// 			 message:"电话号码格式不正确"
//		}
//	}
	export default{
		data(){
			return{
				userphone:''
			}
		},
//		methods:{
//			submit(){
//				if(this.$verify.check()){
//					
//				}
//			}
//		},
//		verify:{
//			userphone:[
//				"required",
//				{
//					test:function(val){
//						if(val.length<=11){
//							return false;
//						}
//						return true;
//					},
//					message:'手机号不合法'
//				}
//			]
//		},
//		computed:{
//			verifyError(){
//				return this.$verify.$errors;
//			}
//		}
	}
</script>