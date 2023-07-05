import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

import base64Converter from '../helpers/base64Converter'

function InfoCard({ state }) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div
            className="flex flex-col justify-end w-52 sm:w-64 h-1/2 md:h-2/3 rounded-2xl p-2 shrink-0 shadow-lg shadow-black hover:shadow-xl hover:shadow-black hover:border-orange-600 hover:border-2 active:scale-[0.9] cursor-pointer"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            style={{ "backgroundImage": `url(data:${state.img.contentType};base64,${base64Converter(state.img.data.data)})`
            , "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center" }}
        >
            <h1
                className="text-center text-xl font-extrabold md:text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-green-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
            >
                {state.name}
            </h1>
            <div
                className={`${isHovered ? "flex" : "hidden"} flex-col gap-1 transition-all duration-500`}
            >
                <hr
                    className="w-1/2 self-center"
                />
                <ul
                    className='flex gap-5 h-10 text-sm justify-center items-center w-full text-white opacity-80'
                >
                    <li
                        className='flex flex-col justify-center items-center'
                    >
                        <FontAwesomeIcon
                            icon={faHeart}
                            className='w-5 h-max'
                        />
                        <p>
                            1
                        </p>
                    </li>
                    <li
                        className='flex flex-col justify-center items-center'
                    >
                        <FontAwesomeIcon
                            icon={faComment}
                            className='w-5 h-max'
                        />
                        <p>
                            2
                        </p>
                    </li>
                    <li
                        className='flex flex-col justify-center items-center'
                    >
                        <FontAwesomeIcon
                            icon={faShare}
                            className='w-5 h-max'
                        />
                        <p>
                            3
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default InfoCard