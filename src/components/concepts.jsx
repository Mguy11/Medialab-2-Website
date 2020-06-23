import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Concept from "../webparts/concept";

const Concepts = () => {
  return (
    <section id="concepts" className="section concepts">
      <Row center="lg" className="concepts__row">
        <div className="concepts__stain concepts__stain--left" alt="blob seven"></div>

        <div className="concepts__content">
          <h2 className="concepts__title">Concepten</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper. Nullam ornare malesuada euismod.</p>
        </div>

        <div className="concepts__items">
          <Concept
            backgroundImage="../images/buffet_shot.jpg"
            title="Buffet Concept"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper."
          />
          <Concept
            backgroundImage="../images/buffet_shot.jpg"
            title="Buffet Concept"
            body="Lorem ipsum dolo sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper."
          />
          <Concept
            backgroundImage="../images/buffet_shot.jpg"
            title="Buffet Concept"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper."
          />
          <Concept
            backgroundImage="../images/buffet_shot.jpg"
            title="Buffet Concept"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem eu odio luctus eleifend. Aliquam sollicitudin consequat maximus. Nullam tincidunt et elit sit amet semper."
          />
        </div>
      </Row>
    </section>
  )
};

export default Concepts;
