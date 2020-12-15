import React, { FC, useState } from 'react';

import { Button, ButtonGroup } from '@material-ui/core';
import { getInsetFooter } from '@mui-treasury/layout';
import {
    Marker,
    Map,
    InfoWindow,
    ToolBarControl,
    ControlBarControl,
    APILoader
} from '@uiw/react-amap';
import styled from 'styled-components';

const InsetFooter = getInsetFooter(styled);

const MapContainer = () => {
    const [index, setIndex] = useState(0);
    const data = [
        {
            position: new AMap.LngLat(120.626528, 31.323818, false),
            title: '<br><h1>苏州市飞天殡葬用品服务有限公司(齐门路)</h1></br>',
            content: '<br>地址：苏州市姑苏区齐门路87号</br>'
        },
        {
            position: new AMap.LngLat(120.643575, 31.320755, false),
            title: '<br><h1>苏州市飞天殡葬用品服务有限公司(日规路)</h1></br>',
            content: '<br>地址：苏州市姑苏区日规路6号</br>'
        },
        {
            position: new AMap.LngLat(120.625392, 31.333198, false),
            title: '<br><h1>苏州市飞天殡葬用品服务有限公司(齐门外大街)</h1></br>',
            content: '<br>地址：苏州市姑苏区齐门外大街129号</br>'
        }
    ];

    return (
        <>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => setIndex(0)}>显示总店（齐门路87号）</Button>
                <Button onClick={() => setIndex(1)}>显示分店（日规路6号）</Button>
                <Button onClick={() => setIndex(2)}>显示分店（齐门外大街129号）</Button>
            </ButtonGroup>
            <div style={{ width: '100%', height: '500px' }}>
                <Map zoom={16}>
                    <ToolBarControl offset={[20, 20]} position="LT" />
                    <ControlBarControl offset={[20, 20]} position="RT" />
                    <Marker visiable position={data[0].position} />
                    <Marker visiable position={data[1].position} />
                    <Marker visiable position={data[2].position} />
                    <InfoWindow
                        visiable
                        position={data[index].position}
                        content={data[index].title + data[index].content}
                    />
                </Map>
            </div>
        </>
    );
};

const Footer: FC = () => {
    return (
        <InsetFooter>
            <div style={{ width: '100%', height: '500px' }}>
                <APILoader akay="b950af8ddda0277d014669db9ec43fd9">
                    <MapContainer />
                </APILoader>
            </div>
        </InsetFooter>
    );
};

export default Footer;
