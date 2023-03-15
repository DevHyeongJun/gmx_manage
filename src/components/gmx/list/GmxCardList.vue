<!--  리스트 컴포넌트..!
    각 아이템 별로 속성 값 정의 필요
-->

<template>
    <div class="gmx_card_list">
        <div v-for="(item, i) in items" v-bind:key="i">
       
                <div :class="data.class" :style="{width : data.width}"  v-for="(data, j) in item" v-bind:key="data.k + j">
                    <button class="gmx_btn btn_main" v-on:click="data.button.onClick()" v-if="data.button">{{ data.v }}</button>
                    <span v-else>{{ data.v }}</span>
                </div>
        </div>
        <p v-if="items.length === 0" class="empty_text">
            <span>데이터가 존재하지 않습니다.</span>
        </p>
    </div>
</template>
<script>


import {computed} from 'vue';

export default {
    props: {
        
        svc : String,  
        keyCol : String,
        items: Array
    },

    setup() {
      
        const test = computed(()=>{ return ''});
        return {
            test
        }
    }
};

</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */

    .gmx_card_list > div {
        display: flex;
    }
    .gmx_card_list > div > div {
        height: 50px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        line-height:50px;
        text-overflow:ellipsis;
    }
    .gmx_card_list > div:hover {
        color:var(--main-bg-color);
        font-weight: bold;
    }

    .empty_text {
        padding-top: 10%;
        text-align: center;
    }
    .empty_text span {
        color:#999;
        
    }
</style>
