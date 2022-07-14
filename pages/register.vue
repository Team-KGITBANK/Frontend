<template>
  <div class="register">
    <div class="register_box">
        <h1 class="login_title">User Loin</h1>
        <div class="login-input-box">
            <input class="login_input" type="text" v-model="id">
            <input class="login_input" type="password" v-model="pw">
            <input class="login_input" type="password" v-model="pw_check">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "RegisterPage",
    date() {
        return {
            id: "",
            pw: "",
            pw_check: ""
        }
    },
    methods: {
        register() {
            if ( !this.id ) { alert("아이디를 입력해주세요.") }
            else if ( !this.pw  || !this.pw_check ) { alert("비밀번호를 입력해주세요.") }
            else if ( this.pw === this.pw_check ) { alert("비밀번호가 일치하지 않습니다.") }
        }
    }
}
</script>

<style>
@import "@/assets/login/style.css";
</style>