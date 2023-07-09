import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"
import Logo from "../images/logo/indiapedia-low-resolution-logo-color-on-transparent-background.png"
import AdminNavbarSidebar from "./AdminNavbarSidebar"
import { toggleIsOpen } from "../features/adminNavbarSidebarSlice"
import { useSelector, useDispatch } from "react-redux"

function AdminNavbar() {
    const isSidebarOpen = useSelector((state) => state.adminNavbarSidebar.isOpen)
    const dispatch = useDispatch()
    return (
        <>
            <nav
                className="flex gap-3 fixed h-20 w-screen items-center justify-between bg-blue-950 text-white md:gap-3 overflow-hidden shadow-xl shadow-black z-10 p-3"
            >
                <div
                    className="flex"
                >
                    <img
                        src={Logo} alt="IndiaPedia" className="w-56"
                    />
                </div>
                <div
                    className="hidden justify-between md:gap-20 lg:flex"
                >
                    <button
                        className="grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50"
                    >
                        Home
                    </button>
                    <button
                        className="grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50"
                    >
                        States
                    </button>
                    <button
                        className="grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50"
                    >
                        Cities
                    </button>
                    <button
                        className="grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50"
                    >
                        Users
                    </button>
                </div>
                <form
                    className="flex justify-center items-center shrink-0"
                >
                    <input
                        type="text"
                        placeholder="Search"
                        className="rounded-full text-violet-950 shadow-md shadow-black indent-3 p-1 pr-9 w-auto md:w-72  outline-none transition-all"
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute cursor-pointer text-slate-700 ml-44 md:ml-60"
                    />
                </form>
                <div
                    className="hidden lg:flex justify-between items-center md:gap-5 p-10"
                >
                    <button
                        className=" shadow-md shadow-black grid content-center bg-white text-black p-2 rounded-xl w-20 hover:bg-red-500 hover:text-white active:scale-50 transition-all"
                    >
                        Sign Out
                    </button>
                    <button
                        className="p-2 grid items-center rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50"
                    >
                        Dashboard
                    </button>
                </div>
                <button
                    onClick={() => dispatch(toggleIsOpen(true))}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className="flex lg:hidden text-xl"
                    />
                </button>
            </nav>
            {
                isSidebarOpen && <AdminNavbarSidebar />
            }
        </>
    )
}

export default AdminNavbar