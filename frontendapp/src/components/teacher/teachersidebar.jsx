import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';



function TeacherSidebarDash() {

    const location = useLocation(); // Get current location
    const [activeItem, setActiveItem] = useState(location.pathname); // Set the active item based on the current path

    const handleSetActive = (path) => {
        setActiveItem(path);
    };

    return (



        <div className='col-md-4'>
            <Card style={{ width: '20rem' }} className='mb-1'>
                <Link to='/userDash' onClick={() => handleSetActive('/userDash')}>
                    <Card.Header className={activeItem === '/userDash' ? 'active' : ''}>Teacher Dashboard</Card.Header>
                </Link>
                <ListGroup variant="flush">
                    <Link to='/allteacherscourses' onClick={() => handleSetActive('/allteacherscourses')}>
                        <ListGroup.Item className={activeItem === '/allteacherscourses' ? 'active' : ''}>
                            My courses<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/mystudents' onClick={() => handleSetActive('/mystudents')}>
                        <ListGroup.Item className={activeItem === '/mystudents' ? 'active' : ''}>
                            My Students<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/#' onClick={() => handleSetActive('/#')}>
                        <ListGroup.Item className={activeItem === '/#' ? 'active' : ''}>
                            Add Course<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>


                    <Link to='/teacherProfileset' onClick={() => handleSetActive('/teacherProfileset')}>
                        <ListGroup.Item className={activeItem === '/teacherProfileset' ? 'active' : ''}>
                            Profile setting<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/wishlist' onClick={() => handleSetActive('/wishlist')}>
                        <ListGroup.Item className={activeItem === '/wishlist' ? 'active' : ''}>
                            Wishlist<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/notes' onClick={() => handleSetActive('/notes')}>
                        <ListGroup.Item className={activeItem === '/notes' ? 'active' : ''}>
                            Notes<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/updateteacherpassword' onClick={() => handleSetActive('/updateteacherpassword')}>
                        <ListGroup.Item className={activeItem === '/updateteacherpassword' ? 'active' : ''}>
                            Update password<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/teacherlogin' onClick={() => handleSetActive('/teacherlogin')}>
                        <ListGroup.Item className={activeItem === '/teacherlogin' ? 'active' : ''}>
                            Logout<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                </ListGroup>
            </Card>
        </div>
    );
}

export default TeacherSidebarDash;