// const myPromise = require('./mypromise.js');
// let Promise = new myPromise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve(2222);
//     },2000)
    
// })

// Promise.then((res) =>{
//     // console.log(res,'res');
//     return res;
// },(err) =>{
//     console.log(err,'err');
// }).then((res) =>{
//     console.log(res,'res');
// })

// import deelclone from './component/deelclone';
// let arr = [1,2,3,4];
// let newtegArr = deelclone(arr);
// newtegArr[1] = 1;
// console.dir(arr,newtegArr,'newtegArr');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/HomePage/index';

ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
