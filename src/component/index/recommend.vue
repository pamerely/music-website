<template>
	<main id="my">
		<!--轮播图-->
		
		<mt-swipe :auto="3000">
			<mt-swipe-item v-for="(v, i) in slider" :key="i">
		  	<a :href="v.linkUrl">
		  		<img v-lazy="v.picUrl"/>
	  		</a>
		  </mt-swipe-item>


		  <!-- <mt-swipe-item>
		  	<router-link to="/rank-hot">
		  		<img src="../../assets/images/recommend/1542088041433_.jpg"/>
	  		</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/rank-hot">
		  		<img src="../../assets/images/recommend/1480909297444_.jpg"/>
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/audio">
		  		<img src="../../assets/images/recommend/1482312358874_.jpg"/>
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  		<img src="../../assets/images/recommend/1482482412398_.jpg"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/singerlist-play">
		  		<img src="../../assets/images/recommend/1542014005419_.jpg"/>
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/rank-hot">
		  		<img src="../../assets/images/recommend/1542016577165_.jpg"/>
		  	</router-link>
		  </mt-swipe-item> -->
		</mt-swipe>
		
		<!--每日新歌-->
		
		<p class="font">每日新歌</p>
		<div class="newsong">
			<p v-for="(v,i) in src" :key="i">
				<img src="../../assets/images/recommend/imgBg.png" />
				<span>
					<router-link to="/rank-hot">
						<img :src="v" />
					</router-link>
				</span>
			</p>
			
		</div>
		
		<!--歌单推荐-->
		
		<p class="font">歌单推荐</p>
		<div class="recom-song clear">
			<div v-for="(v,i) in src1" :key="i">
					<router-link to="/rank-hot">
						<img :src="v.src" />
						<p>{{v.con}}</p>
					</router-link>
			</div>
			
		</div>
		
		<!--精彩节目-->
		
		<p class="font">精彩节目</p>
		<div class="recom-song clear">
			<div v-for="(v,i) in src2" :key="i">
					<router-link to="/rank-hot">
						<img :src="v.src" />
						<p>{{v.con}}</p>
					</router-link>
			</div>
			
		</div>
		
		<!--推荐主播-->
		
		<p class="font">推荐主播</p>
		<div class="recom-song clear">
			<div v-for="(v,i) in src3" :key="i">
				
						<img :src="v.src" />
						<p>{{v.con}}</p>
					
			</div>
			
		</div>
		
		<!--热门分类-->
		
		<p class="font">热门分类</p>
		<div class="recom-song clear">
			<div v-for="(v,i) in src4" class="hot" :key="i">
					<router-link to="/rank-hot">
						<p class="hotBox">{{v}}</p>
					</router-link>
			</div>
			
		</div>
			
		<!--最新MV-->
		
		<p class="font">最新MV</p>
		<div class="newmv clear">
			<p v-for="(v,i) in src5" :key="i">
				<img v-lazy="v.picUrl"  class="mv-pic"/>
				<span>
					<router-link to="/mv-play">
						<img src="../../assets/images/recommend/playHover.png" />
					</router-link>
				</span>
				<span>{{v.Ftitle}}</span>
			</p>
			
		</div>
		
	</main>
		
		
</template>

<script >
	import {getRecommend, getDiscList} from '../../api/getRecommend.js'
	import {ERR_OK} from '../../api/config.js'
	export default{
		created(){
			this._getRecommend();
			
		},
		methods:{
			_getRecommend(){
				getRecommend().then((res)=>{
					if(res.code===ERR_OK){
						// console.log(res.data)
						// 轮播图
						this.slider = res.data.slider;
						// 最新MV
						this.src5 = res.data.radioList;
	
					}
				})
			},
			_getDiscList(){
				getDiscList().then((res)=>{
					if(res.code===ERR_OK){
						console.log(res.data)
					}
				})
			}
		},
		mounted(){
		
			this.$emit('send',this.$route.params.user)
		
		},
		data(){
			return{
				slider:[],
				src:["/src/assets/images/recommend/1426644406311_.jpg" ,
				"/src/assets/images/recommend/1426644430456_.jpg",
				"/src/assets/images/recommend/1426644445642_.jpg"],
				src1:[
					{
						src:'/src/assets/images/recommend/1533950060422_257659933b.jpg',
						con:'【怀旧】一人一首粤语经典（男声篇）'
				
					},
					{
						src:'/src/assets/images/recommend/1533892287124_441218533_700.jpg',
						con:'一入抖音深似海，从此腿抖不能改'
					
					},
					{
						src:'/src/assets/images/recommend/1533294815595_223778589_700.jpg',
						con:'【欧美男声】柔情大叔,最为致命～'
					
					},
					{
						src:'/src/assets/images/recommend/1533806512592_195724664b.jpg',
						con:'「华语」所谓失恋，就是突然听懂了所有情歌'
				
					},
					{
						src:'/src/assets/images/recommend/1534304652402_431441352b.jpg',
						con:'【电音】震撼心灵的超强音浪'
					
					},
					{
						src:'/src/assets/images/recommend/1534492533531_413836986b.jpg',
						con:'【轻音乐】渔舟唱晚，雁阵惊寒'

					}
				],
				src2:[
					{
						src:'/src/assets/images/recommend/1389668636029_131161167b.jpg',
						con:'酷我音乐调频'
					},
					{
						src:'/src/assets/images/recommend/1389668815807_131161167b.jpg',
						con:'吐小曹扒新闻'
					},
					{
						src:'/src/assets/images/recommend/1389668498635_131161167b.jpg',
						con:'《莫萱日记》音乐小品'
					}
				],
				src3:[
					{
						src:'/src/assets/images/recommend/1538980992139_22943993.jpg',
						con:'予曦，跳舞主播'
					},
					{
						src:'/src/assets/images/recommend/1541428566417_22943993.jpg',
						con:'星月~子涵'
					},
					{
						src:'/src/assets/images/recommend/1541508874268_22943993.jpg',
						con:'音域╰❥小鱼儿'
					}
				],
				src4:['甜蜜','流行','网络','影视','DJ','经典'],
				src5:[
					// {
					// 	src:'/src/assets/images/recommend/3203571739.jpg',
					// 	con:'从无到有'
					// },
					// {
					// 	src:'/src/assets/images/recommend/1539856031203_.jpg',
					// 	con:'阿杜《我不该躲》-睽违6年的重磅回归'
					// }
				]
			}
		}
	}
</script>
<style>
	#my{
		width: 100%;
		padding-bottom: 3rem;
	}
	#my .mint-swipe-items-wrap{
		margin-top: 5.8rem;
		padding-bottom: 41%;
		height: 0px;
		width:100%;
	}

	#my .mint-swipe-items-wrap img{
		width: 100%;
	}
	#my .mint-swipe-indicators {
		position: absolute;
	    bottom: 10px;
	    left: 67%; 
	    -webkit-transform: translateX(0%); 
	    transform: translateX(0%); 

    }
    #my .mint-swipe-indicator{
    	background:rgba(210,210,210,0.35);
    	width:6px;
    	height:6px;
    	opacity: 1;
    	margin-right: 8px;
    }
    #my .newsong{
    	display: flex;
    	width: 100%;
    	padding: 0 3%;
    	
    }
    #my .newsong>p{
    	flex: 1;
    	position: relative;
    	margin-right: 7%;
    }
    #my .newsong>p>span{
    	position: absolute;
    	top: 6%;
    	left: 5%;
    }
    #my .newsong>p>img{
    	width: 100%;
    	height: 100%;
    }
    #my .newsong>p>span img{
    	width: 88px;
    	height: 87px;
    }
    #my .recom-song{
    	width: 100%;
    	padding: 0 3% 0;
    }
    
    #my .recom-song>div{
	    width: 23%;
	    overflow: hidden;
	    margin: 0 9% .62rem 1%;
	    float: left;
	    cursor: pointer;
    }
    #my .recom-song img{
    	width: 100%;
    	padding-bottom: .31rem;
    }
    #my .recom-song p{
	    width: 100%;
		font: 1rem/ 1.25rem "微软雅黑";
		color: #000;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 40px;
    }
    #my .recom-song>.hot{
	 	width: 26%;
	    margin: 0 6% .37rem 0;
	 }
	#my .recom-song .hotBox{
		width: 96%;
	    border: 1px solid #d0e3ee;
	    height: 1.68rem;
	    line-height: 1.68rem;
	    background: #fff;
	    font: 1rem/ 1.68rem "微软雅黑";
	    color: #333;
	    text-align: center;
	    margin: 0 6% .37rem 0;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
    #my .newmv{
    	width: 108%;
    	padding: 0px 3%;
    	overflow: hidden;
    }
    #my .newmv>p{
	    width: 43%;
	    position: relative;
	    float: left;
	    margin: 0 2% .62rem 0;
	    overflow: hidden;
    }
    #my .newmv .mv-pic{
    	width:100%;
			height:7rem;
			
    }
    #my .newmv span img{
	    width: 26px;
	    height: 26px;
	    position: absolute;
	    top: 30%;
	    left: 49%;
	    margin: -12px 0 0 -12px;
    }
    #my .newmv span:nth-of-type(2){
	    width: 100%;
	    font: 1rem/ 1.25rem "微软雅黑";
	    color: #000;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    height: 40px
    }
</style>