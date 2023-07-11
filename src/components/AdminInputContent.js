function AdminInputContent({ type, dispatch }) {
    return (
        <>
            <label
                className='text-md '
            >
                {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
            </label>
            <input
                className='text-md border border-black outline-black rounded-md px-2 py-1'
                type="text"
                onChange={(e) => dispatch({ type: "content", payload: e.target.value })}
                required
            />
        </>
    )
}

export default AdminInputContent