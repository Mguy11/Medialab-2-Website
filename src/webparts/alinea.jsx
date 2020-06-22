import React from "react";
import { Col } from "react-flexbox-grid";

const Alinea = (props) => {
  return (
    <div className="development__content">
      <h2 className="development__title">{props.title}</h2>
      <p className="development__alinea development__alinea--italic">
        {props.alinea}
      </p>
      <p className="development__alinea">
        {props.alinea2}
      </p>
    </div>
  )
}
export default Alinea;