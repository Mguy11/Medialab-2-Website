import React from "react";

const Alinea = (props) => {
  return (
    <div className="development__content">
      <h2 className="development__title">{props.title}</h2>
      <p className="development__alinea development__alinea--overflow">
        {props.alinea}
      </p>
      <p className="development__alinea development__alinea--overflow">
        {props.alinea2}
      </p>
    </div>
  )
}
export default Alinea;