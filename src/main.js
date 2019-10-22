import Vue from 'vue';
import App from './App.vue';
import {
	Button,
	Icon,
	Row,
	Col,
	Layout,
	Menu,
	Collapse,
	Base,
	Table,
	Pagination,
	Divider,
	Tooltip,
	Progress
} from 'ant-design-vue';

Vue.use(Button);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Collapse);
Vue.use(Base);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(Divider);
Vue.use(Tooltip);
Vue.use(Progress);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app')
