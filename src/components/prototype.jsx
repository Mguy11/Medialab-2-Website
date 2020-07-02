import React from "react";
import { Row, Col } from "react-flexbox-grid";

const Prototype = () => {
  return (
    <section id="prototype" className="section prototype">
      <Row middle="lg" center="lg" className="prototype__row">
        <div className="prototype__stain prototype__stain--left" alt="blob seven"></div>
        <div className="prototype__stain prototype__stain--right" alt="blob ten"></div>
        <Col lg={10}>
          <div className="prototype__content">
            <h2 className="prototype__title">Pitch</h2>
            <span className="prototype__subtitle">Dit is de demo video van onze Buffet scanner.</span>
          </div>
          <iframe src="https://www.youtube.com/embed/36ywPLHm0Hw"
            width="80%" height="600" frameborder="0" allowfullscreen className="prototype__video-wrapper">
          </iframe>
        </Col>
      </Row>
    </section>
  )
};

export default Prototype;
