<template>
  <div class="login">
    <div class="register_box">
        <h1 class="register_title">업체 정보 수정</h1>
        <div class="login_input_box">
            <div class="register_all_input">
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">상호명</p>
                        </div>
                        <input type="text" class="register_input" v-model="first_name">
                    </div>
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text" style="font-size: 12px;">소규모 배출(-500kg)에 대한 단가(100kg당)</p>
                        </div>
                        <input type="text" class="register_input" v-model="last_name">
                    </div>
                </div>
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_wrapper">
                            <div class="register_input_text_wrapper">
                                <p class="register_text">업종</p>
                            </div>
                            <input type="text" class="register_input" v-model="email">
                        </div>
                    </div>
                    <div class="register_company">
                        <div class="register_input_wrapper">
                            <div class="register_input_text_wrapper">
                                <p class="register_text" style="font-size: 12px;">중규모 배출(500kg-1.5t)에 대한 단가(100kg당)</p>
                                <p style="color: red; opacity: 0;" :class="{'register_required': isDisposer === true}">*</p>
                            </div>
                            <input type="text" class="register_input" v-model="company">
                        </div>
                    </div>
                </div>
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">사업자등록번호</p>
                        </div>
                        <input type="text" class="register_input" v-model="id">
                    </div>
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text" style="font-size: 12px;">대규모 배출(1.5t-)에 대한 단가(100kg당)</p>
                            <p style="color:red; opacity: 0;" :class="{'register_required': isDisposer === true }">*</p>
                        </div>
                        <input type="text" class="register_input" v-model="phone_number">
                    </div>
                </div>
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">최소 수거 가능 쓰레기양(kg)</p>
                        </div>
                        <input type="password" class="register_input" v-model="pw">
                    </div>
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">최대 수거 가능 쓰레기양(kg)</p>
                        </div>
                        <input type="password" class="register_input" v-model="pw_check">
                    </div>
                </div>
                <div class="register_checkbox">
                    <input type="checkbox" v-model="isDisposer">
                    <p style="font-size: 14px;" >허용할 쓰레기 수거 방식</p>
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
        
      }
    
}
</script>

<style>
@import "@/assets/login/style.css";
</style>