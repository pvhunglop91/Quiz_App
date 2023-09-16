import SideBar from "./Sidebar";
import './Admin.scss'
import { FaHeart, FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet, Link } from 'react-router-dom';

const Admin = (props) => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)}></FaBars>
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Admin;