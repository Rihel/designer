<template>
  <div class="config-container">
    <el-form label-position="top">
      <el-form-item label="标签对齐方式">
        <el-radio-group v-model="data.labelPosition">
          <el-radio-button
            v-for="item in labelPositionOptions"
            :key="item.value"
            :label="item.value"
          >
            {{item.label}}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="表单字段宽度">
        <el-input-number
          v-model="data.labelWidth"
          :min="0"
          :max="200"
          :step="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="组件尺寸">
        <el-radio-group v-model="data.size">
          <el-radio-button
            v-for="item in sizeOptions"
            :key="item.value"
            :label="item.value"
          >
            {{item.label}}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      sizeOptions: [
        { label: "普通", value: "medium" },
        { label: "小", value: "small" },
        { label: "超小", value: "mini" }
      ],
      labelPositionOptions: [
        { label: "左对齐", value: "left" },
        { label: "右对齐", value: "right" },
        { label: "顶部对齐", value: "top" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>