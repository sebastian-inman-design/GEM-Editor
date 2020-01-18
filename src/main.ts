import Vue from "vue"
import store from "./store"
import App from "./App.vue"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBrush, faFillDrip, faMousePointer, faVectorSquare, faEraser, faShapes, faBolt, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBrush, faFillDrip, faMousePointer, faVectorSquare, faEraser, faShapes, faBolt, faLightbulb)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({

  store,
  render: h => h(App)

}).$mount("#app");

