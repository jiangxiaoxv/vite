// vite的插件必须返回给vite一个配置对象
const fs = require('fs');
const path = require('path');

function diffDirAndFile(dirFilesArr = [], basePath = '') {
  const result = {
    dirs: [],
    files: [],
  };
  dirFilesArr.forEach((name) => {
    const currentFileStat = fs.statSync(
      path.resolve(__dirname, basePath + '/' + name)
    );
    const isDirectory = currentFileStat.isDirectory();

    if (isDirectory) {
      result.dirs.push(name);
    } else {
      result.files.push(name);
    }
  });
  return result;
}

function getTotalSrcDir(keyName) {
  const result = fs.readdirSync(path.resolve(__dirname, '../src'));
  const diffResult = diffDirAndFile(result, '../src');
  const resolveAliasesObj = {}; // 放的是一个一个的别名配置 @aasets: xxx
  diffResult.dirs.forEach((dirname) => {
    const key = `${keyName}${dirname}`;
    const absPath = path.resolve(__dirname, '../src' + '/' + dirname);
    resolveAliasesObj[key] = absPath;
  });
  resolveAliasesObj[keyName] = path.resolve(__dirname, '../src');
  //   console.log('resolveAliasesObj', resolveAliasesObj);
  return resolveAliasesObj;
}

module.exports = ({ keyName = '@' } = {}) => {
  return {
    // config 可以返回一个对象，这个对象是部分的viteconfig配置【其实就是要改的那一部分】
    /**
     *
     * @param {*} config 目前的一个配置对象
     * @param {*} production development ; serve build
     * @param {*} env: mode： string,command: string
     * @returns 返回一个对象，这个对象是部分的vite config 配置
     */
    config: (config, env) => {
      //   console.log('config,env', config, env);
      const resolveAliaseObj = getTotalSrcDir(keyName);
      return {
        // 在这里需要返回个resolve出去，将src目录下的所有文件夹进行别名控制
        // 读目录
        resolve: {
          alias: {
            ...resolveAliaseObj,
          },
        },
      };
    },
  };
};
