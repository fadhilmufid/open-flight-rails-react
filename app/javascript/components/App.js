import React from "react";
import { Route, Routes } from 'react-router-dom'
import Airline from "./Airline/Airline";
import Airlines from "./Airlines/Airlines";

const App = () => {
    return (
    <Routes>
        <Route path="/" element={<Airlines />}/>
        <Route path="/airlines/:slug" element={<Airline />} />
    </Routes>
     )
}

export default App