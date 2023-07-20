import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { toggleOpen } from "../features/mainFrameSidebarSlice"
import Loading from "./Loading"

function MinScreenCategoryBar({ state, data }) {
    const dispatch = useDispatch()

    return (
        <div className="fixed h-full w-full lg:hidden z-40" style={{ "backgroundColor": "rgba(0,0,0,0.5)" }}>
            <div className="fixed flex flex-col gap-1 p-3 bg-blue-900 top-20 w-2/4 border-r-blue-950 shadow-2xl shadow-black overflow-y-auto scroll-hide" style={{ "height": "90%" }}>
                <p className="items-center flex justify-between text-white text-lg">
                    <h1>
                        {state}
                    </h1>
                    <button
                        className="p-2 rounded-md hover:bg-blue-500 active:scale-50 shadow-md shadow-black hover:shadow-lg hover:shadow-black"
                        onClick={() => dispatch(toggleOpen(false))}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </p>
                <ul className="wtree">
                    {
                        data?.map(ele => {
                            return (
                                <li>
                                    <span>
                                        {ele}
                                    </span>
                                </li>
                            )
                        }) || <Loading />
                    }
                </ul>
            </div>
        </div>
    )
}

export default MinScreenCategoryBar