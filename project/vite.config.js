import { defineConfig } from 'vite';
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
    return Object.assign({}, viteBaseConfig, viteDevConfig);
  },
};
// defineConfig 有语法提示,ts语法
export default defineConfig(({ command }) => {
  // 是build还是serve主要取决于我们的命令是开发环境还是生产环境
  console.log('command', command);
  /* if (command === 'build') {
    // 代表生成环境的配置
  } else {
    // 代表开发环境的配置
  } */
  return envResolver[command]();
});
