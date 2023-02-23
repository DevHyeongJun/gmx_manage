<!-- 패널 컴포넌트..!
    1. Tip 표출 기능 추가
-->

<template>
    <div class="gmx_container">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'GmxContainer',
    components: {
    },
    data() {
    },
    mounted() {
        console.log(this.$refs)
    },
};
</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */
    .gmx_container {
        border: 1px solid #e6e6e6;
        padding:10px;
        border-radius: 5px;
        margin:10px;
    }

    .gmx_container:hover {
        border : 1px solid var(--main-bg-color) ;
    }
</style>
