import { defineConfig, loadEnv, optimizeDeps } from 'vite';
import viteBaseConfig from './vite.base.config';
import vitePrdConfig from './vite.prd.config';
import viteDevConfig from './vite.dev.config';

// 策略模式
const envResolver = {
  build: () => {
    console.log('生产');
    return Object.assign({}, viteBaseConfig, vitePrdConfig);
  },
  serve: () => {
    console.log('开发');
    return Object.assign({}, viteBaseConfig, viteDevConfig); // 新配置里可能会配置envDir
  },
};
// defineConfig 有语法提示,ts语法
export default defineConfig({
  optimizeDeps: {
    exclude: [],
  },
  envPrefix: 'ENV_',
});
