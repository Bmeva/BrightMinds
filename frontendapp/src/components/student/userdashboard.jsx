import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import SidebarDash from '../student/sidebar';
import Dropdownbtn from '../dropdowns'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import cyber from '../../assets/images/cyber.jpg';
import homesc from '../../assets/images/homesc.jpg';



function UserDashboard() {
    return (

        <div className="blog-section">

            <Dropdownbtn />

            <div className="container mt-2 mb-1">
                <div className='row'>

                    <SidebarDash />

                    <div className='col-md-8'>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Created by</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td><button className='btn btn-danger btn-sm active'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td><button className='btn btn-danger btn-sm active'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td><button className='btn btn-danger btn-sm active'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td><button className='btn btn-danger btn-sm active'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>

                <div className='row'>

                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <h3 className="card-header">Latest Courses</h3>
                        <Card className="card-container">
                            <Card.Img variant="top" src={cyber} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Course Title</Card.Title>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Link to='/post'> <Button variant="primary" className="btn-secondary">Go somewhere</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <h3 className="card-header">Latest Courses</h3>
                        <Card className="card-container">
                            <Card.Img variant="top" src={homesc} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Course Title</Card.Title>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Link to='/post'>  <Button variant="primary" className="btn-secondary">Go somewhere</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center" style={{ marginBottom: '7rem' }}> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <h3 className="card-header">Latest Courses</h3>
                        <Card className="card-container">
                            <Card.Img variant="top" src={homesc} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Course Title</Card.Title>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Link to='/post'>  <Button variant="primary" className="btn-secondary">Go somewhere</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>



                </div>

            </div>
        </div>


    );
}

export default UserDashboard;