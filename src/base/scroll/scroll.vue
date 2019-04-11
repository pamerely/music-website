<template>
    <div ref="wrapper">
        <slot></slot>


    </div>
</template>
<script>
import BScroll from 'better-scroll'
import { setTimeout } from 'timers';
export default {
    props:{
        // 滚动的位置
        probeType:{
            type:Number,
            // 屏幕滑动超过一定时间后派发scroll事件
            default:1
        },
        // better-scroll会默认组织浏览器click事件
        click:{
            type:Boolean,
            // 会派发一个click事件
            default:true
        },
        // 监听滚动事件
        listenScroll:{
            type:Boolean,
            default:false
        },
        data:{
            type:Array,
            default:null
        },
        // 上拉
        pullup:{
            type:Boolean,
            default:false
        },
        // 滚动开始之前
        beforeScroll:{
            type:Boolean,
            default:false
        },
        refreshDelay:{
            type:Number,
            default:20
        }
    },
    mounted(){
        setTimeout(()=>{
            this._initScroll()
        }, 20)
    },
    methods:{
        _initScroll(){
            if(!this.$refs.wrapper){
                return
            }
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType:this.probeType,
                click:this.click
            })

            if(this.listenScroll){
                let me = this;
                // 监听当前实例上的自定义事件
                this.scroll.on('scroll', (pos)=>{
                    me.$emit('scroll', pos)
                })
            }

            if(this.pullup){
                this.scroll.on('scrollEnd', ()=>{
                    if(this.scroll.y <= (this.scroll.maxScrollY + 50)){
                        this.$emit('scrollToEnd')
                    }
                })
            }

            if(this.beforeScroll){
                this.scroll.on('beforeScrollStart', ()=>{
                    this.$emit('beforeScroll')
                })
            }
        },
        disable(){
            this.scroll && this.srcoll.disable()
        },
        enable(){
            this.scroll && this.scroll.enable()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        scrollTo(){
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement(){
            this.srcoll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        }
    },
    watch:{
        data(){
            setTimeout(()=>{
                this.refresh()
            }, this.refreshDelay)
        }
    }
}
</script>
