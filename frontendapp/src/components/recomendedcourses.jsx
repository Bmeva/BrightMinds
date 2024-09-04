import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import SidebarDash from './sidebar';
import Dropdownbtn from './dropdowns'
import Table from 'react-bootstrap/Table';



function Recomendedcourses() {
    return (

        <div className="blog-section">

            <Dropdownbtn />

            <div className="container mt-2 mb-5">
                <div className='row'>

                    <SidebarDash />

                    <div className='col-md-8'>

                        <Card style={{ width: '45rem' }} className='mb-5'>
                            <Card.Header>Recomended Courses</Card.Header>

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

export default Recomendedcourses;