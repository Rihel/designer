<template>
  <el-row :gutter="20" type="flex">
    <el-col :span="6">
      <draggable class="list-group"
        v-model="leftList"
        tag="ul"
        v-bind="leftOptions"
      >
        <li class="list-item"
          v-for="item in leftList"
          :key="item.id"
        >
          {{item.name}}
        </li>
      </draggable>
    </el-col>
    <el-col :span="6">
      <draggable class="list-group"
        v-model="rightList"
        tag="ul"
        v-bind="rightOptions">
        <li class="list-item"
          v-for="item in rightList"
          :key="item.id"
        >
          {{item.name}}
        </li>
      </draggable>
    </el-col>
    <el-col :span="6">
      <json-stringify :data="leftList"></json-stringify>
    </el-col>
    <el-col :span="6">
      <json-stringify :data="rightList"></json-stringify>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      leftOptions: {
        animation: 200,
        group: {
          name: 'people',
          pull: 'clone',
          put: true
        },
        disabled: false,
        ghostClass: 'ghost'
      },
      rightOptions: {
        animation: 200,
        group: 'people',
        disabled: false,
        ghostClass: 'ghost'
      },
      leftList: [
        { name: '张三', id: 1 },
        { name: '李四', id: 2 },
        { name: '王五', id: 3 },
      ],
      rightList: [
        { name: '李煌', id: 4 },
        { name: '李海', id: 5 },
        { name: '黄斯', id: 6 },
      ]
    }
  }
}
</script>

<style lang="scss">

</style>