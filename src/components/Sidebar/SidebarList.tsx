import React from 'react';

import {
    Storage as StorageIcon,
    AccountBox as AccountBoxIcon,
    ListAlt as ListAltIcon,
    Settings as SettingsIcon
} from '@material-ui/icons';

export interface SidebarItem {
    path: string;
    icon: React.ReactNode;
    name: string;
    children?: SidebarItem[];
}

const SidebarList: SidebarItem[] = [
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
        name: '殡葬用品',
        icon: <AccountBoxIcon />
    }
];

export default SidebarList;
