<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from './views/Footer'
import vHeader from './views/Header'

export default {
  name: 'App',
  components: {
    vFooter,
    vHeader
  }
}
</script>

<style lang="scss">

@import './assets/layui/css/layui.css';
@import './assets/css/global.css';
@import './assets/css/main.css';
// @import "./assets/layui/css/modules/layer/default/layer.css";

// 公用样式
.svg {
  position: relative;
  top: -4px;
}
</style>
