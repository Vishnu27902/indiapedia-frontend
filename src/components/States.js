import { useEffect } from "react"
import { getStates, getAllStates, setPageSelected } from "../features/statesSlice"
import { useDispatch, useSelector } from "react-redux"
import { notify, revokeNotify } from "../features/notificationSlice"
import { toggle } from "../features/optionSelectedSlice"

import useAxios from "../hooks/useAxios"
import InfoCard from "./InfoCard"
import ReactPaginate from "react-paginate"
import Loading from "./Loading"
import NoResultFound from "./NoResultFound"

function States() {
    const { pageCount, limit, pageSelected, states, loading, error, message } = useSelector((state) => state.states)
    const { role } = useSelector((state) => state.role)
    const dispatch = useDispatch()
    const axios = useAxios()

    const handlePageChange = (data) => {
        dispatch(setPageSelected(data.selected))
    }

    useEffect(() => {
        dispatch(getAllStates({ axios, role }))
    }, [dispatch, axios, role])

    useEffect(() => {
        dispatch(getStates({ pageSelected, limit, axios: axios, role }))
    }, [dispatch, pageSelected, limit, axios, role])

    useEffect(() => {
        document.title = "IndiaPedia - Cities"
        dispatch(toggle({ option: "states", active: true }))
        return (() => {
            dispatch(toggle({ option: "states", active: false }))
        })
    }, [dispatch])

    useEffect(() => {
        if (error) {
            dispatch(notify({ status: "error", message }))
            setTimeout(() => {
                dispatch(revokeNotify())
            }, 3000)
        }
    }, [dispatch, error, message])

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
                        States
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
                            loading
                                ? <Loading />
                                : states.length === 0
                                    ? <NoResultFound />
                                    : states.map((state) => {
                                        return (
                                            <InfoCard
                                                key={state.code}
                                                state={state}
                                            />
                                        )
                                    })
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default States