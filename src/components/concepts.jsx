import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Concept from "../webparts/concept";

const Concepts = () => {
  return (
    <section className="section concepts">
      <Row center="lg">
        <Col lg={8}>
          <div className="concepts__content">
            <h2>Concepten</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod.</p>
          </div>
        </Col>
      </Row>
      <Row center="lg">
        <div className="concepts__items">
          <Concept
            backgroundImage="../images/buffet_shot.jpg"
            title="Buffet Concept"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod."
          />
          <Concept
            backgroundImage="../images/buffet_shot.jpg"
            title="Buffet Concept"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod."
          />
          <Concept
            backgroundImage="../images/buffet_shot.jpg"
            title="Buffet Concept"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod."
          />
          <Concept
            backgroundImage="../images/buffet_shot.jpg"
            title="Buffet Concept"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod."
          />
        </div>
      </Row>
    </section>
  )
};

export default Concepts;
