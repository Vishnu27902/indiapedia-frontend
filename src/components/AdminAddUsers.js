import { useDispatch, useSelector } from "react-redux"
import { useEffect, useReducer } from "react"
import { notify, revokeNotify } from "../features/notificationSlice"
import { postUser, revokeStatus } from "../features/adminAddUserSlice"

import AdminImage from "./AdminImage"

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
    case "confirmPassword":
      return { ...state, confirmPassword: action.payload }
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
    confirmPassword: "",
    role: ""
  })
  const adminAddUserStates = useSelector((state) => state.adminAddUser)
  const dispatch = useDispatch()

  function addUser(e) {
    e.preventDefault()
    dispatch(postUser(state))
  }

  useEffect(() => {
    if (adminAddUserStates.success) {
      dispatch(notify({
        status: "success",
        message: adminAddUserStates.message
      }))
      setTimeout(() => {
        dispatch(revokeNotify())
        dispatch(revokeStatus())
      }, 3000)
    }

    if (adminAddUserStates.error) {
      dispatch(notify({
        status: "error",
        message: adminAddUserStates.message
      }))
      setTimeout(() => {
        dispatch(revokeNotify())
        dispatch(revokeStatus())
      }, 3000)
    }
  }, [dispatch, adminAddUserStates])

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
          <div
            className="flex gap-3 items-center"
          >
            <label
              className='text-md'
              htmlFor="role"
            >
              Role :
            </label>
            <input
              id="admin"
              name="role"
              className='text-md border border-black outline-black rounded-md px-2 py-1'
              type='radio'
              value="admin"
              onChange={(e) => rootDispatch({ type: "role", payload: e.target.value })}
              required
            />
            <label
              htmlFor="admin"
            >
              Admin
            </label>
            <input
              id="user"
              name="role"
              className='text-md border border-black outline-black rounded-md px-2 py-1'
              type='radio'
              value="user"
              onChange={(e) => rootDispatch({ type: "role", payload: e.target.value })}
              required
            />
            <label
              htmlFor="user"
            >
              User
            </label>
          </div>
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