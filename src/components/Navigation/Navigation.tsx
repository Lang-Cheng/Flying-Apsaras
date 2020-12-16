import React from 'react';

import { SupervisedUserCircle, Home, ListAlt } from '@material-ui/icons';

import NavigationItem from './NavigationItem';

const Navigation: NavigationItem[] = [
    {
        path: '/home',
        name: '首页',
        icon: <Home />
    },
    {
        path: '/aboutus',
        name: '关于我们',
        icon: <SupervisedUserCircle />
    },
    {
        path: '/products',
        name: '产品',
        icon: <ListAlt />
    }
];

export default Navigation;
