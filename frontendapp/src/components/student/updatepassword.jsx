import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import SidebarDash from '../student/sidebar';
import Dropdownbtn from '../dropdowns'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';




function Updatepassword() {
    return (

        <div className="blog-section">

            <Dropdownbtn />

            <div className="container mt-2 mb-5">
                <div className='row'>

                    <SidebarDash />

                    <div className='col-md-8'>
                        <Card style={{ width: '45rem' }} className='mb-1'>
                            <Card.Header>Update Password</Card.Header>
                            <Card.Body>


                                <Form>

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
                                        <Button variant="secondary">Update</Button>{' '}
                                    </div>


                                </Form>



                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Updatepassword;