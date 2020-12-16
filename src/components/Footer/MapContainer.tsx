import React, { FC, useState } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Store, Storefront } from '@material-ui/icons';
import {
    Marker,
    Map,
    InfoWindow,
    ToolBarControl,
    ControlBarControl,
    APILoader
} from '@uiw/react-amap';

const MapDisplay: FC = () => {
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

    const locationOnClick = (i: number) => {
        setVisible(false);
        setTimeout(() => {
            setIndex(i);
            setVisible(true);
        }, 10);
    };

    return (
        <>
            <BottomNavigation
                value={index}
                onChange={(event, newIndex) => {
                    locationOnClick(newIndex);
                }}
                showLabels
            >
                <BottomNavigationAction label="总店" icon={<Store />} />
                <BottomNavigationAction label="分店1" icon={<Storefront />} />
                <BottomNavigationAction label="分店2" icon={<Storefront />} />
            </BottomNavigation>
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
                        offset={new AMap.Pixel(0, -30)}
                        content={data[index].title + data[index].content}
                    />
                </Map>
            </div>
        </>
    );
};

const MapContainer: FC = () => {
    return (
        <APILoader akay="b950af8ddda0277d014669db9ec43fd9">
            <MapDisplay />
        </APILoader>
    );
};

export default MapContainer;
