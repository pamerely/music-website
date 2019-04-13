<template>
	<section>
		<scroll class="songList" :data="songList">
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
		</scroll>
		
	</section>
</template>

<script >
	import scroll from '../../base/scroll/scroll'
	import {getDiscList} from '../../api/getRecommend.js'
	import {ERR_OK} from '../../api/config.js'
import { setTimeout, clearTimeout } from 'timers';
	export default{
		data(){
			return{
				show:false,
				songList:[]
			}
		},
		props:['list'],
		components:{
			scroll
		},
		created(){
			this.timer = setTimeout(function(){
				this.songList = this.list
			}, 200)

		},
		destroyed(){
			clearTimeout(this.timer)
		},
		methods:{
			_getDiscList(){
				getDiscList().then((res)=>{
					if(res.code===ERR_OK){
						this.songList = res.data.list
					}
				})
			}
		},
		watch:{
			songList(){
				console.log(this.songList)
			}
		}
	}
</script>
<style scoped>
	section{
		width:100%;
		position:fixed;
		height: 100%;
	}
	section ul{
	    width: 92%;
	    margin: 0 auto;
	    overflow: hidden;
	}
	section ul>li{
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
	.songList{
		position: fixed;
		top:180px;
		bottom:0;
		height:calc(100% - 95px);
		overflow: hidden;
		width: 100%;
	}
</style>