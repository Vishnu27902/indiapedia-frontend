import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ROLE = "admin"

function RoutesAuthLayout() {
    const { user, role } = useSelector((state) => state.auth)
    const location = useLocation()

    return (
        <>
            {
                (!!user && role === ROLE) ?
                    <Outlet /> :
                    <Navigate
                        to="/home"
                        state={{ from: location }}
                        replace
                    />
            }
        </>
    )
}

export default RoutesAuthLayout