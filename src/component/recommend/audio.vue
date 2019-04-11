<template>
	<main>
		<div class="top"></div>
		<section class="main">
			<header class="head">
				<p></p>
			</header>
			<p class="mask"></p>
			<div class="con">
				<ul>
					<li class="clear" v-for="(v,i) in this.$store.state.data" :key="i">
						<router-link to="/audio-con" class="left">
							<img :src="v.src"  />
							<i></i>
							<span></span>
						</router-link>
						<div class="right">
							<p class="one">{{v.title}}</p>
							<p class="two">{{v.name}}</p>
							<p class="three" @click="aa()">
								<a>
									<i></i> 下载
									<span>（1351.3万次）</span>
								</a>
								
									<img src="../../assets/images/audio/mdshare.png" />
								
							</p>
							
						</div>
					</li>
				</ul>
				<footer>点击加载更多...</footer>
			</div>
		</section>
		
	</main> 
</template>

<script >
	import { MessageBox } from 'mint-ui';
	
	export default{
		methods:{
			aa(){
				MessageBox('暂不支持下载', '请移步APP');}
		},
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped>
	
	.top{
		position: fixed;
		background: #000000;
		width: 100%;
    	height: 100%;
		z-index: 5;
	}
	.main{
		position: relative;
		width: 100%;
    	height: 100%;
		z-index: 6;
		background: url(../../assets/images/audio/topBg.jpg) no-repeat;
		background-size: 100% 100%;
	}
	.head{
		width: 100%;
	    height: 17.43rem;
	    padding-top: 2rem;
	}
	.head>p{
	    width: 100%;
    	height: 17.43rem;
    	background: url(../../assets/images/audio/mdbgh52.png) no-repeat;
    	background-size:100%;
	}
	.mask{
	    position: fixed;
	    top: 19.2rem;
	    right: 0.22rem;
	    width: 4.35rem;
	    height: 4rem;
	    background: url(../../assets/images/audio/mdaskh5.png);
	    background-size: 100%;
	    z-index: 6;	
	}
	.con{
	    width: 100%;
    	margin-top: 1.9rem;
	}
	.con>ul{
	    width: 92%;
	    padding-bottom: 0.6rem;
	    margin: 0 auto;
	}
	.con li{
	    width: 100%;
    	margin-bottom: 1.9rem;
	}
	.left{
		width: 7.5rem;
		height: 7.5rem;
		position: relative;
		display: block;
		overflow: hidden;
		float: left;
	}
	.left>img{
        width: 7.5rem;
	    height: 7.5rem;
	    position: absolute;
	    top: 0.05rem;
	    left: 0.05rem;
	}
	.left>i{
	    position: absolute;
	    bottom: 0.05rem;
	    right: 0rem;
	    width: 1.7rem;
	    height: .6rem;
	    background: url(../../assets/images/audio/mdbj.png);
	    background-size: 100%;
	    z-index: 10;
	}
	.left>span{
	    position: absolute;
	    top: 0.03rem;
	    left: 0.03rem;
	    width: 7.6rem;
	    height: 7.6rem;
	    background: url(../../assets/images/audio/h5mTapeCover.png);
	    background-size: cover;
	    z-index: 9;
	}
	.right{
		width: 11.8rem;
	    margin-left: 1.4rem;
	    padding-top: 0.06rem;
	    float: left;
	}
	.right>p{
	    width: 90%;
	    line-height: 2rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	}
	.one{
	    color: #fff;
	    opacity: 0.8;
	    font-size: 1.36rem;
	    padding-top: 0.3rem;
	}
	.two{
	    color: #505050;
		font-size: 0.3rem;
	}
	.three i{
		background: url(../../assets/images/audio/mdbtnbjh5.png) no-repeat;
	    display: inline-block;
	    width: .65rem;
	    height: .8rem;
	    background-size: 100%;
	    vertical-align: middle;
	}
	.right .three{
	    
	    width: 100%;
	    margin-top: 1.1rem;
	    position: relative;
	}
	.three>a{
		width: 80%;
		display: block;
		height: 1.5rem;
	    line-height: 1.5rem;
	    border: 1px solid #b38e5d;
	    text-align: center;
	    color: #b38e5d;
	    font-size: 0.24rem;
	    
	}
	.three>img{
	    position: absolute;
	    top: 0;
	    right: 0.14rem;
	    width: 1.63rem;
	    height: 1.63rem;
	    background: url(http://image.kuwo.cn/mpage/html5/2016/orginal/mdshare.png);
	    background-size: 100%;
	}
	footer{
		text-align: center;
		font-size: 1rem;
		color: gray;
		font-weight: bold;
		font-family: "微软雅黑";
		margin-bottom: 3rem;
		cursor: pointer;
	}
</style>