import Vue from 'vue';

//import { Button, Select, Notification } from 'element-ui';
import Test from './vue/Test.es';
import 'element-ui/lib/theme-chalk/select.css';


// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Notification.name, Notification);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

//Vue.use(  Button )

new Vue({
  el: '#app',
  render: h => h( Test )
});

