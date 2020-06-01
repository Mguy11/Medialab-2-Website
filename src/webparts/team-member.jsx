import React, { Component } from "react";
import { Col } from "react-flexbox-grid";

const TeamMember = (props) => {
  return (
    <Col>
      <div className="member">
        <img
          className="member__logo"
          src={props.logo}
          alt="team-member"
          draggable="false"
        ></img>
        <span className="member__name">{props.name}</span>
      </div>
    </Col>
  );
};

export default TeamMember;
