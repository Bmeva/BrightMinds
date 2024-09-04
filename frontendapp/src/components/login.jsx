import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import SidebarDash from './sidebar';
import Dropdownbtn from './dropdowns'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';




function Login() {
    return (

        <div className="blog-section">


            <div className="d-flex align-items-center justify-content-center vh-20 mb-5">
                <Card style={{ width: '45rem' }} className='mb-5'>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>


                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextUser">
                                <Form.Label column sm="2">
                                    Username
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Username" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Password
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <hr />
                            <div className='col-md-3'>
                                <Button variant="secondary">Login</Button>{' '}
                            </div>


                        </Form>



                    </Card.Body>
                </Card>
            </div>

        </div>


    );
}

export default Login;