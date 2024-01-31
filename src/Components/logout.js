import React from 'react'
import { Link } from "react-router-dom";
import {Col, Row, Container} from 'react-grid-system';
const Logout = ({onLogout}) => {
    const handleLogoutClick = () => {
        onLogout();
      };
  return (
    <div>
      <Col sm={9} className="login" style={{ textAlign: "right"  , marginTop:"-1.5rem"}}>
      <Link to="/" onClick={handleLogoutClick}>Log Out</Link>
   </Col>

    </div>
  )
}

export default Logout;