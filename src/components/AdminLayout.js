import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Notification from "./Notification";
import AdminNavbar from "./AdminNavbar";

function AdminLayout() {
    const success = useSelector((state) => state.notification.success)
    const error = useSelector((state) => state.notification.error)

    return (
        <>
            {
                (success || error) && <Notification />
            }
            <div className="h-screen transition-all">
                <AdminNavbar />
                <Outlet />
            </div>
        </>
    )
}

export default AdminLayout