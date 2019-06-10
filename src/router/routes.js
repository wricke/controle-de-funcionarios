import Store from '../store/index';

const validateLogin = next => (Store().getters.getUser ? next() : next({ name: 'login' }));

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Login/Login.vue') },
      {
        path: 'employees',
        component: () => import('pages/Employees/Employees.vue'),
        beforeEnter: (to, from, next) => validateLogin(next),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
