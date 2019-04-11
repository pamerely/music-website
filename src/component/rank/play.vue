<template >
	<main class="main">
		<v-header :title='title' :search="true"></v-header>
		<section >
			<div class="pic">
				<img src="../../assets/images/recommend/2342328483.jpg"/>
			</div>
			<div class="words">
				<ul>
					<li v-for="(v,i) in this.$store.state.list1" :key="i">{{v}}</li>
				</ul>
			</div>
			<p class="play-p">
				<!--进度条-->
				<span>{{this.$store.state.time}}</span>
				<mt-range
				
				  :min="0"
				  :max="5"
				  :step="1"
				  :bar-height="5">
				</mt-range>
				<span>{{this.$store.state.b}}</span>
			</p>
			<ol>
				<!--上一首-->
				<li>
					<img src="../../assets/images/recommend/bluepre.png" @click="pre()"/>
				</li>
				<!--播放暂停-->
				<li @click="play()">
					<div v-html="html">
						
					</div>
					<img v-if="this.$store.state.show" src="../../assets/images/recommend/blueplay.png" @click="play1()"/>
					<img v-else src="../../assets/images/audio/bluestop.png" @click="stop()"/>
				</li>
				<!--下一首-->
				<li>
					<img src="../../assets/images/recommend/bluenext.png" @click="next()"/>
					
				</li>
			</ol>
			<footer @click="aa()">
				<img src="../../assets/images/recommend/downBtn.png" />
				免费下载这首歌
			</footer>
		</section>
	</main>
</template>

<script >
	
	import Vue from 'vue'
	import head from '../other/head.vue'
	import { Range } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	Vue.component(Range.name, Range);
	var timer1
	var num=0;
	
	export default{
		data(){
			return{
				title:'说散就散',
				html:`<audio id="audio1" >
							<source src="/src/assets/images/video/shuosanjiushan .mp3" ></source>
						</audio>`
			
			}
		},
		components:{
			'v-header':head
		},
		methods:{
			//控制播放暂停图片的切换
			play(){
				this.$store.commit('play')
			},
			//下载
			aa(){
				MessageBox('暂不支持下载', '请移步APP');
			},
			//播放
			play1(){
				var audio =document.getElementById('audio1');
			    var circle = document.getElementsByClassName('mt-range-thumb');
				var progressBar = document.getElementsByClassName('mt-range-progress');
				var ul = document.getElementsByTagName('ul')
				audio.play()
				this.$store.commit('playTime')
				timer1=setInterval(function () {            
	            var ProcessNow = (audio.currentTime / audio.duration) * 260;
	            circle[0].style.left=ProcessNow+'px';
        		progressBar[0].style.width=ProcessNow+'px';
        		ul[1].style.top=-parseInt(ProcessNow)*7+'px'
	            }, 1000);
			},
			//暂停
			stop(){
				var audio =document.getElementById('audio1');
				audio.pause();
				this.$store.commit('stopTime');
				clearInterval(timer1)
			},
			//上一首
			pre(){
				clearInterval(timer1)
				this.$store.commit('stopTime');
				this.src=this.$store.state.mp3
				var audio =document.getElementById('audio1');				
				audio.pause();				
				if(num<=0){
					num=12;
					num--
				}else{
					num--
				}
				this.html=`<audio id="audio1" autoplay>
							<source src="${this.src[num]}"></source>
						</audio>`			
				this.$store.commit('show')
				this.$store.commit('playTime')

			},
			//下一首
			next(){
				clearInterval(timer1)

				this.$store.commit('stopTime');
				this.src=this.$store.state.mp3
				var audio =document.getElementById('audio');				
				audio.pause();				
				if(num<this.src.length-1){
					num++
				}else{
					num=0
				}
				this.html=`<audio id="audio1" autoplay>
							<source src="${this.src[num]}"></source>
						</audio>`			
				this.$store.commit('show')
				this.$store.commit('playTime')


			}
		}
		
	}
</script>
<style scoped>
	.main{
		
		position: relative;
		background: #FFFFFF;
		overflow: hidden;
		z-index: 7;
	}
	section{
		width: 100%;
		position: relative;
		overflow: hidden;
	}
	.pic{
	    width: 129px;
	    height: 129px;
	    overflow: hidden;
	    border-radius: 129px;
	    margin: 30px auto;
	    margin-top: 60px;
	    margin-bottom: 10px;
	}
	.pic>img{
		width: 100%;
	}
	.words{
		width: 100%;
	    height: 280px;
	    overflow: hidden;
	}
	ul{
	    width: 100%;
	    margin: 0 auto;
	    text-align: center;
	    font: 14px/28px "微软雅黑";
	    color: #000;
	    position: relative;
	    top: 0px;
	    transition: all 2s ease-in;
	}
	ul>li{
		text-align: center;
	}
	.play-p{
		text-align: center;
		margin-top: 1rem;
	}
	ol{
	    height: 35px;
	    overflow: hidden;
	    width: 70%;
	    padding: 0 15%;
	    display: flex;
	    margin-top: 1rem;
	}
	ol>li{
		flex: 1;
		text-align: center;
	}
	ol>li>img{
		width: 30px;
		height: 30px;
	}
	ol>li>img:nth-of-type(2){
		width: 35px;
		height: 35px;
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
        font: 15px/45px "微软雅黑";
	    text-align: center;
	    line-height: 45px;
	}
	footer>img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
</style>