import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { toggleOpen } from "../features/mainFrameSidebarSlice"
import { useDispatch } from "react-redux"

function DataFrameSidebar() {
    const dispatch = useDispatch()

    return (
        <div className='absolute flex flex-col lg:scale-0 bg-blue-900 h-[90%] items-center justify-center w-1/12 top-20 scroll-hide overflow-y-auto'>
            <button
                onClick={() => dispatch(toggleOpen(true))}
                className="w-full h-full active:bg-slate-300"
            >
                <FontAwesomeIcon
                    icon={faArrowRight}
                />
            </button>
        </div>
    )
}

export default DataFrameSidebar