import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import Homepage from './components/Homepage';
import Header from './components/inc/Header';
import Todolist from './components/demo/tododemo/Todolist';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <Header />
                <Routes>
                    <Route path="/arijitnandi" element={<Homepage />} />
                    <Route path="/arijitnandi/react/demos/tododemo" element={<Todolist />} />
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
