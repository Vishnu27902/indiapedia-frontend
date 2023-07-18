import { useEffect } from "react"
import { getCities, getAllCities, setPageSelected } from "../features/citiesSlice"
import { useDispatch, useSelector } from "react-redux"
import { notify, revokeNotify } from "../features/notificationSlice"
import { toggle } from "../features/optionSelectedSlice"

import useAxios from "../hooks/useAxios"
import InfoCard from "./InfoCard"
import ReactPaginate from "react-paginate"
import Loading from "./Loading"
import NoResultFound from "./NoResultFound"

function Cities() {
    const { pageCount, limit, pageSelected, cities, loading, error, message } = useSelector((state) => state.cities)
    const dispatch = useDispatch()
    const axios = useAxios()

    const handlePageChange = (data) => {
        dispatch(setPageSelected(data.selected))
    }

    useEffect(() => {
        dispatch(getAllCities({ axios }))
    }, [dispatch, axios])

    useEffect(() => {
        dispatch(getCities({ pageSelected, limit, axios: axios }))
    }, [dispatch, pageSelected, limit, axios])

    useEffect(() => {
        document.title = "IndiaPedia - Cities"
        dispatch(toggle({ option: "cities", active: true }))
        return (() => {
            dispatch(toggle({ option: "cities", active: false }))
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
                        Cities
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
                                : cities.length === 0
                                    ? <NoResultFound />
                                    : cities.map((city) => {
                                        return (
                                            <InfoCard
                                                key={city.code}
                                                state={city}
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

export default Cities