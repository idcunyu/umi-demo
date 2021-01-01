import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: false,
  antd: {
    dark: true,
  },
  dva: {
    immer: true,
    hmr: true,
  },
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
