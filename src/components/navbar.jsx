import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import classNames from "classnames";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    sticky: window.pageYOffset >= 80,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleWindowScroll);
  }

  handleWindowScroll = (event) => {
    const { sticky } = this.state;
    const shouldBeSticky = window.pageYOffset >= 10;

    if (sticky && !shouldBeSticky) {
      this.setState({
        sticky: false,
      });
    }

    if (!sticky && shouldBeSticky) {
      this.setState({
        sticky: true,
      });
    }
  };

  showSettings = (event) => {
    event.preventDefault();
  };

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));

    if (!this.state.isToggleOn) {
      console.log("piep");
    }
  }

  render() {
    const cx = classNames({
      nav: true,
      "nav--sticky": this.state.sticky,
    });

    return (
      <div className={cx}>
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
