import React from "react";
import { Row, Col } from "react-flexbox-grid";

const Research = () => {
  return (
    <section id="research" className="section research">
      <Row middle="lg" center="lg" className="research__row">
        <div className="research__stain research__stain--left" alt="blob ten"></div>
        <div className="research__stain research__stain--right" alt="blob seven"></div>
        <Col lg={5}>
          <h2 className="research__title">Onderzoeken</h2>
          <div className="research__content">
            <span className="research__subtitle">We hebben onderzoek gedaan naar onderstaande onderwerpen.</span>
            <ul className="research__list">
              <li className="research__list-item">
                <span className="research__list-text">- Doelgroep</span>
              </li>
              <li className="research__list-item">
                <span className="research__list-text">- Games voor blinden en slechtzienden</span>
              </li>
              <li className="research__list-item">
                <span className="research__list-text">- Restaurant ervaring voor blinden en slechtzienden</span>
              </li>
              <li className="research__list-item">
                <span className="research__list-text">- Blinden en prikkels</span>
              </li>
              <li className="research__list-item">
                <span className="research__list-text">- Technologie voor blinden en slechtzienden</span>
              </li>
              <li className="research__list-item">
                <span className="research__list-text">- Hoe navigeren slechtzienden en blinden in een restaurant (All you can eat, wc)</span>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={5}>
          <h2 className="research__title"></h2>
          <div className="research__content research__content--lower">
            <span className="research__subtitle">Uit onze onderzoeksresultaten hebben we de volgende ontwerpcriteria opgesteld.</span>

            <ul className="research__list">
              <li className="research__list-item">
                <span className="research__list-text">- Haptic feedback leveren, zoals trillingen, draagt bij aan de user experience.</span>
              </li>
              <li className="research__list-item">
                <span className="research__list-text">- De oplossing moet niet bijdragen aan overmatig geluid.</span>
              </li>
              <li className="research__list-item">
                <span className="research__list-text">- De oplossing moet niet bijdragen aan over - of onderbelichting.</span>
              </li>
              <li className="research__list-item">
                <span className="research__list-text">- Niet alle blinde mensen kunnen braille lezen.</span>
              </li>
              <li className="research__list-item">
                <span className="research__list-text">- De oplossing moet makkelijk te implementeren zijn voor een restaurant.</span>
              </li>
              <li className="research__list-item">
                <span className="research__list-text">- De oplossing moet gebruiksvriendelijk zijn voor een restaurant.</span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Research;