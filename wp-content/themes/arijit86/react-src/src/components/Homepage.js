import React from 'react';
import { Button, Typography } from 'antd';
// import { NavLink } from 'react-router-dom';
import Gallery1 from "../assets/images/gallery-images/gallery-image-1.jpg"
import Gallery2 from "../assets/images/gallery-images/gallery-image-2.jpg"
import Gallery3 from "../assets/images/gallery-images/gallery-image-3.jpg"
import Gallery4 from "../assets/images/gallery-images/gallery-image-4.jpg"
import Gallery5 from "../assets/images/gallery-images/gallery-image-5.jpg"
import Gallery6 from "../assets/images/gallery-images/gallery-image-6.jpg"

import Dancer from "../assets/images/dancer.jpg"

const Homepage = () => {
    return (
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

                {/* <aside id="gallery" className="row text-center scrollto clearfix" data-featherlight-gallery
                    data-featherlight-filter="a">

                    <Button><img src={Gallery1} alt="Landing Page" /></Button>
                    <Button><img src={Gallery2} alt="Landing Page" /></Button>
                    <Button><img src={Gallery3} alt="Landing Page" /></Button>
                    <Button><img src={Gallery4} alt="Landing Page" /></Button>
                    <Button><img src={Gallery5} alt="Landing Page" /></Button>
                    <Button><img src={Gallery6} alt="Landing Page" /></Button>

                </aside> */}

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
            </main>
        </>
    );
}

export default Homepage;
