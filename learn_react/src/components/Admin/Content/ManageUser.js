import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div>
                    <button>Add New User</button>
                </div>
                <div>
                    table users
                </div>
                <ModalCreateUser></ModalCreateUser>
            </div>
        </div>
    )
}

export default ManageUser;