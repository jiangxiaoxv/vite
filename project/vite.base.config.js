import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    // exclude: ['lodash-es'], // 当遇到lodash-es这个依赖的时候不进行依赖预构建，不处理多包传输问题
  },
  envPrefix: 'ENV_',
  css: {
    // 对css的行为进行配置
    // modules 配置最终会丢给postcss modules，可以查看post-css具体文档
    modules: {
      // 对css模块化的默认行为进行覆盖
      // localsConvention: "camelCase",
      //   localsConvention: 'camelCaseOnly',
      //   localsConvention: 'dashesOnly',
      //   scopeBehaviour: 'global',
      //   scopeBehaviour: 'local', // 配置当前的模块化行为是模块化还是全局化（有hash就是开启了一个模块化的标志）
      //   generateScopedName: '[name]_[local]_[hash:5]', // 生成的类名规则
      //   generateScopedName: (name, filename, css) => {
      //     // 配置成函数以后，返回值就决定了他的最终类型
      //     /**
      //      * name -> 代表此刻css文件的类名
      //      * filename -> css文件的绝对路径
      //      * css -> 样式规则
      //      */
      //     console.log(name, filename, css);
      //     return `${name}_haha`;
      //   },
      hashPrefix: 'nc', // 生成hash的个性化
      globalModulePaths: ['./components'], // 代表不想参与到css模块化的路径
    },
    // key + config key代表预处理器的名
    preprocessorOptions: {
      // 整个的配置对象最终给到less的执行参数（全局参数）中去
      less: {
        math: 'always',
        globalVars: {
          mainColor: 'green',
        },
      },
      sass: {},
    },
    devSourcemap: true, // 开始css的sourcemap（文件索引）
  },
});
