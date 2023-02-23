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

import TopMenu from '@/components/layout/menu/TopMenu.vue';
import MonitorPage from '@/components/layout/page/MonitorPage.vue';

export default {
    name: 'MainWrap',
    components: {
        TopMenu,
        MonitorPage
    },
    data() {
    },

    mounted() {
    },
};
</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */


</style>
