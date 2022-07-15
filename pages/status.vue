<template>
  <div class="index_status_status_big_box">
                    <div class="index_status_status_box_flex">
                        <div class="index_status_status_title">
                            <img src="@/images/list.svg" alt="">
                            <h1>폐기 현황 조회</h1>
                            <p>더보기 ></p>
                        </div>
                        <div class="index_status_status_box_wrapper">
                            <div class="index_status_status_menus">
                                <div class="index_status_status_menu"
                                :class="{'index_status_selected': status_selected === 1}"
                                v-on:click="status_selected = 1">
                                    <p class="index_status_status_menu_text">수락 대기</p>
                                </div>
                                <div class="index_status_status_menu"
                                :class="{'index_status_selected': status_selected === 2}"
                                v-on:click="status_selected = 2">
                                    <p class="index_status_status_menu_text">폐기 거절</p>
                                </div>
                                <div class="index_status_status_menu"
                                :class="{'index_status_selected': status_selected === 3}"
                                v-on:click="status_selected = 3">
                                    <p class="index_status_status_menu_text">결제 대기</p>
                                </div>
                                <div class="index_status_status_menu"
                                :class="{'index_status_selected': status_selected === 4}"
                                v-on:click="status_selected = 4">
                                    <p class="index_status_status_menu_text">폐기 대기</p>
                                </div>
                                <div class="index_status_status_menu"
                                :class="{'index_status_selected': status_selected === 5}"
                                v-on:click="status_selected = 5">
                                    <p class="index_status_status_menu_text">폐기 완료</p>
                                </div>
                            </div>
                            <div class="index_status_status_infor_wrapper">
                                <div class="index_status_status_infor_text">
                                    <h1>(주)삼성전자</h1>
                                    <p>300kg / 75000원</p>
                                    <img src="@/images/more.svg" alt="">
                                    
                                    <div class="index_status_status_infor_btn">
                                        <p>조회</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
    data() {
        return {  
            status_selected: 1
        }
    }
}
</script>

<style>
@import "@/assets/status/style.css";
</style>