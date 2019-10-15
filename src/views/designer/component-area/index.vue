<template>
  <draggable class="list-group"
    v-model="componentList"
    v-bind="componentDraggableOptions"
    @start="startHandler"
    @clone="cloneHandler">
    <li class="list-item"
      v-for="item in componentList"
      :key="item.component">{{item.label}}</li>
  </draggable>
</template>

<script>
import ComponentList from './componentList'

export default {
  data() {
    return {
      componentDraggableOptions: {
        animation: 200,
        group: {
          name: 'people',
          pull: 'clone',
          put: false
        },
        sort: false,
        disabled: false,
        ghostClass: 'ghost'
      },
      componentList: ComponentList
    }
  },
  methods: {
    startHandler(evt) {
      console.log(evt)
    },
    cloneHandler(evt) {
      console.log('clone', evt)
    }
  }
}
</script>

<style>
</style>