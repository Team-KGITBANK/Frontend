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
const { editAccount } = require('../api.js')

export default {
    name: "RegisterPage",
    layout: 'fullpage',
    data() {
        return {
          small_waste_unit_price_per_ton: undefined,
          medium_waste_unit_price_per_ton: undefined,
          large_waste_unit_price_per_ton: undefined,
          business_name: undefined,
          business_type: undefined,
          maximum_waste_amount_in_kg: undefined,
          waste_delivery_types_available: false,
          company_registeration_no: undefined,
        }
        
    },
    methods: {
      async editAccountInformation () {
        const data = {}
        this.waste_delivery_types_available = this.waste_delivery_types_available ? "직접 내방" : "쓰레기 수거 트럭"
        if(this.small_waste_unit_price_per_ton !== undefined ){
          data.append({thisSmallWasteUnitPricePerTon: this.small_waste_unit_price_per_ton})
        }
        if(this.medium_waste_unit_price_per_ton !== undefined ){
          data.append({thisMediumWasteUnitPricePerTon: this.medium_waste_unit_price_per_ton})
        }
        if(this.large_waste_unit_price_per_ton !== undefined ){
          data.append({thisLargeWasteUnitPricePerTon: this.large_waste_unit_price_per_ton})
        }
        if(this.business_name !== undefined ){
          data.append({thisBusinessName: this.business_name})
        }
        if(this.business_type !== undefined ){
          data.append({thisBusinessType: this.business_type})
        }
        if(this.maximum_waste_amount_in_kg !== undefined ){
          data.append({thisMaximumWasteAmountInKg: this.maximum_waste_amount_in_kg})
        }
        if(this.waste_delivery_types_available !== undefined ){
          data.append({thisWasteDeliveryTypesAvailable: this.waste_delivery_types_available})
        }
        if(this.company_registeration_no !== undefined ){
          data.append({thisCompanyRegisterationNo: this.company_registeration_no})
        }
        data.append({id:localStorage.getItem("id")})
        editAccount(data).then(response => {
          console.log(response)
        })
      }
    }
    
}
</script>

<style>
@import "@/assets/login/style.css";
</style>