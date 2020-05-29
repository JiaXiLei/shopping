import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom'
import { ConfigProvider} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

import App from './App';
import './index.less';

moment.locale('zh-cn');

ReactDOM.render(
  <BrowserRouter>
  <ConfigProvider locale={zhCN}>
    <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.querySelector('#root')
);
