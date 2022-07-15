<template>
  <div class="login">
    <div class="register_box">
        <h1 class="register_title">Sign in</h1>
        <div class="login_input_box">
            <div class="register_all_input">
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">업종</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="text" class="register_input" v-model="business_type">
                    </div>
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">사업자등록번호</p>
                            <p style="color:red;">*</p>
                        </div> 
                        <input type="text" class="register_input" v-model="company_registeration_number">
                    </div>
                </div>
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_wrapper">
                            <div class="register_input_text_wrapper">
                                <p class="register_text">최소 수거 가능 쓰레기양(kg)</p>
                                <p style="color:red;">*</p>
                            </div>
                            <input type="text" class="register_input" v-model="minimun_waste_amount">
                        </div>
                    </div>
                    <div class="register_company">
                        <div class="register_input_wrapper">
                            <div class="register_input_text_wrapper">
                                <p class="register_text">최대 수거 가능 쓰레기양(kg)</p>
                                <p style="color: red;">*</p>
                            </div>
                            <input type="text" class="register_input" v-model="maxinum_waste_amount">
                        </div>
                    </div>
                </div>
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">소규모 배출( ~ 500kg)에 대한 처리 단가(100kg 당)</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="text" class="register_input" v-model="small_waste_unit_price_per_ton">
                    </div>
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">중규모 배출(501kg ~ 1.5t)에 대한 처리 단가(100kg 당)</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="text" class="register_input" v-model="medium_waste_unit_price_per_ton">
                    </div>
                </div>
                <div class="register_name_wrapper">
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">대규모 배출(1.5t ~ )에 대한 처리 단가(100kg 당)</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="password" class="register_input" v-model="big_waste_unit_price_per_ton">
                    </div>
                    <div class="register_input_wrapper">
                        <div class="register_input_text_wrapper">
                            <p class="register_text">허용할 쓰레기 수거 방식(직접내방, 쓰레기 트럭 수거 등)</p>
                            <p style="color:red;">*</p>
                        </div>
                        <input type="password" class="register_input" v-model="waste_delivery_types_available">
                    </div>
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
const { authNew } = require('../api.js')

export default {
    name: "RegisterPage",
    layout: 'fullpage',
    data() {
        return {
            business_name: '',
            business_type: '',
            company_registeration_number: '',
            minimun_waste_amount: 0,
            maxinum_waste_amount: 0,
            small_waste_unit_price_per_ton: 0,
            medium_waste_unit_price_per_ton: 0,
            big_waste_unit_price_per_ton: 0,
            waste_delivery_types_available: '',
            warn_message: ''
        }
    },
    methods: {
        async register() {
            if ( !this.bussiness_name || !this.bussiness_type || !this.company_registeration_number || !this.minimun_waste_amount || !this.maxinum_waste_amount || !this.small_waste_unit_price_per_ton
            || !this.medium_waste_unit_price_per_ton || !this.big_waste_unit_price_per_ton || !this.waste_delivery_types_available ) { this.warn_message = "필수 항목을 입력해주세요." }
            else {
                authNew({
                    id: localStorage.getItem("id"),
                    password: localStorage.getItem("pw"),
                    firstName: localStorage.getItem("first_name"),
                    lastName: localStorage.getItem("last_name"),
                    contactPhone: localStorage.getItem("phone_number"),
                    bussinessName: localStorage.getItem("company"),
                    bussinessType: this.bussiness_type,
                    isDisposer: 1,
                    companyRegisterationNumber: this.company_registeration_number,
                    minimunWasteAmount: this.minimun_waste_amount,
                    maxinumWasteAmount: this.maxinum_waste_amount,
                    smallWasteUnitPricePerTon: this.small_waste_unit_price_per_ton,
                    mediumWasteUnitPricePerTon: this.medium_waste_unit_price_per_ton,
                    bigWasteUnitPricePerTon: this.big_waste_unit_price_per_ton,
                    wasteDeliveryTypesAvailable: this.waste_delivery_types_available,
                    accountType: 1
                }).then((data)=>{
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
            localStorage.removeItem("id")
            localStorage.removeItem("pw")
            localStorage.removeItem("first_name")
            localStorage.removeItem("last_name")
            localStorage.removeItem("phone_number")
        }
    }
}
</script>

<style>
@import "@/assets/login/style.css";
</style>