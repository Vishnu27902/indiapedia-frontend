import { useSelector, useDispatch } from "react-redux"
import { resetPost, postComment, deleteComment, setComment } from "../features/postSlice";
import { notify, revokeNotify } from "../features/notificationSlice";
import { useParams } from "react-router-dom";

import useAxios from "../hooks/useAxios";
import NoResultFound from "./NoResultFound";
import { useEffect } from "react";

function Posts({ data, type }) {
    const dispatch = useDispatch()
    const axios = useAxios()

    const { id } = useParams()
    const { comment, error, success, message } = useSelector((state) => state.post)
    const { role } = useSelector((state) => state.role)
    const { username } = useSelector((state) => state.auth)

    useEffect(() => {
        if (error) {
            dispatch(notify({ status: "success", message }))
            setTimeout(() => {
                dispatch(revokeNotify())
            }, 3000)
        }
        if (success) {
            dispatch(notify({ status: "error", message }))
            setTimeout(() => {
                dispatch(revokeNotify())
            }, 3000)
        }
    }, [dispatch, error, success, message])

    function handleSend() {
        dispatch(postComment({ axios, type, comment, id }))
        dispatch(resetPost())
    }

    function handleDelete(postID) {
        dispatch(deleteComment({ axios, postID, id, type }))
    }

    return (
        <div className="flex flex-col bg-slate-200 w-full h-max rounded-xl p-10 gap-2">
            <h1
                className='text-2xl font-bold'
            >
                Posts
            </h1>
            {
                role === "user" && (
                    <>
                        <textarea
                            className='border border-gray-500 p-1'
                            placeholder='Comment Your Thoughts about this Blog...'
                            onChange={(e) => dispatch(setComment(e.target.value))}
                        />
                        <button
                            className='bg-orange-500 w-20 p-2 self-center text-white rounded-lg shadow-black shadow-md hover:shadow-black hover:shadow-lg hover:bg-orange-400 active:scale-[0.8]'
                            onClick={handleSend}
                        >
                            Send
                        </button>
                    </>)
            }
            {
                data.length > 0
                    ?
                    data.map((ele) => {
                        return (<div
                            className='flex flex-col gap-4'
                        >
                            <div className='flex bg-white w-full p-1 rounded-md'>
                                <div
                                    className='flex flex-col flex-grow p-2'
                                >
                                    <h3
                                        className='text-lg font-semibold'
                                    >
                                        <u>
                                            {ele.username}
                                        </u>
                                    </h3>
                                    <p
                                        className='text-justify'
                                    >
                                        {ele.comment}
                                    </p>
                                </div>
                                {
                                    role === "user" && username === ele.username &&
                                    (<div
                                        className='flex justify-center items-center p-2'
                                    >
                                        <button
                                            className='bg-orange-500 p-1 rounded-sm text-white shadow-black shadow-md hover:shadow-black hover:shadow-lg active:scale-[0.8]'
                                            onClick={() => handleDelete(ele._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>)
                                }
                            </div>
                        </div>)
                    })
                    : <NoResultFound />
            }
        </div>
    )
}

export default Posts