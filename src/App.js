import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./components/Home"
import InfoPage from "./components/InfoPage"
import Dashboard from "./components/Dashboard"
import AdminLayout from "./components/AdminLayout"
import AdminHome from "./components/AdminHome"
import AdminEditState from "./components/AdminEditState"
import AdminEditUser from "./components/AdminEditUser"
import AdminEditCity from "./components/AdminEditCity"
import AdminStates from "./components/AdminStates"
import AdminAddStates from "./components/AdminAddStates"
import AdminAddCities from "./components/AdminAddCities"
import AdminCities from "./components/AdminCities"
import AdminAddUsers from "./components/AdminAddUsers"
import AdminUsers from "./components/AdminUsers"

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/states" element={<InfoPage key="states" type="states" />} />
                <Route path="/cities" element={<InfoPage key="cities" type="cities" />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
                <Route path="states">
                    <Route index element={<AdminStates />} />
                    <Route path="add" element={<AdminAddStates />} />
                    <Route path=":id" element={<AdminEditState />} />
                </Route>
                <Route path="cities">
                    <Route index element={<AdminCities />} />
                    <Route path="add" element={<AdminAddCities />} />
                    <Route path=":id" element={<AdminEditCity />} />
                </Route>
                <Route path="users">
                    <Route index element={<AdminUsers />} />
                    <Route path="add" element={<AdminAddUsers />} />
                    <Route path=":id" element={<AdminEditUser />} />
                </Route>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default App