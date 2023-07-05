import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"

function Footer() {
    return (
        <footer
            className='flex p-3 gap-2 h-auto bg-blue-950 text-violet-300 w-full items-center justify-between flex-shrink-0 z-10 shadow-2xl shadow-black border-t-gray-800 border-t-2'
        >
            <div
                className='sm:text-sm self-start p-2 text-xs'
            >
                <p>
                    IndiaPedia<br />
                    Contact : 6369685305<br />
                    Gmail : indiapedia@gmail.com
                </p>
            </div>
            <div
                className="text-center sm:text-sm text-xs"
            >
                <FontAwesomeIcon
                    icon={faCopyright}
                />
                {" "}copyrights reserved<br />
                2023
            </div>
            <div
                className="text-center sm:text-sm text-xs"
            >
                <p>
                    Developed and managed by<br /> Vishnuvaradhan D<br />
                    <a
                        target="_blank"
                        href="https://www.github.com/vishnu27902"
                    >
                        https://www.github.com/vishnu27902
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer