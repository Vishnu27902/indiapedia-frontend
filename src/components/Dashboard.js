import DummyImg from "../images/Dummy image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons"

function Dashboard() {
    return (
        <div
            className='fixed flex flex-col bg-blue-900 top-20 h-[90%] w-full p-5 gap-5 overflow-auto scroll-hide overflow-y-auto'
        >
            <h1
                className=" text-5xl font-medium text-indigo-500 text-center"
            >
                Dashboard
            </h1>
            <hr
                className="border-blue-950"
            />
            <div
                className="flex flex-wrap h-auto gap-20 md:flex-nowrap"
            >
                <div
                    className="p-5 flex flex-col md:w-1/2 gap-5 rounded-3xl"
                    style={{ "backgroundColor": "rgba(255,255,255,0.3)" }}
                >
                    <h1
                        className="font-bold text-3xl text-blue-300 text-center"
                    >
                        Profile
                    </h1>
                    <hr
                        className="border-blue-950"
                    />
                    <img
                        src={DummyImg}
                        alt="DP"
                        className='h-[40%] w-[30%] rounded-[100%] self-center shadow-xl shadow-black'
                    />
                    <form
                        className="flex flex-col gap-2"
                    >
                        <label
                            className="text-blue-100"
                            htmlFor="file"
                        >
                            DP Change
                        </label>
                        <div
                            className="flex gap-1 items-center"
                        >
                            <input
                                id="file"
                                accept=".jpg,.jpeg,.png,.webp"
                                type='file'
                            />
                        </div>
                        <label
                            className="text-blue-100"
                        >
                            Username
                        </label>
                        <input
                            className="px-2 py-1 rounded-full outline-orange-500"
                            placeholder="Enter the Username"
                            required
                        />
                        <label
                            className="text-blue-100"
                        >
                            Email ID
                        </label>
                        <input
                            className="px-2 py-1 rounded-full outline-orange-500 "
                            placeholder="Enter the Email ID"
                            required
                        />
                        <label
                            className="text-blue-100"
                        >
                            Phone Number
                        </label>
                        <input
                            className="px-2 py-1 rounded-full outline-orange-500"
                            placeholder="Enter the Phone Number"
                            required
                        />
                    </form>
                    <h2
                        className="text-blue-100"
                    >
                        Created on
                    </h2>
                    <button
                        className="bg-gray-600 hover:bg-gray-500 text-white active:scale-50 transition-all self-end p-3 rounded-xl shadow-md shadow-black hover:shadow-lg hover:shadow-black"
                    >
                        <FontAwesomeIcon
                            icon={faEdit}
                        />
                    </button>
                    <button
                        className=" bg-green-600 hover:bg-green-400 text-white active:scale-50 transition-all self-end p-3 rounded-full  shadow-md shadow-black hover:shadow-lg hover:shadow-black"
                    >
                        Update Changes
                    </button>
                    <button
                        className="p-3 rounded-full self-center bg-red-600 text-white hover:bg-red-400 active:scale-50 transition-all  shadow-md shadow-black hover:shadow-lg hover:shadow-black"
                    >
                        Delete Account
                    </button>
                </div>
                <div
                    className="p-5 flex flex-col md:w-1/2 gap-5 rounded-3xl"
                    style={{ "backgroundColor": "rgba(255,255,255,0.3)" }}
                >
                    <h1
                        className="font-bold text-3xl  text-blue-300 text-center"
                    >
                        API Details
                    </h1>
                    <hr
                        className="border-blue-950"
                    />
                    <h3
                        className="font-bold text-xl text-blue-100"
                    >
                        API Key
                    </h3>
                    <hr
                        className="w-1/6 border-blue-950"
                    />
                    <button
                        className="self-center p-3 rounded-3xl active:scale-50 transition-all  bg-blue-700 text-white hover:bg-blue-500  shadow-md shadow-black hover:shadow-lg hover:shadow-black"
                    >
                        Generate API Key
                    </button>
                    <p
                        className=" rounded-xl p-3 overflow-x-auto scroll-hide"
                        style={{ "backgroundColor": "rgba(255,255,255,0.8)" }}
                    >
                        API Key
                    </p>
                    <button
                        className="self-center p-3 rounded-3xl active:scale-50 transition-all  bg-red-500 text-white hover:bg-red-400  shadow-md shadow-black hover:shadow-lg hover:shadow-black"
                    >
                        Remove API Key
                    </button>
                    <div
                        className="flex flex-col  gap-5 p-3 text-justify rounded-xl"
                        style={{ "backgroundColor": "rgba(255,255,255,0.8)" }}
                    >
                        <h3
                            className="font-bold text-xl text-blue-950"
                        >
                            Instructions
                        </h3>
                        <ul
                            className=" list-disc ml-4"
                        >
                            <li>
                                API Key will be valid only for 24 hrs once the key is expired you can regenerate the key by logging in again.
                            </li>
                            <li>
                                For using API without any interruption you check the premium version.
                            </li>
                            <li>
                                Misusing of data may lead to immediate removal from the user access.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard