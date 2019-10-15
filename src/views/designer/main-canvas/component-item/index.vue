<template>
  <draggable v-model="list"
    v-bind="widgetDraggableOptions"
    class="component-item-wrapper"
    @add="addComponent">
    <div class="component-item-inner"
      v-for="(item, index) in list"
      @click.stop="selectWidgetHandle(item)"
      :key="item.key">
      <component class="component-item"
        :class="{
        'is-container': item.isContainer,
        active: item.key ===  selectWidget && selectWidget.key
      }"
        v-bind="item.props"
        :readonly="item.isFormItem"
        :is="item.component">
        <component-item v-if="item.children"
          :select.sync="selectWidget"
          :widgetList.sync="item.children"></component-item>
      </component>
      <div class="component-operations">
        <i @click="destroy(index)"
          class="el-icon-delete"></i>
      </div>
    </div>
  </draggable>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'component-item',
  props: {
    widgetList: {
      type: Array,
      default: () => ({})
    },
    select: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      list: this.widgetList,
      selectWidget: this.select,
      widgetDraggableOptions: {
        animation: 200,
        group: {
          name: 'people'
        },
        sort: false,
        disabled: false,
        ghostClass: 'component-ghost'
      }
    }
  },
  watch: {
    select(val) {
      this.selectWidget = val
    },
    selectWidget: {
      handler(val) {
        this.$emit('update:select', val)
      },
      deep: true
    },
    widgetList(val) {
      this.list = val
    },
    list: {
      handler(val) {
        this.$emit('update:widgetList', val)
      },
      deep: true
    }
  },
  methods: {
    addComponent(evt) {
      const { newIndex } = evt
      const data = this.list[newIndex]
      const newData = _.cloneDeep(data)
      newData.key = `${newData.component}_${Date.now()}`
      if (newData.isContainer) {
        newData.children = []
      }
      this.$set(this.list, newIndex, newData)
      this.selectWidget = newData
    },
    destroy(index) {
      this.widgetList.splice(index, 1)
    },
    selectWidgetHandle(item) {
      console.log('选择组件', item)
      this.selectWidget = item
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>