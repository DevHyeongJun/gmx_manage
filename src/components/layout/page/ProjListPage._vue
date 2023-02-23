<!-- 전체 페이지..! -->

<template>
    <DataTable :value="projList" :paginator="true" class="p-datatable-customers" :rows="10" v-model:filters="filters" :rowHover="true" v-model:selection="selectedCustomers" :loading="loading"
         responsiveLayout="scroll" breakpoint="240px" :globalFilterFields="['프로젝트명', '담당자', '상태']"
         @row-click="onRowClick">
         <template #header>
             <div class="flex flex-column flex-row justify-content-center align-items-center">
             
                 <span class="p-input-icon-left">
                     <i class="pi pi-search" />
                     <InputText style="width:530px" class="p-inputtext p-component" v-model="filters['global'].value" @keyup="setChangeSearch" placeholder="프로젝트명 또는 담당자를 입력해주세요." />
                 </span>
             </div>
         </template>
         <template #empty>
             데이터가 존재하지 않습니다.
         </template>
         <template #loading>
             로딩 중..
         </template>
         <!-- <Column field="코드" sortable header="코드"></Column> -->
         <Column field="프로젝트명" filterMatchMode="contains" class="text_cut" headerStyle="background:none; border-bottom:2px solid #d8d8d8" sortable header="프로젝트명">
             <template #body="{data}">
                 <span >{{data.프로젝트명}}</span>
             </template>
         </Column>
         <Column field="담당자" sortable header="담당자" headerStyle="background:none; border-bottom:2px solid #d8d8d8" ></Column>
         <!-- <Column field="PM" sortable header="PM"></Column> -->
         <Column field="상태" sortable :options="statuses" header="상태" headerStyle="background:none; border-bottom:2px solid #d8d8d8" :filterMenuStyle="{'width':'14rem'}">
             
             <template #body="{data}">
                 <span :class="'product-badge status-style-'+this.getStatusCode(data.상태)">{{data.상태}}</span>
             </template>
         </Column>
     </DataTable>
     <!-- <DynamicDialog ref="dialog" v-if="showCard"/>
         -->
 </template>
 
 <script>
 
 import InputText from 'primevue/inputtext';
 import DataTable from 'primevue/datatable';
 import Column from 'primevue/column';
 import {FilterMatchMode,FilterOperator} from 'primevue/api';
 
 import {NotionApi} from '@/js/request/notionApi.js';
 import projInfo from '@/components/layout/dialog/projInfo.vue';
 
 export default {
     name: 'ProjListPage',
     components: {
         DataTable,
         Column,
         InputText
     },
     watch: {
         searhchTXT: function (newVal) {
            
            this.filters['global'].value = newVal;

            this.searchHandler(newVal);
         }
     },

     computed: {
        searhchTXT () {
            return this.$store.getters['search/getSearchTXT'];
        }
    },

     mounted() {
 
         this.getProjInit();
     },
 
     data() {
         
         return {
            projData : [],
             layerList : [],
             projList: [],
             statuses : ['유지보수', '대기', '진행중'],
             filters: {
                 'global': {value: '', matchMode: FilterMatchMode.CONTAINS},
                 'name': {operator: FilterOperator.AND, constraints: [{value: '', matchMode: FilterMatchMode.STARTS_WITH}]},
             },
         }
     },
 
     methods : {
         getProjInit() {
             NotionApi.getProjInitData((data) => {
                console.log(data);
                this.projData = data;

                 this.projList = (NotionApi.getProjList(data));
                 const _searchTxt = this.$store.getters['search/getSearchTXT'];

                 this.projList.forEach((item) => {
                     const name = item['담당자'];
                     const projName = item['프로젝트명'];
                     const stat = item['상태'];
                     const coord = [Number(item['위도']), Number(item['경도'])];

                     if ( name.indexOf(_searchTxt) != -1 ||
                            projName.indexOf(_searchTxt) != -1 ||
                            stat.indexOf(_searchTxt) != -1 
                        ) {
                         this.layerList.push( { code : item['코드'], name, projName, stat, coord} );
                     }
                 });
                 
                 this.$store.dispatch('map/addPoint', {clusterid:'gmx_cluster', id:'gmx_point', layerList : this.layerList});
             }, true);
         },
         
         searchHandler(updatedText) {
            this.$store.dispatch('search/setSearchTXT', updatedText);

            const newList = this.layerList.filter((item) => {
               
                const name = item['name'];
                const projName = item['projName'];
                const stat = item['stat'];
                
                if ( 
                    name.indexOf(updatedText) != -1 ||
                    projName.indexOf(updatedText) != -1 ||
                    stat.indexOf(updatedText) != -1 
                ) {
                    return true;
                } else {
                    return false;
                }
             });
             this.$store.dispatch('map/addPoint', {clusterid:'gmx_cluster', id:'gmx_point', layerList : newList});
         },

         setChangeSearch(event) {

            const updatedText = event.target.value;
            this.searchHandler(updatedText);
         },
         
         getStatusCode : (statText) => {
             let code = 0;
             switch ( statText ) {
                 case '유지보수' : 
                 code = 1;
                 break;
                 case '진행중' : 
                 code = 2;
                 break;
             }
             return code;
         }, 
 
         onRowClick()   {
             const dialogRef = this.$dialog.open(projInfo, {
                 props: {
                     header: 'Information',
                     modal: true,
                     dismissableMask: true
                 },
                 data: {
                     totalProducts: this.products ? this.products.length : 0
                 }
             });
 
             console.log(dialogRef);
         },
 
         onShow() {
             const dialogRef = this.$dialog.open(projInfo, {
                 props: {
                     header: 'Product List',
                     style: {
                         width: '50vw',
                     },
                     breakpoints:{
                         '960px': '75vw',
                         '640px': '90vw'
                     },
                     modal: true
                 },
                
                 onClose: (options) => {
                     const data = options.data;
                     if (data) {
                         const buttonType = data.buttonType;
                         const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };
 
                         this.$toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
                     }
                 }
             });
 
             console.log(dialogRef);
         }
     },
 };
 </script>
 
 
 <style scoped>
     .text_cut span {
         display: block;
         white-space: nowrap;
         width:300px;
         padding:0 5px;
         overflow:hidden;
         text-overflow:ellipsis;
     }
     .product-badge {
         border-radius: 2px;
         padding: .25em 0.5rem;
         text-transform: uppercase;
         font-weight: 700;
         font-size: 12px;
         letter-spacing: .3px;
         width: 66px;
         display: inline-block;
         text-align: center;
     }
     .status-style-0 {
         background: #ffcdd2;
         color: #c63737;
     }
     .status-style-1 {
         background: #feedaf;
         color: #8a5340;
     }
     .status-style-2 {
         background: #c8e6c9;
         color: #256029;
     }
 </style>
 <style lang="scss" scoped>
 ::v-deep(.p-paginator) {
     .p-paginator-current {
         margin-left: auto;
     }
 }
 
 ::v-deep(.p-progressbar) {
     height: .5rem;
     background-color: #D8DADC;
 
     .p-progressbar-value {
         background-color: #607D8B;
     }
 }
 
 ::v-deep(.p-datepicker) {
     min-width: 25rem;
 
     td {
         font-weight: 400;
     }
 }
 
 ::v-deep(.p-datatable.p-datatable-customers) {
     .p-datatable-header {
         padding: 1rem;
         text-align: left;
         font-size: 1.5rem;
     }
 
     .p-paginator {
         padding: 1rem;
     }
 
     .p-datatable-thead > tr > th {
         text-align: left;
     }
 
     .p-datatable-tbody > tr > td {
         cursor: auto;
     }
 
     .p-dropdown-label:not(.p-placeholder) {
         text-transform: uppercase;
     }
 }
 </style>