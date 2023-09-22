import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
const TableUser = (props) => {


    const [listUser, setListUser] = useState([])

    useEffect(() => {
        fetchListUser()
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUsers()
        console.log("checklist", res);
    }
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            console.log(item);
                            return (
                                <tr key={`table-users-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>Not found User</td>
                        </tr>
                    }

                </tbody>
            </table >
        </>
    )
}
export default TableUser;