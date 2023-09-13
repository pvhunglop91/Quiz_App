// class component
// function component

import React, { useState } from 'react'
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

const MyComponent = (props) => {

    const [listUser, setListUser] = useState(
        [
            {
                id: 1,
                name: 'Hung',
                age: 31
            },
            {
                id: 2,
                name: 'Hung1',
                age: 16
            },
            {
                id: 3,
                name: 'Hung2',
                age: 19
            },
            {
                id: 4,
                name: 'Hung3',
                age: 304
            }
        ]
    )

    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUser])
    }

    const handleDeleteUser = (userID) => {
        let listUserClone = [...listUser]
        listUserClone = listUserClone.filter(item => item.id !== userID)
        setListUser(listUserClone)
    }

    //jsx

    //DRY: dont repeat yourself
    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            ></AddUserInfor>
            <br></br>
            <DisplayInfor
                listUser={listUser}
                handleDeleteUser={handleDeleteUser}
            ></DisplayInfor>
        </div>
    );
}

export default MyComponent