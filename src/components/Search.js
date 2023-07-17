import Footer from "./Footer"
import SearchMainFrame from "./SearchMainFrame"

function Search() {
    return (
        <div className='fixed w-full top-20 overflow-auto scroll-hide h-[90%] bg-indigo-900'>
            <SearchMainFrame />
            <Footer />
        </div>
    )
}

export default Search