import India from "../images/India.webp"
import { Fade } from "react-awesome-reveal"
import Footer from "./Footer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toggle } from "../features/optionSelectedSlice"

function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(toggle({ option: "home", active: true }))
        return () => dispatch(toggle({ option: "home", active: false }))
    },[dispatch])

    return (
        <>
            <div
                className='fixed flex top-20 w-full flex-col overflow-hidden overflow-y-auto scroll-hide h-[90%]'
                style={{ "backgroundImage": `url(${India})`, "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}
            >
                <Fade
                    direction="down"
                    duration={1000}
                >
                    <div
                        className="text-8xl sm:text-9xl font-extrabold text-center bg-transparent m-10 text-amber-600"
                    >
                        INDIA
                    </div>
                </Fade>
                <Fade
                    direction="up"
                    duration={1000}
                >
                    <div
                        className="w-auto p-10 m-4 flex-grow mt-10"
                    >
                        <div
                            className="flex flex-col gap-5 md:flex-row justify-between w-auto"
                        >
                            <div
                                className="flex flex-col md:w-[30%] h-full gap-3 shrink-0"
                            >
                                <div
                                    className=" rounded-xl p-4 shrink-0 flex flex-col items-center gap-2 shadow-lg shadow-orange-700"
                                    style={{ "backgroundColor": "rgba(255,255,255,0.5)" }}
                                >
                                    <h1
                                        className=" text-center font-extrabold text-orange-600"
                                    >
                                        Welcome Folks !
                                    </h1>
                                    <p
                                        className=" text-justify"
                                    >
                                        Let's explore the states and cities of India through this graphical web page which makes exploring interactive
                                    </p>
                                </div>
                                <div
                                    className=" rounded-xl p-4 shrink-0 flex flex-col items-center gap-2 shadow-lg shadow-orange-700"
                                    style={{ "backgroundColor": "rgba(255,255,255,0.5)" }}
                                >
                                    <h1
                                        className=" text-center font-extrabold text-orange-600"
                                    >
                                        Kind Reminder
                                    </h1>
                                    <p
                                        className=" text-justify"
                                    >
                                        If you're new to this page don't forget to login and give your valuable feedbacks and suggestions. If I missed any cities or states kindly bare with it until this site is fully developed
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col items-center md:w-[30%] gap-2 shrink-0"
                            >
                                <h1
                                    className="flex flex-grow items-center justify-center text-white font-bold text-4xl"
                                >
                                    Get Started
                                </h1>
                                <div
                                    className="flex gap-10"
                                >
                                    <button
                                        className=" bg-orange-600 hover:bg-orange-400 text-white transition-all px-4 py-2 rounded-lg active:scale-50 hover:shadow-md hover:shadow-black"
                                    >
                                        States
                                    </button>
                                    <button
                                        className=" bg-orange-600 hover:bg-orange-400 text-white transition-all px-4 py-2 rounded-lg active:scale-50 hover:shadow-md hover:shadow-black"
                                    >
                                        Cities
                                    </button>
                                </div>
                            </div>
                            <div
                                className="flex flex-col md:w-[30%] h-full gap-3 shrink-0"
                            >
                                <div
                                    className=" rounded-xl p-4 shrink-0 flex flex-col items-center gap-2 shadow-lg shadow-orange-700"
                                    style={{ "backgroundColor": "rgba(255,255,255,0.5)" }}
                                >
                                    <h1
                                        className=" text-center font-extrabold text-orange-600"
                                    >
                                        Features
                                    </h1>
                                    <ul
                                        className=" ml-4 list-disc gap-2 text-justify"
                                    >
                                        <li>
                                            You can explore the details of each states and cities available in India
                                        </li>
                                        <li>
                                            This site also provides you an API for the states and cities present in India
                                        </li>
                                        <li>
                                            In order to get the API service kindly register and login
                                        </li>
                                        <li>
                                            API access will be provided only for 24 hours as a free user.
                                        </li>
                                        <li>
                                            Let premium version to work without any interruptions.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Footer />
            </div>
        </>
    )
}

export default Home