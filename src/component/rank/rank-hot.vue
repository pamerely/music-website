<template>
	<main class="main">
		<aaa :title='title'  :search="true"></aaa>
		
		<div class="head">
			
			<img src="../../assets/images/recommend/1444901415971_.jpg" />
			<div class="head-con">
				<img src="../../assets/images/recommend/1444901415971_.jpg" />
				<p>
					<span>整合酷我人气最旺好听单曲</span>
					<a>
						<img src="../../assets/images/recommend/singPlay.png" />
					</a>
				</p>
			</div>
		</div>
		<v-list :list="list"></v-list>
	</main>
</template>

<script >

	import head from '../other/head.vue'
	import list from './list.vue'
	export default{
		data(){
			return{
				show:false,
				title:'酷我音乐榜',
				list:[]
				
				
			}
		},
		components:{
			'aaa':head,
			'v-list':list
		},
		mounted(){
			this.$http.get("./src/assets/js/data.json")
			.then((res)=>{
				this.list=res.data.list;
			})
		}
	}
</script>
<style scoped>
	.main{
		position: relative;
		
		overflow: hidden;
		background: #FFFFFF;
		z-index: 2;
	}
	.head{
	    width: 100%;
	    overflow: hidden;
	    position: relative;
	    margin-top: 50px;
	}
	.head>img{
	    width: 100%;
    	height: 130px;
    	display: block;
    	z-index: 8;
    	-webkit-filter: blur(10px);
	    -moz-filter: blur(10px);
	    -ms-filter: blur(10px);
	    filter: blur(10px);
	}
	.head-con{
	    height: 100%;
	    width: 92%;
	    padding: 0 4%;
	    overflow: hidden;
	    position: absolute;
	    left: 0;
	    top: 0;
	    z-index: 9;
	    opacity: 1.0;
	    background: rgba(0,0,0,0.6);
		
	}
	.head-con>img{
	    height: 90px;
	    width: 90px;
	    overflow: hidden;
	    float: left;
	    margin: 20px 10px 0 10px;
	    
	}
	.head-con>p{
		float: left;
		width: 60%;
		color: #FFFFFF;
	}
	.head-con>p>span{
	    width: 100%;
	    height: 60px;
	    float: left;
	    overflow: hidden;
	    font: 14px/20px "微软雅黑";
	    color: #fff;
	    padding-top: 2px;
	    margin-top: 20px;
	}
	.head-con>p>a{
	    width: 33px;
	    height: 33px;
	    float: right;
	    overflow: hidden;
	    margin-top: 3px;
	}
	.head-con>p>a>img{
		width: 100%;
	}
	
</style>