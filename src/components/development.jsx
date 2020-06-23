import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Alinea from "../webparts/alinea";

const Development = () => {
  return (
    <section id="development" className="section development">
      <Row middle="lg" center="lg" className="development__row">
        <div className="development__stain development__stain--left" alt="blob nine"></div>
        <div className="development__stain development__stain--right" alt="blob seven"></div>
        <Col lg={4}>
          <img src="../images/test.png" alt="test" className="development__image" />
        </Col>
        <Col lgOffset={1} lg={5}>
          <Alinea
            title="Ontwikkelen"
            alinea="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod. Etiam lacinia interdum neque sit amet aliquet."
            alinea2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod. Etiam lacinia interdum neque sit amet aliquet."
          />
        </Col>
      </Row>
    </section>
  )
};

export default Development;
