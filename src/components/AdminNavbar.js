import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"
import { toggleIsOpen } from "../features/adminNavbarSidebarSlice"
import { useSelector, useDispatch } from "react-redux"
import { reset, signOut } from "../features/authSlice"
import { Link, useNavigate } from "react-router-dom"
import { toggleRole } from "../features/roleSlice"
import { notify, revokeNotify } from "../features/notificationSlice"
import { setData } from "../features/searchSlice"
import { useRef, useState } from "react"

import AdminNavbarSidebar from "./AdminNavbarSidebar"
import Logo from "../images/logo/indiapedia-low-resolution-logo-color-on-transparent-background.png"

const MESSAGE = "Signed Out Successfully"
const REGEX = /^(\w+\S+)$/

function AdminNavbar() {
    const [searchData, setSearchData] = useState("")
    const isSidebarOpen = useSelector((state) => state.adminNavbarSidebar.isOpen)
    const optionStates = useSelector(state => state.adminNavOption)
    const dispatch = useDispatch()
    const inputRef = useRef()
    const searchRef = useRef()
    const navigate = useNavigate()

    function onSearch(e) {
        e.preventDefault()
        if (REGEX.test(searchData)) {
            dispatch(setData(searchData))
            navigate("search")
            setSearchData("")
        }
    }

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
                    <Link
                        to=""
                    >
                        <button
                            className={`grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50 ${optionStates.home ? "bg-violet-500" : ""}`}
                        >
                            Home
                        </button>
                    </Link>
                    <Link
                        to="states"
                    >
                        <button
                            className={`grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50 ${optionStates.states ? "bg-violet-500" : ""}`}
                        >
                            States
                        </button>
                    </Link>
                    <Link
                        to="cities"
                    >
                        <button
                            className={`grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50 ${optionStates.cities ? "bg-violet-500" : ""}`}
                        >
                            Cities
                        </button>
                    </Link>
                    <Link
                        to="users"
                    >
                        <button
                            className={`grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50 ${optionStates.users ? "bg-violet-500" : ""}`}
                        >
                            Users
                        </button>
                    </Link>
                </div>
                <form
                    className="flex justify-center items-center shrink-0"
                >
                    <input
                        type="text"
                        placeholder="Search"
                        className="rounded-full text-violet-950 shadow-md shadow-black indent-3 p-1 pr-9 w-auto md:w-72  outline-none transition-all"
                        ref={inputRef}
                        value={searchData}
                        onFocus={(e) => {
                            searchRef.current.focus()
                        }}
                        onChange={(e) => setSearchData(e.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        ref={searchRef}
                        className="absolute cursor-pointer text-slate-700 ml-44 md:ml-60"
                        onClick={(e) => onSearch(e)}
                    />
                </form>
                <div
                    className="hidden lg:flex justify-between items-center md:gap-5 p-10"
                >
                    <button
                        className=" shadow-md shadow-black grid content-center bg-white text-black p-2 rounded-xl w-20 hover:bg-red-500 hover:text-white active:scale-50 transition-all"
                        onClick={(e) => {
                            dispatch(signOut())
                            dispatch(reset())
                            dispatch(toggleRole("app"))
                            dispatch(notify({ status: "success", message: MESSAGE }))
                            setTimeout(() => {
                                dispatch(revokeNotify())
                            }, 3000)
                        }}
                    >
                        Sign Out
                    </button>
                    <button
                        className={`p-2 grid items-center rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50 ${optionStates.dashboard ? "bg-violet-500" : ""}`}
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