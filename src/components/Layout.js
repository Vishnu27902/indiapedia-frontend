import Navbar from "./Navbar"
import Footer from "./Footer"
import Notification from "./Notification";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
    const success = useSelector((state) => state.notification.success)
    const error = useSelector((state) => state.notification.error)

    return (
        <>
            {
                (success || error) && <Notification />
            }
            <div className="h-screen transition-all">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout