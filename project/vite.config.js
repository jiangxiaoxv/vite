import { defineConfig } from 'vite';
export default defineConfig({
  optimizeDeps: {
    // exclude: ['lodash-es'], // 当遇到lodash-es这个依赖的时候不进行依赖预构建，不处理多包传输问题
  },
});
