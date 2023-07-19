import React, { useEffect, useState } from 'react'
import Row from './Row'

function AdminList({ dispatch }) {
    const [itemComponent, setItemComponent] = useState([])
    const [item, setItem] = useState([])
    const [index, setIndex] = useState(0)

    function handleOnClick(e) {
        e.preventDefault()
        setItemComponent((prev) => [...prev, <Row type="list" setRow={setItem} index={index} />])
        setIndex(prev => prev + 1)
    }

    useEffect(() => {
        dispatch({ type: "table", payload: item })
    }, [dispatch, item])

    return (
        <>
            {
                itemComponent
            }
            <button
                className='p-2 bg-orange-500 hover:bg-orange-200 hover:shadow-lg hover:shadow-black shadow-black shadow-md w-auto active:scale-50 text-white self-center rounded-lg'
                onClick={(e) => handleOnClick(e)}
            >
                Add Item
            </button>
        </>
    )
}

export default AdminList