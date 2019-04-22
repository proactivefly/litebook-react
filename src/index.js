import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//全局reset 样式文件
import './style.js';
//iconfont文件样式
import './statics/iconfont/iconfont';
// 将APP组件挂在到id=root的元素中
ReactDOM.render(<App />, document.getElementById('root'));