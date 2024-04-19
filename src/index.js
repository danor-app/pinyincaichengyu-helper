import { createApp } from 'vue';


import App from './game-helper.vue';



const app = createApp(App);
app.provide('app', app);


const init = async () => {
	app.mount('#app');
};

if(document.readyState == 'complete') { await init(); }
else { window.addEventListener('load', init); }
