import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { store } from "./app/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container)

root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/home/*" element={<App />} />
            </Routes>
        </Router>
    </Provider>
)