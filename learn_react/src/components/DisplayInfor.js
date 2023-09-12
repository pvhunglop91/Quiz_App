import React from "react";

class DisplayInfor extends React.Component {
    render() {

        // console.log(this.props);
        //destructuring array/object
        const { listUsers } = this.props
        //listuser lay tu prop tu thang cha
        // console.log(listUsers);
        // props => Viet tat cua property
        return (
            <div>
                {
                    listUsers.map((user, index) => {
                        // console.log(user);
                        return (
                            <div key={user.id}>
                                <div>My name's {user.name} </div>
                                <div>My age's {user.age}</div>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default DisplayInfor