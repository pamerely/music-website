<template>
	<main class="main">
		<p></p>
		<scroll class="mvCon">
		<ul class="clear">
			<li v-for="(v,i) in list" :key="i">
				<router-link to="/marvel">
					<img :src="v.src" />
					<p>{{v.con}}</p>
				</router-link>
			</li>
		</ul>
		</scroll>
	</main>
</template>

<script >
	import scroll from '../../base/scroll/scroll'
	export default{
		data(){
			return{
				list:[],
				
			}
		},
		mounted(){
			this.$http.get('./src/assets/js/data.json')
			.then((res)=>{
				this.list=res.data.list3
			})
		},
		components:{
			scroll
		}
	}
</script>
<style scoped>
	

	.main{
		margin-top: 6rem;
		margin-bottom: 4.3rem;
		width: 100%;
	}
	.main>p{
		height: 1.3rem;
	}
	.mvCon>ul{
	    width: 103%;
	    padding: 0 3%;
	    overflow: hidden;
	}
	.mvCon>ul>li{
	    width: 23%;
	    overflow: hidden;
	    margin: 0 9% .62rem 1%;
	    float: left;
	    cursor: pointer;
	}
	.main img{
		width: 100%;
	}
	.mvCon>ul>li p{
		color: #000000;
		height: 40px;
	}
	.mvCon{
		position:fixed;
		top: 6.3rem;
		bottom:0;
		height: calc(100% - 95px);
		overflow: hidden;
		width: 100%;
	}
</style>