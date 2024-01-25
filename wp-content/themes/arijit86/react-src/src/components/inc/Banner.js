import React from 'react'
import Button from '@mui/material/Button';

const Banner = () => {
    return (
        <div id="banner-content" className="row clearfix">
            <div className="col-38">
                <div className="section-heading">
                    <h1>ARIJIT NANDI, FULL STACK WEB DEVELOPER</h1>
                    <h2>Welcome to my profile! With over 8 years of dedicated experience in web development, I've honed my skills in PHP-based frameworks, excelling in the creation of web applications and scripts. My expertise lies in leveraging the power of PHP programming language and MySQL databases to deliver robust, innovative solutions.</h2>
                </div>
                <Button variant="outlined">START CREATING TODAY</Button>
            </div>
        </div>
    )
}

export default Banner