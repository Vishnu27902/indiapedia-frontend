import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { toggleIsOpen } from "../features/adminNavbarSidebarSlice"
import { signOut, reset } from "../features/authSlice"
import { Link } from "react-router-dom"

import Logo from "../images/logo/indiapedia-low-resolution-logo-color-on-transparent-background.png"

function AdminNavbarSidebar() {
  const dispatch = useDispatch()
  const optionStates = useSelector((state) => state.adminNavOption)

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
              <img
                src={Logo}
                alt="IndiaPedia"
                className="w-48"
              />
            </h1>
            <button
              className="p-1 flex items-center  bg-slate-600 rounded-xl active:scale-50 transition-all hover:bg-violet-500"
              onClick={() => dispatch(toggleIsOpen(false))}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
              />
            </button>
          </li>
          <hr
            className=" border-gray-900"
          />
          <Link
            to="dashboard"
          >
            <button>
              <li
                className={`hover:bg-gray-400 p-5 my-1 cursor-pointer ${optionStates.dashboard ? "bg-gray-400" : ""}`}
              >
                Dashboard
              </li>
            </button>
          </Link>
          <hr
            className=" border-gray-900"
          />
          <Link
            to=""
          >
            <button>
              <li
                className={`hover:bg-gray-400 p-5 my-1 cursor-pointer ${optionStates.home ? "bg-gray-400" : ""}`}
              >
                Home
              </li>
            </button>
          </Link>
          <hr
            className=" border-gray-900"
          />
          <Link
            to="states"
          >
            <button>
              <li
                className={`hover:bg-gray-400 p-5 my-1 cursor-pointer ${optionStates.states ? "bg-gray-400" : ""}`}
              >
                States
              </li>
            </button>
          </Link>
          <hr
            className=" border-gray-900"
          />
          <Link
            to="cities"
          >
            <button>
              <li
                className={`hover:bg-gray-400 p-5 my-1 cursor-pointer ${optionStates.cities ? "bg-gray-400" : ""}`}
              >
                Cities
              </li>
            </button>
          </Link>
          <hr
            className=" border-gray-900"
          />
          <Link
            to="users"
          >
            <button>
              <li
                className={`hover:bg-gray-400 p-5 my-1 cursor-pointer ${optionStates.users ? "bg-gray-400" : ""}`}
              >
                Users
              </li>
            </button>
          </Link>
          <hr
            className=" border-gray-900"
          />
          <button
            onClick={(e) => {
              dispatch(signOut())
              dispatch(reset())
              window.location.href = "/home"
            }}
          >
            <li
              className='hover:bg-red-500 p-5 cursor-pointer my-1 '
            >
              Sign Out
            </li>
          </button>
          <hr
            className=" border-gray-900"
          />
        </ul>
      </div>
    </div>
  )
}

export default AdminNavbarSidebar