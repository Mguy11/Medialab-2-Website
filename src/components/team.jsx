import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import TeamMember from "../webparts/team-member";

const Team = () => {
  return (
    <section className="team">
      <Row center="lg">
        <Col lg={4}>
          <div className="team__content">
            <h2 className="team__title">Ons Team</h2>
            <p className="team__body">
              Lorem ipsum dolor sit amet, consecteteur adipiscing elit, sed diam
              nonummy nibh eu-ismod tincidunt ut laoreet.
            </p>
          </div>
        </Col>
      </Row>
      <Row center="lg">
        <Col lg={6}>
          <div className="team__logos">
            <TeamMember src="../images/background.jpg" name="Tim" />
            <TeamMember src="../images/background.jpg" name="Martijn" />
            <TeamMember src="../images/background.jpg" name="Nienke" />
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default Team;
