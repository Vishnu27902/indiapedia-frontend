import React from 'react'

function IFrame({ data }) {
    return (
        <iframe
            title='Map'
            src={data}
            width="600"
            height="450"
            style={{ "border": 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
    )
}

export default IFrame