<template>
	<section>
		<ul>
			<li v-for="(v,i) in list" :key="i">
				<div class="sing-con">
					<p class="one">
						<img v-if="show" src="../../assets/images/recommend/singDt.png" />
							{{v.songTitle}}
						<span>
							<img src="../../assets/images/recommend/singWs.png" />
						</span>
					</p>
					<p class="two">{{v.singer}}</p>
				</div>
				
				<a>
					<img src="../../assets/images/recommend/singDom.png" />
				</a>
				<a>
					<img :src="v.src" />
				</a>
			</li>
		</ul>
		
	</section>
</template>

<script >
	
	export default{
		data(){
			return{
				show:false
			}
		},
		props:['list']
	}
</script>
<style scoped>
	section{
		width:100%;
	}
	section>ul{
	    width: 92%;
	    margin: 0 auto;
	    overflow: hidden;
	}
	section>ul>li{
	    width: 100%;
	    height: 40px;
	    overflow: hidden;
	    border-bottom: 1px solid #dfdfdf;
	    padding: 10px 0;
	}
	.sing-con{
	    width: 75%;
	    height: 40px;
	    overflow: hidden;
	    float: left;
	}
	li>a{
	    width: 20px;
	    height: 20px;
	    float: right;
	    padding: 10px 8px;
	    overflow: hidden;
	}
	li>a>img{
		width: 100%;
	}
	.one{
		width: 100%;
		height: 20px;
		overflow: hidden;
		 text-overflow: ellipsis;
	    white-space: nowrap;
	    font: 16px/20px "微软雅黑";
    	color: #000;
    	position: relative;
	}
	.two{
	    width: 100%;
	    height: 20px;
	    font: 12px/24px "微软雅黑";
	    color: #636363;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.one>span{
	    width: 30px;
	    height: 18px;
	    position: absolute;
	    z-index: 3;
	    top: 3px;
	    margin-left: 5px;
	}
	.one>span>img{
		width:100%;
	}
</style>