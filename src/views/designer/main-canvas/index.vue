<template>
  <div class="canvas-container">
    <component-item :widgetList.sync="widgetList"></component-item>
  </div>
</template>

<script>
import _ from "lodash";
import ComponentItem from "./component-item";

export default {
  props: {
    // select: Object,
    config: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    ComponentItem
  },
  data() {
    return {
      // selectWidget: this.select,
      widgetList: [],
      widgetDraggableOptions: {
        animation: 200,
        group: {
          name: "people"
        },
        disabled: false,
        ghostClass: "ghost"
      }
    };
  },
  methods: {
    addComponent(evt) {
      /**
       * 从组件区域拿过来的数据是多层级的对象,
       * 如果修改画布区的数据，可能导致左侧的组件区
       * 的数据也会改变，最好的做法就是深拷贝一次
       */
      const { newIndex } = evt;
      const data = this.widgetList[newIndex];
      console.log("添加的数据", data);
      const newData = _.cloneDeep(data);
      newData.key = `${newData.type}_${Date.now()}`;

      // 通过vue的$set方法去更新
      // this.$set(this.widgetList, newIndex, newData);
    },
    destroy(index) {
      this.widgetList.splice(index, 1);
    }
  }
};
</script>

<style>
@import "./style.scss";
</style>