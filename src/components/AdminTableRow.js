function AdminTableRow({ index, setRow }) {
    return (
        <>
            <label
                htmlFor='row'
            >
                Row
            </label>
            <input
                className='text-md border border-black outline-black rounded-md px-2 py-1'
                type='text'
                id='row'
                onChange={(e) => {
                    setRow(prev => {
                        prev[index] = e.target.value
                        return prev
                    })
                }}
                required
            />
        </>
    )
}

export default AdminTableRow