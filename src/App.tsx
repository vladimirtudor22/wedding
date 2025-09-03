import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Countdown from './components/Countdown';
import './App.css';

import backgroundImage from './assets/background.png';
// Am scos importul pentru 'logo' deoarece nu era utilizat
// import logo from './assets/logo.png';

function App() {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={11} md={9} lg={7}>
            <Card className="content-card text-white text-center border-0 p-3 p-md-5">
              <Card.Body>
                <h1 className="display-1">Tudor-Vladimir</h1>
                <h2 className="display-4 text-gold">&</h2>
                <h1 className="display-1">Irina-Maria</h1>
                <p className="lead mt-3">Vă invităm cu drag să ne fiți alături!</p>
                <hr className="my-4 border-light" />
                <Countdown />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;