<!-- 패널 컴포넌트..!
    1. Tip 표출 기능 추가
-->
<template>
    <div :class="{'gmx_scroll' : isScroll === 'true'}" class="gmx_container">
        <slot></slot>
    </div>
</template>


<script>

export default {

    name: 'GmxContainer',
    props:{
        isScroll : {
            type: Boolean,
            default : false
        },
    },
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
        border : 1px solid var(--main-bg-color);
    }
    
    .gmx_scroll, .gmx_scroll.gmx_container:hover  {
        border: none;
        overflow: auto;
        margin:0;
        padding:0;
    }

    /* 아래의 모든 코드는 영역::코드로 사용 */
    .gmx_scroll::-webkit-scrollbar {
        width: 10px;  /* 스크롤바의 너비 */
    }

    .gmx_scroll::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: var(--main-bg-color); /* 스크롤바의 색상 */
        border-radius: 10px;
    }

    .gmx_scroll::-webkit-scrollbar-track {
        border-radius: 10px;
        background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
    }

</style>

