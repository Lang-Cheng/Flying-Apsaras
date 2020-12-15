import React from 'react';

import {
    Storage as StorageIcon,
    AccountBox as AccountBoxIcon,
    ListAlt as ListAltIcon,
    Settings as SettingsIcon
} from '@material-ui/icons';

import NavigationItem from './NavigationItem';

const NavagationList: NavigationItem[] = [
    {
        path: '/main',
        name: '首页',
        icon: <StorageIcon />
    },
    {
        path: '/aboutus',
        name: '关于我们',
        icon: <ListAltIcon />
    },
    {
        path: '/items',
        name: '其他',
        icon: <AccountBoxIcon />
    },
    {
        path: '/settings',
        name: '设置',
        icon: <SettingsIcon />
    }
];

export default NavagationList;
