import { useState, useReducer, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import AdminContent from "./AdminContent"
import AdminImage from "./AdminImage"

import { postCity, revokeStatus } from "../features/adminAddCitySlice"
import { notify, revokeNotify } from "../features/notificationSlice"
import { toggle } from "../features/adminNavOptionSlice"
import useAxios from "../api/axios"

function reducer(state, action) {
  switch (action.type) {
    case "code":
      return { ...state, code: action.payload }
    case "name":
      return { ...state, name: action.payload }
    case "img":
      return { ...state, img: action.payload }
    case "state":
      return { ...state, state: action.payload }
    case "mainContent":
      let index = action.index
      let payload = action.payload
      let mainContent = state.mainContent
      mainContent[index] = payload
      return { ...state, mainContent }
    default:
      throw new Error("No Such Action Exists")
  }
}

function AdminAddCities() {
  const [state, rootDispatch] = useReducer(reducer,
    {
      code: "",
      name: "",
      img: "",
      state: "",
      mainContent: []
    }
  )
  const [contentList, setContentList] = useState([])
  const [index, setIndex] = useState(0)

  const axios = useAxios()
  const dispatch = useDispatch()
  const adminAddCityStates = useSelector((state) => state.adminAddCity)

  function addMoreContent() {
    setContentList((prev) => [...prev,
    <AdminContent
      key={index}
      rootDispatch={rootDispatch}
      index={index}
      mainContent={state.mainContent}
    />
    ])
    setIndex(prev => prev + 1)
  }

  function addState(e) {
    e.preventDefault()
    dispatch(postCity({ state, axios }))
  }

  useEffect(() => {
    document.title = "IndiaPedia - Add City"
    dispatch(toggle({ type: "cities", active: true }))
    return (() => {
      dispatch(toggle({ type: "cities", action: false }))
    })
  }, [dispatch])

  useEffect(() => {
    if (adminAddCityStates.success) {
      dispatch(notify({
        status: "success",
        message: adminAddCityStates.message
      }))
      setTimeout(() => {
        dispatch(revokeNotify())
        dispatch(revokeStatus())
      }, 3000)
    }
    if (adminAddCityStates.error) {
      dispatch(notify({
        status: "error",
        message: adminAddCityStates.message
      }))
      setTimeout(() => {
        dispatch(revokeNotify())
        dispatch(revokeStatus())
      }, 3000)
    }
  }, [dispatch, adminAddCityStates])

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
            Add City
          </h1>
          <label
            className='text-md'
            htmlFor="code"
          >
            City Code :
          </label>
          <input
            id="code"
            className='text-md border border-black outline-black rounded-md px-2 py-1'
            type='text'
            onChange={(e) => rootDispatch({ type: "code", payload: e.target.value })}
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
            htmlFor="state"
          >
            State :
          </label>
          <input
            id="state"
            className='text-md border border-black outline-black rounded-md px-2 py-1'
            type='text'
            onChange={(e) => rootDispatch({ type: "state", payload: e.target.value })}
            required
          />
          <AdminImage
            rootDispatch={rootDispatch}
          />
          {
            contentList
          }
          <button
            className='p-2 bg-orange-500 hover:bg-orange-200 hover:shadow-lg hover:shadow-black shadow-black shadow-md w-auto text-white self-center rounded-lg active:scale-50'
            onClick={(e) => {
              e.preventDefault()
              addMoreContent()
            }}
          >
            Add More Content
          </button>
          <button
            type='submit'
            className='p-2 bg-orange-500 hover:bg-orange-200 hover:shadow-lg hover:shadow-black shadow-black shadow-md w-auto active:scale-50 text-white self-center rounded-lg'
            onClick={(e) => addState(e)}
          >
            Add State
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminAddCities