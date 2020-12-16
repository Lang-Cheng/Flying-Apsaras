import React, { FC } from 'react';

import {
    Box,
    Container,
    Grid,
    Link,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@material-ui/core';
import { getInsetFooter } from '@mui-treasury/layout';
import useStyles from 'assets/style/layout/DashboardStyle';
import styled from 'styled-components';

import MapContainer from './MapContainer';

const InsetFooter = getInsetFooter(styled);

const footers = [
    {
        title: '公司',
        description: ['团队', '历史', '联系我们']
    },
    {
        title: '产品',
        description: ['骨灰盒', '墓园', '其他']
    },
    {
        title: '咨询',
        description: ['费用相关', '产品相关', '其他']
    },
    {
        title: '法律声明',
        description: ['隐私协议', '使用权限']
    }
];

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Lang-Cheng/Flying-Apsaras">
                Flying Apsaras
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
};

const Footer: FC = () => {
    const classes = useStyles();

    return (
        <InsetFooter>
            <Container className={classes.footer} maxWidth="lg">
                <Box mb={3}>
                    <MapContainer />
                </Box>
                <Grid container justify="space-evenly" spacing={4}>
                    {footers.map((footer) => (
                        <Grid item xs={6} md={3} style={{ textAlign: 'center' }} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <List>
                                {footer.description.map((item) => (
                                    <ListItem button style={{ textAlign: 'center' }} key={item}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={3}>
                    <Copyright />
                </Box>
            </Container>
        </InsetFooter>
    );
};

export default Footer;
