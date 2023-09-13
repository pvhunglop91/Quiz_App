import React, { useEffect, useState } from "react";
import logo from "./../logo.svg"


const DisplayInfor = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowListUser = () => {
        setShowHideListUser(!isShowHideListUser)

    }

    useEffect(() => {

    }, []);

    return (
        <div className="display-infor-container">
            <div>
                <button onClick={() => { handleShowListUser() }}>
                    {isShowHideListUser === true ? "Hide list User" : "Show list User"}
                </button>
            </div>
            {isShowHideListUser &&
                <div>
                    {
                        listUser.map((user, index) => {
                            return (
                                <div key={user.id} className={user.age > 30 ? "red" : "green"}>
                                    <div>
                                        <div>My name's {user.name} </div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                    </div>
                                    <hr></hr>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}


export default DisplayInfor