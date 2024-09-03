import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import couch from '../assets/images/couch.png';


function Hero() {
    return (


        < div className="hero" >
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>
                                Bright Minds <span className="d-block">Learning Platform</span>
                            </h1>
                            <p className="mb-4">
                                Acquire the skills that can drive you forward. Accelerate your future by learning on Bright Minds
                            </p>
                            <p>
                                <a href="https://www.youtube.com/@evans-fullstack-tutorial" className="btn btn-secondary me-2">
                                    Courses
                                </a>
                                <a href="https://www.youtube.com/@evans-fullstack-tutorial" className="btn btn-white-outline">
                                    Plans
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">

                            <img src={couch} className="img-fluid" alt="Couch" />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Hero;