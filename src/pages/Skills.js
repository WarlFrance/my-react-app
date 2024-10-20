import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Ensure you have your CSS file imported

const MySkills = () => {
    return (
        <Container className="skillMainCon mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="skills-container p-4">
                        <h2 className="text-center mb-4 text-light">My Skills</h2>
                        <ListGroup variant="flush" className="list">
                            <ListGroup.Item className="skill transparent-item">JavaScript</ListGroup.Item>
                            <ListGroup.Item className="skill transparent-item">React.js</ListGroup.Item>
                            <ListGroup.Item className="skill transparent-item">CSS</ListGroup.Item>
                            <ListGroup.Item className="skill transparent-item">Python</ListGroup.Item>
                            <ListGroup.Item className="skill transparent-item">Java</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MySkills;
