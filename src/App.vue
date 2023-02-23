
<template>
  <MainWrap></MainWrap>
</template>

<script>

import MainWrap from '@/components/layout/MainWrap.vue';
import  '@/assets/css/reset.css'; //전역 CSS 설정


export default {
  name: 'App',
  components: {
    MainWrap
  },
  data() {
    return {};
  },
};

</script>

<style>
  /* 스타일 설정 금지..! */
  #app{
    height:100%;
    width:100%;
  }
</style>