import React, { FC, PropsWithChildren, ReactNode } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Layout, { Root, getContent } from '@mui-treasury/layout';
import Appbar from 'components/Appbar';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar/Sidebar';
import styled from 'styled-components';

const Content = getContent(styled);

const scheme = Layout();

scheme.configureHeader((builder) => {
    builder
        .create('Header')
        .registerConfig('md', {
            position: 'sticky',
            initialHeight: 72
        })
        .registerConfig('xs', {
            position: 'sticky',
            initialHeight: 56
        });
});

scheme.configureEdgeSidebar((builder) => {
    builder.create('primarySidebar', { anchor: 'left' }).registerTemporaryConfig('xs', {
        width: 'auto'
    });
});

const Dashboard: FC = (props: PropsWithChildren<ReactNode>) => {
    const { children } = props;

    return (
        <Root scheme={scheme}>
            {({ setOpen }) => (
                <>
                    <CssBaseline />
                    <Appbar />
                    <Sidebar setOpen={setOpen} />
                    <Content>{children}</Content>
                    <Footer />
                </>
            )}
        </Root>
    );
};

export default Dashboard;
