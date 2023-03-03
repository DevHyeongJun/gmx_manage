<!-- 전체 페이지..! -->

<template>
    <div class="wrap">
        <div class="top_menu">
            <TopMenu></TopMenu>
        </div>
        <div class="main">
            <MonitorPage></MonitorPage>
        </div>
    </div>
</template>

<script>

import {computed} from 'vue';

import TopMenu from '@/components/layout/menu/TopMenu.vue';
import MonitorPage from '@/components/layout/page/MonitorPage.vue';

const useMonitor = () => {
    const test = computed(()=>{ return ''});

    return test;
}

export default {

    components: { 
        TopMenu,
        MonitorPage
     },

    setup() {
        return {
            useMonitor
        }
    }
};
</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */
    .wrap { height:100%}
    .main {height:calc(100% - 68px); display: flex; flex-direction: column; padding:10px;}
</style>
