import Vue from 'vue'
import App from './App.vue'
import JButton from './components/Button1.vue'
import './assets/fonts/font.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


// 全局注册组件
Vue.component(JButton.name, JButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
