import React from 'react';
import {Route,} from 'react-router-dom';
import {RouteConfigProps} from '../../router/router';
import {DatePicker} from 'antd';
import {SideLayout} from '../../component/side-layout/side-layout';
import './console.scss';

export default function ConsolePage(props: any): JSX.Element {

    return (
        <div className="hello">
            <SideLayout children={
                (props.childRoutes as RouteConfigProps[]).map((config, index) => (
                    <Route key={index} exact={config.exact} path={config?.path}
                           render={props => (
                               <config.component {...props} childRoutes={config?.children}/>
                           )}/>
                ))
            }></SideLayout>
        </div>
    )
}
