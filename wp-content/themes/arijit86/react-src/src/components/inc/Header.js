import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ScriptechLogo from "../../assets/images/scriptech_logo.png"
import Banner from './Banner'
import WeatherData from '../misc/WeatherData'
import { API_ENDPOINTS } from "../../urlConfig"
import { FacebookFilled } from '@ant-design/icons'


const Header = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/arijitnandi/';

    const [logoUrl, setLogoUrl] = useState('');

    useEffect(() => {
        // Function to fetch logo from custom endpoint
        const fetchLogo = async () => {
            try {
                const response = await fetch(API_ENDPOINTS.CUSTOM_LOGO);
                if (response.status === 200) {
                    const data = await response.json();
                    // Assuming your endpoint returns logo URL in data.data
                    setLogoUrl(data.data);
                } else {
                    console.error('Error fetching logo:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching logo:', error.message);
            }
        };

        // Call the fetchLogo function
        fetchLogo();
    }, []);

    return (
        <>
            <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
                <div id="header" className="nav-collapse">
                    <div className="row clearfix">
                        <div className="col-1">

                            <div id="logo">
                                <NavLink to='/arijitnandi/'><img src={logoUrl ? logoUrl : ScriptechLogo} id="banner-logo" alt="Landing Page" /></NavLink>
                                <img src={logoUrl ? logoUrl : ScriptechLogo} id="navigation-logo" alt="Landing Page" />
                            </div>

                            <aside>

                                <ul className="social-icons">
                                    <li>
                                        <NavLink to={'/'}><FacebookFilled /></NavLink>
                                    </li>
                                </ul>

                            </aside>

                            <nav id="nav-main" style={{ float: 'right' }}>
                                <ul>
                                    <li>
                                        <NavLink to='/arijitnandi/' className={'text-bold'}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/arijitnandi/react/demos/tododemo' className={'text-bold'}>Todolist</NavLink>
                                    </li>
                                    <li>
                                        <WeatherData />
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