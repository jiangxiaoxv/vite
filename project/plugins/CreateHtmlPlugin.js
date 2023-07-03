module.exports = (options = {}) => {
  return {
    // 替换html的
    // 将我们的插件的一个执行时机提前
    /* transformIndexHtml: (html, ctx) => {
      // ctx 表示当前整个请求的一个执行期上下文； api /index.html /user/userlist json get post headers
      console.log('html', html);
      return html.replace(/<%= title %>/g, options.inject.title);
    }, */
    transformIndexHtml: {
      enforce: 'pre', // 插件执行的顺序，要先执行
      transform: (html, ctx) => {
        // ctx 表示当前整个请求的一个执行期上下文； api /index.html /user/userlist json get post headers
        // console.log('html', html);
        return html.replace(/<%= title %>/g, options.inject.data.title);
      },
    },
  };
};
