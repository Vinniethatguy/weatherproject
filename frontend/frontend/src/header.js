import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AutoLayoutExample() {
  const [currentTime, setCurrentTime] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Function to update the current time and greeting
    const updateCurrentTimeAndGreeting = () => {
      const date = new Date();
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      // Convert to 12-hour format
      hours = hours % 12 || 12;

      const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
      setCurrentTime(formattedTime);

      if (hours >= 5 && hours < 12) {
        setGreeting('Good Morning');
      } else if (hours >= 12 && hours < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };

    // Update the current time and greeting initially
    updateCurrentTimeAndGreeting();

    // Update the current time and greeting every second
    const interval = setInterval(updateCurrentTimeAndGreeting, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {greeting} Vinnie
          <br />
          {currentTime}
        </Col>
        <Col className='right-column'>
          Hello Vinnie!
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
