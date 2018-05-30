import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Register from '@/components/Register';
import Login from '@/components/Login';
import RegisterVuetify from '@/components/RegisterVuetify';
import Chat from '@/components/Chat';
import Songs from '@/components/Songs';
import CreateSong from '@/components/CreateSong';
import ViewSong from '@/components/ViewSong';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
    {
      path: '/songs',
      name: 'songs',
      component: Songs,
    },
    {
      path: '/songs/create',
      name: 'createSong',
      component: CreateSong,
    },
    {
      path: '/songs/:id',
      name: 'song',
      component: ViewSong,
    },
  ],
});
