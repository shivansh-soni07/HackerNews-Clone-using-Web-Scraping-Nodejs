import React from "react";
import "./../CSS/footer.css";
import { Link } from "react-router-dom";
import { Container} from 'react-grid-system';

export default function Footer() {
    return (
      <Container className="footer">
        <div className="line"></div>
        <center>
            <ul className="menu-links">
                <Link className="menu-link" to="#">Guidelines</Link>|
                <Link className="menu-link" to="#">FAQ</Link>|
                <Link className="menu-link" to="#">Lists</Link>|
                <Link className="menu-link" to="#">API</Link>|
                <Link className="menu-link" to="#">Security</Link>|
                <Link className="menu-link" to="#">Legal</Link>|
                <Link className="menu-link" to="#">Apply to YC</Link>|
                <Link className="menu-link" to="#">Contact</Link>
            </ul>
        </center>
        <div className="input-container">
            <label>Search: </label>
            <input type="text" name="search" required />
        </div>
      </Container>
    );
  }