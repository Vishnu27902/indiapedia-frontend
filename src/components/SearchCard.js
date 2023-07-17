import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

function SearchCard({ type, state }) {
    return (
        <>
            <div className=' text-4xl m-10 font-semibold text-[#9DC209]'>
                <div className='mx-2 text-white'>
                    <h1>
                        {type}
                    </h1>
                    <hr className='border-white mx-full my-3' />
                </div>
                <div className='flex mt-2 w-full gap-2 rounded-tl-[100px] rounded-br-[100px] overflow-hidden overflow-y-auto scroll-hide p-4' style={{ "backgroundColor": "rgba(255,255,255,0.4)" }}>
                    <div className=' flex flex-col justify-center shrink-0 relative m-3 w-60 md:w-72 bg-slate-900 text-white h-96 p-3 rounded-tl-[100px] rounded-br-[100px] shadow-2xl transition-all duration-75  hover:shadow-black hover:outline outline-orange-500 hover:scale-[1.03]'>
                        <img src={state.img.data} alt={state.img.alt} className='w-full h-max rounded-tl-[100px] rounded-br-[100px] p-2' />
                        <div className='relative flex flex-col p-1 gap-2'>
                            <h2 className=' font-medium'>{state.name}</h2>
                            <p className=' text-sm text-justify flex-grow'>
                                {
                                    state.content.find((element) => element.category === "description")?.length > 100
                                        ? state.content.find((element) => element.category === "description")?.slice(0, 100)
                                        : state.content.find((element) => element.category === "description")?.slice(0, 100)
                                }
                            </p>
                            <div className='flex h-max w-full'>
                                <ul className='flex gap-5 h-10 text-sm ml-[25%] w-full'>
                                    <li className='flex flex-col justify-center items-center'>
                                        <FontAwesomeIcon icon={faHeart} className='w-5 h-max active:animate-ping duration-75 transition-all hover:text-red-500' />
                                        <p>
                                            {state.impression.like?.length || 0}
                                        </p>
                                    </li>
                                    <li className='flex flex-col justify-center items-center'>
                                        <FontAwesomeIcon icon={faComment} className='w-5 h-max' />
                                        <p>
                                            {state.impression.comment?.length || 0}
                                        </p>
                                    </li>
                                    <li className='flex flex-col justify-center items-center'>
                                        <FontAwesomeIcon icon={faShare} className='w-5 h-max' />
                                        <p>
                                            &nbsp;
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCard