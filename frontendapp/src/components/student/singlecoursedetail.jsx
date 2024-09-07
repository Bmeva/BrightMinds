import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import ss3 from '../../assets/images/ss3.jpg';
import { Link } from 'react-router-dom';
import ss2 from '../../assets/images/ss2.jpg';
import ss4 from '../../assets/images/ss4.jpg';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function SinglecourseDetail() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let { course_id } = useParams();
    return (
        <div className="App">

            < div className="hero" >
                <div className="container">
                    <div className="row justify-content-between">

                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>
                                    Course Title <span className="d-block">Learning Platform</span>
                                </h1>
                                <p className="mb-4">
                                    Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!
                                    Learn React from the ground up and finish the course as an advanced React developer
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
                                <p>Created by:</p>
                                <p>Last updated:</p>
                                <p>Duration:</p>
                                <p>Total enrolled students:</p>
                                <p>Rsting:</p>
                                {/* 
                                <img src={couch2} className="img-fluid" alt="Couch" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >



            <div className="container mt-2 mb-1">
                <div className='row'>
                    <div className='col-md-6'>

                        <Card style={{ width: '30rem' }} className='mb-1'>
                            <Card.Header>Course Video's</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Introduction<button className='btn btn-sm fas fa-play float-end' onClick={handleShow}></button></ListGroup.Item>
                                <ListGroup.Item>Introduction to Components<button className='btn btn-sm fas fa-play float-end' onClick={handleShow}></button></ListGroup.Item>
                                <ListGroup.Item>Class based views<button className='btn btn-sm fas fa-play float-end' onClick={handleShow}></button></ListGroup.Item>
                                <ListGroup.Item>React router DOm{course_id}<button className='btn btn-sm fas fa-play float-end' onClick={handleShow}></button></ListGroup.Item>
                            </ListGroup>
                        </Card>

                    </div>

                    <div className='col-md-6'>

                        <Card style={{ width: '30rem' }} className='mb-1'>
                            <Card.Header>WHat you would learn  <Button variant="primary" onClick={handleShow}>
                                Launch demo modal
                            </Button>
                            </Card.Header>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam,
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </div>

                </div>
            </div>

            {/* Modal start */}

            <div>

                <Modal show={show} onHide={handleClose} className='modal-lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/XwENAAx2Pp8"
                                title="YouTube video" allowfullscreen></iframe>

                            {/* this is the original link
                            https://www.youtube.com/watch?v=XwENAAx2Pp8

                            while embeding change your url to embed/XwENAAx2Pp8 */}
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal end */}



            <div className="blog-section mb-5">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-md-4">
                            <h2 className="section-title">Related Courses</h2>
                        </div>
                        <div className="col-md-6 text-start text-md-end">
                            <a href="#!" className="more" style={{ color: '#7e1d1d' }}>
                                View All Courses
                            </a>
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
                                        <Link to='/plan'>First Time Home Owner Ideas</Link>
                                    </h3>
                                    <div className="meta">
                                        <span>
                                            by <Link to='/'>Kristin Watson</Link>
                                        </span>{' '}
                                        <span>
                                            on <Link to='/Profile' style={{ color: 'red' }}>Dec 19, 2021</Link>
                                        </span>
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
                                        <Link to='/myaccount'>How To Keep Your Furniture Clean</Link>
                                    </h3>
                                    <div className="meta">
                                        <span>
                                            by <Link to='/Profile'>Robert Fox</Link>
                                        </span>{' '}
                                        <span>
                                            on <a href="#!" style={{ color: 'red' }}>Dec 15, 2021</a>
                                        </span>
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
                                        <a href="#!">Small Space Furniture Apartment Ideas</a>
                                    </h3>
                                    <div className="meta">
                                        <span>
                                            by <a href="#!">Kristin Watson</a>
                                        </span>{' '}
                                        <span>
                                            on <a href="#!" style={{ color: 'red' }}>Dec 12, 2021</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div >
    );
}

export default SinglecourseDetail;



