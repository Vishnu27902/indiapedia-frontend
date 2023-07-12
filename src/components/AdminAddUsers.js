import AdminImage from "./AdminImage"
import { useDispatch, useSelector } from "react-redux"
import { revokeStatus } from "../features/adminAddUserSlice"
import { useReducer } from "react"
import { notify, revokeNotify } from "../features/notificationSlice"
import { postUser } from "../features/adminAddUserSlice"

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload }
    case "img":
      return { ...state, img: action.payload }
    case "email":
      return { ...state, email: action.payload }
    case "phNumber":
      return { ...state, phNumber: action.payload }
    case "password":
      return { ...state, password: action.payload }
    case "role":
      return { ...state, role: action.payload }
    default:
      throw new Error("No Such Action Exists")
  }
}

function AdminAddUsers() {
  const [state, rootDispatch] = useReducer(reducer, {
    name: "",
    img: "",
    email: "",
    phNumber: "",
    password: "",
    role: ""
  })
  const { success, error, message } = useSelector(state => state.adminAddUsers)
  const dispatch = useDispatch()

  function addUser(e) {
    e.preventDefault()
    dispatch(postUser(state))
  }

  if (success) {
    dispatch(notify({
      status: "success",
      message
    }))
    setTimeout(() => {
      dispatch(revokeNotify())
      dispatch(revokeStatus())
    }, 3000)
  }

  if (error) {
    notify({
      status: "error",
      message
    })
    setTimeout(() => {
      dispatch(revokeNotify())
      dispatch(revokeStatus())
    }, 3000)
  }

  return (
    <div
      className='fixed flex justify-center w-screen top-20 h-[90%] bg-blue-900'
    >
      <div
        className=' bg-white w-full m-10 rounded-3xl p-5 overflow-hidden overflow-y-auto scroll-hide'
      >
        <form
          className='flex flex-col gap-2'
        >
          <h1
            className=' self-center p-2 text-2xl font-bold'
          >
            Add User
          </h1>
          <label
            className='text-md'
            htmlFor="email"
          >
            Email ID :
          </label>
          <input
            id="email"
            className='text-md border border-black outline-black rounded-md px-2 py-1'
            type='email'
            onChange={(e) => rootDispatch({ type: "email", payload: e.target.value })}
            required
          />
          <label
            className='text-md'
            htmlFor="name"
          >
            Name :
          </label>
          <input
            id="name"
            className='text-md border border-black outline-black rounded-md px-2 py-1'
            type='text'
            onChange={(e) => rootDispatch({ type: "name", payload: e.target.value })}
            required
          />
          <label
            className='text-md'
            htmlFor="phNumber"
          >
            Phone Number :
          </label>
          <input
            id="phNumber"
            className='text-md border border-black outline-black rounded-md px-2 py-1'
            type='number'
            onChange={(e) => rootDispatch({ type: "phNumber", payload: e.target.value })}
            required
          />
          <label
            className='text-md'
            htmlFor="password"
          >
            Password :
          </label>
          <input
            id="password"
            className='text-md border border-black outline-black rounded-md px-2 py-1'
            type='password'
            onChange={(e) => rootDispatch({ type: "password", payload: e.target.value })}
            required
          />
          <label
            className='text-md'
            htmlFor="confirmPassword"
          >
            Confirm Password :
          </label>
          <input
            id="confirmPassword"
            className='text-md border border-black outline-black rounded-md px-2 py-1'
            type='password'
            onChange={(e) => rootDispatch({ type: "confirmPassword", payload: e.target.value })}
            required
          />
          <label
            className='text-md'
            htmlFor="role"
          >
            Role :
          </label>
          <input
            id="role"
            name="role"
            className='text-md border border-black outline-black rounded-md px-2 py-1'
            type='radio'
            value="admin"
            onChange={(e) => rootDispatch({ type: "role", payload: e.target.value })}
            required
          />
          <input
            id="role"
            name="role"
            className='text-md border border-black outline-black rounded-md px-2 py-1'
            type='radio'
            value="user"
            onChange={(e) => rootDispatch({ type: "role", payload: e.target.value })}
            required
          />
          <AdminImage
            rootDispatch={rootDispatch}
          />
          <button
            type='submit'
            className='p-2 bg-orange-500 hover:bg-orange-200 hover:shadow-lg hover:shadow-black shadow-black shadow-md w-auto active:scale-50 text-white self-center rounded-lg'
            onClick={(e) => addUser(e)}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminAddUsers