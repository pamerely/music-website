<template>
    <section id="register">
        <v-head :title="pageTitle" :search="false"></v-head>
        <div class="registerForm">
            <form>
                <mt-field label="用户名" placeholder="请输入用户名" v-model="username" :state="usernameState" @blur.native.capture="isNull(username,'usernameState')"></mt-field>
                <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" :state="phoneState" @blur.native.capture="isPhone()"></mt-field>
                <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email" :state="emailState" @blur.native.capture="idEmail()"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" :state="passwordState" @blur.native.capture="isNull(password,'passwordState')"></mt-field>
                
                <mt-button type="primary" size="large" @click.prevent="register()">注册</mt-button>
            </form>
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
export default {
    components:{
        'v-head':head
    },
    data(){
        return{
            pageTitle:"注册",
            phone:'',
            password:"",
            username:"",
            email:"",
            phoneState:"",
            passwordState:"",
            usernameState:"",
            emailState:""
        }
    },
    methods:{
        register(){
            if(!this.phone.match(/^1(3|4|5|7|8)\d{9}$/)){
                this.phoneState="error";
            }else{
                this.phoneState="success";
            }
            if(this.password==""){
                this.passwordState="error";
            }else{
                this.passwordState="success";
            }
            if(!this.email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
                this.emailState="error";
            }else{
                this.emailState="success";
            }
            if(this.username==""){
                this.usernameState="error";
            }else{
                this.usernameState="success";
            }
            if(this.emailState!="error"&&this.usernameState!="error"&&this.passwordState!="error"&&this.phoneState!="error"){
                this.$http.post('/api/register', this.$qs.stringify({
                    phone:this.phone,
                    user:this.username,
                    password:this.password,
                    email:this.email
                })).then((res)=>{
                
                    if(res.data==='ok'){
                        this.$router.push({name: 'login', params:{user:this.username}});
                    }else{
                        MessageBox('网络异常，注册失败');
                   
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
                    if(res.data==='ok'){
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
        idEmail(){
            this.email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/) ? this.emailState="success": this.emailState="error";
        },
        isNull(a,b){
            if(a==""){
                this[b] = "error" ;   
            }else{
                this[b] = "success" ; 
            }
        }

    }

}

</script>
<style>
#register{
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: #ffffff;
}
.registerForm{
    padding-top:70px;

}
.registerForm>form{
    display: block;
    margin:auto;

}
.registerForm>form>button{
    margin-top:20px;

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
