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
  (res) => {
    // console.log(res.data);
  },
  (err) => {
    console.log(err);
  }
);
