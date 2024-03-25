import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import objPlugins from './plugins/obj';
// import person from './plugins/person';
import globalComponents from './plugins/global-components';
// import focus from './directives/focus';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/day';

const app = createApp(App);
app.use(router);
app.use(globalComponents);
app.use(globalDirectives);
app.use(dayjs);
// app.directive('focus', focus);
// app.use(person, { name: '홍길동' });
// app.use(objPlugins);
app.mount('#app');

import 'bootstrap-icons/font/bootstrap-icons.css';
