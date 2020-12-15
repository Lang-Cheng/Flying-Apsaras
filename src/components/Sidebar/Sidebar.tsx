import React, { FC } from 'react';

import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { getDrawerSidebar, getSidebarContent, getCollapseBtn } from '@mui-treasury/layout';
import useStyles from 'assets/style/layout/DashboardStyle';
import clsx from 'clsx';
import { matchPath, useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from '../Navigation';

const DrawerSidebar = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);

interface SidebarProps {
    setOpen: (id: string, value: boolean) => void;
}

const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
    const { setOpen } = props;
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const onNavClick = (path: string) => {
        history.push(path);
        setOpen('primarySidebar', false);
    };

    return (
        <DrawerSidebar sidebarId="primarySidebar">
            <SidebarContent>
                <List className={classes.list}>
                    {Navigation.map((item) => (
                        <ListItem
                            key={item.path}
                            className={clsx(
                                matchPath(location.pathname, item.path) && classes.active
                            )}
                            onClick={() => onNavClick(item.path)}
                            button
                        >
                            <ListItemIcon color="primary">{item.icon}</ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="body2" color="textSecondary" noWrap>
                                        {item.name}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </SidebarContent>
            <CollapseBtn />
        </DrawerSidebar>
    );
};

export default Sidebar;
