<template>
  <draggable
    v-model="list"
    tag="div"
    v-bind="widgetDraggableOptions"
    class="component-item-wrapper"
    @add="addComponent"
  >
    <template>
      <div
        class="component-item"
        :class="{
        'is-container': item.isContainer,
        'not-children': item.isContainer &&
                        item.children && 
                        item.children.length === 0
      }"
        v-for="(item, index) in list"
        :key="item.key"
      >
        <component :is="item.component">
          <component-item
            v-if="item.children && item.children.length"
            :widgetList="item.children"
          ></component-item>
        </component>
        <div class="component-operations">
          <el-button
            @click="destroy(index)"
            type="text"
            icon="el-icon-delete"
          ></el-button>
        </div>
      </div>
    </template>
    <!-- <div class="not-widget">
      请将组件拖入到这里
    </div> -->
  </draggable>
</template>

<script>
import _ from "lodash";

export default {
  name: "component-item",
  props: {
    widgetList: {
      type: Array,
      default: () => ({})
    }
  },

  data() {
    return {
      list: this.widgetList,
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
  watch: {
    widgetList(val) {
      this.list = val;
    },
    list: {
      handler(val) {
        this.$emit("update:widgetList", val);
      },
      deep: true
    }
  },
  methods: {
    addComponent(evt) {
      console.log("添加组件", evt);
    },
    destroy(index) {
      this.widgetList.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>