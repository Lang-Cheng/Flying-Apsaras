import React, { FC, PropsWithChildren, ReactNode } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Layout, {
    Root,
    getHeader,
    getDrawerSidebar,
    getSidebarTrigger,
    getSidebarContent,
    getCollapseBtn,
    getContent,
    getInsetFooter
} from '@mui-treasury/layout';
import Sidebar from 'components/Sidebar/Sidebar';
import styled from 'styled-components';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const InsetFooter = getInsetFooter(styled);

const scheme = Layout();

scheme.configureHeader((builder) => {
    builder
        .create('Header')
        .registerConfig('xs', {
            position: 'sticky'
        })
        .registerConfig('md', {
            position: 'relative' // won't stick to top when scroll down
        });
});

scheme.configureEdgeSidebar((builder) => {
    builder.create('primarySidebar', { anchor: 'left' }).registerTemporaryConfig('xs', {
        width: 'auto' // 'auto' is only valid for temporary variant
    });
});

scheme.configureInsetSidebar((builder) => {
    builder.create('secondarySidebar', { anchor: 'right' }).registerFixedConfig('md', {
        width: 256
    });
});

const Dashboard: FC = (props: PropsWithChildren<ReactNode>) => {
    const { children } = props;

    return (
        <Root scheme={scheme}>
            <>
                <CssBaseline />
                <Header>
                    <Toolbar>
                        <SidebarTrigger sidebarId="primarySidebar" />
                        Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                    </Toolbar>
                </Header>
                <DrawerSidebar sidebarId="primarySidebar">
                    <SidebarContent>
                        <Sidebar />
                    </SidebarContent>
                    <CollapseBtn />
                </DrawerSidebar>
                <Content>{children}</Content>
                <InsetFooter>Footer</InsetFooter>
            </>
        </Root>
    );
};

export default Dashboard;
