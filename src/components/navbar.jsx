import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import classNames from "classnames";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav nav--sticky">
        <Row center="lg">
          <Col lg={10}>
            <ul className="nav__items">
              <li className="nav__item">
                <a href="/" className="nav__link">
                  <span className="nav__link-text">Homepagina</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span className="nav__link-text">Over ons</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span className="nav__link-text">Concepten</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span className="nav__link-text">Onderzoek</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span className="nav__link-text">Ontwerp</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span className="nav__link-text">Ontwikkelen</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span className="nav__link-text">Prototype</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}
