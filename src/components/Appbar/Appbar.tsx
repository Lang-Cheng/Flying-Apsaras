import React, { FC } from 'react';

import { Button, Icon } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import { Phone } from '@material-ui/icons';
import { getSidebarTrigger, getHeader } from '@mui-treasury/layout';
import logo from 'assets/img/logo.png';
import useStyles from 'assets/style/layout/DashboardStyle';
import Navigation from 'components/Navigation';
import { matchPath, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Header = getHeader(styled);
const SidebarTrigger = getSidebarTrigger(styled);

const AppTab: FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const onNavClick = (path: string) => {
        history.push(path);
    };

    return (
        <Header>
            <Toolbar className={classes.toolbar}>
                <SidebarTrigger className={classes.sidebarTrigger} sidebarId="primarySidebar" />
                <Icon className={classes.icon}>
                    <img className={classes.logo} src={logo} alt="logo" />
                </Icon>
                <Tabs
                    className={classes.tabs}
                    value={Navigation.findIndex((item) => matchPath(location.pathname, item.path))}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {Navigation.map((item) => (
                        <Tab
                            onClick={() => onNavClick(item.path)}
                            key={item.path}
                            label={item.name}
                            icon={item.icon}
                        />
                    ))}
                </Tabs>
                <Button
                    className={classes.contact}
                    variant="text"
                    color="default"
                    size="large"
                    href="tel:13402654444"
                    startIcon={<Phone />}
                >
                    联系我们
                </Button>
            </Toolbar>
        </Header>
    );
};

export default AppTab;
