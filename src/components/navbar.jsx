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
                  <span>Homepagina</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span>Over ons</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span>Concepten</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span>Onderzoek</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span>Ontwerp</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span>Ontwikkelen</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span>Prototype</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}
