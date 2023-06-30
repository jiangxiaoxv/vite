const fs = require('fs');
const path = require('path');

export default (options) => {
  // 拦截http请求
  // axios baseurl
  // 拦截请求到本地vite server
  // 当本地开发时，打给本地的开发服务器 viteserver服务器接管请求

  return {
    configureServer(server) {
      // 服务器的相关配置
      // req，请求对象 --> 用户发过来的请求，请求头 请求体 url cookie
      // res: 相应对象， --> res.header
      // next: 是否交给下一个中间键，调用next方法会将处理结果交给下一个中间件
      const mockStat = fs.statSync('mock');
      const isDirectory = mockStat.isDirectory();
      let mockResult = [];
      if (isDirectory) {
        // process.cwd ---》 获取当前执行的根目录
        mockResult = require(path.resolve(process.cwd(), 'mock/index.js'));
      }
      server.middlewares.use(async (req, res, next) => {
        const matchItem = mockResult.find(
          (mockDescriptor) => mockDescriptor.url === req.url
        );

        if (matchItem) {
          const responseData = matchItem.response(req);
          res.setHeader('Content-Type', 'application/json');

          res.end(JSON.stringify(responseData)); // 自动帮我设置一个请求头，这是一个移步操作
        } else {
          next();
        }
      }); // 插件 === middlewares
    },
  };
};
