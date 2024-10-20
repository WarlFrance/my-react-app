import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';  // Optional: You can add custom styles here

const Home = () => {
    return (
        <Container className="homeContainer text-center p-5">
            <Row>
                <Col>
                    <h1>Welcome to My Profile</h1>
                    <p>
                        Feel free to browse for more information about me.    
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
