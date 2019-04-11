<template>
	<main class="main">
		<header >
			<a@click="back()" class="back">
				<img src="../../assets/images/recommend/back.png" />
			</a>
			<span>搜索</span>
		</header>
		<div class="search clear">
			<input type="text" placeholder="歌手/歌名/歌词"/>
			<a>搜索</a>
		</div>
		<section class="clear">
			<ul class="one">
				<li v-for="(v,i) in list">{{v}}</li>
			</ul>
			<ul class="two">
				<li v-for="(v,i) in list1">{{v}}</li>
			</ul>
		</section>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		data(){
			return{
				list:['我的童年 王源','张艺兴','由你音乐榜','赵丽颖','李荣浩 贝贝'],
				list1:['陈立农 我是你的','火箭少女101','你敢不敢再傻一次','朱一龙 榜样阅读','悟 吴亦凡']
			}
		}
	}
</script>
	<style scoped>
		.main{
			width: 100%;
			height: 100%;
			position: fixed;
			z-index: 3;
			background: url(../../assets/images/recommend/allBg.jpg);
		}
		.back{
			display: inline-block;
			height: 50px;
			vertical-align: middle;
		}
		header{
		    height: 50px;
		    background: #ededed;
		    overflow: hidden;
		    padding: 0 4%;
		    width: 92%;
		    z-index: 10;
		}
		header>a>img{
		    width: 30px;
		    height: 30px;
		    overflow: hidden;
		    margin: 8px 10px 0 0;

		}
		header>span{
		    font: 16px/50px "微软雅黑";
		    color: #010101;
		    font-weight: bold;
		    display: inline-block;
		    height: 50px;
		
		}
		.search{
		    width: 92%;
		    margin: 0 auto;
		    overflow: hidden;
		    margin-top: 1rem;
		}
		.search>input{
		    overflow: hidden;
		    font: 14px/30px "微软雅黑";
		    padding: 0 3%;
		    border-radius: 3px;	
	        width: 73%;
		    height: 30px;
		    border: 1px solid #a0a0a0;
		    border-radius: 3px;
		    background: #fff;
		    float: left;
			}
		.search>a{
		    width: 50px;
		    height: 32px;
		    background: #46b4e6;
		    font: 14px/32px "微软雅黑";
		    color: #fff;
		    border-radius: 3px;
		    float: right;
		    text-align: center;
		}
		section{
			width: 80%;
			margin: 2rem auto;
		}
		.one{
			float: left;
			width: 45%;
		    text-align: right;
		    font: 14px/35px "微软雅黑";
		    color: #000;
		}
		.two{
			float: right;
			width: 45%;
			text-align: left;
		    font: 14px/35px "微软雅黑";
		    color: #000;
		}
	</style>
