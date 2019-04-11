<template>
    <section id="mySong">
        <v-head :title="pageTitle" :search="true"></v-head>
        <div class="songList">
            <v-list :list="list"></v-list>
        </div>
        
    </section>
</template>
<script>
import head from '../other/head.vue'
import list from '../rank/list.vue'
export default {
    components:{
        'v-head':head,
        'v-list':list
    },
    data(){
        return{
            list:[],
            pageTitle:"我的歌单"
        }
    },
    mounted(){
			this.$http.get("./src/assets/js/data.json")
			.then((res)=>{
				this.list=res.data.list;
			})
		}
}
</script>
<style>
    #mySong{
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 10;
        width: 100%;
        height: 100%;
        background: #ffffff;
    }
    #mySong>.songList{
        padding-top:50px;
        background: #ffffff;
    }
</style>
