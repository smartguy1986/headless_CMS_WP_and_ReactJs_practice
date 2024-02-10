import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import Homepage from './components/Homepage';
import Header from './components/inc/Header';
import Todolist from './components/demo/tododemo/Todolist';
import Footer from "./components/inc/Footer";
// import 'antd/dist/antd.css';
import '../src/assets/css/animate.css';
import '../src/assets/css/namari-color.css';
import '../src/assets/css/style.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                {/* <div id="preloader">
                    <div id="status" className="la-ball-triangle-path">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div> */}

                <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
                    <div className="top-border wow fadeInDown animated"></div>
                    <div className="right-border wow fadeInRight animated"></div>
                    <div className="bottom-border wow fadeInUp animated"></div>
                    <div className="left-border wow fadeInLeft animated"></div>
                </div>

                <div id="wrapper">
                    <Header />
                    <Routes>
                        <Route path="/arijitnandi" element={<Homepage />} />
                        <Route path="/arijitnandi/react/demos/tododemo" element={<Todolist />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
