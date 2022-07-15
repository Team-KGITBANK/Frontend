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
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_wrapper">
                            <div class="register_input_text_wrapper">
                                <p class="register_text">Email</p>
                                <p style="color:red;">*</p>
                            </div>
                            <input type="text" class="register_input" v-model="email">
                        </div>
                    </div>
                    <div class="register_company">
                        <div class="register_input_wrapper">
                            <div class="register_input_text_wrapper">
                                <p class="register_text">Company</p>
                                <p style="color: red; opacity: 0;" :class="{'register_required': isDisposer === true}">*</p>
                            </div>
                            <input type="text" class="register_input" v-model="company">
                        </div>
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
                            <p style="color:red; opacity: 0;" :class="{'register_required': isDisposer === true }">*</p>
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
                <div class="register_checkbox">
                    <input type="checkbox" v-model="isDisposer">
                    <p style="font-size: 14px;" >당신은 처리 업체입니까?</p>
                </div>
            </div>
            <div class="register_submit_wrapper">
                <button class="register_submit" v-on:click="register">Submit</button>
                <p class="register_warn_message">{{ warn_message }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
const { apiRegister } = require('../api.js')

export default {
    name: "RegisterPage",
    layout: 'fullpage',
    data() {
        return {
            id: "",
            pw: "",
            pw_check: "",
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            warn_message: "",
            company:"",
            isDisposer: false,
        }
    },
    methods: {
        async register() {
            if (isDisposer) {
                if (!company || !phone_number) {
                    this.warn_message = "필수 항목을 입력해주세요."
                } else {
                    localStorage.setItem('id', this.id)
                    localStorage.setItem('pw', this.pw)
                    localStorage.setItem('first_name', this.first_name)
                    localStorage.setItem('last_name', this.last_name)
                    localStorage.setItem('email', this.email)
                    localStorage.setItem('phone_number', this.phone_number)
                    localStorage.setItem('company', this.company)
                    return
                }
            }
            if ( !this.id || !this.pw || !this.pw_check || !this.first_name || !this.last_name || !this.email ) { this.warn_message = "필수 항목을 입력해주세요." }
            else if ( this.pw !== this.pw_check ) { this.warn_message = "비밀번호가 일치하지 않습니다." }
            else {
                apiRegister({
                    id: this.id,
                    password: this.pw,
                    firstName: this.first_name,
                    lastName: this.last_name,
                    contactPhone: this.phone_number,
                    businessName: this.company,
                    isDisposer: 0,
                    accountType: 0
                }).then(()=>{
                    if ( data.status === 400 ){
                        this.warn_message = "필수 조건이 누락되었습니다."
                    } else if (data.status === 401){
                        this.warn_message = "이미 존재하는 ID"
                    } else if (data.status === 402){
                        this.warn_message = "쓰레기 처리업체로 등록되었으나 누락된 입력값이 존재합니다."
                    } else if (data.status === 4021) {
                        this.warn_message = "유효하지 않은 입력값이 존재합니다."
                    }
                    this.$router.push("/login")
                })
            }
        }
    }
}
</script>

<style>
@import "@/assets/login/style.css";
</style>