import React from "react";
import { Row, Col } from "react-flexbox-grid";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <Row center="lg">
          <Col lg={{ span: 3 }}>
            <h4 className="footer__title">&copy;&nbsp;All rights Reserved || TMNT</h4>
          </Col>
        </Row>
      </div>
    </footer>
  )
};

export default Footer;
