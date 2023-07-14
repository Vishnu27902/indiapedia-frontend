import { useEffect, useLayoutEffect } from "react"
import { getAllUsers, getUsers, setPageSelected } from "../features/adminUsersSlice"
import { useDispatch, useSelector } from "react-redux"
import { notify, revokeNotify } from "../features/notificationSlice"
import { toggle } from "../features/adminNavOptionSlice"
import { Link } from "react-router-dom"

import useAxios from "../hooks/useAxios"
import InfoCard from "./InfoCard"
import ReactPaginate from "react-paginate"
import Loading from "./Loading"

function AdminStates() {
    const { pageCount, limit, pageSelected, users, loading, error, message } = useSelector((state) => state.adminUsers)
    const dispatch = useDispatch()
    const axios = useAxios()

    const handlePageChange = (data) => {
        dispatch(setPageSelected(data.selected))
    }

    useLayoutEffect(() => {
        dispatch(getAllUsers({ axios }))
    }, [dispatch, axios])

    useEffect(() => {
        dispatch(getUsers({ pageSelected, limit, axios: axios }))
    }, [dispatch, pageSelected, limit, axios])

    useEffect(() => {
        document.title = "IndiaPedia - Users"
        dispatch(toggle({ type: "users", active: true }))
        return (() => {
            dispatch(toggle({ type: "users", action: false }))
        })
    }, [dispatch])

    if (error) {
        dispatch(notify({ status: "error", message }))
        setTimeout(() => {
            dispatch(revokeNotify())
        }, 3000)
    }

    return (
        <>
            <div
                className="fixed flex w-full h-[90%] top-20 overflow-hidden scroll-hide overflow-y-auto bg-indigo-900"
            >
                <div
                    className="flex flex-col w-full m-5 sm:m-10 p-7 h-auto rounded-3xl shadow-lg shadow-black" style={{ "backgroundColor": `rgba(255,255,255,0.2)` }}
                >
                    <h1
                        className=" text-5xl text-violet-300  text-center"
                    >
                        Users
                    </h1>
                    <hr
                        className=" my-5 border-violet-950"
                    />
                    <ReactPaginate
                        previousLabel="<<"
                        nextLabel=">>"
                        pageCount={pageCount}
                        containerClassName='flex m-3 items-center justify-center gap-2'
                        previousClassName='bg-violet-500 p-1 rounded-lg font-bold text-white'
                        nextClassName='bg-violet-500 p-1 rounded-lg font-bold text-white'
                        breakClassName='flex items-center justify-center'
                        pageClassName='border-2 border-violet-800 rounded-[50%] w-7 flex justify-center items-center'
                        activeClassName='shadow-black shadow-md bg-violet-500 text-white'
                        disabledClassName='hidden'
                        onPageChange={handlePageChange}
                    />
                    <div
                        className="w-auto h-auto flex justify-center flex-grow flex-wrap rounded-3xl p-10 overflow-clip overflow-y-auto scroll-hide gap-10 shadow-md shadow-black"
                        style={{ "backgroundColor": `rgba(255,255,255,0.3)` }}
                    >
                        {
                            loading ? <Loading /> :
                                users.map((user) => {
                                    return (
                                        <InfoCard
                                            key={user._id}
                                            state={user}
                                            type="user"
                                        />
                                    )
                                })
                        }
                    </div>
                    <Link
                        to="add"
                        className="flex justify-center self-center"
                    >
                        <button
                            className="p-2 bg-violet-600 text-white w-32 shadow-black shadow-md hover:shadow-lg hover:shadow-black hover:bg-violet-500 active:scale-50 self-center m-2 rounded-lg"
                        >
                            Add User
                        </button>
                    </Link>
                </div>
            </div >
        </>
    )
}

export default AdminStates