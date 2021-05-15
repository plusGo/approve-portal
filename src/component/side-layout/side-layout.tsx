import React from 'react';
import {Layout, Menu} from 'antd';
import './side-layout.scss';
import {Link} from 'react-router-dom';
import {LayoutHeader} from '../header/layout-header';

const {Header, Content} = Layout;
const {SubMenu} = Menu;

export interface SideLayoutProps {
    children?: JSX.Element | JSX.Element[];
}

export const SideLayout = (props: SideLayoutProps): JSX.Element => {

    return (
        <Layout>
            <LayoutHeader/>
            <Content className="side-layout-content">

                <div className="side-layout-content-menu">
                    <Menu
                        style={{width: 240}}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <Menu.ItemGroup key="g1" title="流程">
                            <Menu.Item key="g1.1">
                                <Link to="/console/process">我的流程</Link>
                            </Menu.Item>
                            <Menu.Item key="g1.4">
                                <Link to="/console/process/create">创建流程</Link>
                            </Menu.Item>
                            <Menu.Item key="g2.1">
                                <Link to="/console/form">我的表单</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="申请">
                            <Menu.Item key="g2.2">
                                <Link to="/portal">创建申请</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </Menu>
                </div>

                <div className="side-layout-content-inner">
                    {props.children}
                </div>
            </Content>
        </Layout>
    );
};
