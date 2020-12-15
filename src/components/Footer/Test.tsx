// import React, { FC, useRef, useEffect, useState } from 'react';

// import { Button, ButtonGroup } from '@material-ui/core';
// import { getInsetFooter } from '@mui-treasury/layout';
// import { useMap, useMarker, useInfoWindow, APILoader } from '@uiw/react-baidu-map';
// import styled from 'styled-components';

// const InsetFooter = getInsetFooter(styled);

// const data = [
//     {
//         position: { lng: 120.633087, lat: 31.329705 },
//         title: '苏州市飞天殡葬用品服务有限公司(齐门路)',
//         content: '地址：苏州市姑苏区齐门路87号'
//     },
//     {
//         position: { lng: 120.650157, lat: 31.326542 },
//         title: '苏州市飞天殡葬用品服务有限公司(日规路)',
//         content: '地址：苏州市姑苏区日规路6号'
//     },
//     {
//         position: { lng: 120.631569, lat: 31.339355 },
//         title: '苏州市飞天殡葬用品服务有限公司(齐门外大街)',
//         content: '地址：苏州市姑苏区齐门外大街129号'
//     }
// ];

// const MapContainer = () => {
//     const divElm = useRef(null);
//     const [index, setIndex] = useState(0);

//     const { setContainer, map } = useMap({
//         widget: ['GeolocationControl', 'NavigationControl', 'CopyrightControl'],
//         enableScrollWheelZoom: true,
//         center: data[0].position,
//         zoom: 16
//     });
//     useMarker({
//         map,
//         position: data[0].position
//     });
//     useMarker({
//         map,
//         position: data[1].position
//     });
//     useMarker({
//         map,
//         position: data[2].position
//     });
//     const { isOpen, setIsOpen } = useInfoWindow({
//         BMap,
//         map,
//         isOpen: true,
//         enableCloseOnClick: false,
//         title: data[index].title,
//         content: data[index].content,
//         position: data[index].position
//     });

//     useEffect(() => {
//         if (divElm.current) {
//             // eslint-disable-next-line
//             setContainer(divElm.current as any);
//         }
//     }, [setContainer]);

//     const updateInfo = (i: number) => {
//         setIsOpen(!isOpen);

//         setTimeout(() => {
//             setIndex(i);
//             setIsOpen(true);
//         });
//     };

//     return (
//         <>
//             <ButtonGroup color="primary" aria-label="outlined primary button group">
//                 <Button onClick={() => updateInfo(0)}>显示总店（齐门路87号）</Button>
//                 <Button onClick={() => updateInfo(1)}>显示分店（日规路6号）</Button>
//                 <Button onClick={() => updateInfo(2)}>显示分店（齐门外大街129号）</Button>
//             </ButtonGroup>
//             <div ref={divElm} style={{ height: '100%' }} />
//         </>
//     );
// };

// const Footer: FC = () => {
//     return (
//         <InsetFooter>
//             <div style={{ width: '100%', height: '500px' }}>
//                 <APILoader akay="9GnAMm2mDlQUd3PgPSpZfL02siXN8XW4">
//                     <MapContainer />
//                 </APILoader>
//             </div>
//         </InsetFooter>
//     );
// };

// export default Footer;
