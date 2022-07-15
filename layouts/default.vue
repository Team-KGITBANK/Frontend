<template>
    <div class="index">
        <div class="index_wrapper">
            <div class="index_icon_wrapper">

                <!-- 대쉬 버튼 -->
                <NuxtLink to="/dashboard" class="index_icon"
                :class="{'index_selected': this.icon_selected === 1}"
                v-on:click.native="icon_selected = 1">
                    <img src="@/images/home.svg" alt="">
                    <p class="index_icon_subtitle">Dashboard</p>
                </NuxtLink>

                <!-- 검색 버튼 -->
                <NuxtLink to="/search" class="index_icon"
                :class="{'index_selected': this.icon_selected === 2}"
                v-on:click.native="icon_selected = 2">
                    <img src="@/images/search.svg" alt="">
                    <p class="index_icon_subtitle">Search</p>
                </NuxtLink>

                <!-- 현황 조회 버튼 -->
                <NuxtLink to="/status" class="index_icon"
                :class="{'index_selected': this.icon_selected === 3}"
                v-on:click.native="icon_selected = 3">
                    <img src="@/images/list.svg" alt="">
                    <p class="index_icon_subtitle">Status</p>
                </NuxtLink>

                <!-- 환경 설정 버튼 -->
                <Nuxt-link to="/settings" class="index_icon"
                :class="{'index_selected': this.icon_selected === 4}"
                v-on:click.native="icon_selected = 4">
                    <img src="@/images/setting.svg" alt="">
                    <p class="index_icon_subtitle">Settings</p>
                </Nuxt-link>

            </div>

            <Nuxt/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {  
            icon_selected: 1
        }
    },
    mounted() {
    }
}
</script>

<style>

</style>