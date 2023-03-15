<!-- 카운트 박스 컴포넌트.!-->

<template>
    <div class="count_box_container" :class="[count > 0 ? 'active': '']">
        <GmxContainer>
            <div class="">
                <p class="count_box_title">
                    <strong>
                        {{title}}
                    </strong>
                </p>
                <p class="count_box_value">
                    <strong class="">
                        {{count}}
                    </strong>
                </p>
            </div>
        </GmxContainer>
    </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import GmxContainer from '@/components/gmx/container/GmxContainer.vue';

/**
 * svc 정보로 반출 카운트 값으로 리턴한다.
 * 
 * @param {*} svc 
 *  - 0 : 반출 중
 *  - 1 : 반출 실패
 *  - 2 : 암호화 중
 *  - 3 : 암호화 실패
 *  - 4 : 재 암호화 중
 *  - 5 : 재 암호화 실패
 */

export default {

    props:{
        title : {
            type: String,
            default : ''
        },
        svc : {
            type: String, 
            required: true,
        }
    },

    components: {
        GmxContainer
    },

    setup(props) {
       const store = useStore();
       const count = computed(() => store.getters['monitor/getMonitorCount'][props.svc]||0);

       return {
            count
       }
    },
    
};
</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */
    .count_box_container {
        flex:1;
        text-align: center;;
    }

    .count_box_title {
        height:50px;
    }

    .count_box_value {
        font-size:30px;
       
    }

    strong {
        color : var(--main-un-active-color)
    }

    .count_box_container.active strong {
        color : #000;
    }

    .count_box_container.active .count_box_value strong {
        color : var(--main-bg-color);
    }

</style>
