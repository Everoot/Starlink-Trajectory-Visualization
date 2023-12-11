import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const root 是一个 ReactRoot，它是 ReactDOM.createRoot 的返回值。
// ReactDOM.createRoot 接受一个 DOM 元素作为参数，这个 DOM 元素就是 React 应用的根节点。
// ReactDOM.createRoot 的返回值是一个 ReactRoot 对象，它有一个 render 方法，这个方法接受一个 React 元素作为参数，用于渲染整个 React 应用。
// root.render(<App />) 的作用是将 <App /> 渲染到 root 所对应的 DOM 节点上。
// <React.StrictMode> 是一个 React 组件，它的作用是开启严格模式，用于检查应用中存在的潜在问题。
// <React.StrictMode> 组件的作用是开启严格模式，用于检查应用中存在的潜在问题。