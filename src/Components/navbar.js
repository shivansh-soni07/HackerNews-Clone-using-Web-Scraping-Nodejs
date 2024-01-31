import React from "react";
import "./../CSS/navbar.css"
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import {Col, Row, Container} from 'react-grid-system';

export default function NavBar(){
  return (
    <Container>
      <Row className="navbar">
        <Col sm={2} className="menu">
          <img src={logo} alt="logo"/>
          <h4>Hacker News</h4>
        </Col>
        <Col sm={8}>
            <ul className="nav-links">
              <Link className="nav-link" to="#">new</Link>|
              <Link className="nav-link" to="#">past</Link>|
              <Link className="nav-link" to="#">comments</Link>|
              <Link className="nav-link" to="#">ask</Link>|
              <Link className="nav-link" to="#">show</Link>|
              <Link className="nav-link" to="#">jobs</Link>|
              <Link className="nav-link" to="#">submit</Link>
            </ul>
        </Col>
        {/* <Col sm={2} className="login"><Link to="/">Log Out</Link></Col> */}
        {/* <Col sm={2} className="login"><Link to="/register">Register</Link></Col> */}
      </Row>
    </Container>
  );
};
