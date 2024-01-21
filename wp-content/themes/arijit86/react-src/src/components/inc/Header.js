import React from 'react'
import { NavLink } from 'react-router-dom'
import MainLogo from "../../assets/images/logo.png"
import MainLogo2 from "../../assets/images/logo-2.png"

const Header = () => {
    return (
        <>
            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink to='/arijitnandi/'>Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

            <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
                <div id="header" className="nav-collapse">
                    <div className="row clearfix">
                        <div className="col-1">

                            <div id="logo">
                                <img src={MainLogo} id="banner-logo" alt="Landing Page" />
                                <img src={MainLogo2} id="navigation-logo" alt="Landing Page" />
                            </div>

                            <aside>

                                <ul className="social-icons">
                                    <li>
                                        {/* <a target="_blank" title="Facebook" href="#">
                                            <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                                        </a> */}
                                    </li>
                                </ul>

                            </aside>

                            <nav id="nav-main">
                                <ul>
                                    <li>
                                        <NavLink to='/arijitnandi/'>Home</NavLink>
                                    </li>
                                </ul>
                            </nav>

                            <div id="nav-trigger"><span></span></div>
                            <nav id="nav-mobile"></nav>

                        </div>
                    </div>
                </div>

                <div id="banner-content" className="row clearfix">
                    <div className="col-38">
                        <div className="section-heading">
                            <h1>A FREE AND SIMPLE LANDING PAGE</h1>
                            <h2>Namari is a free landing page template you can use for your projects. It is free to use for your
                                personal and commercial projects, enjoy!</h2>
                        </div>
                        <button>START CREATING TODAY</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header