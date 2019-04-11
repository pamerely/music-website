<template>
	<main>
		<div class="top"></div>
		<section class="main">
			<ul>
				<li class="clear">
					<div class="left">
						<img src="../../assets/images/audio/3663.jpg"  />
							<i></i>
							<span></span>
					</div>
					<div class="right">
						<h3>21</h3>
						<ol>
							<li>艺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人 ：Adele</li>
							<li>发行时间：2011</li>
							<li>发行公司：XL Recordings</li>
							<li>采 样 率  ：24bit/96khz</li>
						</ol>
					</div>
				</li>
				<li>
					<div class="clear album-top">
						<p>专辑介绍：</p>
						<span @click="show()">
							{{a}}
							<i :class="{rotate:spread}"></i>
						</span>
					</div>
					<p class="onep">
						《21》是英国女歌手阿黛尔·阿德金斯的第二张录音室专辑，标准版唱片共收录11首歌曲，于2011年1月24日由XL唱片公司发行，专辑的音乐总监和制作人由阿黛尔·阿德金斯、保罗·艾普沃斯等担任。 2012年2月，《21》获得第54届格莱美奖“年度专辑”、“最佳流行专辑”奖项。
					</p>
					<p v-if="spread">
						第二支单曲《Someone Like You》的创作灵感是阿黛尔·阿德金斯自身的一段破碎恋情，歌曲中讲述的是她慢慢接受并开始走出这段恋情。阿黛尔·阿德金斯在听说前男友结婚的消息后写下了这首歌曲，并用木吉他作为乐器完成了歌曲的初始版本，而歌曲的最终版本是以钢琴作为伴奏。
					</p>
				</li>
				<li>
					<table>
						<thead>
							<tr>
								<td>序号</td>
								<td>歌名</td>
								<td>时长</td>
								<td>下载</td>
							</tr>
						</thead>
						<tbody>
							
							<tr v-for="(v,i) in list" :key="i">
								<td>{{v.num}}</td>
								<td>{{v.name}}</td>
								<td>{{v.time}}</td>
								<td>
									<div class="download">
										<i></i>
										<span>下载</span>
										
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</li>
			</ul>
			<p class="tex">单曲尝鲜下载，全长专辑敬请期待</p>
			<div class="share">
				<img src="../../assets/images/audio/mdshare.png" />
				<span>分享</span>
			</div>
		</section>
		
	</main>
</template>

<script >
	export default{
		data(){
			return{
				spread:false,
				a:'展开',
				list:[
					{
						num:12,
						name:'Someone Like You',
						time:'04:45'
					}
				]
			}
		},
		methods:{
			show(){
				this.spread=!this.spread;
				if(this.spread==true){
					this.a='收起'
				}else{
					this.a='展开'
				}
				
			}
		}
	}
</script>
<style scoped>
	

	.top{
		position: fixed;
		background: #000000;
		width: 100%;
    	height: 100%;
		z-index: 5;
	}
	.main{
		position: relative;
		width: 100%;
    	height: 200%;
		z-index: 6;
		background: url(../../assets/images/audio/topBg.jpg) no-repeat;
		overflow: hidden;
	}
	.main>ul{
		width: 92%;
		margin: 2rem auto;
	}
	.main>ul>li{
		width:100%;
		margin-bottom: 2.5rem;
	}
	.left{
		width: 7.5rem;
		height: 7.5rem;
		position: relative;
		display: block;
		overflow: hidden;
		float: left;
	}
	.left>img{
        width: 7.5rem;
	    height: 7.5rem;
	    position: absolute;
	    top: 0.05rem;
	    left: 0.05rem;
	}
	.left>i{
	    position: absolute;
	    bottom: 0.05rem;
	    right: 0rem;
	    width: 2.2rem;
	    height: .9rem;
	    background: url(../../assets/images/audio/mdbj.png);
	    background-size: 100%;
	    z-index: 10;
	}
	.left>span{
	    position: absolute;
	    top: 0.03rem;
	    left: 0.03rem;
	    width: 7.6rem;
	    height: 7.6rem;
	    background: url(../../assets/images/audio/h5mTapeCover.png);
	    background-size: cover;
	    z-index: 9;
	}
	.right{
		float: right;
		color: #cdcdcd;
		margin-right: 3.7rem;
	}
	.right>ol{
		margin-top: 0.6rem;
	}
	.right li{
        font-size: 0.24rem;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow-x: hidden;
	    margin-top: 0.22rem;
	    color: #606060;
	    cursor: default;
		
	}
	.album-top{
		color: #cdcdcd;
	}
	.album-top>p{
		float: left;
	    font-weight: 400;
	    line-height: 100%;
	    font-size: 0.8rem;	    
	    width: 4.8rem;
	    cursor: default;
	}
	.album-top>span{
		float: right;
		font-size: 0.24rem;
		cursor: pointer;
	}
	.album-top>span>i{
		display: inline-block;
	    padding-left: 0.12rem;
	    width: 0.28rem;
	    height: 0.3rem;
		background: url(../../assets/images/audio/mTape_down_down.png) no-repeat;
		background-size: 100%;
	}
	li>p{
	    color: #606060;
	    font-size: 0.24rem;
	    padding-top: 0.08rem;
	    line-height: 1.44rem;
	    word-wrap: break-word;
	    word-break: break-all;
	    white-space: normal;
	}
	.onep{
	  	display:-webkit-box;
		-webkit-line-clamp:4;
		-webkit-box-orient:vertical;
		overflow:hidden;

	}
	.rotate{
		transform: rotateX(180deg);
	}
	table{
		width: 100%;
	}
	thead td{
		font-size: 0.8rem;
    	color: #cdcdcd;
    	text-align: center;
	}
	tbody td{
		color: #606060;
		font-size: 0.38rem;
		padding-top: 1.85rem;
		text-align: center;
	}
	.download{
		border: 1px solid #b38e5d;
		position: relative;
		text-align: center;
	    width: 3.8rem;
    	height:1.2rem;
    	right: -1.2rem;
	}
	.download>span{
	    color: #b38e5d;
	    font-size: 0.24rem;
	    display: inline-block;
	    text-align: center;
	    padding-left: .2rem;
	}
	.download i{
        background: url(../../assets/images/audio/mdbtnbjh5.png) no-repeat;
	    display: inline-block;
	    width: .65rem;
	    height: .8rem;
	    background-size: 100%;
	    vertical-align: middle;
	}
	.tex{
		padding-bottom: 1.6rem;
	    width: 100%;
	    text-align: center;
	    font-size: 0.20rem;
	    color: #606060;
	    margin-top: 2rem;
	    cursor: default;
	}
	.share{
		color: #cdcdcd;
		margin-bottom: 9rem;
		text-align: center;
	}
	.share>img{
	    width: 0.99rem;
    	height: 0.89rem;
	}
	.share>span{
	    font-size: 0.88rem;
	    color: #606060;
	    line-height: 0.88rem;
	    margin-left: 0.4rem;
	    padding-top: 1.5px;
	}
</style>