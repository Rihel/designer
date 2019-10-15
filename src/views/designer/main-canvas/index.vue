<template>
  <div class="canvas-container">
    <component-item :select.sync="selectWidget"
      :widgetList.sync="widgetList"></component-item>
  </div>
</template>

<script>
import _ from 'lodash'
import ComponentItem from './component-item'

export default {
  props: {
    select: Object,
    config: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    ComponentItem
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
    }
  },
  data() {
    return {
      selectWidget: this.select,
      widgetList: []
    }
  },
  methods: {}
}
</script>

<style>
@import './style.scss';
</style>