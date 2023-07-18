import Loading from "./Loading"
import NoResultFound from "./NoResultFound"
import SearchCard from "./SearchCard"

function SearchMainFrame({ loading, type, state }) {
    return (
        <div className=' text-4xl m-10 font-semibold text-[#9DC209]'>
            <div className=' text-4xl m-10 font-semibold text-[#9DC209]'>
                <div className='mx-2 text-white'>
                    <h1>
                        {type}
                    </h1>
                    <hr className='border-white mx-full my-3' />
                </div>
                {<div className='flex mt-2 w-full gap-2 rounded-tl-[100px] rounded-br-[100px] overflow-hidden overflow-y-auto scroll-hide p-4' style={{ "backgroundColor": "rgba(255,255,255,0.4)" }}>
                    {
                        loading
                            ?
                            <div className="p-40 text-lg text-white w-full flex justify-center">
                                <Loading />
                            </div>
                            : state.length === 0
                                ? <NoResultFound />
                                : state.map((item) =>
                                    <SearchCard
                                        key={item._id}
                                        state={item}
                                    />
                                )
                    }
                </div>}
            </div>
        </div>
    )
}

export default SearchMainFrame