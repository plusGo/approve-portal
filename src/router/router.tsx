import Loadable from 'react-loadable';
import {Loading} from '../component/loading/loading';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ProcessCreatePage from '../page/console/process/process-create/process-create';
import PortalPage from '../page/portal/portal';
import {useEffect} from 'react';

/**
 * 路由配置
 */
export interface RouteConfigProps {
    name?: string; // 路由名称
    path?: string; // 路径路径
    exact?: boolean; // 严格匹配
    component?: any; // 懒加载组件组件
    preload?: boolean; // 预加载
    routes?: RouteConfigProps[]; // 子路由
}


export const ROUTER_CONFIG: RouteConfigProps[] = [
    {
        name: 'console',
        path: '/console',
        exact: false,
        preload: true,
        component: Loadable({
            loader: () => import('../page/console/console'),
            loading: Loading,
        }),
        routes: [
            {
                name: 'process-create',
                path: '/console/process/create',
                exact: true,
                preload: false,
                component: Loadable({
                    loader: () => import('../page/console/process/process-create/process-create'),
                    loading: Loading,
                })
            },
            {name: 'process', path: '/console/process', exact: true, preload: false, component: ProcessCreatePage},
        ]
    },
    {
        name: 'portal',
        path: '/portal',
        exact: false,
        component: PortalPage
    },
];


export function RouterOutlet(props:any): JSX.Element {
    useEffect(() => {
        ROUTER_CONFIG.filter(route => route.preload && route.component.preload());
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                {
                    ROUTER_CONFIG.map((config, index) => (
                        <Route key={index} exact={config.exact} path={config?.path}
                               render={props => (
                                   <config.component {...props} routes={config?.routes}/>
                               )}/>
                    ))
                }
                <Redirect exact from="/" to="/console"/>
            </Switch>
        </BrowserRouter>
    )
}


