<template>
  <div class="login">
    <div class="login_box">
        <h1 class="login_title">User Loin</h1>
        <div class="login_input_box">
            <input class="login_input" type="text" v-model="id" placeholder="ID">
            <input class="login_input" type="password" v-model="pw" placeholder="Password">
        </div>
        <div class="login_btn_box">
            <div class="login_remember">
                <input type="checkbox" v-model="remember">
                <p>Remember me</p>
            </div>
            <a href="/register" class="login_signin">Sign in</a>
        </div>
        <div class="login_btn_wrapper">
            <button class="login_btn" v-on:click="login">Login</button>
            <p class="register_warn_message">{{ warn_message }}</p>
        </div>
    </div>
  </div>
</template>

<script>
const { apiLogin, getAuthToken } = require('@/api.js')

export default {
    name: "LoginPage",
    data() {
        return{
            id: "",
            pw: "",
            remember: false,
            warn_message: ""
        }
    },
    methods: {
        async login() {
            if (!this.id || !this.pw) { this.warn_message = "모든 칸을 입력해주세요" }
            else{ 
                apiLogin({
                    id: this.id,
                    password: this.pw,
                }).then(()=>{
                    if (this.remember) {
                        localStorage.setItem("id", this.id)
                        localStorage.setItem("pw", this.pw)
                    }
                    getAuthToken().then(token => {
                        localStorage.setItem("token", token)
                        this.$router.push("/")
                    })
                }).catch(()=>{
                    this.warn_message = "아이디 또는 비밀번호가 올바르지 않습니다"
                })
            }
        }
    }
}
</script>

<style>
@import "@/assets/login/style.css";
</style>