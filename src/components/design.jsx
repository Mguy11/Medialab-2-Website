import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Alinea from "../webparts/alinea";

const Design = () => {
  return (
    <section id="design" className="section design">
      <Row middle="lg" center="lg" className="development__row">
        <div className="design__stain design__stain--left" alt="blob seven"></div>
        <div className="design__stain design__stain--right" alt="blob eight"></div>
        <Col lg={5}>
          <h2 className="design__title">Ontwerpen</h2>
          <p className="design__alinea design__alinea--overflow">
            Er zijn twee verschillende doelgroepen waarop de ontwerpen zijn afgestemd:
            1.       Blinde mensen tussen de 24 en 80 jaar oud
            2.    Buffet eigenaren en personeel van een lopend buffet restaurant
            Voor het ontwerp van de one-pager en de applicatie is er voornamelijk gekeken naar de volgende punten:
            Grootte en duidelijke headings en tekst
            Duidelijk lay-out
            Voldoende kleurcontrast tussen kleuren en fonts
            Er is gebruik gemaakt van <a href="https://color.adobe.com/nl/create/color-wheel" rel="noopener noreferrer" target="_blank" className="design__link">adobe color wheel</a> om de kleuren vast te stellen. Adobe color is voornamelijk gebruikt om contrasterende kleuren te samenstellen.
            Alle kleuren, fonts en tekst groottes zijn vastgesteld in een styleguide. Deze styleguide is hier terug te vinden: <a href="https://docs.google.com/presentation/d/1Ol8WohJjPzR_7xxwLl26z2FlBIWSDHLJ5INNH5L8yMo/edit?usp=sharing" rel="noopener noreferrer" target="_blank" className="design__link">Styleguide Onepager</a>.
            Voor het ontwerp van de applicatie was gebruiksgemak van belang. De applicatie moet worden gebruikt door buffet eigenaren en personeel. Mensen zonder een technische achtergrond moeten gemakkelijk gebruik kunnen maken van dit systeem. De ontwerpen van zowel de applicatie en one-pager zijn hier terug te vinden: <a href="https://drive.google.com/drive/folders/1KpYb8VGQKe7r9qVSxEzLKG4V2hApFs6P?usp=sharing" rel="noopener noreferrer" target="_blank" className="design__link">Ontwerpen Onepager</a>.
            Ter inspiratie van het ontwerpproces is er onderzoek gedaan naar soortgelijke applicaties en websites. Websites die gebruikt zijn ter inspiratie zijn onder andere:
          <a href="https://dribbble.com/" rel="noopener noreferrer" target="_blank" className="design__link">Dribbble</a><span>&#44;</span>&nbsp;

          <a href="https://www.behance.net/" rel="noopener noreferrer" target="_blank" className="design__link">Behance</a><span>&#44;</span>&nbsp;

          <a href="https://www.awwwards.com/" rel="noopener noreferrer" target="_blank" className="design__link"> Awwwards</a>
            <br />
            <br />
            Ook is er onderzoek gedaan naar <a href="https://webdesign.tutsplus.com/articles/accessibility-basics-designing-for-visual-impairment--cms-27634" rel="noopener noreferrer" target="_blank" className="design__link"> website design ontwerprichtlijnen voor mensen met een visuele beperking.</a>
            <br />
            <br />
          </p>
        </Col>
        <Col lgOffset={2} lg={4}>
          <img src="../images/Undiemeister.jpg" alt="test" className="design__image" />
          <div className="design__content">
            <h3 className="design__subtitle">Designs</h3>
            <h4 className="design__body">Versie 1</h4>
          </div>
        </Col>
      </Row>
    </section>
  )
};

export default Design;

