import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './Destination.css'
import Map from '../assets/images/Map.png';
import Car from '../assets/images/Frame.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';


const Destination = (props) => {
    return (
        <div className="destination-container container">
            <h2>this is destination form</h2>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="destination-form">
                        <Form onSubmit={props.submitSearch} method='POST'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Pick From</Form.Label>
                                <Form.Control name="pickForm" type="text" placeholder="Pick From" required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Pick To</Form.Label>
                                <Form.Control name="pickTo" type="text" placeholder="Pick To" required/>
                            </Form.Group>
                            <Button className="search-btn" size="lg" block variant="primary" type="submit" >
                                Search
                            </Button>

                            {props.transports && props.transports.map((transport) => {
                                return (
                                    <Button key={transport.id} className="destination-btn" size="lg" block variant="light" type="submit">
                                        <img src={transport.image} alt=""/> <span>{props.destName} </span>
                                        <FontAwesomeIcon icon={faUserFriends}/> {transport.person}  ${transport.price}
                                    </Button>
                                )
                            })}
                        </Form>
                    </div>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="destination-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22141.909365290205!2d90.37057844224093!3d23.745488978502895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1616251373900!5m2!1sen!2sbd"
                            width="600" height="450" allowFullScreen="" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;