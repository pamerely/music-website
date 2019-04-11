<template>
	<main class="main">
		<v-head :title='title' :search="true"></v-head>
		<div class="head">
			<video height="200px" controls>
				<source src="../../assets/images/video/my-Boo.mp4"> </source>
			</video>
		</div>
		<p class="clear p1">
			<img src="../../assets/images/recommend/hsmvbtn.png" />
			<img src="../../assets/images/recommend/mvdownbtn.png" />
		</p>
		<p class="font">相关推荐</p>
		<ul class="clear">
			<li v-for="(v,i) in list1" :key="i">
				<img :src="v.src"  class="mv-pic"/>
				<span>
					<router-link to="/mv-play">
						<img src="../../assets/images/recommend/playHover.png" />
					</router-link>
				</span>
				<span>{{v.con}}</span>
			</li>
		</ul>
		<footer>
			
              安装APP观看更多高清 
              <img src="../../assets/images/recommend/downLoadRi.png" />
		</footer>
	</main>
</template>

<script >

	import head from './head.vue'
	export default{
		components:{
			'v-head':head
		},
		data(){
			return{
				title:'My Boo-周汤豪',
				list1:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/js/data.json')
			.then((res)=>{
				this.list1=res.data.list1
			})
		}
	}
</script>
<style scoped>
	.main{
		position: relative;
		
		overflow: hidden;
		background: #FFFFFF;
		z-index: 3;
	}
	.head{
	    width: 100%;
	    overflow: hidden;
	    position: relative;
	    margin-top: 50px;
	    height: 200px;
	}
	.p1{
		width: 92%;
	    height: 45px;
	    padding: 0 4%;
	    border-bottom: 1px solid darkgray;
	}
	.p1>img{
		width: 34px;
		height: 34px;
		margin-top: 5px;
	}
	.p1>img:nth-of-type(1){
		float: left;
	}
	.p1>img:nth-of-type(2){
		float: right;
	}
	ul{
    	width: 108%;
    	padding: 3%;
    	overflow: hidden;
    }
    ul>li{
	    width: 39%;
	    position: relative;
	    float: left;
	    margin: 0 11% .62rem 0;
	    overflow: hidden;
    }
    ul .mv-pic{
    	width: 97%;
    }
    ul span img{
	    width: 26px;
	    height: 26px;
	    position: absolute;
	    top: 30%;
	    left: 49%;
	    margin: -12px 0 0 -12px;
    }
   	ul span:nth-of-type(2){
	    width: 100%;
	    font: 1rem/ 1.25rem "微软雅黑";
	    color: #000;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    height: 40px
    }
    footer{
		height: 45px;
	    overflow: hidden;
	    width: 94%;
	    padding: 0 3%;
	    background: #46b4e6;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    z-index: 99;
	    color: #FFFFFF;
        font: 18px/45px "微软雅黑";
	    text-align: center;
	    line-height: 45px;
	}
	footer>img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
	video{
		width: 100%;
	}
</style>