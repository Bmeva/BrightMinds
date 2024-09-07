import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import returnn from '../assets/images/returnn.svg';
import bag from '../assets/images/bag.svg';
import truck from '../assets/images/truck.svg';
import support from '../assets/images/support.svg';
import whychooseus from '../assets/images/whychooseus.jpg';



function Whyus() {
    return (



        <div className="why-choose-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                        <div className="row my-2">
                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src={truck} alt="yes me" class="imf-fluid" />
                                    </div>
                                    <h3>Fast &amp; Free Shipping</h3>
                                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src={bag} alt="yes me" className="imf-fluid" />
                                    </div>
                                    <h3>Easy to Shop</h3>
                                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src={support} alt="yes me" className="imf-fluid" />
                                    </div>
                                    <h3>24/7 Support</h3>
                                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div class="icon">
                                        <img src={returnn} alt="yes me" className="imf-fluid" />
                                    </div>
                                    <h3>Hassle Free Returns</h3>
                                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="img-wrap">
                            <img src={whychooseus} alt="yes me" className="img-fluid" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Whyus;