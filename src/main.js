import Vue from 'vue'
import App from './App.vue'
import JButton from './components/Button.vue'
import './assets/fonts/font.scss'

// 全局注册组件
Vue.component(JButton.name, JButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
