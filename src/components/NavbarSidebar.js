import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { login, register } from "../features/accountOptionSlice"
import { useSelector, useDispatch } from "react-redux"
import { toggleClose } from "../features/navSidebarSlice"
import { Link } from "react-router-dom"

import Logo from "../images/logo/indiapedia-low-resolution-logo-color-on-transparent-background.png"

function NavbarSidebar() {
    const homeSelected = useSelector((state) => state.optionSelected.home)
    const statesSelected = useSelector((state) => state.optionSelected.states)
    const citiesSelected = useSelector((state) => state.optionSelected.cities)
    const { username } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    return (
        <div
            className='absolute w-full h-full z-[15]'
            style={{ "backgroundColor": "rgba(0,0,0,0.5)" }}
        >
            <div
                className='absolute h-full w-1/2 md:w-1/3 bg-blue-950 right-0'
            >
                <ul
                    className='flex flex-col text-white md:p-5 justify-center '
                >
                    <li
                        className='p-5 text-xl flex justify-between items-center'
                    >
                        <h1
                            className="self-start"
                        >
                            <Link to="/home">
                                <img
                                    src={Logo}
                                    alt="IndiaPedia"
                                    className="w-48"
                                />
                            </Link>
                        </h1>
                        <button
                            className="p-1 flex items-center  bg-slate-600 rounded-xl active:scale-50 transition-all hover:bg-violet-500"
                            onClick={() => dispatch(toggleClose())}
                        >
                            <FontAwesomeIcon
                                icon={faArrowRight}
                            />
                        </button>
                    </li>
                    <hr
                        className=" border-gray-900"
                    />
                    {username ?
                        (<>
                            <Link>
                                <button
                                    className="flex w-full"
                                >
                                    <li
                                        className='hover:bg-gray-400 p-5 my-1 cursor-pointer  flex-grow text-left'
                                    >
                                        Dashboard
                                    </li>
                                </button>
                            </Link>
                            <hr
                                className=" border-gray-900"
                            />
                            <button
                                className="flex"
                                onClick={() => dispatch(register())}
                            >
                                <li
                                    className='hover:bg-gray-400 p-5 my-1 cursor-pointer text-left flex-grow'
                                >
                                    Sign Up
                                </li>
                            </button>
                        </>)
                        :
                        (<>
                            <button
                                className="flex"
                                onClick={() => dispatch(login())}
                            >
                                <li
                                    className='hover:bg-gray-400 p-5 my-1 cursor-pointer text-left flex-grow'
                                >
                                    Sign In
                                </li>
                            </button>
                            <hr
                                className=" border-gray-900"
                            />
                            <button
                                className="flex"
                                onClick={() => dispatch(register())}
                            >
                                <li
                                    className='hover:bg-gray-400 p-5 my-1 cursor-pointer text-left flex-grow'
                                >
                                    Sign Up
                                </li>
                            </button>
                        </>)
                    }
                    <hr
                        className=" border-gray-900"
                    />
                    <Link to="/home">
                        <button
                            className="flex w-full"
                        >
                            <li
                                className={`hover:bg-gray-400 p-5 my-1 cursor-pointer flex-grow text-left ${homeSelected ? "bg-gray-400" : ""}`}
                            >
                                Home
                            </li>
                        </button>
                    </Link>
                    <hr
                        className=" border-gray-900"
                    />
                    <Link to="/home/states">
                        <button
                            className="flex w-full"
                        >
                            <li
                                className={`hover:bg-gray-400 p-5 my-1 cursor-pointer flex-grow text-left ${statesSelected ? "bg-gray-400" : ""}`}
                            >
                                States
                            </li>
                        </button>
                    </Link>
                    <hr
                        className=" border-gray-900"
                    />
                    <Link
                        to="/home/cities"
                    >
                        <button
                            className="flex w-full"
                        >
                            <li
                                className={`hover:bg-gray-400 p-5 my-1 cursor-pointer flex-grow text-left ${citiesSelected ? "bg-gray-400" : ""}`}
                            >
                                Cities
                            </li>
                        </button>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default NavbarSidebar