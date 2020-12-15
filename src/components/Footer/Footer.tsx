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
    const [visible, setVisible] = useState(true);
    const data = [
        {
            position: new AMap.LngLat(120.626528, 31.323818, false),
            title: '<h1 style="font-size: 14px;">苏州市飞天殡葬用品服务有限公司(齐门路)</h1>',
            content: '<body1 style="font-size: 14px;">地址：苏州市姑苏区齐门路87号</body1>'
        },
        {
            position: new AMap.LngLat(120.643575, 31.320755, false),
            title: '<h1 style="font-size: 14px;">苏州市飞天殡葬用品服务有限公司(日规路)</h1>',
            content: '<body1 style="font-size: 14px;">地址：苏州市姑苏区日规路6号</body1>'
        },
        {
            position: new AMap.LngLat(120.625392, 31.333198, false),
            title: '<h1 style="font-size: 14px;">苏州市飞天殡葬用品服务有限公司(齐门外大街)</h1>',
            content: '<body1 style="font-size: 14px;">地址：苏州市姑苏区齐门外大街129号</body1>'
        }
    ];

    return (
        <>
            <ButtonGroup color="default">
                <Button
                    onClick={() => {
                        setVisible(false);
                        setTimeout(() => {
                            setIndex(0);
                            setVisible(true);
                        }, 10);
                    }}
                >
                    显示总店
                </Button>
                <Button
                    onClick={() => {
                        setVisible(false);
                        setTimeout(() => {
                            setIndex(1);
                            setVisible(true);
                        }, 10);
                    }}
                >
                    显示分店1
                </Button>
                <Button
                    onClick={() => {
                        setVisible(false);
                        setTimeout(() => {
                            setIndex(2);
                            setVisible(true);
                        }, 10);
                    }}
                >
                    显示分店2
                </Button>
            </ButtonGroup>
            <div style={{ width: '100%', height: '400px' }}>
                <Map zoom={16} center={data[index].position}>
                    <ToolBarControl offset={[20, 20]} position="LT" />
                    <ControlBarControl offset={[5, 5]} position="RT" />
                    <Marker visiable position={data[0].position} />
                    <Marker visiable position={data[1].position} />
                    <Marker visiable position={data[2].position} />
                    <InfoWindow
                        visiable={visible}
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
