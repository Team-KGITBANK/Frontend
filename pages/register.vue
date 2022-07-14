<template>
  <div class="login">
    <div class="register_box">
        <h1 class="register_title">Sign in</h1>
        <div class="login_input_box">
            <div class="register_all_input">
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">First name</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="text" class="register_input" v-model="first_name">
                    </div>
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">Last name</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="text" class="register_input" v-model="last_name">
                    </div>
                </div>
                <div class="register_email">
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">Email</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="text" class="register_input" v-model="email">
                    </div>
                </div>
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">ID</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="text" class="register_input" v-model="id">
                    </div>
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">Phone number</p>
                            <p style="color:red; opacity: 0;">*</p>
                        </div>
                        <input type="text" class="register_input" v-model="phone_number">
                    </div>
                </div>
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">Password</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="password" class="register_input" v-model="pw">
                    </div>
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">Password Check</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="password" class="register_input" v-model="pw_check">
                    </div>
                </div>
            </div>
            <div class="register_submit_wrapper">
                <button class="register_submit">Submit</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "RegisterPage",
    data() {
        return {
            id: "",
            pw: "",
            pw_check: "",
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
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