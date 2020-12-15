import { createApp } from 'vue';
import { generateRandomNumber } from 'ydkim-utils';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

console.info(generateRandomNumber.number(), generateRandomNumber.string());
createApp(App).use(store).use(router).mount('#app');
