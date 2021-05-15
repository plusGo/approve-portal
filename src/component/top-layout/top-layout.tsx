import React from 'react';
import {Layout} from 'antd';
import './top-layout.scss';
import {LayoutHeader} from '../header/layout-header';

export interface SideLayoutProps {
    children?: JSX.Element;
}

export const TopLayout = (props: SideLayoutProps): JSX.Element => {

    return (
        <Layout>
            <LayoutHeader/>
            <Layout.Content className="top-layout-content">
                <div className="top-layout-content-inner">
                    {props.children}
                </div>
            </Layout.Content>
        </Layout>
    );
};
