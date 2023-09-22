import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-success" onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus></FcPlus>
                        Add New User
                    </button>

                </div>
                <div className="table-user-container">
                    <TableUser />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}></ModalCreateUser>
            </div>
        </div>
    )
}

export default ManageUser;