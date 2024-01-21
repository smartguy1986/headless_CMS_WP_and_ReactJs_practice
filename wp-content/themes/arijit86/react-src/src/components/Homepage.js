import React from 'react';
import { Button } from '@mui/material';
// import { NavLink } from 'react-router-dom';
import Logo1 from "../assets/images/company-images/company-logo1.png"
import Logo2 from "../assets/images/company-images/company-logo2.png"
import Logo3 from "../assets/images/company-images/company-logo3.png"
import Logo4 from "../assets/images/company-images/company-logo4.png"
import Logo5 from "../assets/images/company-images/company-logo5.png"
import Logo6 from "../assets/images/company-images/company-logo6.png"
import Logo7 from "../assets/images/company-images/company-logo7.png"
import Logo8 from "../assets/images/company-images/company-logo8.png"
import Logo9 from "../assets/images/company-images/company-logo9.png"

import Gallery1 from "../assets/images/gallery-images/gallery-image-1.jpg"
import Gallery2 from "../assets/images/gallery-images/gallery-image-2.jpg"
import Gallery3 from "../assets/images/gallery-images/gallery-image-3.jpg"
import Gallery4 from "../assets/images/gallery-images/gallery-image-4.jpg"
import Gallery5 from "../assets/images/gallery-images/gallery-image-5.jpg"
import Gallery6 from "../assets/images/gallery-images/gallery-image-6.jpg"

import Dancer from "../assets/images/dancer.jpg"

import User1 from "../assets/images/user-images/user-1.jpg"
import User2 from "../assets/images/user-images/user-2.jpg"
import User3 from "../assets/images/user-images/user-3.jpg"

const Homepage = () => {
    return (
        // <Container component="main" maxWidth="sm">
        //     <CssBaseline />
        //     <Box
        //         sx={{
        //             marginTop: 8,
        //             display: 'flex',
        //             flexDirection: 'column',
        //             alignItems: 'center',
        //         }}
        //     >
        //         <NavLink to='/arijitnandi/react/demos/tododemo'>Todolist</NavLink>
        //     </Box>
        // </Container>
        <>
            <main id="content">

                <section id="about" className="introduction scrollto">

                    <div className="row clearfix">

                        <div className="col-3">
                            <div className="section-heading">
                                <h3>SUCCESS</h3>
                                <h2 className="section-title">How We Help You To Sell Your Product</h2>
                                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                            </div>

                        </div>

                        <div className="col-2-3">

                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                                <div className="icon">
                                    <i className="fa fa-html5 fa-2x"></i>
                                </div>
                                <div className="icon-block-description">
                                    <h4>HTML5 &amp; CSS3</h4>
                                    <p>Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro
                                        neglegentur iudico</p>
                                </div>
                            </div>

                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                                <div className="icon">
                                    <i className="fa fa-bolt fa-2x"></i>
                                </div>

                                <div className="icon-block-description">
                                    <h4>Easy to Use</h4>
                                    <p>Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit
                                        detracto mediocrem disputationi</p>
                                </div>
                            </div>

                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon">
                                    <i className="fa fa-tablet fa-2x"></i>
                                </div>

                                <div className="icon-block-description">
                                    <h4>Fully Responsive</h4>
                                    <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro
                                        nemore vivendum</p>
                                </div>
                            </div>

                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">

                                <div className="icon">
                                    <i className="fa fa-rocket fa-2x"></i>
                                </div>

                                <div className="icon-block-description">
                                    <h4>Parallax Effect</h4>
                                    <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro
                                        nemore vivendum</p>
                                </div>
                            </div>

                        </div>

                    </div>


                </section>

                <aside id="gallery" className="row text-center scrollto clearfix" data-featherlight-gallery
                    data-featherlight-filter="a">

                    <Button><img src={Gallery1} alt="Landing Page" /></Button>
                    <Button><img src={Gallery2} alt="Landing Page" /></Button>
                    <Button><img src={Gallery3} alt="Landing Page" /></Button>
                    <Button><img src={Gallery4} alt="Landing Page" /></Button>
                    <Button><img src={Gallery5} alt="Landing Page" /></Button>
                    <Button><img src={Gallery6} alt="Landing Page" /></Button>

                </aside>

                <div id="services" className="scrollto clearfix">

                    <div className="row no-padding-bottom clearfix">

                        <div className="col-3">

                            <blockquote className="testimonial text-right bigtest">
                                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore
                                    et dolore magna aliqua</q>
                                <footer>— John Doe, Happy Customer</footer>
                            </blockquote>

                        </div>

                        <div className="col-3">
                            <div className="section-heading">
                                <h3>BELIEVING</h3>
                                <h2 className="section-title">Focusing On What Matters Most</h2>
                                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo.
                            </p>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!
                            </p>
                            <button href="#" data-videoid="UYJ5IjBRlW8" data-videosite="youtube" className="button video link-lightbox">
                                WATCH VIDEO <i className="fa fa-play" aria-hidden="true"></i>
                            </button>
                        </div>

                        <div className="col-3">
                            <img src={Dancer} alt="Dancer" />
                        </div>

                    </div>


                </div>

                <aside id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">

                    <div className="row clearfix">

                        <div className="section-heading">
                            <h3>FEEDBACK</h3>
                            <h2 className="section-title">What our customers are saying</h2>
                        </div>

                        <blockquote className="col-3 testimonial classNameic">
                            <img src={User1} alt="User" />
                            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                                et dolore magna aliqua</q>
                            <footer>John Doe - Happy Customer</footer>
                        </blockquote>

                        <blockquote className="col-3 testimonial classNameic">
                            <img src={User2} alt="User" />
                            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                                et dolore magna aliqua</q>
                            <footer>Roslyn Doe - Happy Customer</footer>
                        </blockquote>

                        <blockquote className="col-3 testimonial classNameic">
                            <img src={User3} alt="User" />
                            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                                et dolore magna aliqua</q>
                            <footer>Thomas Doe - Happy Customer</footer>
                        </blockquote>

                    </div>

                </aside>

                <section id="clients" className="scrollto clearfix">
                    <div className="row clearfix">

                        <div className="col-3">

                            <div className="section-heading">
                                <h3>TRUST</h3>
                                <h2 className="section-title">Companies who use our services</h2>
                                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                            </div>

                        </div>

                        <div className="col-2-3">

                            <Button className="col-3">
                                <img src={Logo1} alt="Company" />
                                <div className="client-overlay"><span>Tree</span></div>
                            </Button>
                            <Button className="col-3">
                                <img src={Logo2} alt="Company" />
                                <div className="client-overlay"><span>Fingerprint</span></div>
                            </Button>
                            <Button className="col-3">
                                <img src={Logo3} alt="Company" />
                                <div className="client-overlay"><span>The Man</span></div>
                            </Button>
                            <Button className="col-3">
                                <img src={Logo4} alt="Company" />
                                <div className="client-overlay"><span>Mustache</span></div>
                            </Button>
                            <Button className="col-3">
                                <img src={Logo5} alt="Company" />
                                <div className="client-overlay"><span>Goat</span></div>
                            </Button>
                            <Button className="col-3">
                                <img src={Logo6} alt="Company" />
                                <div className="client-overlay"><span>Justice</span></div>
                            </Button>
                            <Button className="col-3">
                                <img src={Logo7} alt="Company" />
                                <div className="client-overlay"><span>Ball</span></div>
                            </Button>
                            <Button className="col-3">
                                <img src={Logo8} alt="Company" />
                                <div className="client-overlay"><span>Cold</span></div>
                            </Button>
                            <Button className="col-3">
                                <img src={Logo9} alt="Company" />
                                <div className="client-overlay"><span>Cold</span></div>
                            </Button>

                        </div>

                    </div>
                </section>

                <section id="pricing" className="secondary-color text-center scrollto clearfix ">
                    <div className="row clearfix">

                        <div className="section-heading">
                            <h3>YOUR CHOICE</h3>
                            <h2 className="section-title">We have the right package for you</h2>
                        </div>

                        <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="pricing-block-content">
                                <h3>Personal</h3>
                                <p className="pricing-sub">The standard version</p>
                                <div className="pricing">
                                    <div className="price"><span>$</span>19</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <ul>
                                    <li>5 Downloads</li>
                                    <li>2 Extensions</li>
                                    <li>Tutorials</li>
                                    <li>Forum Support</li>
                                    <li>1 year free updates</li>
                                </ul>
                                <Button href="#" className="button">BUY TODAY</Button>
                            </div>
                        </div>

                        <div className="pricing-block featured col-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="pricing-block-content">
                                <h3>Student</h3>
                                <p className="pricing-sub">Most popular choice</p>
                                <div className="pricing">
                                    <div className="price"><span>$</span>29</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <ul>
                                    <li>15 Downloads</li>
                                    <li>5 Extensions</li>
                                    <li>Tutorials with Files</li>
                                    <li>Forum Support</li>
                                    <li>2 years free updates</li>
                                </ul>
                                <Button href="#" className="button">BUY TODAY</Button>
                            </div>
                        </div>

                        <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="pricing-block-content">
                                <h3>Business</h3>
                                <p className="pricing-sub">For the whole team</p>
                                <div className="pricing">
                                    <div className="price"><span>$</span>49</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <ul>
                                    <li>Unlimited Downloads</li>
                                    <li>Unlimited Extensions</li>
                                    <li>HD Video Tutorials</li>
                                    <li>Chat Support</li>
                                    <li>Lifetime free updates</li>
                                </ul>
                                <Button href="#" className="button">BUY TODAY</Button>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </>
    );
}

export default Homepage;
