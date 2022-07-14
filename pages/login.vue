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
            <button class="login_btn">Login</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return{
            id: "",
            pw: "",
            remember: false,
        }
    },
}
</script>

<style>
@import "@/assets/login/style.css";
</style>