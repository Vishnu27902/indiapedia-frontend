import axios from "axios"
import { useEffect, useLayoutEffect } from "react"
import { useState } from "react"
import InfoCard from "./InfoCard"
import ReactPaginate from "react-paginate"
import Loading from "./Loading"
import { useDispatch } from "react-redux"
import { toggle } from "../features/adminNavOptionSlice"

function AdminCities() {
    const [dataCount, setDataCount] = useState(0)
    const [pageCount, setPageCount] = useState(1)
    const [pageSelected, setPageSelected] = useState(0)
    const [states, setStates] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handlePageChange = (data) => {
        setPageSelected(data.selected)
    }

    useEffect(() => {
        dispatch(toggle({ type: "cities", active: true }))
        return (() => {
            dispatch(toggle({ type: "cities", action: false }))
        })
    })

    useLayoutEffect(() => {
        axios.get("http://localhost:5000/statesCount").then((data) => {
            setDataCount(data.data.count)
            setPageCount(Math.ceil(dataCount / 8))
        })
    }, [dataCount])

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5000/states?page=${pageSelected + 1}&limit=8`).then((data) => {
            setStates(data.data.states)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [pageSelected])

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
                            loading ? <Loading /> :
                                states.map((state) => {
                                    return <InfoCard key={state.key} state={state} />
                                })
                        }
                    </div>
                    <button
                        className="p-2 bg-violet-600 text-white w-32 shadow-black shadow-md hover:shadow-lg hover:shadow-black hover:bg-violet-500 active:scale-50 self-center m-2 rounded-lg"
                    >
                        Add New City
                    </button>
                </div>
            </div >
        </>
    )
}

export default AdminCities