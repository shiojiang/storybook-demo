<template>
  <button
  class="j-button"
  :class="[typeClass, plainClass, roundClass, circleClass, sizeClass]"
  @click="handClick"
  >
  <!-- 如果未传入icon则隐藏i -->
    <i v-if="icon" :class="icon"></i>
  <!-- 如果未传入插槽则隐藏span -->
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>
import './button1.scss'
export default {
  name: "j-button",
  // 接收父组件传入的属性
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (type) => {
        return ['primary', 'success', 'info', 'warning', 'danger', 'default'].indexOf(type) !== -1;
      },
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
      default: 'default',
      validator: (size) => {
        return ['mini', 'small', 'medium', 'default'].indexOf(size) !== -1;
      },
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