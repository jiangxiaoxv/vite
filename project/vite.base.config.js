import { defineConfig } from 'vite';
// import { ViteAliases } from 'vite-aliases';
import MyViteAliases from './plugins/ViteAliases.js';
import { createHtmlPlugin } from 'vite-plugin-html';
const MyCreateHtmlPlugin = require('./plugins/CreateHtmlPlugin.js');
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');
import { viteMockServe } from 'vite-plugin-mock';
import VitePluginMock from './plugins/VitePluginMock.js';

export default defineConfig({
  optimizeDeps: {
    // exclude: ['lodash-es'], // 当遇到lodash-es这个依赖的时候不进行依赖预构建，不处理多包传输问题
  },
  /* resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }, */
  envPrefix: 'ENV_', // 全局注入的环境变量
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
    // vite的诞生一定会让postcss再火一次，这里配置相当于建了一个postcss.config.js
    postcss: {
      plugins: [
        postcssPresetEnv({
          importFrom: path.resolve(__dirname, './variable.css'), // 就好比你现在让postcss去知道 有一些全局变量需要记下来
        }),
      ],
    },
  },
  build: {
    // 配置rollup的一些构建策略
    rollupOptions: {
      // 控制输出
      output: {
        assetFileNames: '[name].[hash:5].[ext]',
      },
    },
    assetsInlineLimit: 4096, //4kb 小于4096转化为base64
    //   outDir: 'testDist', // 资源输出目录
    assetsDir: 'static', // 静态资源输出的目录
    emptyOutDir: true, // 清除输出目录，重新构建输出
  },
  //   plugins: [ViteAliases({ prefix: '@' })],
  plugins: [
    MyViteAliases(),
    MyCreateHtmlPlugin({
      inject: {
        data: {
          title: '哇哈哈',
        },
      },
    }),
    VitePluginMock(),
    // 整个配置文件的解析流程完全完毕以后走的钩子
    //   configResolved(server)
    // 热更新的生命周期钩子
    // handleHotUpdate(),
    // options(rollupOptions){ vite和rollup都会调用这个钩子} // options 传递过来的rollup配置
    //   buildStart(fullRollupOptions) {}
    // viteMockServe(), // 自动会在src下面找到mock文件夹
    /* createHtmlPlugin({
      minify: true,
      //   template: 'public/index.html',
      inject: {
        data: {
          title: 'vite-学习-plugin-首页',
        },
      },
    }), */
  ],
});
