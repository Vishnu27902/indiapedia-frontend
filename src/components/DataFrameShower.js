import BackgroundImage from "../images/tamilnadu.jpg"
import Description from "./Description"
import HeadingFive from "./HeadingFive"
import HeadingOne from "./HeadingOne"
import HeadingThree from "./HeadingThree"
import IFrame from "./IFrame"
import Image from "./Image"
import List from "./List"
import Table from "./Table"

function DataFrameShower({ data }) {
    const { name, mainContent } = data
    function injector(data) {
        const { category } = data
        switch (category) {
            case "h1":
                return <HeadingOne
                    data={data.content}
                />
            case "h3":
                return <HeadingThree
                    data={data.content}
                />
            case "h5":
                return <HeadingFive
                    data={data.content}
                />
            case "description":
                return <Description
                    data={data.content}
                />
            case "img":
                return <Image
                    data={data.img}
                />
            case "iframe":
                return <IFrame
                    data={data.content}
                />
            case "table":
                return <Table
                    data={data.table}
                />
            case "list":
                return <List
                    data={data.list}
                />
            default:
                throw new Error("No Such Category Exists")
        }
    }
    return (
        <>
            <div className='flex-grow flex flex-col justify-center lg:w-3/4 m-5 gap-3'>
                <div className="flex flex-col bg-slate-200 w-full h-max rounded-xl p-10">
                    <div className='flex items-center justify-center h-full bg-clip-text' style={{ "backgroundImage": `url(${BackgroundImage})`, "backgroundPosition": "50% 60%" }}>
                        <p className='text-4xl md:text-7xl font-extrabold bg-transparent text-white text-opacity-0 shadow-2xl shadow-black p-1 rounded-3xl'>
                            {name}
                        </p>
                    </div>
                    {
                        mainContent.map((ele) => {
                            return injector(ele)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DataFrameShower