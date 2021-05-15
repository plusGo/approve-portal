import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale/zh_CN';
import {ConfigProvider} from 'antd';
import moment from 'moment';
import {RouterOutlet} from './router/router';

moment.locale('zh-cn');
const applicationRender = (RouteOutlet: any) => {
    ReactDOM.render(
        <ConfigProvider locale={zhCN}>
            <RouteOutlet/>
        </ConfigProvider>
        ,
        document.getElementById('root')
    )
};

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <RouterOutlet/>
    </ConfigProvider>
    , document.getElementById('root'));
