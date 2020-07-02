import React from "react";
import { Row, Col } from "react-flexbox-grid";
import TeamMember from "../webparts/team-member";

const Team = () => {
  return (
    <section id="team" className="section team">
      <Row middle="lg" center="lg" className="team__row">
        <div className="team__stain team__stain--left" alt="blob seven"></div>
        <div className="team__stain team__stain--right" alt="blob ten"></div>
        <Col lg={6}>
          <div className="team__content">
            <Row center="lg">
              <Col lg={7}>
                <h2 className="team__title">Ons Team</h2>
                <p className="team__body">
                  Wij zijn team TMNT. Dit team bestaat alleen maar uit CMGT studenten dit keer.
                  </p>
              </Col>
            </Row>
            <Row className="team__members">
              <TeamMember
                image="images/characters/letter-t.png"
                name="Tim" />
              <TeamMember
                image="images/characters/letter-m.png"
                name="Martijn"
              />
              <TeamMember
                image="images/characters/letter-n.png"
                name="Nienke"
              />
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default Team;
