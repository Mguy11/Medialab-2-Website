import React from "react";
import { Row, Col } from "react-flexbox-grid";

const Header = () => (
  <section className="section">
    <div className="header">
      <div className="header__image-wrapper header__image-wrapper--large"></div>
      <Row center="lg" middle="lg" className="header__row">
        <Col lg={4}>
          <div className-="header__content">
            <h2 className="header__title">Welkom.</h2>
            <span className="header__body">
              Wij zijn team TNMT. Voor ons project zijn we aan de slag gegaan
              met de volgende opdracht:
              <b>
                "Verbeter de rstaurant ervaring voor blinden/slechtzienden".
              </b>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  </section>
);

export default Header;
