import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Assuming you have a separate CSS file for styling

const About = () => {
    return (
        <Container className="aboutContainer text-center p-5">
            <Row>
                <Col>
                    <h1>Warly France Jaculan</h1>
                    <p>Computer Science Student</p>
                    <p>
                        I’m Warly France Jaculan, a passionate 3rd-year Computer Science student, 
                        deeply focused on web development, particularly using React.js. 
                        I enjoy creating seamless, dynamic web applications by leveraging state 
                        management and React-Bootstrap for clean, user-friendly designs. 
                        Alongside my studies, I also run a business called Fruit Centric Spot, 
                        where I apply my analytical skills to track performance and manage the 
                        business’s growth in the competitive smoothie market. Balancing both 
                        my entrepreneurial and academic pursuits has strengthened my 
                        problem-solving skills and adaptability. I’m currently working on a 
                        personal profile web application, pushing myself to learn new technologies 
                        and refine my craft with every project.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
