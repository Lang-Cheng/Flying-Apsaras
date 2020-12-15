import React, { FC } from 'react';

import { Dashboard } from 'layout';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

interface RouterItem {
    path: string;
    component?: (children: React.ReactNode, parentUrl: string) => React.ReactNode;
    children?: RouterItem[];
}

const CreateRoute = (routeItem: RouterItem, basePath: string) => {
    const parentUrl = `${basePath}${routeItem.path}`;
    return (
        <Route key={routeItem.path} path={parentUrl}>
            {routeItem.children && routeItem.component
                ? routeItem.component(RouteElement(routeItem, parentUrl), parentUrl)
                : RouteElement(routeItem, parentUrl)}
        </Route>
    );
};

const RouteElement = (routeItem: RouterItem, basePath: string) => {
    if (routeItem.children) {
        return <Switch>{routeItem.children.map((item) => CreateRoute(item, basePath))}</Switch>;
    }
    return routeItem.component ? routeItem.component(undefined, basePath) : undefined;
};

const CreateRouter = (routerConfig: RouterItem[]) => {
    return (
        <BrowserRouter>
            <Switch>{routerConfig.map((item) => CreateRoute(item, ''))}</Switch>
        </BrowserRouter>
    );
};

const routerConfig: RouterItem[] = [
    {
        path: '',
        component: (children) => <Dashboard>{children}</Dashboard>,
        children: [
            {
                path: '/main',
                component: () => <div>主要入口</div>
            },
            {
                path: '/',
                component: () => <Redirect to="/main" />
            }
        ]
    }
];

const AppRouter: FC = () => CreateRouter(routerConfig);
export default AppRouter;
