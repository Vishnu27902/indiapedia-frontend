import DataFrameSidebar from './DataFrameSidebar'
import CategoryBar from './CategoryBar'
import MinScreenCategoryBar from './MinScreenCategoryBar'
import DataFrameShower from './DataFrameShower'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'

import { getData, reset } from '../features/dataFrameSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { notify, revokeNotify } from '../features/notificationSlice'
import Loading from './Loading'

function DataFrame({ type }) {
    const dispatch = useDispatch()
    const axios = useAxios()

    const { id } = useParams()
    const { role } = useSelector((state) => state.role)
    const { loading, error, message, data } = useSelector((state) => state.dataFrame)

    useEffect(() => {
        dispatch(getData({ role, type, axios, id }))

        return (() => dispatch(reset()))
    }, [])

    useEffect(() => {
        if (error) {
            dispatch(notify({ status: "error", message }))
            setTimeout(() => {
                dispatch(revokeNotify())
            }, 3000)
        }
    }, [error, message])

    const { doOpen } = useSelector((state) => state.mainFrameSidebar)
    return (
        <>
            <DataFrameSidebar />
            <CategoryBar
                loading={loading}
                state={data.name}
                data={data.flowChart}
            />
            {
                doOpen &&
                <MinScreenCategoryBar
                    loading={loading}
                    state={data.name}
                    data={data.flowChart}
                />
            }
            <main className="fixed right-0 flex flex-col items-center pt-2 bg-indigo-950 w-11/12 lg:w-3/4 top-20 overflow-y-auto gap-10 scroll-hide" style={{ "height": "90%" }}>
                {
                    data.length === 0
                        ? <Loading />
                        : <DataFrameShower
                            data={data}
                            type={type}
                        />
                }
                <Footer />
            </main>
        </>
    )
}

export default DataFrame