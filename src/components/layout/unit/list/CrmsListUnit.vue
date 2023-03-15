<!-- 패키지 컴포넌트..! -->

<template>
    <div class="list_container">
        <GmxContainer>
            <p class="title"><strong>{{title}}</strong></p>
            <GmxContainer isScroll=true>
                <GmxCardList isScroll=true :items="items" :svc="svc"></GmxCardList>
            </GmxContainer>
        </GmxContainer>
    </div>

</template>

<script>

import {ref} from 'vue';
import GmxContainer from '@/components/gmx/container/GmxContainer.vue';
import GmxCardList from '@/components/gmx/list/GmxCardList.vue';
import {RequestAPI} from '@/js/request/requsetApI.js';

const getCrmsList = (svc, items) => {

    const param = {
        key : svc
    }

    RequestAPI.getCrmsList(param, (result) => {
        
        items.value = [];
        for ( let index in result ) {
            
            const item = result[index];
            items.value.push([
            {
                k : 'rqstkey'
                , v : item.rqstkey
                , class : ''
                , width : '15%'
            },
            {
                k : 'workkey'
                , v : item.workkey
                , class : ''
                , width : '15%'
            },
            {
                k : 'cctvNm'
                , v : item.cctvNm
                , class : ''
                , width : '60%'
            },
            {
                k : 'ownerid'
                , v : item.ownerid
                , class : ''
                , width : '10%'
            },
            {
                k : 'btn'
                , v : '재반출'
                , width : '15%'
                , button : {
                    onClick : () =>{
                        modData(item.rqstkey, item.avikey, item.workkey, svc, items);
                    }
                }
            }]);
        }
        
    });

    return items;
    
};


const modData = (rqstKey, aviKey, workKey, type, items) => {
    RequestAPI.modData({rqstKey, aviKey, workKey, type}, (result) => {
        if ( result === "1") {
            getCrmsList(type, items);
        }
    });
}

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
        GmxContainer,
        GmxCardList,
    },
    
    setup(props){

        let items = ref([]);
        getCrmsList(props.svc, items);
        // setInterval(() => {
        //    getCrmsList(props.svc, items);
        // }, 5000);
        
        return {
            items
        }
    }
};

</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */
.list_container {
    height:calc(100% - 30px);
}

.list_container > div {
    height:calc(100% - 12px);
    
}
.list_container > div > div {
    height:calc(100% - 64px);
}

.title {
    height:30px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 10px;
}

</style>
