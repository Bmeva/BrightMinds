import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ss2 from '../../assets/images/ss2.jpg';
import ss3 from '../../assets/images/ss3.jpg';
import ss4 from '../../assets/images/ss4.jpg';
import Pagi from '../../components/pagination';


function Singlecategory() {
    return (


        <div className="blog-section" style={{ marginBottom: '150px', marginTop: '2px' }}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <h2 className="section-title">Backend Development</h2>
                    </div>
                    <div className="col-md-4 text-start text-md-end">
                        <a href="https://www.youtube.com/@evans-fullstack-tutorial" className="more" style={{ color: '#7e1d1d' }}>
                            View All Courses
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
                        <div className="post-entry">
                            <a href="https://www.youtube.com/@evans-fullstack-tutorial" className="post-thumbnail">
                                <img
                                    src={ss2}
                                    alt="First Time Home Owner Ideas"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/ScourseDetail/1'>PHP by Mercy</Link>
                                    <p><small>Last updated January 2024. 4.5**</small></p>
                                </h3>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
                        <div className="post-entry">
                            <a href="https://www.youtube.com/@evans-fullstack-tutorial" className="post-thumbnail">
                                <img
                                    src={ss3}
                                    alt="How To Keep Your Furniture Clean"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/ScourseDetail/1'>Python by Nathan</Link>
                                    <p><small>Last updated January 2024. 4.5**</small></p>
                                </h3>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
                        <div className="post-entry">
                            <a href="https://www.youtube.com/@evans-fullstack-tutorial" className="post-thumbnail">
                                <img
                                    src={ss4}
                                    alt="Small Space Furniture Apartment Ideas"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/ScourseDetail/1'> Javascript by Rooney</Link>
                                    <p><small>Last updated January 2024. 4.5**</small></p>
                                </h3>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
                        <div className="post-entry">
                            <a href="https://www.youtube.com/@evans-fullstack-tutorial" className="post-thumbnail">
                                <img
                                    src={ss4}
                                    alt="Small Space Furniture Apartment Ideas"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/ScourseDetail/1'>Express JS by Kings</Link>
                                    <p><small>Last updated January 2024. 4.5**</small></p>
                                </h3>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 mt-3">
                        <div className="post-entry">
                            <a href="https://www.youtube.com/@evans-fullstack-tutorial" className="post-thumbnail">
                                <img
                                    src={ss4}
                                    alt="Small Space Furniture Apartment Ideas"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/ScourseDetail/1'>Angular by Evans</Link>
                                    <p><small>Last updated January 2024. 4.5**</small></p>
                                </h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 mt-3">
                        <div className="post-entry">
                            <a href="https://www.youtube.com/@evans-fullstack-tutorial" className="post-thumbnail">
                                <img
                                    src={ss4}
                                    alt="Small Space Furniture Apartment Ideas"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/ScourseDetail/1'>React by Daniel</Link>
                                    <p><small>Last updated January 2024. 4.5**</small></p>
                                </h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 mt-3">
                        <div className="post-entry">
                            <a href="https://www.youtube.com/@evans-fullstack-tutorial" className="post-thumbnail">
                                <img
                                    src={ss4}
                                    alt="Small Space Furniture Apartment Ideas"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/ScourseDetail/1'>C# by James</Link>
                                    <p><small>Last updated January 2024. 4.5**</small></p>
                                </h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 mt-3">
                        <div className="post-entry">
                            <a href="#!" className="post-thumbnail">
                                <img
                                    src={ss4}
                                    alt="Small Space Furniture Apartment Ideas"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/ScourseDetail/1'>Mern Stack by Evans</Link>
                                    <p><small>Last updated January 2024. 4.5**</small></p>
                                </h3>

                            </div>
                        </div>
                    </div>
                </div>

                <Pagi />
            </div>
        </div>

    );
}

export default Singlecategory;