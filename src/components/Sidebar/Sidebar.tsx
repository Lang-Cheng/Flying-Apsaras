import React, { FC } from 'react';

import { List } from '@material-ui/core';
import useStyles from 'assets/style/layout/DashboardStyle';
import { useHistory } from 'react-router-dom';

import SidebarList, { SidebarItem } from './SidebarList';
import SidebarMenu from './SidebarMenu';

const Sidebar: FC = () => {
    const history = useHistory();
    const classes = useStyles();

    const onMenuClick = (item: SidebarItem) => {
        history.push(item.path);
    };

    return (
        <List className={classes.list}>
            {SidebarList.map((item) => (
                <SidebarMenu key={item.path} item={item} onMenuClick={onMenuClick} />
            ))}
        </List>
    );
};

export default Sidebar;
