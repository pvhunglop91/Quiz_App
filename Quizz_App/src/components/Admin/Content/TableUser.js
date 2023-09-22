import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const TableUser = () => {

    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        fetchAllUSer()
    })

    const fetchAllUSer = async () => {
        let res = await getAllUsers();
        console.log("check res", res);
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }
    return (
        <>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-primary">View</button>
                                        <button className="btn btn-warning mx-3">Update</button>
                                        <button className="btn btn-danger">Delete</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                        listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>User not found</td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )
}

export default TableUser;