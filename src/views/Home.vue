<template>
  <div class="home">
    <draggable class="list-group" tag="ul" v-model="list"
    
      :animation="200"
      group="description"
      :disabled="false"
      ghost-class="ghost"
    >
      <li class="list-item" 
        v-for="(item, index) in list" 
        :key="index">{{item.name}}</li>
    </draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  name: 'home',
  components: {
    Draggable
  },
  data() {
    return {
      list: [
        { name: '李海' },
        { name: '黄斯' },
        { name: '李煌' },
        { name: '李宇信' },
      ]
    }
  }
}
</script>
<style lang="scss">
.ghost{
  opacity: 0.5;
  background: red;
}
.list-group{
  width: 300px;
  list-style: none;
  min-width: 20px;;
  li{
    cursor: move;
    padding: 10px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    border: 1px solid #eee;
  }
}
</style>
