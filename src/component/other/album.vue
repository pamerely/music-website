<template>
		<section class="mid">
			<ul>
				<li v-for="(v,i) in album" :key="i">
					<router-link to="/singerlist-play">
						<img :src="v.src"/>
						<div>
							<p>{{v.name}}</p>
							<p>共{{v.actor}}首歌曲</p>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
</template>

<script >
	export default{
		props:['album']
		
	}
</script>
<style scoped>

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