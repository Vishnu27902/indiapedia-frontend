import Footer from "./Footer"
import SearchMainFrame from "./SearchMainFrame"

import { useSelector, useDispatch } from "react-redux"
import { getSearchResult } from "../features/searchSlice"
import { useEffect } from "react"
import { notify, revokeNotify } from "../features/notificationSlice"
// import { resetSearch } from "../features/searchSlice"
import useAxios from "../hooks/useAxios"

function Search() {
    const { states, cities, data, loading, error, message } = useSelector((state) => state.search)
    const dispatch = useDispatch()
    const axios = useAxios()

    useEffect(() => {
        dispatch(getSearchResult({ data, axios }))
    }, [data,dispatch,axios])

    useEffect(() => {
        if (error) {
            dispatch(notify({ status: "error", message }))
            setTimeout(() => {
                dispatch(revokeNotify())
            })
        }
    }, [ dispatch,error, message])

    return (
        <div className='fixed w-full top-20 overflow-auto scroll-hide h-[90%] bg-indigo-900'>
            <SearchMainFrame
                type="States"
                state={states}
                loading={loading}
            />
            <SearchMainFrame
                type="Cities"
                state={cities}
                loading={loading}
            />
            <Footer />
        </div>
    )
}

export default Search