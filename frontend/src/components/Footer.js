import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import "./Footer.css"
import {Link} from "react-router-dom" 

function Footer() {
  return (
    <footer className="footer">
    <Container className="container">
      <Row className="row">
        <Col className="footer-col">
          <h4>company</h4>
          <ul>
            <li>Address: X AV. Alain Savary, 100x Tunis , Tunisie.</li>
            <li><a href="/">Email: Eshop@gmail.com</a></li>
          </ul>
        </Col>
        <Col className="footer-col">
          <h4>Business Hours</h4>
          <ul>
            <li>Monday - Friday ... 8:30 a.m. to 6:30 p.m.</li>
            <li>Saturday ... 8:30 a.m. to 3:00 p.m.</li>
          </ul>
        </Col>
        <Col className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li>Terms of Sales</li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </Col>
        <Col className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="/"><i className="fab fa-facebook-f" /></a>
            <a href="/"><i className="fab fa-twitter" /></a>
            <a href="/"><i className="fab fa-instagram" /></a>
            <a href="/"><i className="fab fa-linkedin-in" /></a>
          </div>
        </Col>
      </Row>
    </Container> 
  </footer>


  )
}

export default Footer