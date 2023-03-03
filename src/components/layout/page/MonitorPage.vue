<!-- 모니터링 페이지..! -->

<template>
    <div class="monitor_wrap">
        <!-- RestartGroup -->
        <div class="package_wrap">
            <!-- 반출 컨테이너 -->
            <PackageUnit svc="B" title="반출 서비스"></PackageUnit>
            <!-- 암호화 컨테이너 -->
            <PackageUnit svc="E"  title="암호화 서비스"></PackageUnit>
            <!-- 재암호화 컨테이너 -->
            <PackageUnit svc="R"  title="재암호화 서비스"></PackageUnit>
        </div>
        <!-- CountGroup -->
        <div class="countbox_wrap">
            <!-- 반출 중 -->
            <CountBoxUnit svc="0" title="반출 중"></CountBoxUnit>
            <!-- 처리 실패 -->
            <CountBoxUnit svc="1"  title="처리 실패"></CountBoxUnit>
            <!-- 암호화 중 -->
            <CountBoxUnit svc="2"  title="암호화 중"></CountBoxUnit>
            <!-- 암호화 실패 -->
            <CountBoxUnit svc="3"  title="암호화 실패"></CountBoxUnit>
            <!-- 재 암호화 중
            <CountBoxUnit svc="4"  title="재 암호화 중"></CountBoxUnit> -->
            <!-- 재 암호화 실패
            <CountBoxUnit svc="5"  title="재 암호화 실패"></CountBoxUnit> -->
        </div>

        <!-- TableGroup 
            1. 재반출 / 재암호화 가능 리스트 출력
            2. 페이징 처리
            3. 각 row 별 버튼 삽입.
        -->
    </div>
    <div class="list_wrap">
        <div>

            <div>
                <CrmsListUnit svc="0" title="백업 중"></CrmsListUnit>
                <CrmsListUnit svc="1" title="백업 실패"></CrmsListUnit>
            </div>
        </div>
        <div>
            <div>
                <CrmsListUnit svc="3" title="암호화 중"></CrmsListUnit>
                <CrmsListUnit svc="4" title="암호화 실패"></CrmsListUnit>
            </div>
        </div>
    </div>

</template>

<script>

import PackageUnit from '@/components/layout/unit/package/PackageUnit.vue';
import CountBoxUnit from '@/components/layout/unit/count/CountBoxUnit.vue';
import CrmsListUnit from '@/components/layout/unit/list/CrmsListUnit.vue';

export default {
    name: 'MonitorPage',
    components: {
        PackageUnit,
        CountBoxUnit,
        CrmsListUnit
    },
    data() {

    },
    mounted() {
    },
};
</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */
    .monitor_wrap {
    }

    .monitor_wrap > div{
        display:flex;
    }

    .list_wrap {
        
        height: calc(100% - 262px);
    }

    .list_wrap > div { 
        height : 50%;
    }

    .list_wrap > div > div {
        display: flex;
        height:100%;
    }

    .list_wrap > div > div > div{
        flex:1;
    }
</style>
