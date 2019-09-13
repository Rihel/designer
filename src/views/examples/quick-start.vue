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


export default {
  name: 'home',
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

</style>
