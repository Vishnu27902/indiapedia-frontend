import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toggleOpen } from "../features/navSidebarSlice"
import { login, register } from "../features/accountOptionSlice"
import { reset } from "../features/authSlice"

import NavbarSidebar from "./NavbarSidebar"
import SignInSignUp from "./SignInSignUp"

import Logo from "../images/logo/indiapedia-low-resolution-logo-color-on-transparent-background.png"

function Navbar() {
    const homeSelected = useSelector((state) => state.optionSelected.home)
    const statesSelected = useSelector((state) => state.optionSelected.states)
    const citiesSelected = useSelector((state) => state.optionSelected.cities)
    const dashboardSelected = useSelector((state) => state.optionSelected.dashboard)
    const openNavSidebar = useSelector((state) => state.navSidebar.openNavSidebar)
    const doLogin = useSelector((state) => state.accountOption.login)
    const doRegister = useSelector((state) => state.accountOption.register)
    const { username } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    return (
        <>
            <nav
                className="flex gap-3 fixed h-20 w-screen items-center justify-between bg-blue-950 text-white md:gap-3 overflow-hidden shadow-xl shadow-black z-10 p-3"
            >
                <div
                    className="flex"
                >
                    <Link to="/home">
                        <img
                            src={Logo}
                            alt="IndiaPedia"
                            className="w-56"
                        />
                    </Link>
                </div>
                <div
                    className="hidden justify-between md:gap-20 lg:flex"
                >
                    <Link to="/home">
                        <button
                            className={`grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50 ${homeSelected ? "bg-violet-500" : ""}`}
                        >
                            Home
                        </button>
                    </Link>
                    <Link to="states">
                        <button
                            className={`grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50 ${statesSelected ? "bg-violet-500" : ""}`}
                        >
                            States
                        </button>
                    </Link>
                    <Link to="cities">
                        <button
                            className={`grid items-center w-20 rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50 ${citiesSelected ? "bg-violet-500" : ""}`}
                        >
                            Cities
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
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute cursor-pointer text-slate-700 ml-44 md:ml-60"
                    />
                </form>
                {username ?
                    (<div
                        className="hidden lg:flex justify-between items-center md:gap-5 p-10"
                    >
                        <button
                            className=" shadow-md shadow-black grid content-center bg-white text-black p-2 rounded-xl w-20 hover:bg-red-500 hover:text-white active:scale-50 transition-all"
                            onClick={(e) => dispatch(reset())}
                        >
                            Sign Out
                        </button>
                        <button
                            className={`p-2 grid items-center rounded h-10 hover:bg-violet-500 hover:text-white hover:shadow-md hover:shadow-black transition-all duration-200 active:scale-50 ${dashboardSelected ? "bg-violet-500" : ""}`}
                        >
                            Dashboard
                        </button>
                    </div>) : (<div
                        className="hidden lg:flex justify-center items-center md:gap-5 p-10"
                    >
                        <button
                            className=" shadow-md shadow-black grid content-center bg-white text-black p-2 rounded-xl w-20 hover:bg-red-500 hover:text-white active:scale-50"
                            onClick={() => dispatch(login())}
                        >
                            Sign In
                        </button>
                        <button
                            className="shadow-md shadow-black grid content-center bg-white text-black p-2 rounded-xl w-20 hover:bg-green-500 hover:text-white active:scale-50"
                            onClick={() => dispatch(register())}
                        >
                            Sign Up
                        </button>
                    </div>)
                }
                <button
                    onClick={() => dispatch(toggleOpen())}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className="flex lg:hidden text-xl"
                    />
                </button>
            </nav>
            {
                openNavSidebar &&
                <NavbarSidebar />
            }
            {
                (doLogin || doRegister) &&
                <SignInSignUp />
            }
        </>
    )
}

export default Navbar