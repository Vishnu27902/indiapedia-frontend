import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux"
import { deleteData } from "../features/dataFrameSlice"
import { useParams, useNavigate } from "react-router-dom"
import { notify, revokeNotify } from "../features/notificationSlice"
import { toggleOpen } from "../features/mainFrameSidebarSlice"
import { useEffect } from "react"

import useAxios from "../hooks/useAxios"
import Loading from "./Loading"

function MinScreenCategoryBar({ state, data, type }) {
    const dispatch = useDispatch()
    const axios = useAxios()
    const navigate = useNavigate()

    const { id } = useParams()
    const { role } = useSelector((state) => state.role)
    const { success, error, message } = useSelector((state) => state.dataFrame)

    const handleDelete = () => {
        dispatch(deleteData({ id, axios, type }))
    }

    useEffect(() => {
        if (success) {
            dispatch(notify({ status: "success", message }))
            setTimeout(() => {
                dispatch(revokeNotify())
            }, 3000)
            navigate(`/home/admin/${type}`)
        }
        if (error) {
            dispatch(notify({ status: "error", message }))
            setTimeout(() => {
                dispatch(revokeNotify())
            }, 3000)
        }
    }, [success, error, dispatch, message, type, navigate])

    return (
        <div className="fixed h-full w-full lg:hidden z-40" style={{ "backgroundColor": "rgba(0,0,0,0.5)" }}>
            <div className="fixed flex flex-col gap-1 p-3 bg-blue-900 top-20 w-2/4 border-r-blue-950 shadow-2xl shadow-black overflow-y-auto scroll-hide" style={{ "height": "90%" }}>
                <p className="items-center flex justify-between text-white text-lg">
                    <h1>
                        {state}
                    </h1>
                    <button
                        className="p-2 rounded-md hover:bg-blue-500 active:scale-50 shadow-md shadow-black hover:shadow-lg hover:shadow-black"
                        onClick={() => dispatch(toggleOpen(false))}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </p>
                <ul className="wtree">
                    {
                        data?.map(ele => {
                            return (
                                <li>
                                    <span>
                                        {ele}
                                    </span>
                                </li>
                            )
                        }) || <Loading />
                    }
                </ul>
                {
                    role === "admin" &&
                    (<div
                        className="flex items-center justify-center"
                    >
                        <button
                            className="p-3 text-white bg-red-500 w-36 text-center rounded-lg shadow-black shadow-md hover:shadow-black hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>)
                }
            </div>
        </div>
    )
}

export default MinScreenCategoryBar