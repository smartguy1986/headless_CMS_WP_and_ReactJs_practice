import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import MainLogo from "../../assets/images/logo.png"
import MainLogo2 from "../../assets/images/logo-2.png"
import ScriptechLogo from "../../assets/images/scriptech_logo.png"
import Banner from './Banner'
import Select from '@mui/material/Select';

const Header = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/arijitnandi/';

    return (
        <>
            <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
                <div id="header" className="nav-collapse">
                    <div className="row clearfix">
                        <div className="col-1">

                            <div id="logo">
                                <NavLink to='/arijitnandi/'><img src={ScriptechLogo} id="banner-logo" alt="Landing Page" /></NavLink>
                                <img src={ScriptechLogo} id="navigation-logo" alt="Landing Page" />
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
                                    <li>
                                        <NavLink to='/arijitnandi/react/demos/tododemo'>Todolist</NavLink>
                                    </li>
                                </ul>
                            </nav>

                            {/* <div id="nav-trigger"><span></span></div>
                            <nav id="nav-mobile"></nav> */}

                        </div>
                    </div>
                </div>

                {isHomePage && <Banner />}
            </header>
        </>
    )
}

export default Header