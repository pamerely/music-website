<template>
	<footer v-show="this.$store.state.footerShow">
		<!-- {{autoplay()}} -->
		<span>
			<router-link to="/play">
				<img src="../../assets/images/recommend/2342328483.jpg"/>
			</router-link>
		</span>
		<p>
			<span>说散就散</span>
			<!--播放时间-->
			<span class="two">{{this.$store.state.time}}-{{this.$store.state.b}}</span>
		</p>
		<div>
			<ul>
				<!--开始或者暂停播放-->
				<li @click="play2()">
					<div v-html="html">
						
					</div>
					<img v-if="this.$store.state.show" src="../../assets/images/recommend/newplay.png" @click="play1()"/>
					<img v-else src="../../assets/images/recommend/stop1.png" @click="stop()"/>
				</li>
				<!--下一首-->
				<li>
					<img src="../../assets/images/recommend/next1.png" @click="next()"/>
				</li>
				<li>
					<img src="../../assets/images/recommend/playlist.png"/>
				</li>
			</ul>
		</div>
		
	</footer>
</template>

<script >
	
	var timer
	var num = 0;
	export default{
		data(){
			return{
				src:[],
				html:`<audio id="audio" >
							<source src="/src/assets/images/video/shuosanjiushan .mp3" ></source>
						</audio>`
			}
		},
		methods:{
			play2(){
				this.$store.commit('play')
			},
			//开始播放
			play1(){   
				var audio =document.getElementById('audio');
				audio.play()   
		        this.$store.commit('playTime')
			},
			//暂停播放
			stop(){
				var audio =document.getElementById('audio');
				audio.pause();
				this.$store.commit('stopTime')
			},
			//下一首
			next(){
				this.src=this.$store.state.mp3
				var audio =document.getElementById('audio');				
				audio.pause();				
				if(num<this.src.length-1){
					num++
				}else{
					num=0
				}
				this.html=`<audio id="audio" autoplay>
							<source src="${this.src[num]}"></source>
						</audio>`			
				this.$store.commit('show')
				this.$store.commit('playTime')
			},
			//自动播放下一首
			autoplay(){	
				setInterval(function(){
					var audio =document.getElementById('audio');
					var a = this;
					a.src=a.$store.state.mp3
					console.log(a.$store.state.mp3)
					console.log(a.src)
// 					if(!audio.ended){
// 						a.src=a.$store.state.mp3
// 										
// 						audio.pause();				
// 						if(num<a.src.length-1){
// 							num++
// 						}else{
// 							num=0
// 						}
// 						a.html=`<audio id="audio" autoplay>
// 									<source src="${a.src[num]}"></source>
// 								</audio>`			
// 						a.$store.commit('show')
// 						a.$store.commit('playTime')
					// }
				},1000)
			}
		}
	}
	
</script>
<style scoped>
	footer{
		height: 3rem;
	    overflow: hidden;
	    width: 100%;
	    padding: 0 3%;
	    background: #46b4e6;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    z-index: 40;
	}
	footer>span{
	    width: 2.18rem;
	    height: 2.18rem;
	    float: left;
	    overflow: hidden;
	    margin: .32rem .62rem 0 0;
	}
	footer>span img{
		width:100%;
	}
	footer>p{
	    width: 35%;
	    height: 2.18rem;
	    float: left;
	    overflow: hidden;
	}
	footer>p>span{
	    width: 100%;
	    height: 1.56rem;
	    font: .75rem/ 2.0rem "微软雅黑";
	    color: #fff;
	    overflow: hidden;
	    display: block;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.two{
	    height: .62rem;
    	font: .62rem/ .7rem "微软雅黑";
	}
	footer>div{
		float: right;
		width: 40%;
	}
	footer>div>ul{
		display: flex;
		width: 100%;
	}li{
		flex: 1;
	    
	}
	li>img{
		width: 1.87rem;
    	height: 1.87rem;
    	margin-top: .6rem;
	}
</style>