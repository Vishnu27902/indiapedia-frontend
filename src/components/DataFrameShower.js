import BackgroundImage from "../images/tamilnadu.jpg"

function DataFrameShower() {
    return (
        <>
            <div className='flex-grow flex flex-col justify-center lg:w-3/4 m-5 gap-3'>
                <div className="flex flex-col bg-slate-200 w-full h-max rounded-xl p-10">
                    <div className='flex items-center justify-center h-full bg-clip-text' style={{ "backgroundImage": `url(${BackgroundImage})`, "backgroundPosition": "50% 60%" }}>
                        <p className='text-4xl md:text-7xl font-extrabold bg-transparent text-white text-opacity-0 shadow-2xl shadow-black p-1 rounded-3xl'>
                            TAMILNADU
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataFrameShower