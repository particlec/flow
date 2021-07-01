import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import WebRouter from './routers/router';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <WebRouter />
  </ConfigProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
