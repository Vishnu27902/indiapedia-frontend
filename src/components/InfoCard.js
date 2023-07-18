import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons'


function InfoCard({ state, type }) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div
            className="flex flex-col justify-end w-64 h-[50%] sm:w-64 md:h-[65%] md:w-72 lg:h-[90%] rounded-2xl p-2 shrink-0 shadow-lg shadow-black hover:shadow-xl hover:shadow-black hover:outline outline-orange-500 active:scale-[0.9] cursor-pointer transition-all hover:scale-[1.03]"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            style={{
                "backgroundImage": `url(${state.img.data})`,
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover",
                "backgroundPosition": "center"
            }}
        >
            <h1
                className="text-center text-xl font-extrabold md:text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-green-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
            >
                {state.name}
            </h1>
            {type !== "user" &&
                (<div
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
                                {state.impression.like.length || 0}
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
                                {state.impression.comment.length || 0}
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
                                0
                            </p>
                        </li>
                    </ul>
                </div>)
            }
        </div>
    )
}

export default InfoCard