<template>
	<div class="QQdl">
		<div class="hd">
			<span></span>
			<h1>QQ登录</h1>
			<p>亿万用户已选择QQ帐号登录应用</p>
		</div>
		<div class="inp">
			<div>
				<input type="text" placeholder="QQ帐号/邮箱/手机号"/>
			</div>
			<div>
				<input type="password" placeholder="QQ密码"/>
			</div>
		</div>
		<div class="dl">
			<router-link to="home">
				<button>登录</button>
			</router-link>
		</div>
		<div class="title">
			<p>美丽说将获得以下权限:</p>
		</div>
		<div class="inp">
			<div>
				<p><span></span>访问你的详细资料(必选)</p>
			</div>
			<div class="col" v-show='arr'>
				<p><span></span>访问你的腾讯微博资料</p>
			</div>
			<div class="col" v-show='arr'>
				<p><span></span>分享内容到腾讯微博</p>
			</div>
			<div class="col" v-show='arr'>
				<p><span></span>获得你的微博好友信息</p>
			</div>
			<div class="col" v-show='arr'>
				<p><span></span>关注该网站认证空间</p>
			</div>
			<div class="col" v-show='arr'>
				<p><span></span>同步动态至QQ空间</p>
			</div>
			<div class="col" v-show='arr'>
				<p><span></span>获得空间相册内容</p>
			</div>
			<div class="col" v-show='arr'>
				<p><span></span>获取会员信息</p>
			</div>
			<div @click="fun">
				<p><span></span>查看全部</p>
			</div>
		</div>
		<div class="ft">
			<p>
				Copyright © 2010 - 2017 Tencent. All Rights Reserved.
			</p>
		</div>
	</div>
</template>

<style scoped>
	.QQdl .hd{
		position: relative;
		width: 94%;
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 2rem;
		line-height: 2rem;
	}
	.QQdl .hd span{
		display: inline-block;
		width: 1rem;
		height: 1.2rem;
		background: url(../../assets/imgs/QQ-dl.png) 0 -1.6rem no-repeat;
		background-size: 120%;
		margin-right: .2rem;
	}
	.QQdl .hd h1{
		font-weight: normal;
		font-size: .6rem;
	}
	.QQdl .hd p{
		position: absolute;
		right: 0;
		bottom: .2rem;
		height: .5rem;
		line-height: .5rem;
		color: #666;
		font-size: .3rem;
	}
	
	.QQdl .inp{
		background: white;
		width: 94%;
		margin: .1rem auto;
		border: .02rem solid #ccc;
		border-radius: .2rem;
	}
	.QQdl .inp div{
		height: 1.2rem;
		line-height: 1.2rem;
		border-top: .02rem solid #ccc;
		
	}
	.QQdl .inp div:first-child{
		border-top:none;
	}
	.QQdl .inp div input{
		margin-left: .3rem;
		width: 90%;
		height: .7rem;
		font-size: .5rem;
		border: none;
		outline: none;
	}
	.QQdl .inp div p{
		margin-left: .3rem;
		font-size: .4rem;
	}
	.QQdl .inp div p span{
		display: inline-block;
		height: .45rem;
		width: .45rem;
    	border-radius: 50%;
    	background-color: #a1a1a1;
		background-image: url(../../assets/imgs/QQ-dl.png);
		background-size: 240%;
    	background-position: .01rem -.03rem;
    	background-repeat: no-repeat;
    	margin-right: .2rem;
	}
	.QQdl .inp div:last-child p span{
		background-image: url(../../assets/imgs/QQ-dl.png);
		border: none;
		background-color: white;
		background-position: -.03rem -.5rem;
	}
	.QQdl .inp div:last-child p{
		width: 40%;
		margin: 0 auto;
		text-align: center;
	}
	.dl{
		margin-top: .7rem;
	}
	.dl button{
		width: 94%;
		margin: 0 auto;
		display: block;
		height: 1.3rem;
		border-radius: .2rem;
		background: -webkit-linear-gradient(top,#71c228,#75c92a);
		border: .02rem solid #40a217;
		font-size: .5rem;
		color: white;
	}
	
	.title{
		width: 92%;
		margin: 1.6rem auto .4rem;
	}
	.title p{
		color: #666;
		font-size: .4rem;
	}
	
	.ft{
		width: 80%;
		margin: 0 auto;
		text-align: center;
		margin-top: .6rem;
		line-height: .8rem;
		color: #666666;
		font-size: .3rem;
	}
	
	.QQdl .inp .col p span{
		background-color: #5cb232;
	}
</style>

<script>
	export default {
		data(){
			return {
				arr:false
			}
		},
		methods:{
			fun(){
				this.arr=!this.arr
			}
		},
		mounted(){
			
		}
	}
</script>