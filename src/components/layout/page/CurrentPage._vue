<!-- 전체 페이지..! -->

<template>
   <div>
        <div class="proj_current_wrap">
            <div>
                <div class="currnet_color_1">
                    <p>진행중</p>
                    <strong>{{projStat['진행중']}}</strong>
                </div>
                <div class="currnet_color_2">
                    <p>유지보수</p>
                    <strong>{{projStat['유지보수']}}</strong>
                </div>
                <div class="currnet_color_3">
                    <p>대기</p>
                    <strong>{{projStat['대기']}}</strong>
                </div>
            </div>
        </div>
        <div class="proj_member_list">
            <DataTable  :rowHover="true" :value="memberList" class="p-datatable-customers" :rows="10" :loading="loading"
                responsiveLayout="scroll" breakpoint="240px" @row-click="onRowClick"  v-model:selection="selectedProduct1" selectionMode="single" >
                <template #empty>
                    데이터가 존재하지 않습니다.
                </template>
                <template #loading>
                    로딩 중..
                </template>
                <!-- <Column field="코드" sortable header="코드"></Column> -->
                <Column field="이름" filterMatchMode="contains" headerStyle="background:none; border-bottom:2px solid #d8d8d8; text-align:center" bodyStyle="text-align:center;" sortable header="이름">
                    <template #body="{data}">
                        <span >{{data.이름}}</span>
                    </template>
                </Column>
                <Column field="진행중" sortable header="진행중" headerStyle="background:none; border-bottom:2px solid #d8d8d8;" bodyStyle="text-align:center;" ></Column>
                <!-- <Column field="PM" sortable header="PM"></Column> -->
                <Column field="유지보수" sortable header="유지보수" headerStyle="background:none; border-bottom:2px solid #d8d8d8" bodyStyle="text-align:center;" :filterMenuStyle="{'width':'14rem'}">
                </Column>
                <Column field="대기" sortable header="대기" headerStyle="background:none; border-bottom:2px solid #d8d8d8" bodyStyle="text-align:center;" :filterMenuStyle="{'width':'14rem'}">
                </Column>
            </DataTable>
        </div>
   </div>
</template>

<script>
import { ref } from 'vue';

import {NotionApi} from '@/js/request/notionApi.js';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
    name: 'CurrentPage',
    components: {
        DataTable,
        Column
    },

    setup() {
        const selectedProduct1 = ref();

        return { selectedProduct1};
    },
    
    mounted() {
        NotionApi.getProjInitData((data) => {
            
            this.projStat = NotionApi.getProjCurrent(data);
            this.memberList = NotionApi.getProjMemberList(data);

        });
    },
    data() {
        return {
            selected : '',
            projStat: {},
            memberList : []
        }
    },

    methods : {
        onRowClick(c) {
           
            this.$store.dispatch('search/setSearchTXT', c.data['이름']);
        },
        onRowSelect(c) {
            this.selected = c.data['이름'];
            alert(this.selected);
            this.$store.dispatch('search/setSearchTXT', c.data['이름']);
        }
    },

    
};
</script>

<style scoped>
    .proj_current_wrap {
        border-bottom:1px solid #e9ecef;
        padding-bottom:20px;
        margin-bottom:10px;
    }
    .proj_current_wrap > div {
        display: flex;
        margin-top:10px;
    }
    .proj_current_wrap > div > div{
        flex: 1;
        text-align: center;
        border-radius: 8px;
        border: none;
        margin:0 10px;
        height:100px;
        font-size:20px;
        font-weight: bold;
    }


    .proj_current_wrap > div > div > p{
        padding:12px 0;
    }

    .proj_current_wrap > div > div > strong{
        font-size:25px;
    }

    .currnet_color_1 {
        background:#c8e6c9;
        color:#256029;
    }
    .currnet_color_2 {
        background: #feedaf;
        color: #8a5340;
    }
    .currnet_color_3 {
        background: #ffcdd2;
        color: #c63737;
    }

    .p-datatable .p-datatable-tbody > tr.p-highlight * {
        font-weight: bold;
    }
</style>