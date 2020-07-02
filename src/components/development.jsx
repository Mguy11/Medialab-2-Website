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
          <h2 className="development__title">Ontwikkelen</h2>
          <p className="development__alinea development__alinea--overflow">
            Voor de ontwikkeling van de app prototype ben ik bezig geweest met het ontwikkelen van een webapp die bruikbaar moest zijn met een telefoon.
            <br />
            <br />
            Nadat duidelijk was geworden dat we een QR scanner app nodig hadden die tekst uitsprak was ik gaan onderzoeken hoe ik dat het makkelijkste en snelste kon gaan maken.
            Omdat een native app voor mij nog een lastigere stap is was de keuze voor een webapp of een Progressive Web App de eerste keuze. Ik heb daarin veel ervaring en kan daarin snel een prototype opzetten.
            Ik heb hiervoor initieel geen framework gebruikt omdat ik wilde voorkomen dat zoiets in de weg ging zitten bij het experimenteren maar later nadat het eerste prototype klaar was, heb ik VueJS ingezet voor het interactief en beter onderhoudbaar te maken van de pagina’s. Ik heb gekozen voor Vue omdat dit framework het makkelijk maakt om snel interactieve schermen op te zetten en omdat ik er genoeg ervaring mee had.
            <br />
            <br />
            Andere onderdelen die ik heb gebruikt was een library voor het scannen van QR codes. Een
            eis die ik daarvoor had was dat het automatisch zou moeten scannen zonder dat ik een knop in hoef te drukken.
            Ik heb ook gebruik gemaakt van de ingebouwde web api’s waar de meeste moderne browsers over beschikken, namelijk de speechsynthesis en vibration api. Dit was zoals de namen misschien al verklappen, om de telefoon te laten trillen en om de tekst uit te laten spreken.
            Code
            <br />
            <br />
            De repo is hier te vinden: <a href="https://github.com/TimBorowy/blind-qr-scanner" rel="noopener noreferrer" target="_blank" className="development__link">GitHub</a>.
            <br />
            <br />
            De webapp is gehost met Google Firebase en hangt daarmee ook in contact met een kleine database voor de koppeling van QR bordjes met de gerechten. Deze kunnen dan later via het backend aangepast worden door het restaurant.
            De keuze is op dit platform is gevallen omdat het laadsnelheid van de webapp lekker snel maakt en het vlot is met ontwikkeling. Een nieuwe versie deployen kost hier geen moeite en gaat zowat automatisch. Een andere reden is dat het domein meteen beveiligd is met SSL, een vereiste als je gebruik wilt gaan maken van de Camera van je telefoon.
            <br />
            <br />


            <h3>Testen</h3>
            Uit mijn eigen tests kwam dat het met het eerste prototype lukte om een code te scannen, maar het koste soms wat tijd en je moest goed op de code mikken. Dit is iets dat voor een blind persoon niet echt goed te doen is dus ik ben gaan kijken of ik dit kon verbeteren. Ik weet van bijvoorbeeld de ING app dat ze daar ook een scanner hebben die super snel is en waar je de code nog maar nauwelijks in het scherm hoeft te hebben.
            De snelheid en manieren waarop je de code in beeld kan hebben dat de app ze nog kan scannen zijn drastisch verbeterd in de tweede versie van het prototype dat ik in de week daarop heb ontwikkeld.
            <br />
            <br />
            Een paar andere dingen die ik merkte tijdens het testen was dat ik de accessibility voor screenreaders nog kon verbeteren en dat het uitspreken en trillen niet zo goed werkte op Safari voor ios. Dit was omdat ze daar veel striktere regels hebben voor het gebruik van de spraak api. Ik kon niet zonder user interactie een tekst laten uitspreken. De gebruiker zou eerst op een knop moeten drukken.
            <br />
            <br />
            Uit de geblinddoekte tests die ik zelf hebt uitgevoerd en heb laten uitvoeren door een aantal lieftallige vrijwilligers bleek dat:
            de app snel vindbaar is,
            het duidelijk is op welke pagina je bent,
            De navigatie helder en concreet is.
            Voor blinden kan een app al snel als een doolhof voelen en daarom heb ik het zo simpel en kaal mogelijk gehouden. Geen menu’s die je eerst open moet klappen bijvoorbeeld. Alles dat in de app zit is absoluut essentieel voor het functioneren.
            <br />
            <br />
            Voor een volgende versie van de app zou ik toch de native app richting in gaan met bijvoorbeeld Android studio en Xcode of React Native. Dit omdat de functies die ik nodig heb, daar ongelimiteerd gebruikt kunnen worden. De restricties van web apps met name voor het ios platform waren te groot om een stabiele app te maken met een goede gebruikersinteractie.

          </p>
        </Col>
      </Row>
    </section>
  )
};

export default Development;
