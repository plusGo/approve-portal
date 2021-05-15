import React from 'react';
import {Layout} from 'antd';
import './layout-header.scss';

import Logo from '../../assets/task-item.png';

export const LayoutHeader = (): JSX.Element => {
    return (
        <Layout.Header className="side-layout-header">
            <div className="side-layout-header-logo">
                <img src={Logo}/>
                任务中心
                <div className="side-layout-header-logo-divider"></div>
                快手银行
            </div>
        </Layout.Header>

    );
};
