const koa = require('koa');
const fs = require('fs');
const path = require('path');

const app = new koa();

app.use(async (ctx) => {
  //   console.log('ctx', ctx.request);
  if (ctx.request.url === '/') {
    const indexContent = await fs.promises.readFile(
      path.resolve(__dirname, './index.html')
    ); // 在服务端一般不会这么用
    console.log('indexContent', indexContent.toString());

    ctx.response.set('Content-type', 'text/html');
    ctx.response.body = indexContent;
    // 响应体填充好了，以什么形式给浏览器，然后去解析
  }
  if (ctx.request.url === '/main.js') {
    const mainJsContent = await fs.promises.readFile(
      path.resolve(__dirname, './main.js')
    ); // 在服务端一般不会这么用

    ctx.response.set('Content-type', 'text/javascript');
    ctx.response.body = mainJsContent;
    // 响应体填充好了，以什么形式给浏览器，然后去解析
  }
  if (ctx.request.url === '/app.vue') {
    const mainVueContent = await fs.promises.readFile(
      path.resolve(__dirname, './app.vue')
    ); // 在服务端一般不会这么用

    ctx.response.set('Content-type', 'text/javascript');
    ctx.response.body = mainVueContent;
    // 响应体填充好了，以什么形式给浏览器，然后去解析
  }
  /* if (ctx.request.url === '/index.css') {
    const mainVueContent = await fs.promises.readFile(
      path.resolve(__dirname, './index.css')
    ); // 在服务端一般不会这么用

    // ctx.response.set('Content-type', 'text/css');
    ctx.response.body = mainVueContent;
    // 响应体填充好了，以什么形式给浏览器，然后去解析
  } */
});

app.listen(5173, () => {
  console.log('vite dev server listen on 5173');
});
