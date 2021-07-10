const state = {
    roomList: [],
    userList: []
};

const SET_ROOM_LIST = "SET_ROOM_LIST";

const setData = (type: string) => (roomList: any) => ({
    type,
    roomList
});

export const setRoomList = setData(SET_ROOM_LIST);


const dataReducer = (action: any) => {
    if (action !== undefined) {
        switch (action.type) {
            case SET_ROOM_LIST:
                return {
                    ...state,
                    roomList: action.payload
                };
            default:
                return state;
        }
    }
    
    return state;
}

export default dataReducer;