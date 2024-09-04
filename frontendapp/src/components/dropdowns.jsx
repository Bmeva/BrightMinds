import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Dropdownbtn() {
    return (
        <>
            <div className='row gx-1 gy-1 justify-content-center'>

                <div className='col-md-2 dropdown-button-container'>
                    <DropdownButton id="dropdown-basic-button" title="Categories">
                        <Dropdown.Item href="#/action-1">All Categories</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Favorites</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Development </Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='col-md-2 dropdown-button-container'>
                    <DropdownButton id="dropdown-basic-button" title="Recent">
                        <Dropdown.Item href="#/action-1">Recently Enrolled</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Recently Accessed</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Title: A- Z </Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='col-md-6 dropdown-button-container'>

                    <InputGroup>
                        <Form.Control
                            placeholder="Search course"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>

                </div>




            </div>
        </>
    );
}

export default Dropdownbtn;