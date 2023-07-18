function CategoryBar() {
    return (
        <div className="fixed hidden lg:flex flex-col gap-1 p-3 bg-blue-900 top-20 w-1/4 border-r-blue-950 shadow-2xl shadow-black" style={{ "height": "90%" }}>
            <h1 className="text-white text-lg">Tamilnadu</h1>
            <ul className="wtree">
                <li>
                    <span>
                        Nivel 0
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default CategoryBar