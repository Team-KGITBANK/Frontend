<template>
    <div class="disposer_dash">
        <div class="disposer_dash_wrapper">
            <div class="disposer_dash_right_wrapper">
                <h1 style="font-size: 32px;">안녕하세요<br>{{ name }} 님,</h1>
                <NuxtLink to="/dashboard" style="text-align:center;width:100%;border:0;padding: 5px 0;border-radius: 15px;cursor:pointer;background-color: #dddddd; text-decoration: none; color:black;">배출자</NuxtLink>
                <div class="disposer_search_box">
                    <div class="disposer_search_box_title">
                        <img src="@/images/ok_human.svg" alt="">
                        <h1 style="font-size: 16px;">폐기물 요청 확인</h1>
                        <p style="margin-left: auto;">더보기(138) ></p>
                    </div>
                    <div class="disposer_search_bottom_wrapper">
                        <div class="disposer_search_box_bottom">
                        
                            <div class="disposer_search_bottom_right">




                                <div class="disposer_company_infor">
                                    <div class="disposer_company_infor_more">
                                        <div class="disposer_company_infor_more_inline">                                
                                            <p class="disposer_company_infor_text">(주)삼성전자</p>
                                            <p style="font-size: 12px;">산업폐기물(폐합고분자화합물 등)</p>
                                        </div>
                                        <p class="disposer_company_infor_description">(요청 물량: 300kg)</p>
                                    </div>
                                    <div class="disposer_company_infor_price_wrapper">
                                        <p class="disposer_company_infor_description disposer_company_infor_price">가격: 35000원 / 100kg</p>
                                    </div>
                                </div>

                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="disposer_dash_left_wrapper">
                <div class="disposer_banner_wrapper">
                    <div class="index_banner">
                    </div>
                </div>
                <div class="disposer_status_wrapper">
                    <div class="disposer_status_box disposer_trash">
                        <div class="disposer_status_box_title">
                            <img src="@/images/full_trash.svg" alt="">
                            <p>폐기한 쓰레기</p>
                        </div>
                        <h1>741235kg</h1>
                    </div>

                    <div class="disposer_status_box disposer_count">
                        <div class="disposer_status_box_title">
                            <img src="@/images/check.svg" alt="">
                            <p>폐기 횟수</p>
                        </div>
                        <h1>56</h1>
                    </div>

                    <div class="disposer_status_box disposer_money">
                        <div class="disposer_status_box_title">
                            <img src="@/images/donate.svg" alt="">
                            <p>사용 금액</p>
                        </div>
                        <h1>56142800원</h1>
                    </div>
                </div>
                <div class="disposer_status_big_box">
                    <div class="disposer_status_box_flex">
                        <div class="disposer_status_title">
                            <img src="@/images/list.svg" alt="">
                            <h1>폐기 현황 조회</h1>
                            <p>더보기 ></p>
                        </div>
                        <div class="disposer_status_box_wrapper">
                            <div class="disposer_status_menus">
                                <div class="disposer_status_menu"
                                :class="{'disposer_selected': status_selected === 1}"
                                v-on:click="status_selected = 1">
                                    <p class="disposer_status_menu_text">수락 대기</p>
                                </div>
                                <div class="disposer_status_menu"
                                :class="{'disposer_selected': status_selected === 2}"
                                v-on:click="status_selected = 2">
                                    <p class="disposer_status_menu_text">폐기 거절</p>
                                </div>
                                <div class="disposer_status_menu"
                                :class="{'disposer_selected': status_selected === 3}"
                                v-on:click="status_selected = 3">
                                    <p class="disposer_status_menu_text">결제 대기</p>
                                </div>
                                <div class="disposer_status_menu"
                                :class="{'disposer_selected': status_selected === 4}"
                                v-on:click="status_selected = 4">
                                    <p class="disposer_status_menu_text">폐기 대기</p>
                                </div>
                                <div class="disposer_status_menu"
                                :class="{'disposer_selected': status_selected === 5}"
                                v-on:click="status_selected = 5">
                                    <p class="disposer_status_menu_text">폐기 완료</p>
                                </div>
                            </div>
                            <div class="disposer_status_infor_wrapper">
                                <div class="disposer_status_infor_text">
                                    <h1>(주)삼성전자</h1>
                                    <p>300kg / 75000원</p>
                                    <img src="@/images/more.svg" alt="">
                                    
                                    <div class="disposer_status_infor_btn">
                                        <p>조회</p>
                                    </div>
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
// const { getList } = require('@/api.js')

export default {
    name: 'dashboardPage',
    data() {
        return {
            name: "김뫄뫄",
            search_selected: 1,
            status_selected: 1,
            star: [
                'empty_star.svg',
                'empty_star.svg',
                'empty_star.svg',
                'empty_star.svg',
                'empty_star.svg'
            ],
            trashList: {}
        }
    },
    methods: {
        changeStar(count){
            let star_tmp = this.star.slice()
            for(let i = 0 ; i <= count ; i++ ){
                star_tmp[i] = 'yellow_star.svg'
                console.log(this.star)
            }
            this.star = star_tmp
        }
    },
    mounted() {
        // let id = localStorage.getItem('id')
        // trashList = getList(id)
    }
}


</script>

<style>
@import '@/assets/disposer/style.css';
</style>