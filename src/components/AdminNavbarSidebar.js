import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Logo from "../images/logo/indiapedia-low-resolution-logo-color-on-transparent-background.png"
import { useDispatch, useSelector } from "react-redux"
import { toggleIsOpen } from "../features/adminNavbarSidebarSlice"

function AdminNavbarSidebar() {
  const dispatch = useDispatch()
  const optionStates = useSelector((state) => state.adminNavOption)

  return (
    <div className='absolute w-full h-full z-[15]' style={{ "backgroundColor": "rgba(0,0,0,0.5)" }}>
      <div className='absolute h-full w-1/2 md:w-1/3 bg-blue-950 right-0'>
        <ul className='flex flex-col text-white md:p-5 justify-center '>
          <li
            className='p-5 text-xl flex justify-between items-center'
          >
            <h1
              className="self-start"
            >
              <img src={Logo} alt="IndiaPedia" className="w-48" />
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
          <hr className=" border-gray-900" />
          <button>
            <li
              className={`hover:bg-gray-400 p-5 my-1 cursor-pointer ${optionStates.dashboard ? "bg-gray-400" : ""}`}
            >
              Dashboard
            </li>
          </button>
          <hr className=" border-gray-900" />
          <button>
            <li
              className={`hover:bg-gray-400 p-5 my-1 cursor-pointer ${optionStates.home ? "bg-gray-400" : ""}`}
            >
              Home
            </li>
          </button>
          <hr className=" border-gray-900" />
          <button>
            <li
              className={`hover:bg-gray-400 p-5 my-1 cursor-pointer ${optionStates.states ? "bg-gray-400" : ""}`}
            >
              States
            </li>
          </button>
          <hr className=" border-gray-900" />
          <button>
            <li
              className={`hover:bg-gray-400 p-5 my-1 cursor-pointer ${optionStates.cities ? "bg-gray-400" : ""}`}
            >
              Cities
            </li>
          </button>
          <hr className=" border-gray-900" />
          <button>
            <li
              className={`hover:bg-gray-400 p-5 my-1 cursor-pointer ${optionStates.users ? "bg-gray-400" : ""}`}
            >
              Users
            </li>
          </button>
          <hr className=" border-gray-900" />
          <button>
            <li
              className='hover:bg-red-500 p-5 cursor-pointer my-1 '
            >
              Logout
            </li>
          </button>
          <hr className=" border-gray-900" />
        </ul>
      </div>
    </div>
  )
}

export default AdminNavbarSidebar