import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';



function SidebarDash() {

    const location = useLocation(); // Get current location
    const [activeItem, setActiveItem] = useState(location.pathname); // Set the active item based on the current path

    const handleSetActive = (path) => {
        setActiveItem(path);
    };

    return (



        <div className='col-md-4'>
            <Card style={{ width: '15rem' }} className='mb-1'>
                <Link to='/userDash' onClick={() => handleSetActive('/userDash')}>
                    <Card.Header className={activeItem === '/userDash' ? 'active' : ''}>User Dashboard</Card.Header>
                </Link>
                <ListGroup variant="flush">
                    <Link to='/allcourses' onClick={() => handleSetActive('/allcourses')}>
                        <ListGroup.Item className={activeItem === '/allcourses' ? 'active' : ''}>
                            All courses<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/' onClick={() => handleSetActive('/')}>
                        <ListGroup.Item className={activeItem === '/' ? 'active' : ''}>
                            Acchieved Course<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/Favcourses' onClick={() => handleSetActive('/Favcourses')}>
                        <ListGroup.Item className={activeItem === '/Favcourses' ? 'active' : ''}>
                            Favorites<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/recomdcourse' onClick={() => handleSetActive('/recomdcourse')}>
                        <ListGroup.Item className={activeItem === '/recomdcourse' ? 'active' : ''}>
                            Recomended Courses<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>

                    <Link to='/profilesetting' onClick={() => handleSetActive('/profilesetting')}>
                        <ListGroup.Item className={activeItem === '/profilesetting' ? 'active' : ''}>
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
                    <Link to='/updatePass' onClick={() => handleSetActive('/updatePass')}>
                        <ListGroup.Item className={activeItem === '/updatePass' ? 'active' : ''}>
                            Update password<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/login' onClick={() => handleSetActive('/login')}>
                        <ListGroup.Item className={activeItem === '/login' ? 'active' : ''}>
                            Logout<i className='fas fa-play float-end'></i>
                        </ListGroup.Item>
                    </Link>
                </ListGroup>
            </Card>
        </div>
    );
}

export default SidebarDash;