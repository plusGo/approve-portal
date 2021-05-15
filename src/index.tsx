import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale/zh_CN';
import {ConfigProvider} from 'antd';
import moment from 'moment';
import {RouterOutlet} from './router/router';

moment.locale('zh-cn');

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <RouterOutlet/>
    </ConfigProvider>
    , document.getElementById('root'));
