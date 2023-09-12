// class component
// function component

import React from 'react'
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {
                id: 1,
                name: 'Hung',
                age: 30
            },
            {
                id: 2,
                name: 'Hung1',
                age: 301
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
    }

    //jsx

    //DRY: dont repeat yourself
    render() {
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent