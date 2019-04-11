<template>
	<main class="main">
		<v-head :title="title" :search="true"></v-head>
		<v-album :album="album1"></v-album>
	</main>
</template>

<script >
	

	import head from './head.vue'
	import album from './album.vue'
	export default{
		data(){
			return{
				title:'华语男歌手',
				album1:[]
				
			}
		},
		components:{
			'v-head':head,
			'v-album':album
		},
		mounted(){
			this.$http.get('./src/assets/js/data.json')
			.then((res)=>{
				this.album1=res.data.album1
			})
			.catch((error)=>{
				console.log(error)
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
	section{
	    width: 100%;
	    overflow: hidden;
	    position: relative;
	    margin-top: 50px;
	}
	ul{
	    width: 92%;
	    margin: 0 auto;
	    overflow: hidden;
	}
	li{
	    height: 100px;
	    overflow: hidden;
	    border-bottom: 1px solid #e1e1e1;
	    padding: 0 5px;
	}
	li img{
	    width: 75px;
	    height: 75px;
	    float: left;
	    overflow: hidden;
	    border: 1px solid #87818a;
	    margin: 12px 10px 0 0;
	}
	li div{
	    width: 45%;
	    height: 75px;
	    float: left;
	    overflow: hidden;
	    margin-top: 13px;
	}
	p:nth-of-type(1){
	    width: 100%;
		height: 20px;
		font: 16px/20px "微软雅黑";
		font-weight: bold;
		overflow: hidden;
		margin-top: 18px;
	}
	p:nth-of-type(2){
		width: 100%;
	    height: 20px;
	    font: 12px/20px "微软雅黑";
	    overflow: hidden;
	    margin-top: 3px;
	    display: block;
	    color: #6c6c6c;
	}
	a{
		color: #000;
	}
</style>