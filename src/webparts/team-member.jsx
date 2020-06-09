import React, { Component } from "react";
import { Col } from "react-flexbox-grid";

const TeamMember = (props) => {
  return (
    <Col lg={4}>
      <div className="member">
        <img
          className="member__image"
          src={props.image}
          alt="team-member"
          draggable="false"
        ></img>
        <h4 className="member__name">{props.name}</h4>
      </div>
    </Col>
  );
};

export default TeamMember;
