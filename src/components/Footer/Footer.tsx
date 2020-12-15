import React, { FC } from 'react';

import { Grid } from '@material-ui/core';
import { getInsetFooter } from '@mui-treasury/layout';
import { useWindowDimensions } from 'hook';
import styled from 'styled-components';

import MapContainer from './MapContainer';

const InsetFooter = getInsetFooter(styled);

const Footer: FC = () => {
    const { isMobile } = useWindowDimensions();

    return (
        <InsetFooter>
            <Grid direction={isMobile ? 'column' : 'row'} container spacing={2}>
                <Grid item xs={isMobile ? 12 : 6}>
                    <MapContainer />
                </Grid>
                <Grid item xs={isMobile ? 12 : 6}>
                    hi
                </Grid>
            </Grid>
        </InsetFooter>
    );
};

export default Footer;
