import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="landing-footer" class="clearfix">
                <div class="row clearfix">

                    <p id="copyright" class="col-2">Made with love by <a href="https://www.shapingrain.com" rel="noopener noreferrer">ShapingRain</a></p>

                    <ul class="col-2 social-icons">
                        <li>
                            <a target="_blank" title="Facebook" href="https://www.facebook.com/username" rel="noopener noreferrer">
                                <i class="fa fa-facebook fa-1x"></i><span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" title="Google+" href="http://google.com/+username" rel="noopener noreferrer">
                                <i class="fa fa-google-plus fa-1x"></i><span>Google+</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" title="Twitter" href="http://www.twitter.com/username" rel="noopener noreferrer">
                                <i class="fa fa-twitter fa-1x"></i><span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" title="Instagram" href="http://www.instagram.com/username" rel="noopener noreferrer">
                                <i class="fa fa-instagram fa-1x"></i><span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" title="behance" href="http://www.behance.net" rel="noopener noreferrer">
                                <i class="fa fa-behance fa-1x"></i><span>Behance</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </footer>
        </>
    );
};

export default Footer;
