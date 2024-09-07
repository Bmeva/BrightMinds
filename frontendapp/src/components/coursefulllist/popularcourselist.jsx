import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
//import ss1 from './assets/images/ss1.jpg'; // Corrected path to the image
import ss1 from '../../assets/images/ss1.jpg';
import django from '../../assets/images/django.jpg';
import javascript from '../../assets/images/javascript.jpg';
import cyber from '../../assets/images/cyber.jpg';
import homesc from '../../assets/images/homesc.jpg';
import marketing from '../../assets/images/marketing.jpg';
import '../../assets/stylefol/style.css';
import { Link } from 'react-router-dom';
import Pagi from '../pagination';




function Popularcourselist() {
    return (
        <div className="App">

            <div className="container mt-4">

                <div className="row mb-5">
                    <div className="col-md-4">
                        <h2 className="section-title">All Popular Courses</h2>
                    </div>
                    <div className="col-md-6 text-start text-md-end">
                        <a href="#!" className="more" style={{ color: '#7e1d1d' }}>
                            View All Courses
                        </a>
                    </div>

                    <div className="row">

                        <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                            {/* Header for the card */}
                            <Link to='/ScourseDetail/1' className='custom-link '><h3 className="card-header">Express JS</h3></Link>
                            <Card className="card-container">
                                <Card.Img variant="top" src={homesc} className="card-img-top" />
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title">By Evans</Card.Title>
                                    <Card.Text className="card-text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        <Link to='/teacherdetail/1'><p><small>Last updated June</small></p></Link>
                                    </Card.Text>
                                    <div className='mb-2'>
                                        <span className='float-start'>Rating: 4/5</span>
                                        <span className='float-end'>Views: 2000</span>
                                    </div>


                                    <Link to='/post'>  <Button variant="primary" className="btn-secondary">Go somewhere</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                            {/* Header for the card */}
                            <h3 className="card-header"> <Link to='/ScourseDetail/1' className='custom-link '>React and Bootstrap</Link></h3>
                            <Card className="card-container">
                                <Card.Img variant="top" src={django} className="card-img-top" />
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title"><Link to='/ScourseDetail/1' className='custom-link '>By John D</Link></Card.Title>
                                    <Card.Text className="card-text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        <Link to='/teacherdetail/1'><p><small>Last updated January 2024</small></p></Link>
                                    </Card.Text>
                                    <div className='mb-2'>
                                        <span className='float-start'>Rating: 4/5</span>
                                        <span className='float-end'>Views: 2000</span>
                                    </div>


                                    <Link to='/post'> <Button variant="primary" className="btn-secondary">Go somewhere</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                            {/* Header for the card */}
                            <Link to='/ScourseDetail/1' className='custom-link '><h3 className="card-header">Java and Laravel</h3></Link>
                            <Card className="card-container">
                                <Card.Img variant="top" src={javascript} className="card-img-top" />
                                <Card.Body className="card-body">
                                    <Link to='/teacherdetail/1' className='custom-link '><Card.Title className="card-title">Daniel J</Card.Title></Link>
                                    <Card.Text className="card-text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        <Link to='/teacherdetail/1'><p><small>Last updated January 2024</small></p></Link>
                                    </Card.Text>
                                    <div className='mb-2'>
                                        <span className='float-start'>Rating: 4/5</span>
                                        <span className='float-end'>Views: 2000</span>
                                    </div>


                                    <Link to='/post'> <Button variant="primary" className="btn-secondary">Go somewhere</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>



                </div>


                <div className="row mt-4">
                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <Link to='/ScourseDetail/1' className='custom-link '><h3 className="card-header">Php and HTML</h3></Link>
                        <Card className="card-container">
                            <Card.Img variant="top" src={cyber} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">By Evans</Card.Title>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    <Link to='/teacherdetail/1'><p><small>Last updated June 23</small></p></Link>
                                </Card.Text>
                                <div className='mb-2'>
                                    <span className='float-start'>Rating: 4/5</span>
                                    <span className='float-end'>Views: 2000</span>
                                </div>


                                <Link to='/post'> <Button variant="primary" className="btn-secondary">Go somewhere</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <Link to='/ScourseDetail/1' className='custom-link '><h3 className="card-header">Express JS</h3></Link>
                        <Card className="card-container">
                            <Card.Img variant="top" src={homesc} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">By Rooney</Card.Title>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    <Link to='/teacherdetail/1'><p><small>Last updated June</small></p></Link>
                                </Card.Text>
                                <div className='mb-2'>
                                    <span className='float-start'>Rating: 4/5</span>
                                    <span className='float-end'>Views: 2000</span>
                                </div>


                                <Link to='/post'>  <Button variant="primary" className="btn-secondary">Go somewhere</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <Link to='/ScourseDetail/1' className='custom-link '><h3 className="card-header">Javascript XML</h3></Link>
                        <Card className="card-container">
                            <Card.Img variant="top" src={marketing} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Daniel D</Card.Title>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    <Link to='/teacherdetail/1'><p><small>Last updated AUgust</small></p></Link>
                                </Card.Text>
                                <div className='mb-2'>
                                    <span className='float-start'>Rating: 4/5</span>
                                    <span className='float-end'>Views: 2000</span>
                                </div>

                                <Link to='/post'> <Button variant="primary" className="btn-secondary">Go somewhere</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <div className="row my-5">
                    <Pagi />


                </div>

            </div>



        </div>


    );
}

export default Popularcourselist;