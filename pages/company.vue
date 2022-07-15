<template>
  <div class="company">
    <div class="company_wrapper">
        <div class="company_title">
            <img src="@/images/profile.svg" alt="">
            <div class="company_infor_wrapper">
                <div class="company_infor">
                    <div class="company_subtitle">
                        <h1>(주)청보산업건축폐기물처리</h1>
                        <p>공업/산업 폐기물 처리</p>
                    </div>
                    <div class="company_comment">
                        <img src="@/images/trangle.svg" alt="">
                        <p>저렴한 가격과 빠른 속도로 폐기물을 처리해드리는 청보산업입니다</p>
                    </div>
                    <div class="company_infor_box">
                        <div class="company_infor_item">   
                            <img src="@/images/graph.svg" alt="">
                            <div class="company_infor_weight">
                                <div class="company_infor_weight_items">
                                    <h1>소량</h1>
                                    <p>~500kg</p>
                                    <h1 style="font-size: 15px;">25000 / 100kg</h1>
                                </div>
                                <div class="company_infor_weight_items">
                                    <h1>중량</h1>
                                    <p>~500kg</p>
                                    <h1 style="font-size: 15px;">25000 / 100kg</h1>
                                </div>
                                <div class="company_infor_weight_items">
                                    <h1>대량</h1>
                                    <p>~500kg</p>
                                    <h1 style="font-size: 15px;">25000 / 100kg</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="company_right_wrapper">
                <div class="company_checkbox">
                    <div class="company_checkbox_text">
                        <img src="@/images/check1.svg" alt="">
                        <p>트럭 운용 가능</p>
                    </div>
                    <div class="company_checkbox_text">
                        <img src="@/images/check1.svg" alt="">
                        <p>지역 상관 없이 배달 가능</p>
                    </div>
                    <div class="company_checkbox_text">
                        <img src="@/images/check1.svg" alt="">
                        <p>오차 없는 시스템</p>
                    </div>
                </div>
                <div class="company_process_wrapper">
                    <p>최소 처리량: 200kg</p>
                    <p>최대 처리량: 400kg</p>
                </div>
                <div class="company_input_wrapper">
                    <div class="company_input_inline">
                        <input type="text"><p>kg</p>
                    </div>
                    <div class="company_select_wrapper">
                        <select name="" id="">
                            <option value="a">a</option>
                            <option value="a">a</option>
                            <option value="a">a</option>
                        </select>
                    </div>
                    <div class="company_access_btn">
                        <div class="company_center">
                            <p>이용약관 확인</p>
                            <div class="company_submit">
                                <p>동의 및 제출</p>
                                <img src="@/images/join.svg" alt="">
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'fullpage'
}
</script>

<style>
@import '@/assets/company/style.css';
</style>