import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListGroupPage from "./pages/ListGroupPage/ListGroupPage";

import "./styles/blowout.css";

import "./index.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListGroupPage />} />

                <Route path="*" element={<ListGroupPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
