import React from 'react';
import { FacebookFilled, GooglePlusSquareFilled, TwitterSquareFilled, InstagramFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer id="landing-footer" className="clearfix">
                <div className="row clearfix">

                    <ul className="col-2 social-icons">
                        <li>
                            <NavLink to={'/'}><FacebookFilled /></NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}><GooglePlusSquareFilled /></NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}><TwitterSquareFilled /></NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}><InstagramFilled /></NavLink>
                        </li>
                    </ul>

                </div>
            </footer>
        </>
    );
};

export default Footer;
