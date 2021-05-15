import React from 'react';
import {Layout} from 'antd';
import './side-layout.scss';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import Logo from '../../assets/task-item.png';

const {Header, Content} = Layout;
const { SubMenu } = Menu;

export interface SideLayoutProps {
    children?: JSX.Element[];
}

export const SideLayout = (props: SideLayoutProps): JSX.Element => {

    return (
        <Layout>
            <Header className="side-layout-header">
                <div className="side-layout-header-logo">
                    <img src={Logo}/>
                    任务中心
                    <div className="side-layout-header-logo-divider"></div>
                    快手银行
                </div>
            </Header>
            <Content className="side-layout-content">

                <div className="side-layout-content-menu">
                    <Menu
                        style={{ width: 240 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <Menu.ItemGroup key="g1" title="流程">
                            <Menu.Item key="g1.1">我的流程</Menu.Item>
                            <Menu.Item key="g1.2">流程图管理</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="表单">
                            <Menu.Item key="g2.1">我的流程</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g3" title="权限">
                            <Menu.Item key="g3.1">我的流程</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g4" title="系统">
                            <Menu.Item key="g4.1">我的流程</Menu.Item>
                        </Menu.ItemGroup>

                    </Menu>
                </div>

                <div className="side-layout-content-inner">1</div>
            </Content>
        </Layout>
    );
};
