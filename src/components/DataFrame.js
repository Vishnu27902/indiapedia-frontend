import DataFrameSidebar from './DataFrameSidebar'
import CategoryBar from './Categorybar'
import MinScreenCategoryBar from './MinScreenCategoryBar'
import DataFrameShower from './DataFrameShower'
import Footer from './Footer'

import { useSelector } from 'react-redux'

function DataFrame() {
    const { doOpen } = useSelector((state) => state.mainFrameSidebar)
    return (
        <>
            <DataFrameSidebar />
            <CategoryBar />
            {
                doOpen &&
                <MinScreenCategoryBar />
            }
            <main className="fixed right-0 flex flex-col items-center pt-2 bg-indigo-950 w-11/12 lg:w-3/4 top-20 overflow-y-auto gap-10 scroll-hide" style={{ "height": "90%" }}>
                <DataFrameShower />
                <Footer />
            </main>
        </>
    )
}

export default DataFrame