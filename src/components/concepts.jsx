import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Concept from "../webparts/concept";

const Concepts = () => {
  return (
    <section id="concepts" className="section concepts">
      <Row center="lg" className="concepts__row">
        <Col lg={8}>
          <div className="concepts__stain concepts__stain--left" alt="blob seven"></div>
          <div className="concepts__stain concepts__stain--right" alt="blob ten"></div>
          <div className="concepts__content">
            <h2 className="concepts__title">Concepten</h2>
            <p>Dit zijn de concepten die we verzonnen hebben tijden dit project. We hebben deze gebruikt als basis voor ons uiteindelijke concept.</p>
          </div>
        </Col>
        <Col lg={10}>
          <Row center="lg">
            <div className="concepts__items">
              <Concept
                backgroundImage="../images/buffet_shot.jpg"
                title="Blinde geleiden chopsticks"
                body="AI gedreven eetstokjes waarmee je het eten op je bord kan scannen, er wordt dan verteld wat er ligt."
              />
              <Concept
                backgroundImage="../images/buffet_shot.jpg"
                title="Geluids koepel"
                body="Speciale geluidskoepel die de mogelijkheif biedt jouw tafel af te sluiten van overtollig geluid in restaurants. Je kan dan plaatselijk instellen hoeveel geluid je wil hebben."
              />
              <Concept
                backgroundImage="../images/buffet_shot.jpg"
                title="NFC bracelets met NFC buffet bordjes"
                body="Scan met je NFC armband het buffet bordje. De slimme armband leest vervolgens op wat voor eten er bij dit bordje goort."
              />
              <Concept
                backgroundImage="../images/buffet_shot.jpg"
                title="Menu hulp"
                body="Scan met je telefoon de QR-code op de menu kaart. Je kan nu door middel van een screenreader de hele menu kaart oplezen."
              />
            </div>
          </Row>
        </Col>
      </Row>
    </section>
  )
};

export default Concepts;
