import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleRole } from "../features/roleSlice";

import Notification from "./Notification";
import AdminNavbar from "./AdminNavbar";

function AdminLayout() {
    const success = useSelector((state) => state.notification.success)
    const error = useSelector((state) => state.notification.error)

    const { username, role } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const location = useLocation()
    const from = location?.state?.from || "/home"

    useEffect(() => {
        dispatch(toggleRole("admin"))
    }, [dispatch])

    return (
        <>
            {
                (!!username && role === "admin") ?
                    <>
                        {
                            (success || error) && <Notification />
                        }
                        <div className="h-screen transition-all">
                            <AdminNavbar />
                            <Outlet />
                        </div>
                    </> :
                    <Navigate to="/home" state={{ from }} replace />
            }
        </>
    )
}

export default AdminLayout