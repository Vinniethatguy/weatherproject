import Card from "react-bootstrap/Card";
import React from "react";


function Header() {
  return (
    <Card>
    <Card.Body>
      <Card.Subtitle>
      </Card.Subtitle>
      <Card.Text className="userIntro" >
      Good Morning Vinnie 
      <br />
      <br />
      <br />
      <br />
      <Card.Text>12:30PM</Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default Header;