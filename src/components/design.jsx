import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Alinea from "../webparts/alinea";

const Design = () => {
  return (
    <section className="section">
      <div className="design">
        <Row middle="lg" center="lg" className="development__row">
          <div className="design__stain design__stain--left" alt="blob seven"></div>
          <div className="design__stain design__stain--right" alt="blob eight"></div>
          <Col lg={5}>
            <Alinea
              title="Ontwerpen"
              alinea="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod. Etiam lacinia interdum neque sit amet aliquet."
              alinea2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod. Etiam lacinia interdum neque sit amet aliquet."
            />
          </Col>
          <Col lgOffset={1} lg={4}>
            <img src="../images/Undiemeister.jpg" alt="test" className="design__image" />
            <div className="design__content">
              <h3 className="design__subtitle">Website Ontwerpen</h3>
              <h4 className="design__body">Versie 1</h4>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
};

export default Design;
