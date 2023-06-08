import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Weather({ location, dayData }) {
  const currentDay = dayData[0]; 
  const nextFourDays = dayData.slice(1, 5); 

  return (
    <Container>
      <Row>
        <Col className='weather_card' xs={2} order-first>
          <div className='weather_info'>
            <span>{currentDay[0]}</span>
            <br />
            <span>{currentDay[1]}</span>
            <br />
            <span>{location}</span>
            <br />
            <img
              className="weather-image"
              src={currentDay[5]}
              alt=''
              style={{ width: '100px', height: '100px' }}/>
              <span className='temp'>{currentDay[3]}</span>
          </div>
        </Col>
        <Col className='weekly_forcast' order-last>
          <div className="weekly-container">
            {nextFourDays.map((day, index) => (
              <div key={index} className="image-wrapper">
                <span>{day[0]}</span>
                <br />
                <span>{day[1]}</span>
                <br />
                <span>{location}</span>
                <br />
                <img
                  className="weather-image"
                  src={day[5]}
                  alt=''
                  style={{ width: '100px', height: '100px', color: "white" }} 
                />
                <br />
                <span className='temp'>{day[2]}</span> 
                <br />
                <span className='weather'>{day[3]}</span> 
                <br />

                
                <hr />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Weather;
