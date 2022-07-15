<template>
    <div class="index_dash">
        <div class="index_dash_wrapper">
            <div class="index_dash_right_wrapper">
                <h1 style="font-size: 32px;">안녕하세요<br>{{ name }} 님,</h1>
                <NuxtLink to="/dashboard_disposer" style="text-align:center;width:100%;border:0;padding: 5px 0;border-radius: 15px;cursor:pointer;background-color: #dddddd; text-decoration: none; color:black;">처리자</NuxtLink>
                <div class="index_search_box">
                    <div class="index_search_box_title">
                        <img src="@/images/ok_human.svg" alt="">
                        <h1 style="font-size: 16px;">빠른 업자 찾기</h1>
                        <p style="margin-left: auto;">더보기(138) ></p>
                    </div>
                    <div class="index_search_bottom_wrapper">
                        <div class="index_search_box_bottom">
                            <div class="index_search_box_bottom_list">
                                <div class="index_search_bottom_box" 
                                :class="{'index_selected': this.search_selected === 1}"
                                v-on:click="search_selected = 1">
                                    <img src="@/images/note.svg" alt="">
                                    <p>전체보기</p>
                                </div>
                                <div class="index_search_bottom_box"
                                :class="{'index_selected': this.search_selected === 2}"
                                v-on:click="search_selected = 2">
                                    <img src="@/images/add.svg" alt="">
                                    <p>최대 용량</p>
                                </div>
                                <div class="index_search_bottom_box"
                                :class="{'index_selected': this.search_selected === 3}"
                                v-on:click="search_selected = 3">
                                    <img style="margin-left: 5px" src="@/images/trashcan.svg" alt="">
                                    <p>소량 폐기물</p>
                                </div>
                                <div class="index_search_bottom_box"
                                :class="{'index_selected': this.search_selected === 4}"
                                v-on:click="search_selected = 4">
                                    <img src="@/images/flash.svg" alt="">
                                    <p>친환경 인증</p>
                                </div>
                                <div class="index_search_bottom_box"
                                :class="{'index_selected': this.search_selected === 5}"
                                v-on:click="search_selected = 5">
                                    <img src="@/images/battery.svg" alt="">
                                    <p>가성비</p>
                                </div>
                            </div>
                            <div class="index_search_bottom_right">


                                <div v-for="(i,k) in tmp[tmp_2].length" :key="k" class="index_company_infor">
                                    <div class="index_company_infor_more">
                                        <div class="index_company_infor_more_inline">                                
                                            <p class="index_company_infor_text">(주)마스터환경</p>
                                            <div class="index_company_infor_svg">
                                                <img v-for="(a, b) in i.score" :key="b" src="@/images/yellow_star.svg" alt="">
                                                <img v-for="(a, b) in (5-i.score)" :key="b" src="@/images/empty_star.svg" alt="">
                                                <img src="@/images/more.svg">
                                            </div>
                                        </div>
                                        <div class="index_company_infor_more_inline">
                                            <div class="index_company_infor_svg">
                                                <img src="@/images/empty_trash.svg" >
                                                <img src="@/images/empty_trash.svg" >
                                                <img src="@/images/empty_trash.svg" >
                                                <img src="@/images/empty_trash.svg" >
                                            </div>
                                            <p class="index_company_infor_description">(최소 물량: {{i.minimumWasteAmountInKg}}kg / 최대 물량: {{i.maximumWasteAmountInKg }}kg)</p>
                                        </div>
                                    </div>
                                    <div class="index_company_infor_price_wrapper">
                                        <p class="index_company_infor_description index_company_infor_price">가격: {{ i. }}원 / 100kg</p>
                                    </div>
                                </div>


                                <div class="index_company_infor">
                                    <div class="index_company_infor_more">
                                        <div class="index_company_infor_more_inline">                                
                                            <p class="index_company_infor_text">(주)마스터환경</p>
                                            <div class="index_company_infor_svg">
                                                <img :src="require(`@/images/${star[0]}`)" v-on:click="changeStar(0)">
                                                <img :src="require(`@/images/${star[1]}`)" v-on:click="changeStar(1)">
                                                <img :src="require(`@/images/${star[2]}`)" v-on:click="changeStar(2)">
                                                <img :src="require(`@/images/${star[3]}`)" v-on:click="changeStar(3)">
                                                <img :src="require(`@/images/${star[4]}`)" v-on:click="changeStar(4)">
                                                <img src="@/images/more.svg">
                                            </div>
                                        </div>
                                        <div class="index_company_infor_more_inline">
                                            <div class="index_company_infor_svg">
                                                <img src="@/images/empty_trash.svg" >
                                                <img src="@/images/empty_trash.svg" >
                                                <img src="@/images/empty_trash.svg" >
                                                <img src="@/images/empty_trash.svg" >
                                            </div>
                                            <p class="index_company_infor_description">(최소 물량: 100kg / 최대 물량: 400kg)</p>
                                        </div>
                                    </div>
                                    <div class="index_company_infor_price_wrapper">
                                        <p class="index_company_infor_description index_company_infor_price">가격: 35000원 / 100kg</p>
                                    </div>
                                </div>

                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="index_dash_left_wrapper">
                <div class="index_banner_wrapper">
                    <div class="index_banner">
                    </div>
                </div>
                <div class="index_status_wrapper">
                    <div class="index_status_box index_trash">
                        <div class="index_status_box_title">
                            <img src="@/images/full_trash.svg" alt="">
                            <p>폐기한 쓰레기</p>
                        </div>
                        <h1>741235kg</h1>
                    </div>

                    <div class="index_status_box index_count">
                        <div class="index_status_box_title">
                            <img src="@/images/check.svg" alt="">
                            <p>폐기 횟수</p>
                        </div>
                        <h1>56</h1>
                    </div>

                    <div class="index_status_box index_money">
                        <div class="index_status_box_title">
                            <img src="@/images/donate.svg" alt="">
                            <p>사용 금액</p>
                        </div>
                        <h1>56142800원</h1>
                    </div>
                </div>
                <div class="index_status_big_box">
                    <div class="index_status_box_flex">
                        <div class="index_status_title">
                            <img src="@/images/list.svg" alt="">
                            <h1>폐기 현황 조회</h1>
                            <p>더보기 ></p>
                        </div>
                        <div class="index_status_box_wrapper">
                            <div class="index_status_menus">
                                <div class="index_status_menu"
                                :class="{'index_selected': status_selected === 1}"
                                v-on:click="status_selected = 1">
                                    <p class="index_status_menu_text">수락 대기</p>
                                </div>
                                <div class="index_status_menu"
                                :class="{'index_selected': status_selected === 2}"
                                v-on:click="status_selected = 2">
                                    <p class="index_status_menu_text">폐기 거절</p>
                                </div>
                                <div class="index_status_menu"
                                :class="{'index_selected': status_selected === 3}"
                                v-on:click="status_selected = 3">
                                    <p class="index_status_menu_text">결제 대기</p>
                                </div>
                                <div class="index_status_menu"
                                :class="{'index_selected': status_selected === 4}"
                                v-on:click="status_selected = 4">
                                    <p class="index_status_menu_text">폐기 대기</p>
                                </div>
                                <div class="index_status_menu"
                                :class="{'index_selected': status_selected === 5}"
                                v-on:click="status_selected = 5">
                                    <p class="index_status_menu_text">폐기 완료</p>
                                </div>
                            </div>
                            <div class="index_status_infor_wrapper">
                                <div class="index_status_infor_text">
                                    <h1>(주)삼성전자</h1>
                                    <p>300kg / 75000원</p>
                                    <img src="@/images/more.svg" alt="">
                                    
                                    <div class="index_status_infor_btn">
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
const { getList } = require('@/api.js')

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
            trashList: {},
            tmp: {},
            tmp_2: ""
        }
    },
    methods: {
        async changeMenu(index) {
            switch(index){
                case 1:
                    this.tmp_2 = "one"
                    break
                case 2:
                    this.tmp_2 = "two"
                    break
                case 3:
                    this.tmp_2 = "three"
                    break
                case 4:
                    this.tmp_2 = "four"
                    break
                case 5:
                    this.tmp_2 = "five"
                    break
            }
        }
    },
    mounted() {
        this.trashList = getList(localStorage.getItem('id'))
        tmp = {
            one: [ this.trashList[0], this.trashList[1], this.trashList[2], this.trashList[3], this.trashList[4] ],
            two: [ this.trashList[5], this.trashList[6], this.trashList[7], this.trashList[8], this.trashList[9] ],
            three: [ this.trashList[10], this.trashList[11], this.trashList[12], this.trashList[13], this.trashList[14] ],
            four: [ this.trashList[15], this.trashList[16], this.trashList[17], this.trashList[18], this.trashList[19] ],
            five: [ this.trashList[0], this.trashList[2], this.trashList[5], this.trashList[16], this.trashList[19] ]
        }
    }
}


</script>

<style>
@import '@/assets/index/style.css';
</style>