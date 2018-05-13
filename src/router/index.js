import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Login from '@/components/Login';
import RegisterVuetify from '@/components/RegisterVuetify';
import Chat from '@/components/Chat';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/vuetify',
      name: 'RegisterVuetify',
      component: RegisterVuetify,
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
    },
  ],
});
