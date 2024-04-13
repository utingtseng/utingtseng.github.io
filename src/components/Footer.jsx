import { Container } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import myCV from '../assets/cv_ytt.pdf';
import { Button } from "react-bootstrap";

const Footer = () => {
    return (
        <Container>
            <p style={{ color: "white", fontSize: 16, fontFamily: "Platypi", textAlign: "right"}}>Thanks for visiting! Feel free to find out more about me through those links. 🌱</p>
            <Row className="justify-content-end">
                <Col md="auto" className="text-right">
                <Button style={{ backgroundColor: "#ec0b43", borderColor: "#ec0b43"}} href={myCV} download="YutingsCV.pdf">
                    <i className="bi bi-file-person-fill"></i>{' '}
                    <span>Download CV</span>
                </Button>
                </Col>
                <Col md="auto" className="text-right">
                <Button style={{ backgroundColor: "#ec0b43", borderColor: "#ec0b43"}} href="mailto: michating5511@gmail.com" target="_blank">
                    <i className="bi bi-envelope"></i>{' '}
                    <span className="footer-label">Email</span>
                </Button>
                </Col>
                <Col md="auto" className="text-right">
                <Button style={{ backgroundColor: "#ec0b43", borderColor: "#ec0b43"}} href="www.linkedin.com/in/yuting-tseng-05894b1b8" target="_blank">
                    <i className="bi bi-linkedin"></i>{' '}
                    <span className="footer-label">Linkedin</span>
                </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
