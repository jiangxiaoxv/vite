import _ from 'lodash';
import loadshEs from 'lodash-es';

const obj = _.cloneDeep({});
console.log('obj', obj);

// 既然我们现在的最佳实践就是node_modules, 那为什么es官方在我们倒入非绝对路径的资源的时候不默认帮我们
// 搜索node_modules 呢
export const count = 1;
