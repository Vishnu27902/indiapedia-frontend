import { useEffect, useReducer } from 'react'

import AdminInputContent from './AdminInputContent'
import AdminImage from './AdminImage'
import AdminTable from './AdminTable'
import AdminList from './AdminList'

function reducer(state, action) {
    switch (action.type) {
        case "order":
            return { ...state, order: action.payload }
        case "category":
            return { ...state, category: action.payload }
        case "img":
            return { ...state, img: action.payload }
        case "content":
            return { ...state, content: action.payload }
        case "table":
            return { ...state, table: action.payload }
        case "list":
            return { ...state, table: action.payload }
        default:
            throw new Error(`Unhandled action ${action}`)
    }
}

function AdminContent({ rootDispatch, index, mainContent }) {
    const [state, dispatch] = useReducer(reducer, { order: "", category: "content", img: "", content: "", table: [], list: [] })

    useEffect(() => {
        console.log("hello")
        rootDispatch({ type: "mainContent", payload: state, index })
    }, [rootDispatch, index, state, mainContent])

    return (
        <>
            <label
                className=' text-md'
                htmlFor='order'
            >
                Order
            </label>
            <input
                className='text-md border border-black outline-black rounded-md px-2 py-1'
                type="number"
                onChange={(e) => dispatch({ type: "order", payload: e.target.value })}
                required
            />
            <label
                htmlFor='category'
            >
                Category
            </label>
            <select
                className='bg-gray-200 border border-black px-2 py-1 rounded-md'
                name='category'
                id='category'
                onInput={(e) => dispatch({ type: "category", payload: e.target.value })}
                required
            >
                <option value="description">Description</option>
                <option value="img">Image</option>
                <option value="list">List</option>
                <option value="iframe">iframe</option>
                <option value="table">table</option>
                <option value="h1">H1</option>
                <option value="h3">H3</option>
                <option value="h5">H5</option>
            </select>
            {
                state.category === "img"
                    ? <AdminImage rootDispatch={dispatch} />
                    : state.category === "table"
                        ? <AdminTable dispatch={dispatch} />
                        : state.category === "list"
                            ? <AdminList dispatch={dispatch} />
                            : <AdminInputContent type={state.category} dispatch={dispatch} />
            }
        </>
    )
}

export default AdminContent