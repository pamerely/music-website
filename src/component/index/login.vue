<template>
    <section id="login">
        <v-head :title="pageTitle" :search="false"></v-head>
        <div class="loginForm">
            <form>
                <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" :state="phoneState" @blur.native.capture="isPhone()"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" :state="passwordState" @blur.native.capture="isNull(password,'passwordState')"></mt-field>
                <mt-button type="primary" size="large" @click.prevent="login()">登录</mt-button>
            </form>
            <p class="forgetPassword">忘记密码</p>
        </div>
        <div class="login_dsf">
            <router-link to="/" class="dsf_QQ">QQ登录</router-link>
            <router-link to="/" class="dsf_weibo">微博登录</router-link>
        </div>
    </section>
</template>
<script>
import { MessageBox } from 'mint-ui';
import head from '../other/head.vue'
import md5 from 'md5'
export default {
    components:{
        'v-head':head
    },
   
    data(){
        return{
            pageTitle:"登录",
            phone:'',
            password:"",
            phoneState:"",
            passwordState:""
        }
    },
    methods:{
        login(){
        //    if(!this.phone.match(/^1(3|4|5|7|8)\d{9}$/)){
        //         this.phoneState="error";
        //     }else{
        //         this.phoneState="success";
        //     }
            if(this.password==""){
                this.passwordState="error";
            }else{
                this.passwordState="success";
            }
            if(this.passwordState!="error"&&this.phoneState!="error"){
                this.$http.post('/api/login', this.$qs.stringify({
                    phone:this.phone,
                    password:md5(md5(this.password))
                })).then((res)=>{
                    let data = res.data
                    if(data.code===0){
                        this.$router.push({name: 'recommend', params: {user:data.user}})
                    }else{
                        MessageBox('密码错误，请输入正确的密码');
                
                    }
                }).catch((error)=>{
                    console.log(error)
                })    
            }
           
        },
        isPhone(){
            if(this.phone.match(/^1(3|4|5|7|8)\d{9}$/)){
                this.$http.post('/api/phoneNum', this.$qs.stringify({
                    phone:this.phone
                })).then((res)=>{
                    if(res.data==='exist'){
                        this.phoneState="success"
                    }else{
                        this.phoneState="error"
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            }else{
                this.phoneState="error"
            }
          
            
        },
        isNull(a,b){
            if(a==""){
                this[b] = "error" ;   
            }else{
                this[b] = "success" ; 
            }
        }
    },
 

}
</script>
<style>
    #login{
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 500;
        width: 100%;
        height: 100%;
         background: #ffffff;
        
    }
    .loginForm{
        padding-top:70px;
       background: #f1f1f1;
    }
    .loginForm>form{
        display: block;
        margin:auto;

    }
    .loginForm>form>button{
        margin-top:20px;

    }
    #login .forgetPassword{
        width: 100%;
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        color: #999;
        text-align: center;
        display: block;
    }
    .login_dsf{
        margin:30px auto;
        text-align: center;
    }
    .login_dsf>a{
        display: inline-block;
        vertical-align: top;
        width: 62px;
        margin: 0px 15px;
        text-align: center;
        padding-top: 62px;
        line-height: 46px;
        color: #000;
        font-size: 14px;
    }
    .login_dsf>.dsf_QQ{
        background: url(../../assets/images/new/QQ_login@3x.png) center top no-repeat;
        background-size: 62px 62px;
    }
    .login_dsf>.dsf_weibo{
        background: url(../../assets/images/new/weibo_login@3x.png) center top no-repeat;
        background-size: 62px 62px;
    }
</style>
