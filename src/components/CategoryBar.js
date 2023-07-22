import { useSelector, useDispatch } from "react-redux"
import { deleteData } from "../features/dataFrameSlice"
import { useParams, useNavigate } from "react-router-dom"
import { notify, revokeNotify } from "../features/notificationSlice"
import { useEffect } from "react"

import useAxios from "../hooks/useAxios"

function CategoryBar({ state, data, type }) {
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
            navigate(`/admin/${type}`)
        }
        if (error) {
            dispatch(notify({ status: "error", message }))
            setTimeout(() => {
                dispatch(revokeNotify())
            }, 3000)
        }
    }, [success, error, dispatch, message, type, navigate])

    return (
        <div className="fixed hidden lg:flex flex-col gap-1 p-3 bg-blue-900 top-20 w-1/4 border-r-blue-950 shadow-2xl shadow-black" style={{ "height": "90%" }}>
            <h1 className="text-white text-lg">{state}</h1>
            <ul className="wtree">
                {
                    data?.map((ele) => {
                        return (<li>
                            <span>
                                {ele}
                            </span>
                        </li>)
                    }) || ""
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
    )
}

export default CategoryBar