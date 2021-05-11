
const routes = [
  {
    path: '/',
    component: () => import('layouts/Master.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'info', component: () => import('pages/Info.vue') },
      { path: 'submit', component: () => import('pages/Submit.vue') },
      { path: '/post/:slug', component: () => import('pages/Post.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
