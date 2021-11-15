<template>
  <button
  class="j-button"
  :class="[typeClass, plainClass, roundClass, circleClass, sizeClass]"
  :disabled="disabled"
  @click="handClick"
  >
  <!-- 如果未传入icon则隐藏i -->
  <i v-if="icon" :class="icon"></i>
  <!-- 如果未传入插槽则隐藏span -->
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>
export default {
  name: "j-button",
  // 接收父组件传入的属性
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
  },
  computed: {
    typeClass() {
      return `j-button-${this.type}`;
    },
    plainClass() {
      return {
        'is-plain': this.plain
      }
    },
    roundClass() {
      return {
        'is-round': this.round
      }
    },
    circleClass() {
      return {
        'is-circle': this.circle
      }
    },
    sizeClass() {
      return `j-button-${this.size}`;
    },
  },
  // 对props中的参数进行校验(待做)
  created() {
  },
  methods: {
    // 触发父组件click
    handClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .j-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
.j-button-primary{
  color:#fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus{
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
    }
  }
  .j-button-success{
  color:#fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus{
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
    }
  }
  .j-button-info{
  color:#fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
    }
  }
  .j-button-warning{
  color:#fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
    }
  }
  .j-button-danger{
  color:#fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus{
    background: #f78989;
    background-color: #f78989;
    color: #fff;
    }
  }
// 朴素按钮样式
.j-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.j-button-primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.j-button-success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.j-button-info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.j-button-warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.j-button-danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.j-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.j-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
// 表示.j-button类下面包含j-icon-后面的span
.j-button [class*=j-icon-]+span{
  margin-left: 5px;
}
// disabled属性
.j-button.is-disabled{
  cursor: not-allowed;
// is-disabled样式还需优化
}
// size属性
.j-button-default{
  padding: 12px 20px;
  font-size: 14px;
}
.j-button-medium{
  padding: 10px 20px;
  font-size: 14px;
}
.j-button-small{
  padding: 9px 15px;
  font-size: 12px;
}
.j-button-mini{
  padding: 7px 15px;
  font-size: 12px;
}
</style>