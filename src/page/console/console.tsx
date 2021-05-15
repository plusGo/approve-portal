import React, {Fragment} from 'react';
import {Route,} from 'react-router-dom';
import {RouteConfigProps} from '../../router/router';
import {SideLayout} from '../../component/side-layout/side-layout';
import './console.scss';

export interface ConsolePageProps {
    routes?: RouteConfigProps[];
}

export default function ConsolePage(props: ConsolePageProps): JSX.Element {

    return (
        <Fragment>
            <SideLayout>
                <Fragment>
                    {
                        props.routes?.map((config, index) => (
                            <Route key={index} exact={config.exact} path={config?.path}
                                   render={props => (
                                       <config.component {...props} childRoutes={config?.routes}/>
                                   )}/>))
                    }
                </Fragment>
            </SideLayout>
        </Fragment>
    )
}
