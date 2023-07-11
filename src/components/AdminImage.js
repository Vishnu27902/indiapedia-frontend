import { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "data":
            return { ...state, data: action.payload }
        case "alt":
            return { ...state, alt: action.payload }
        default:
            throw new Error("Invalid action")
    }
}

function AdminImage({ rootDispatch }) {
    const [state, dispatchImg] = useReducer(reducer, { data: "", alt: "" })

    const covertToBase64 = async (e) => {
        if (e.target.files[0]) {
            const prom = (e) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader()
                    reader.onload = (e) => resolve(e.target.result)
                    reader.readAsDataURL(e.target.files[0])
                })
            }
            await prom(e).then((data) => {
                dispatchImg({ type: "data", payload: data })
            })
        }
        else{
            dispatchImg({ type: "data", payload: "" })
        }
    }

    useEffect(() => {
        rootDispatch({ type: "img", payload: state })
    }, [rootDispatch, state])

    return (
        <>
            <label
                htmlFor='img'
            >
                Select Image to be Uploaded
            </label>
            <input
                id="img"
                type='file'
                onChange={(e) => covertToBase64(e)}
                required
            />
            {
                !!state.data &&
                <>
                    <label
                        htmlFor='preview'
                    >
                        Image Preview
                    </label>
                    <div
                        id='preview'
                        className='bg-gray-500 grid content-center h-80 w-96 self-center overflow-hidden'
                    >
                        <img
                            src={state.data}
                            alt={state.alt}
                        />
                    </div>
                </>
            }
            <label
                htmlFor='alt'
            >
                Alternative Name
            </label>
            <input
                className='text-md border border-black outline-black rounded-md px-2 py-1'
                type='text'
                onChange={(e) => dispatchImg({ type: "alt", payload: e.target.value })}
                required
            />
        </>
    )
}

export default AdminImage