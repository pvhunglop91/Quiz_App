import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import sidebarBg from '../../assets/bg2.jpg';
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom';

const SideBar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact size={'3em'} color='00bfff' ></DiReact>
                        Hung Phan
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Dashboard
                            <Link to="/admins"></Link>
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu

                            icon={<FaGem />}
                            title="Features"
                        >
                            <MenuItem>
                                Quản lí Users
                                <Link to="/admins/manage-users"></Link>
                            </MenuItem>
                            <MenuItem> Quản lí Bài Quiz
                                <Link to="/admins/manage-quizs"></Link>
                            </MenuItem>
                            <MenuItem> Quản lí Câu Hỏi
                                <Link to="/admins/manage-questions"></Link>
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/pvhunglop91"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            {/* <FaGithub /> */}
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                &#169;Hung Phan
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;