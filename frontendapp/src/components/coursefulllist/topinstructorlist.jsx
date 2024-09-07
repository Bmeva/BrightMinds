import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ss2 from '../../assets/images/ss2.jpg';
import ss3 from '../../assets/images/ss3.jpg';
import ss4 from '../../assets/images/ss4.jpg';
import Pagi from '../../components/pagination'


function Topinstructorslist() {
    return (


        <div className="blog-section">
            <div className="container" style={{ marginBottom: '7rem' }}>
                <div className="row mb-5">
                    <div className="col-md-4">
                        <h2 className="section-title">Top Instructors</h2>
                    </div>
                    <div className="col-md-6 text-start text-md-end">
                        <Link to='/allcourselist' className="more" style={{ color: '#7e1d1d' }}>
                            View All Courses
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                        <div className="post-entry">
                            <a href="#!" className="post-thumbnail">
                                <img
                                    src={ss2}
                                    alt="First Time Home Owner Ideas"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/teacherdetail/1'>First Time Home Owner Ideas</Link>
                                </h3>
                                <div className="meta">
                                    <span>
                                        by <Link to='/teacherdetail/1'>Kristin Watson</Link>
                                    </span>{' '}
                                    <span>
                                        on <Link to='/teacherdetail/1' style={{ color: 'red' }}>Dec 19, 2021</Link>
                                    </span>
                                    <div className='mb-2'>
                                        <span>Rating: 4/5</span>...
                                        <span>2000 Students</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                        <div className="post-entry">
                            <a href="#!" className="post-thumbnail">
                                <img
                                    src={ss3}
                                    alt="How To Keep Your Furniture Clean"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/teacherdetail/1'>How To Keep Your Furniture Clean</Link>
                                </h3>
                                <div className="meta">
                                    <span>
                                        by <Link to='/teacherdetail/1'>Robert Fox</Link>
                                    </span>{' '}
                                    <span>
                                        on <a href="#!" style={{ color: 'red' }}>Dec 15, 2021</a>
                                    </span>
                                    <div className='mb-2'>
                                        <span>Rating: 4/5</span>...
                                        <span>2000 Students</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
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
                                    <Link to='/teacherdetail/1'>Small Space Furniture Apartment Ideas</Link>
                                </h3>
                                <div className="meta">
                                    <span>
                                        by <Link to='/teacherdetail/1'>Kristin Watson</Link>
                                    </span>{' '}
                                    <span>
                                        on <a href="#!" style={{ color: 'red' }}>Dec 12, 2021</a>
                                    </span>
                                    <div className='mb-2'>
                                        <span>Rating: 4/5</span>...
                                        <span>2000 Students</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                        <div className="post-entry">
                            <a href="#!" className="post-thumbnail">
                                <img
                                    src={ss2}
                                    alt="First Time Home Owner Ideas"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/teacherdetail/1'>First Time Home Owner Ideas</Link>
                                </h3>
                                <div className="meta">
                                    <span>
                                        by <Link to='/teacherdetail/1'>Kristin Watson</Link>
                                    </span>{' '}
                                    <span>
                                        on <Link to='/Profile' style={{ color: 'red' }}>Dec 19, 2021</Link>
                                    </span>
                                    <div className='mb-2'>
                                        <span>Rating: 4/5</span>...
                                        <span>2000 Students</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                        <div className="post-entry">
                            <a href="#!" className="post-thumbnail">
                                <img
                                    src={ss3}
                                    alt="How To Keep Your Furniture Clean"
                                    className="img-fluid"
                                />
                            </a>
                            <div className="post-content-entry">
                                <h3>
                                    <Link to='/teacherdetail/1'>How To Keep Your Furniture Clean</Link>
                                </h3>
                                <div className="meta">
                                    <span>
                                        by <Link to='/teacherdetail/1'>Robert Fox</Link>
                                    </span>{' '}
                                    <span>
                                        on <a href="#!" style={{ color: 'red' }}>Dec 15, 2021</a>
                                    </span>
                                    <div className='mb-2'>
                                        <span>Rating: 4/5</span>...
                                        <span>2000 Students</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
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
                                    <Link to='/teacherdetail/1'>Small Space Furniture Apartment Ideas</Link>
                                </h3>
                                <div className="meta">
                                    <span>
                                        by <a href="#!">Kristin Watson</a>
                                    </span>{' '}
                                    <span>
                                        on <a href="#!" style={{ color: 'red' }}>Dec 12, 2021</a>
                                    </span>
                                    <div className='mb-2'>
                                        <span>Rating: 4/5</span>...
                                        <span>2000 Students</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <Pagi />


            </div>
        </div>

    );
}

export default Topinstructorslist;