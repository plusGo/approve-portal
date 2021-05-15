import React, {Fragment} from 'react';
import {Route,} from 'react-router-dom';
import {RouteConfigProps} from '../../router/router';
import {SideLayout} from '../../component/side-layout/side-layout';
import './console.scss';

export default function ConsolePage(props: any): JSX.Element {

    return (
        <Fragment>
            <SideLayout children={
                (props.childRoutes as RouteConfigProps[]).map((config, index) => (
                    <Route key={index} exact={config.exact} path={config?.path}
                           render={props => (
                               <config.component {...props} childRoutes={config?.routes}/>
                           )}/>
                ))
            }></SideLayout>
        </Fragment>
    )
}
