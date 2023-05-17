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

    </Container>
  );
}

export default AutoLayoutExample;