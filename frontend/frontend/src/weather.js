import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sunnyImage from './sunny.svg';
import Card from 'react-bootstrap/Card';

function Weather({ location, dayData }) {
  return (
    <Container>
      <Row>
        <Col className='weather_card' xs={2} order-first>
          {/* Display weather information */}
          <span>{dayData[0]}</span>
          <br />
          <span>{dayData[1]}</span>
          <br />
          <span>{location}</span>
          <br />
          <img className="sunny-image" src={sunnyImage} alt='' />
          <br></br>
          <span className='temp'>{dayData[2]}</span>
        </Col>
        <Col className='weekly_forcast' order-last>
        <Col className="rectangle-column"></Col>
        <Col className='search bar'> Change Location</Col>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Weather;