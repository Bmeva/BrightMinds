import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Use if you're using React Router for links
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported for icons
import 'bootstrap/dist/css/bootstrap.min.css';
import ss2 from '../assets/images/ss2.jpg';



import '../assets/stylefol/style.css';

function Footer() {
    return (
        <footer className="footer-section">
            <Container className="relative">
                <div className="sofa-img">
                    <img src={ss2} alt="Sofa" className="img-fluid" />


                </div>

                <Row>
                    <Col lg={8}>
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <i class="fa-solid fa-envelope"></i>
                                    {/* <img src="images/envelope-outline.svg" alt="Envelope" className="img-fluid" /> */}
                                </span>
                                <span>Subscribe to Newsletter</span>
                            </h3>

                            <Form action="#" className="row g-3">
                                <Col className="col-auto">
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Col>
                                <Col className="col-auto">
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Col>
                                <Col className="col-auto">
                                    <Button className="btn btn-primary">
                                        <span className="fa fa-paper-plane"></span>
                                    </Button>
                                </Col>
                            </Form>
                        </div>
                    </Col>
                </Row>

                <Row className="g-5 mb-5">
                    <Col lg={4}>
                        <div className="mb-4 footer-logo-wrap">
                            {/* <a href="index.html" className="footer-logo">Furni<span>.</span></a> */}

                            <Link to="/Profile" className="footer-logo">Bright Minds<span>.</span></Link>
                        </div>
                        <p className="mb-4">
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant
                        </p>

                        <ul className="list-unstyled custom-social">
                            <li><Link to='/Profile'><span className="fas fa-shopping-cart"></span></Link></li>
                            <li><Link to='/plan'><span className="fa fa-twitter"></span></Link></li>
                            <li><Link to='/'><span className="fa fa-instagram"></span></Link></li>
                            <li><Link to='/myaccount'><span className="fa fa-linkedin"></span></Link></li>
                        </ul>
                    </Col>

                    <Col lg={8}>
                        <Row className="links-wrap">
                            <Col xs={6} sm={6} md={3}>
                                <ul className="list-unstyled">
                                    <li><a href="index.html">About us</a></li>
                                    <li><a href="index.html">Services</a></li>
                                    <li><a href="index.html">Blog</a></li>
                                    <li><a href="index.html">Contact us</a></li>
                                </ul>
                            </Col>

                            <Col xs={6} sm={6} md={3}>
                                <ul className="list-unstyled">
                                    <li><a href="index.html">Support</a></li>
                                    <li><a href="index.html">Knowledge base</a></li>
                                    <li><a href="index.html">Live chat</a></li>
                                </ul>
                            </Col>

                            <Col xs={6} sm={6} md={3}>
                                <ul className="list-unstyled">
                                    <li><Link to='/plan'>Jobs</Link></li>
                                    <li><Link to='/myaccount'>Our team</Link></li>
                                    <li><Link to='/Profile'>Leadership</Link></li>
                                    <li><Link to='/plan'>Privacy Policy</Link></li>
                                </ul>
                            </Col>

                            <Col xs={6} sm={6} md={3}>
                                <ul className="list-unstyled">
                                    <li><a href="index.html">Nordic Chair</a></li>
                                    <li><a href="index.html">Kruzo Aero</a></li>
                                    <li><a href="index.html">Ergonomic Chair</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <div className="border-top copyright">
                    <Row className="pt-4">
                        <Col lg={6}>
                            <p className="mb-2 text-center text-lg-start">
                                Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. &mdash; Designed by Evans<a href="https://www.youtube.com/@evans-fullstack-tutorial">BT</a>
                            </p>
                        </Col>
                        <Col lg={6} className="text-center text-lg-end">
                            <ul className="list-unstyled d-inline-flex ms-auto">
                                <li className="me-4"><a href="index.html">Terms &amp; Conditions</a></li>
                                <li><a href="index.html">Privacy Policy</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
