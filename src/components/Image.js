

function Image({ data }) {
    return (
        <img
            src={data.data}
            className='m-5 rounded-3xl'
            alt={data.alt}
        />
    )
}

export default Image