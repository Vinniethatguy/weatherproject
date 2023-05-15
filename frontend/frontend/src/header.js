import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col >
          Good Morning Vinnie
            <br></br>
          6:30
        </Col>
        <Col className='right-column'>
          Hellow Vinnie!
        </Col>
      </Row>
      <Row>
      <Col className='weather_card order-first' xs={2} order-first>
          Sunday
            <br></br>
          May 07, 2023
        </Col>
        <Col className='weekly_forcast order-last' order-last>
            <Col className='weeklu_tab'></Col>
        </Col>
        </Row>
    </Container>
  );
}

export default AutoLayoutExample;