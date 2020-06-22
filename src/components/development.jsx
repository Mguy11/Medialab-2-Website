import React from "react";
import { Row, Col } from "react-flexbox-grid";

const Development = () => {
  return (
    <section className="section">
      <div className="development">
        <Row middle="lg" center="lg" className="development__row">
          <div className="development__stain development__stain--left" alt="blob nine"></div>
          <div className="development__stain development__stain--right" alt="blob seven"></div>
          <Col lg={4}>
            <img src="../images/test.png" alt="test" className="development__image" />
          </Col>
          <Col lgOffset={1} lg={4}>
            <div className="development__content">
              <h2 className="development__title">Ontwikkelen</h2>
              <p className="development__alinea development__alinea--italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod. Etiam lacinia interdum neque sit amet aliquet.
              </p>
              <p className="development__alinea">
                Nullam ut urna eros. Nam ut mauris nulla. Aenean sed ultricies neque. Phasellus fermentum mauris nec sagittis gravida. Donec commodo, felis id mollis faucibus, est dolor tincidunt risus, at mattis lectus urna ut nunc. Aenean leo dolor, consectetur vel risus sed, sodales semper neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
};

export default Development;
