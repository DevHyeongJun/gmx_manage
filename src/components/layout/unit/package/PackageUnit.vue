<!-- 패키지 컴포넌트..! -->

<template>
    <div class="package_container">
        <GmxContainer>
            <div>
                <p class="package_content">
                    <strong>
                        {{title}}
                    </strong>
                    <span class="stat_unit" :class="[state ? 'svc_on': 'svc_off']"></span>
                </p>
            </div>
            <div class="btn_group">
                <button class="gmx_btn btn_main" v-on:click="setServiceCmd('1', svc)">시작</button>
                <button class="gmx_btn btn_gray" v-on:click="setServiceCmd('2', svc)">종료</button>
            </div>
        </GmxContainer>
    </div>
</template>

<script>

import GmxContainer from '@/components/gmx/container/GmxContainer.vue';
import {RequestAPI} from '@/js/request/requsetApI.js';

export default {
    name: 'PackageUnit',
    props:{
        title : {
            type: String,
            default : ''
        },
        state : {
            type: Boolean,
            default : false
        },
        svc : {
            type: String, 
            required: true,
        },
        getState : {
            type: Function,
        }
    },
    components: {
        GmxContainer
    },

    setup(props) {
                
        const setServiceCmd = (action) => {
            
            const param  = {
                type : props.svc,
                action
            }

            RequestAPI.setServiceCmd(param, (json) => {
                if ( json === 'true' ) {
                    
                    props.getState();
                    console.log('123');
                }
            });
        }

        return {
            setServiceCmd
        }
    },
};
</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */
    .package_container{
        flex:1;
    }

    .package_content strong {
        margin-right:10px;
    }

    .stat_unit {
        width:14px;
        height:14px;
        border-radius: 14px;
        display: inline-block;
    }
    .stat_unit.svc_on { 
        background-color: var(--main-bg-color);
    }
    
    .stat_unit.svc_off { 
        background-color: #777;
    }
    .btn_group {
        display: flex;
        margin-top: 30px;
        justify-content: space-between;
    }
    button {
        background : var(--main-bg-color);
        padding:10px;
        text-align: center;
        color:#fff;
        width: calc(50% - 5px);
    }

</style>
