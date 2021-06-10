import User from "../user/user";

type Room = {
    uid: string;
    name: string;
    pw: string;
    adminUserUID: string;
    userList: Array<User>;
};

export default Room;