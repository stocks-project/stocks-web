import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import RoomList from './room/RoomList';
import { useSelector } from 'react-redux';
import RoomDetail from './room/RoomDetail';

const Root = () => {
    const dataReducer = (useSelector(store => store) as any).dataReducer;
    
    return (
        <RoomDetail/>
    );
}

{/* <BrowserRouter>
            <Route exact path="/" component={RoomList}/>
            {((dataReducer.roomList as Array<any>).forEach(room => {
                <Route exact path={room.uid} component={RoomDetail}/>
            }))}
        </BrowserRouter> */}

export default Root;