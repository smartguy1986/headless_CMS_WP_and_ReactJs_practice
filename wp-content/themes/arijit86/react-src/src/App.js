import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import Homepage from './components/Homepage';
import Header from './components/inc/Header';
import Todolist from './components/demo/tododemo/Todolist';
import Footer from "./components/inc/Footer";
import '../src/assets/css/animate.css';
// import '../src/assets/css/font-awesome.min.css';
import '../src/assets/css/namari-color.css';
import '../src/assets/css/style.css';
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <div id="preloader">
                    <div id="status" className="la-ball-triangle-path">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
                    <div>
                        <ScrollAnimation animateIn="fadeInDown" animateOnce>
                            <div className="top-border"></div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInRight" animateOnce>
                            <div className="right-border"></div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce>
                            <div className="bottom-border"></div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
                            <div className="left-border"></div>
                        </ScrollAnimation>
                    </div>
                </div>

                <div id="wrapper">
                    <Header />
                </div>
                <Routes>
                    <Route path="/arijitnandi" element={<Homepage />} />
                    <Route path="/arijitnandi/react/demos/tododemo" element={<Todolist />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
