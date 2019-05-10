<template>
    <section id="individual">
        <v-head :title="pageTitle" :search="true"></v-head>
        <header class="clear individual-head">
            <div class="head-img">
                <img src="../../assets/images/recommend/2342328483.jpg" alt="">
            </div>
            <div class="head-con">
                <p>{{userName}}</p>
                <p>
                    <span>VIP</span>
                    <span>音乐包</span>
                </p>
            </div>
        </header>
        <section class="individual-con">
            <ul>
                <li v-for="(v,i) in con" :key="i">
                    <i :class="v.iconName">
                    </i>
                    <span>{{v.title}}</span>
                </li>
            </ul>
        </section>
        <footer class="individual-footer clear">
            <div class="set">
                <i class="iconfont icon-shezhi"></i>
                <span>设置</span>
            </div>
            <div class="exit">
                <i class="iconfont icon-tuichu"> </i>
                <router-link to="/login">
                    <span>退出</span>
                </router-link>
                
            </div>
        </footer>
       
    </section>
</template>
<script>
import head from '../other/head.vue'
export default {
    components:{
        'v-head':head
    },
    mounted(){
        this.userName = this.$route.params.user
    },

    data(){
        return{
            userName:'',
            pageTitle:"个人中心",
            con:[
                {
                    iconName:"iconfont icon-xinxi-",
                    title:"消息中心"
                },
                {
                    iconName:"iconfont icon-love_icon",
                    title:"我喜欢的"
                },
                {
                    iconName:"iconfont icon-gengduo",
                    title:"我的歌单"
                },
                {
                    iconName:"iconfont icon-huiyuan-",
                    title:"会员中心"
                },
                {
                    iconName:"iconfont icon-download_icon",
                    title:"我的下载"
                },
                {
                    iconName:"iconfont icon-zuijinliulan",
                    title:"最近播放"
                }
            ]
        }
    }
}
</script>
<style>
.clear::after{
    content: '';
    display:block;
    clear:both;
}
.clear{
    zoom: 1;
}
#individual{
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: #ffffff;
    background-image: -webkit-linear-gradient(top, #46b4e6, blue 50%, #46b4e6 96%); 

}
#individual>.individual-head{
    padding: 30px;
    border-bottom:1px solid rgba(255, 255, 255, 0.6);
    margin-top: 50px;
}
#individual .head-img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    float: left;
    margin-right: 20px;
    overflow: hidden;
}
#individual .head-img>img{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
#individual .head-con{
    float: left;
    padding: 10px;
}
#individual .head-con>p:first-of-type{
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 10px;
}
#individual .head-con>p>span{
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    border:1px solid rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    padding:2px;
    margin-right: 5px;
}
#individual .individual-con{
    padding: 30px;
    font-size: 16px;
    
}
#individual .individual-con li{
    font-size: 18px;
    color: #ffffff;
    padding:5px 0px;
    height: 38px;
    line-height: 38px;
}
#individual .individual-con li>i{
    width:50px;
    text-align:center;
    display: inline-block;
    font-size: 24px;
    vertical-align: middle;

}
#individual .individual-footer{
    position: absolute;
    bottom: 55px;
    width: 100%;
    left: 0px;
    height: 50px;
    line-height: 50px;
    border-top:1px solid rgba(255, 255, 255, 0.6);
    color: #ffffff;
}
#individual .individual-footer>.set{
    
    float: left;
    padding-left:30px;
}
#individual .individual-footer>.exit{
    float: right;
    padding-right:30px;
    
}
#individual .individual-footer a{
    color:#ffffff;
}
#individual .individual-footer i{
    font-size: 24px;
    width: 50px;
    text-align: center;
}
#individual .individual-footer span{
    font-size: 18px;
  
}
</style>
