// 加载静态图片
import promiseImg from './images/promise.jpg';
// import promiseImg from './images/promise.jpg?raw';
// import promiseImg from './images/promise.jpg?url';
// import promiseImg from './images/promise.jpg?svg';

import { name } from './json/index.json';
const img = document.createElement('img');
img.src = promiseImg;

document.body.append(img);

console.log('>>>>>>>name', name, promiseImg);
