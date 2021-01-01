import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'demo',
  description: 'my desc',
  routes: [
    {
      path: '/', component: '@/layouts/BasicLayout',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/list', component: '@/pages/list/index' },
        { path: '/list/:id', component: '@/pages/list/[id]' },
      ]
    }
  ],
  ssr: {},
});
