import React from 'react'

function HeadingOne({ data }) {
    return (
        <>
            <h1
                className='font-extrabold m-2 text-4xl'
            >
                {data}
            </h1>
            <hr
                className=' p-px m-2 bg-black'
            />
        </>
    )
}

export default HeadingOne