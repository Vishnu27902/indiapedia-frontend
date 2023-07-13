import { useEffect, useState } from 'react'

import AdminTableRow from './AdminTableRow'

function AdminTable({ dispatch }) {
    const [rowComponent, setRowComponent] = useState([])
    const [row, setRow] = useState([])
    const [index, setIndex] = useState(0)

    function handleOnClick(e) {
        e.preventDefault()
        setRowComponent((prev) => [...prev, <AdminTableRow type="row" setRow={setRow} index={index} />])
        setIndex(prev => prev + 1)
    }

    useEffect(() => {
        dispatch({ type: "table", payload: row })
    }, [dispatch, row])

    return (
        <>
            {
                rowComponent
            }
            <button
                className='p-2 bg-orange-500 hover:bg-orange-200 hover:shadow-lg hover:shadow-black shadow-black shadow-md w-auto active:scale-50 text-white self-center rounded-lg'
                onClick={(e) => handleOnClick(e)}
            >
                Add row
            </button>
        </>
    )
}

export default AdminTable