import React, { FC } from 'react';

import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import useStyles from 'assets/style/layout/DashboardStyle';
import clsx from 'clsx';
import { matchPath, useLocation } from 'react-router-dom';

import { SidebarItem } from './SidebarList';

interface SidebarMenuProps {
    item: SidebarItem;
    onMenuClick: (item: SidebarItem) => void;
}

const SidebarMenu: FC<SidebarMenuProps> = (props: SidebarMenuProps) => {
    const classes = useStyles();
    const location = useLocation();

    const { item, onMenuClick } = props;

    return (
        <ListItem
            key={`ListItem${item.path}`}
            className={clsx(matchPath(location.pathname, item.path) && classes.active)}
            onClick={() => onMenuClick(item)}
            button
        >
            <ListItemIcon color="blue">{item.icon}</ListItemIcon>
            <ListItemText
                primary={
                    <Typography variant="body2" color="textSecondary" noWrap>
                        {item.name}
                    </Typography>
                }
            />
        </ListItem>
    );
};

export default SidebarMenu;
