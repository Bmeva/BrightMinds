import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Use if you're using React Router for links
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported for icons
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/stylefol/style.css';

function Userreg() {
    return (
        <footer className="footer-section d-flex justify-content-center align-items-center vh-100">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="subscription-form text-center">
                            <h3 className="d-flex align-items-center justify-content-center">
                                <span className="me-1">
                                    <i className="fa-solid fa-envelope"></i>
                                </span>
                                <span>User registration form</span>
                            </h3>

                            <Form action="#" className="row g-3 justify-content-center">
                                <Col className="col-auto">
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Col>
                                <Col className="col-auto">
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Col>
                                <Col className="col-auto">
                                    <Form.Control type="text" placeholder="Username" />
                                </Col>
                                <Col className="col-auto">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                                <Col className="col-auto">
                                    <Form.Control type="text" placeholder="Interest" />
                                </Col>
                                <Col className="col-auto">
                                    <Button className="btn btn-primary">
                                        Register
                                        <span className="fa fa-paper-plane"> </span>
                                    </Button>
                                </Col>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Userreg;



// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Use if you're using React Router for links
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported for icons
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ss2 from '../assets/images/ss2.jpg';



// import '../assets/stylefol/style.css';

// function Userreg() {
//     return (
//         <footer className="footer-section">
//             <Container className="relative">

//                 <Row>
//                     <Col lg={8}>
//                         <div className="subscription-form">
//                             <h3 className="d-flex align-items-center">
//                                 <span className="me-1">
//                                     <i class="fa-solid fa-envelope"></i>
//                                     {/* <img src="images/envelope-outline.svg" alt="Envelope" className="img-fluid" /> */}
//                                 </span>
//                                 <span>User registration form</span>
//                             </h3>

//                             <Form action="#" className="row g-3">
//                                 <Col className="col-auto">
//                                     <Form.Control type="text" placeholder="Enter your name" />
//                                 </Col>
//                                 <Col className="col-auto">
//                                     <Form.Control type="email" placeholder="Enter your email" />
//                                 </Col>
//                                 <Col className="col-auto">
//                                     <Form.Control type="email" placeholder="Username" />
//                                 </Col>
//                                 <Col className="col-auto">
//                                     <Form.Control type="email" placeholder="Password" />
//                                 </Col>
//                                 <Col className="col-auto">
//                                     <Form.Control type="email" placeholder="Interest" />
//                                 </Col>
//                                 <Col className="col-auto">
//                                     <Button className="btn btn-primary">Register
//                                         <span className="fa fa-paper-plane"> </span>
//                                     </Button>
//                                 </Col>
//                             </Form>
//                         </div>
//                     </Col>
//                 </Row>

//             </Container>
//         </footer>
//     );
// }

// export default Userreg;
