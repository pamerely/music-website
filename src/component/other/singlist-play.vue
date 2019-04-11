<template>
	<main class='main'>
		<v-head :title="this.$store.state.title" :search="true"></v-head>
		<section class="middle">
			<div class="top">
				<img src="../../assets/images/singerlist/2461721588.jpg" />
				<p>
					<img src="../../assets/images/singerlist/2461721588.jpg" />
				</p>
			</div>
			<div class="tab clear">
				<ul>
					<li v-for="(v,i) in this.$store.state.arr" :class="{current:selected==i}" @click="change(i)" :key="i">{{v}}</li>
					
				</ul>
				<a>
					<img src="../../assets/images/recommend/singPlay.png" />
				</a>
			</div>
			<div class="tab-con">
				<v-list :list="list" v-if="selected==0"></v-list>
				<v-album :album="album" v-if="selected==1"></v-album>
				<v-mvlist :mvlist="mvlist" v-if="selected==2"></v-mvlist>
			</div>
		</section>
	</main>
</template>

<script >

	import head from './head.vue'
	import list from '../rank/list.vue'
	import mvlist from './mvlist.vue'
	import album from './album.vue'
	export default{
		data(){
			return {
				
				selected:0,
					list:[],
					mvlist:[],
					album:[]
					
			}
		},
		components:{
			'v-head':head,
			'v-list':list,
			'v-mvlist':mvlist,
			'v-album':album
		},
		methods:{
			change(a){
				this.selected=a
			}
		},
		mounted(){
			this.$http.get('./src/assets/js/data.json')
			.then((res)=>{
				console.log(res.data.album)
				this.list=res.data.list,
				this.mvlist=res.data.mvlist,
				this.album=res.data.album
			})
			.catch((error)=>{
				console.log(error)
			})
			.then(()=>{console.log('aa')})
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
	.middle{
	    width: 100%;
	    overflow: hidden;
	    position: relative;
	    margin-top: 50px;
	}
	.top{
		position:fixed;
		z-index: 4;
		width: 100%;
		height: 130px;
	}
	.top>img{
		width: 100%;
		filter: blur(10px);
		height: 100%;
	}
	.top>p{
	    height: 100%;
	    width: 92%;
	    padding: 0 4%;
	    overflow: hidden;
	    position: absolute;
	    left: 0;
	    top: 0;
	    opacity: 1.0;
	    background: rgba(0,0,0,0.6);
	}
	.top>p>img{
	    height: 90px;
	    width: 90px;
	    overflow: hidden;
	    display: block;
	    margin: 20px auto;
	}
	.tab{
		position: fixed;
		top: 180px;
	    width: 92%;
	    padding: 0 4%;
	    overflow: hidden;
	    height: 40px;
	    background: #343534;
	    z-index: 4;
	}
	.tab>ul{
		display: flex;
	    width: 67%;
	    height: 40px;
	    float: left;
	    overflow: hidden;
	    font: 14px/20px "微软雅黑";
	    color: #fff;
	    padding-top: 2px;
	}
	.tab>ul>li{
		flex: 1;
		text-align: center;
	    margin: 8px;
		font: 16px/20px "微软雅黑";
		   
	}
	.current{
		 border-bottom: 2px solid #fff;
	}
	.show{
		display: none;
	}
	.tab>a{
	    width: 33px;
	    height: 33px;
	    float: right;
	    overflow: hidden;
	    margin-top: 3px;
	}
	.tab>a>img{
		width: 100%;
	}
	.tab-con{
		margin-top: 170px;
		overflow: hidden;
		height: calc(100% - 220px);
		position: relative;
	}
	.mid{
		margin-top: 0px;
	}
</style>