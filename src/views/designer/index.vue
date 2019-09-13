<template>
  <el-container class="designer">
    <el-aside class="designer-components">
      <component-area></component-area>
    </el-aside>
    <el-main class="designer-canvas">
      <main-canvas
        :select.sync="widgetSelect"
        :config="configData"
      ></main-canvas>
    </el-main>
    <el-aside class="designer-config">
      <config-area :data="configData"></config-area>
    </el-aside>
  </el-container>
</template>

<script>
import ComponentArea from "./component-area";
import MainCanvas from "./main-canvas";
import ConfigArea from "./config-area";
export default {
  name: "designer",
  components: {
    ComponentArea,
    MainCanvas,
    ConfigArea
  },
  data() {
    return {
      widgetSelect: null,
      configData: {
        labelPosition: "",
        labelWidth: 10,
        size: "mini"
      }
    };
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>