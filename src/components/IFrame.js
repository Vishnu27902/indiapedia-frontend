import React from 'react'

function IFrame({ data }) {
    return (
        <div className='w-full rounded-xl p-5'>
        <iframe
            title='Map'
            src={data}
            className="w-full h-[400px]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
        </div>
    )
}

export default IFrame