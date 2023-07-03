import { count } from './src/counter.js';
import './src/style/variable.css';
import './api/request';

import './src/style/index.css';

import './components/componentA.js';

// import './src/imageLoader.js';
// import '@/imageLoader.js';
import('./src/imageLoader').then((data) => {
  //   console.log('data', data);
});
import Axios from 'axios';
// console.log(count);
Axios.post('/api/users').then(
  // Axios.get('/devApi').then(
  // 浏览器拼接服务器地址 + /devApi 找到vite --> server(代理服务器) --> proxy
  (res) => {
    console.log(res.data);
  },
  (err) => {
    console.log(err);
  }
);
