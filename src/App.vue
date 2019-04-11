<template>
  <div id="app">
  
  	<header>

      <div class="head-top">

        <router-link :to="{name: headRouter, params:{user:headerTitle}}">
          {{headerTitle}}
        </router-link>
        <p>
          <router-link to="/search">
          <img src="./assets/images/recommend/seach.png" />
        </router-link>
        
        </p>
      </div>
      <nav class="head-nav">
        <ul>
          <li v-for="(v,i) in nav" :key="i">
            <router-link :to="v.router">{{v.con}}</router-link>
          </li>
      
        </ul>
      </nav>
   </header>
    <!-- <keep-alive> -->
   
    	  <router-view @send="loginMsg"></router-view>
  
    <!-- </keep-alive> -->
    
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Scroll from './base/scroll/scroll'


	import footer from './component/other/footer.vue'
	export default {
		components:{
      'v-footer':footer,
      'scroll':Scroll,
     

		},
	    data(){
        return{
          headerTitle:'登录',
          headRouter:'',
          nav:[
	              {
	                con:'推荐',
	                router:'/recommend'
	              },
	              {
	                con:'排行',
	                router:'/rank'
	              },
	              {
	                con:'分类',
	                router:'/classify'
	              },
	              {
	                con:'歌手',
	                router:'/singer'
	              },
	              {
	                con:'MV',
	                router:'/mv'
	              }
          ]
        }
    },
    methods:{
      loginMsg(data){
        console.log(data)
        if(!data){
          data='登录';
          this.headRouter="login"
        }else{
          this.headRouter="individual"
        }
        this.headerTitle = data
      }
    },
    watch:{
      headerTitle(){
        return this.headerTitle
      }
    }
	}
</script>

<style scoped="">
	/*头部*/
	
	.head-top{
    height: 3.12rem;
    background: #ededed;
    overflow: hidden;
    padding: 0 4%;
    position: fixed;
    width: 92%;
    top: 0;
    z-index: 2;
	}

	.head-top img{
		width: 100%;
	}
	.head-top>a{
    width: 3.93rem;
    height: 1.56rem;
    float: left;
    margin-top: 13px;
    overflow: hidden;
    text-align: center;
    font: 1.15rem/ 1.60rem "微软雅黑";
    color: #46b4e6;
    cursor: pointer;
	}
	.head-top>p{
		width: 1.31rem;
    height: 1.31rem;
    float: right;
    overflow: hidden;
    margin-top: .93rem;
	}
	
	/*导航栏*/
	
	.head-nav{
    background: #46b4e6;
    overflow: hidden;
    height: 2.8rem;
    position: fixed;
    width: 100%;
    top: 3.12rem;
    z-index: 2;
	}
  .head-nav>ul{
  	display: flex;
    width: 100%;
    background: #46b4e6;
    overflow: hidden;
    height: 2.8rem;
  }
  .head-nav>ul>li{
  	flex: 1;
  	text-align: center;
  	line-height: 2.76rem;
  }
   .head-nav>ul>li>a{
   	padding: .3rem .8rem;
   	color:#fff;
   }
  .router-link-active{
  	
  	border-bottom: 1px solid #fff;
  }
</style>
