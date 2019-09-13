import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Draggable from 'vuedraggable'
// ui组件库
import ElementUi from 'element-ui'
import '@/assets/scss/global.scss'
import 'element-ui/lib/theme-chalk/index.css'



Vue.component('json-stringify', {
  props: {
    data: [Array,Object],
  },
  render() {
    return (
      <pre style="text-align: start; background: #f3f3f3;">{JSON.stringify(this.data, null, 2)}</pre>
    )
  }
})

Vue.use(ElementUi, {
  size: 'mini'
})
Vue.component(Draggable.name, Draggable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
