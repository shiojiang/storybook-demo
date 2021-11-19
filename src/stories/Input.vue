<template>
  <div class="input">
    <el-input v-model="input" :placeholder="placeholder" 
    :disabled="disabled" :clearable="clearable"
    :show-password="showPassword" :type="type"></el-input>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data() { 
    return {
      input: ''
    }
  },
  props: {
    placeholder: { required: false, default: "请输入内容" },
    disabled: { required: false, default: false },
    clearable: { required: false, default: false },
    showPassword: { required: false, default: false },
    type: { required: false, default: 'input' },
  },
  components:{

  },
  created() {

  },
  mounted() {

  },
  updated() {

  },
  methods:{

  },
 }
</script>

<style scoped>

</style>