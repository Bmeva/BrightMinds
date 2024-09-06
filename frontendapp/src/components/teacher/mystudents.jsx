import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import TeacherSidebarDash from './teachersidebar';
import Dropdownbtn from '../dropdowns'
import Table from 'react-bootstrap/Table';



function Mystudents() {
    return (

        <div className="blog-section">

            <Dropdownbtn />

            <div className="container mt-2" style={{ marginBottom: '7rem' }}>
                <div className='row'>

                    <TeacherSidebarDash />

                    <div className='col-md-8'>
                        <Card style={{ width: '45rem' }} className='mb-1'>
                            <Card.Header>My students</Card.Header>
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
                        </Card>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Mystudents;