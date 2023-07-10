import HomeBackground from "../images/HomeBackground.jpg"

function AdminHome() {
  return (
    <div className='flex flex-col fixed top-20 w-screen h-[90%] overflow-hidden overflow-y-auto scroll-hide'>
      <div className='flex w-screen h-full flex-col' style={{ "backgroundImage": `url(${HomeBackground})`, "backgroundSize": "cover", "backgroundPosition": "center", "backgroundBlendMode": "multiply", "backgroundColor": "grey" }}>
        <div className='flex w-screen h-full flex-col scroll-hide overflow-hidden overflow-y-auto'>
          <h1 className='flex items-center justify-center p-5 font-bold text-5xl text-white'>
            Hello Admin !
          </h1>
          <h3 className='flex items-center justify-center text-2xl text-white p-5 text-center'>
            Welcome again, You can Add, Modify, Delete and Manage the Contents From this Page
          </h3>
          <div className='flex flex-col w-full h-auto items-center justify-center self-center justify-self-center m-5'>
            <h1 className='flex text-center w-full items-center justify-center text-5xl font-extrabold bg-gradient-to-b from-orange-500 via-white to-green-500 text-transparent bg-clip-text'>IndiaPedia</h1>
            <div className='flex flex-col flex-wrap lg:flex-row items-center justify-center w-full self-center justify-self-center m-5'>
              <div className='flex flex-col w-5/6 lg:w-1/3 shrink-0 m-3 p-3 rounded-lg  shadow-lg shadow-black gap-3' style={{ "backgroundColor": "rgba(255,255,255,0.5)" }}>
                <h1 className="font-bold text-2xl text-center text-orange-500">State</h1>
                <ul className="list-disc ml-10">
                  <li>Add New State Data</li>
                  <li>Edit the Existing State Data </li>
                  <li>Delete Existing State Data</li>
                </ul>
                <button className="flex p-2 w-24 bg-orange-500 self-center rounded-lg text-white hover:bg-orange-400 transition-all hover:shadow-lg hover:shadow-black shadow-black shadow-md active:scale-50">
                  Get Started
                </button>
              </div>
              <div className='flex flex-col w-5/6 lg:w-1/3 shrink-0 m-3 p-3 rounded-lg  shadow-lg shadow-black gap-3' style={{ "backgroundColor": "rgba(255,255,255,0.5)" }}>
                <h1 className="font-bold text-2xl text-center text-orange-500">City</h1>
                <ul className="list-disc ml-10">
                  <li>Add New City Data</li>
                  <li>Edit the Existing City Data </li>
                  <li>Delete Existing City Data</li>
                </ul>
                <button className="flex p-2 w-24 bg-orange-500 self-center rounded-lg text-white hover:bg-orange-400 transition-all hover:shadow-lg hover:shadow-black shadow-black shadow-md active:scale-50">
                  Get Started
                </button>
              </div>
              <div className='flex flex-col w-5/6 lg:w-1/3 shrink-0 m-3 p-3 rounded-lg  shadow-lg shadow-black gap-3' style={{ "backgroundColor": "rgba(255,255,255,0.5)" }}>
                <h1 className="font-bold text-2xl text-center text-orange-500">User</h1>
                <ul className="list-disc ml-10">
                  <li>Add New User Data</li>
                  <li>Edit the Existing User Data </li>
                  <li>Delete Existing User Data</li>
                </ul>
                <button className="flex p-2 w-24 bg-orange-500 self-center rounded-lg text-white hover:bg-orange-400 transition-all hover:shadow-lg hover:shadow-black shadow-black shadow-md active:scale-50">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome