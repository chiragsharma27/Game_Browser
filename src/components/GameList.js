import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const GameList = ({ games }) => {
  return (
    <Row>
      {games.map((game, index) => (
        <Col md={4} key={index} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{game.title}</Card.Title>
              <Card.Text>
                <strong>Platform:</strong> {game.platform} <br />
                <strong>Score:</strong> {game.score} <br />
                <strong>Genre:</strong> {game.genre} <br />
                <strong>Editor's Choice:</strong> {game.editors_choice === 'Y' ? 'Yes' : 'No'}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default GameList;
