import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import InfoPage from "./components/InfoPage"
import Dashboard from "./components/Dashboard"

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/states" element={<InfoPage key="states" type="states" />} />
                <Route path="/cities" element={<InfoPage key="cities" type="cities" />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default App