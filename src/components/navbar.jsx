import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav nav--sticky">
        <Row center="lg">
          <Col lg={10}>
            <ul className="nav__items">
              <li className="nav__item">
                <AnchorLink href="#home" className="nav__link">
                  <span className="nav__link-text">Homepagina</span>
                </AnchorLink>
              </li>

              <li className="nav__item">
                <AnchorLink href="#team" className="nav__link">
                  <span className="nav__link-text">Over ons</span>
                </AnchorLink>
              </li>

              <li className="nav__item">
                <AnchorLink href="#concepts" className="nav__link">
                  <span className="nav__link-text">Concepten</span>
                </AnchorLink>
              </li>

              <li className="nav__item">
                <AnchorLink href="#research" className="nav__link">
                  <span className="nav__link-text">Onderzoeken</span>
                </AnchorLink>
              </li>

              <li className="nav__item">
                <AnchorLink href="#design" className="nav__link">
                  <span className="nav__link-text">Ontwerpen</span>
                </AnchorLink>
              </li>

              <li className="nav__item">
                <AnchorLink href="#development" className="nav__link">
                  <span className="nav__link-text">Ontwikkelen</span>
                </AnchorLink>
              </li>

              <li className="nav__item">
                <AnchorLink href="#prototype" className="nav__link">
                  <span className="nav__link-text">Prototype</span>
                </AnchorLink>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}
