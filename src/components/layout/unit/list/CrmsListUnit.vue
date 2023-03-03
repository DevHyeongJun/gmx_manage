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

import GmxContainer from '@/components/gmx/container/GmxContainer.vue';
import GmxCardList from '@/components/gmx/list/GmxCardList.vue';
import {RequestAPI} from '@/js/request/requsetApI.js';

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
    
    data() {
        return {
            stat : true,
            items : [],
        }
    },

    mounted() {
      this.getCrmsList();
   //   setInterval(this.getCrmsList, 5000);
    },

    methods: {
        /**
         * 서비스 상태 정보를 가져온다.
         */
         getCrmsList() {

            const param = {
                key : this.svc
            }
            
            RequestAPI.getCrmsList(param, (result) => {
                
                const list = [];
                
                for ( const index in result ) {
                    
                    const item = result[index];
                    list.push([
                    {
                        k : 'rqstkey'
                        , v : item.rqstkey
                        , class : ''
                        , width : '15%'
                    },
                    {
                        k : 'cctvlist'
                        , v : item.cctvlist
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
                                alert(item.rqstkey + '*' + item.avikey);
                                alert(this.svc);
                            }

                        }
                    }]);
                }
                this.items = list;
            });
        },

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
