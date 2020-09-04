import Vue from 'vue'

export default () => {
  Vue.component('ElButton', () => import('element-ui/lib/button'))
}
