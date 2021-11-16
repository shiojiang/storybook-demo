<template>
  <div id="app">
    <div class="row">
      <j-button>默认按钮</j-button>
      <j-button type="primary">主要按钮</j-button>
      <j-button type="success">成功按钮</j-button>
      <j-button type="info">信息按钮</j-button>
      <j-button type="warning">警告按钮</j-button>
      <j-button type="danger">危险按钮</j-button>
    </div>
    <div class="row">
      <j-button>朴素按钮</j-button>
      <j-button type="primary" plain>主要按钮</j-button>
      <j-button type="success" plain>成功按钮</j-button>
      <j-button type="info" plain>信息按钮</j-button>
      <j-button type="warning" plain>警告按钮</j-button>
      <j-button type="danger" plain>危险按钮</j-button>
    </div>
    <div class="row">
      <j-button round>圆角按钮</j-button>
      <j-button type="primary" round>按钮</j-button>
      <j-button type="success" round>按钮</j-button>
      <j-button type="info" round>信息按钮</j-button>
      <j-button type="warning" round>警告按钮</j-button>
      <j-button type="danger" round>危险按钮</j-button>
    </div>
    <div class="row">
      <j-button icon="j-icon-search" circle></j-button>
      <j-button type="primary" icon="j-icon-edit" circle></j-button>
      <j-button type="success" icon="j-icon-check" circle></j-button>
      <j-button type="info" icon="j-icon-message" circle></j-button>
      <j-button type="warning" icon="j-icon-star-off" circle></j-button>
      <j-button type="danger" icon="j-icon-delete" circle></j-button>
    </div>
    <div class="row">
      <j-button >默认按钮</j-button>
      <j-button size="medium">中等按钮</j-button>
      <j-button size="small">小型按钮</j-button>
      <j-button size="mini">超小按钮</j-button>
    </div>
    <div class="row">
      <j-button @click="handClick">点击事件</j-button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  methods: {
    handClick(e) {
      console.log('点击了');
      console.log(e);
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    margin-bottom: 20px;
    .j-button {
      margin-right: 20px;
    }
  }
</style>
