import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Weather({ location, dayData }) {
  const currentDay = dayData[0]; 
  const nextFourDays = dayData.slice(1, 6); 

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
              alt=''/>
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
                  className="weekly-images"
                  src={day[5]}
                  alt=''
                />
                <br />
                <span className='temp'>{day[2]}</span> 
                <br />
                <span className='weather'>L: {day[3]}</span> 
                <br></br>
                <span className='weather'>H {day[4]}</span> 
                <br />
                <p>Hello
                  Hello
                </p>
              </div>
            ))}
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default Weather;
