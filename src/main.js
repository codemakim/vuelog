import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlightjs'

Vue.config.productionTip = false;

Vue.directive('highlightjs', {
  deep: true,
  bind: function (el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.innerHTML = binding.value
      }
      VueHighlightJS.highlightBlock(target)
    })
  },
  componentUpdated: function (el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.innerHTML = binding.value
        VueHighlightJS.highlightBlock(target)
      }
    })
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
