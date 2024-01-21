import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink to='/arijitnandi'>Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header