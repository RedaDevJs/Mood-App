import React from 'react';
import MoodSelector from './MoodSelector.js';
import { Container, Row, Col } from'react-bootstrap';
const App = () => {

  return (
      /*<div>
        <h1>Sélection de l'Humeur</h1>
        <MoodSelector />
      </div>*/

    <Container>
        <Row>
            <Col className="text-center" md={{offset: 3, span: 6}}>
                <h1>Sélection de l'Humeur</h1>
                <MoodSelector/>
            </Col>
        </Row>
    </Container>
  );
};

export default App;
