<template>
	<main class="main">
		<v-header :title='title'></v-header>
		<v-con :mvlist="mvlist"></v-con>
	</main>
</template>

<script >
	import head from '../other/head.vue'
	import mvlist from '../other/mvlist.vue'
	export default{
		components:{
			'v-header':head,
			'v-con':mvlist
		},
		data(){
			return{
				title:'华语',
				mvlist:[
					{
						src:'/src/assets/images/MV/1128927958.jpg',
						name:'My Boo',
						actor:'周汤豪'
					},
					{
						src:'/src/assets/images/MV/263102075.jpg',
						name:'体面-(电影《前任3：再见前任》插曲)',
						actor:'于文文'
					},
					{
						src:'/src/assets/images/MV/860390913.jpg',
						name:'寄明月',
						actor:'SING女团'
					},
					{
						src:'/src/assets/images/MV/2790828319.jpg',
						name:'孤单的人晚回家',
						actor:'李行亮'
					},
					{
						src:'/src/assets/images/MV/1191942881.jpg',
						name:'光年之外-(电影《太空旅客》的中文主题曲)',
						actor:'邓紫棋'
					},
					
					{
						src:'/src/assets/images/MV/1535426462.jpg',
						name:'美丽的神话-(电影《功夫瑜伽》主题曲)',
						actor:'成龙&MIC男团'
					},
					{
						src:'/src/assets/images/MV/3798981375.jpg',
						name:'有我在-(电影《爸爸的3次婚礼》主题曲)',
						actor:'关喆'
					},
					{
						src:'/src/assets/images/MV/3743114630.jpg',
						name:'我的猫',
						actor:'吉克隽逸'
					},
					{
						src:'/src/assets/images/MV/3780621245.jpg',
						name:'若只如初见 (电视剧《青云志》陆雪琪人物暖心曲)',
						actor:'杨紫'
					},
					{
						src:'/src/assets/images/MV/2794419148.jpg',
						name:'人生超幽默',
						actor:'吴克群&莫安琪'
					},
					{
						src:'/src/assets/images/MV/2609315148.jpg',
						name:'大梦想家',
						actor:'TFboys'
					},
					{
						src:'/src/assets/images/MV/263102075.jpg',
						name:'体面-(电影《前任3：再见前任》插曲)',
						actor:'于文文'
					},
					{
						src:'/src/assets/images/MV/263102075.jpg',
						name:'体面-(电影《前任3：再见前任》插曲)',
						actor:'于文文'
					},
					{
						src:'/src/assets/images/MV/1776968099.jpg',
						name:'决绝的信仰-(电影《星球大战外传：侠盗一号》推广曲)',
						actor:'萧敬腾'
					},
					{
						src:'/src/assets/images/MV/1315053168.jpg',
						name:'Twins&古巨基&李克勤&林峯&陈伟霆&容祖儿&谢霆锋',
						actor:'团圆饭'
					},
					{
						src:'/src/assets/images/MV/3279638184.jpg',
						name:'yong',
						actor:'TFboys'
					}
				]
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
	
</style>