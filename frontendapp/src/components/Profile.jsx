import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
//import ss1 from './assets/images/ss1.jpg'; // Corrected path to the image
import ss1 from '../assets/images/ss1.jpg';
import '../assets/stylefol/style.css';


function Profile() {
    return (
        <div className="App">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <h3 className="card-header">My profile</h3>
                        <Card className="card-container">
                            <Card.Img variant="top" src={ss1} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Course Title</Card.Title>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" className="btn-primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <h3 className="card-header">Latest Courses</h3>
                        <Card className="card-container">
                            <Card.Img variant="top" src={ss1} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Course Title</Card.Title>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" className="btn-primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <h3 className="card-header">Latest Courses</h3>
                        <Card className="card-container">
                            <Card.Img variant="top" src={ss1} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Course Title</Card.Title>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" className="btn-primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Profile;