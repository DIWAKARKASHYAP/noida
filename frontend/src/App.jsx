import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import Data from "./component/Data";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/form" element={<Form />} />
                    <Route path="/data" element={<Data />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
