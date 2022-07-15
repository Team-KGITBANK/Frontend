<template>
  <div class="index_search_search_box">
                    <div class="index_search_search_box_title">
                        <img src="@/images/ok_human.svg" alt="">
                        <h1 style="font-size: 16px;">빠른 업자 찾기</h1>
                        <p style="margin-left: auto;">더보기(138) ></p>
                    </div>
                    <div class="text">
                        <div class="index_search_search_bottom_wrapper">
                            <div class="index_search_search_box_bottom">
                                <div class="index_search_search_box_bottom_list">
                                    <div class="index_search_search_bottom_box" 
                                    :class="{'index_search_selected': this.search_selected === 1}"
                                    v-on:click="search_selected = 1">
                                        <img src="@/images/note.svg" alt="">
                                        <p>전체보기</p>
                                    </div>
                                    <div class="index_search_search_bottom_box"
                                    :class="{'index_search_selected': this.search_selected === 2}"
                                    v-on:click="search_selected = 2">
                                        <img src="@/images/add.svg" alt="">
                                        <p>최대 용량</p>
                                    </div>
                                    <div class="index_search_search_bottom_box"
                                    :class="{'index_search_selected': this.search_selected === 3}"
                                    v-on:click="search_selected = 3">
                                        <img style="margin-left: 5px" src="@/images/trashcan.svg" alt="">
                                        <p>소량 폐기물</p>
                                    </div>
                                    <div class="index_search_search_bottom_box"
                                    :class="{'index_search_selected': this.search_selected === 4}"
                                    v-on:click="search_selected = 4">
                                        <img src="@/images/flash.svg" alt="">
                                        <p>친환경 인증</p>
                                    </div>
                                    <div class="index_search_search_bottom_box"
                                    :class="{'index_search_selected': this.search_selected === 5}"
                                    v-on:click="search_selected = 5">
                                        <img src="@/images/battery.svg" alt="">
                                        <p>가성비</p>
                                    </div>
                                </div>
                                <div class="index_search_search_bottom_right">
                                    <div class="index_search_company_infor">
                                        <div class="index_search_company_infor_more">
                                            <div class="index_search_company_infor_more_inline">                                
                                                <p class="index_search_company_infor_text">(주)마스터환경</p>
                                                <div class="index_search_company_infor_svg">
                                                    <img :src="require(`@/images/${star[0]}`)" v-on:click="changeStar(0)">
                                                    <img :src="require(`@/images/${star[1]}`)" v-on:click="changeStar(1)">
                                                    <img :src="require(`@/images/${star[2]}`)" v-on:click="changeStar(2)">
                                                    <img :src="require(`@/images/${star[3]}`)" v-on:click="changeStar(3)">
                                                    <img :src="require(`@/images/${star[4]}`)" v-on:click="changeStar(4)">
                                                    <img src="@/images/more.svg">
                                                </div>
                                            </div>
                                            <div class="index_search_company_infor_more_inline">
                                                <div class="index_search_company_infor_svg">
                                                    <img src="@/images/empty_trash.svg" >
                                                    <img src="@/images/empty_trash.svg" >
                                                    <img src="@/images/empty_trash.svg" >
                                                    <img src="@/images/empty_trash.svg" >
                                                </div>
                                                <p class="index_search_company_infor_description">(최소 물량: 100kg / 최대 물량: 400kg)</p>
                                            </div>
                                        </div>
                                        <div class="index_search_company_infor_price_wrapper">
                                            <p class="index_search_company_infor_description index_search_company_infor_price">가격: 35000원 / 100kg</p>
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
    data(){
        return{
            search_selected: 1,
            star: [
                "empty_star.svg",
                "empty_star.svg",
                "empty_star.svg",
                "empty_star.svg",
                "empty_star.svg",
            ]
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
    }
}
</script>

<style>
@import "@/assets/search/style.css";
</style>