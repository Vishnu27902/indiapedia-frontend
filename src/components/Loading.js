import loading from "../images/loading.svg"

function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full">
        <img src={loading}
        alt="loading"
        className=' w-10'
        />
    </div>
  )
}

export default Loading