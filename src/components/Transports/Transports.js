import React from 'react';
import { Card } from 'react-bootstrap';
import Bike from '../assets/images/Frame.png'
import Car from '../assets/images/Frame-1.png'
import Bus from '../assets/images/Frame-2.png';
import Train from '../assets/images/Group.png';
import { Link } from 'react-router-dom';

import './Transports.css'

const Transports = () => {
    return (
        <div className='transport-container container'>

            <div className="row">
                <div className="col-md-3 col-sm-6 transport-card">
                    <Link to="/destination/bike">
                        <Card className='cards'>
                            <img src={Bike} alt="" />
                            <Card.Body className='title'>
                                <Card.Title>Bike</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6 transport-card">
                    <Link to="/destination/car">
                        <Card className='cards'>
                            <img src={Car} alt="" />
                            <Card.Body className='title'>
                                <Card.Title>Car</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6 transport-card">
                    <Link to="/destination/bus">

                        <Card className='cards'>
                            <img src={Bus} alt="" />
                            <Card.Body className='title'>
                                <Card.Title>Bus</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6 transport-card">
                    <Link to="/destination/train">
                        <Card className='cards'>
                            <img src={Train} alt="" />
                            <Card.Body className='title'>
                                <Card.Title>Train</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Transports;