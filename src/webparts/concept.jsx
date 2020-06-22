import React from "react";

const Concept = (props) => {
  return (

    <div className="concept" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <div className="concept__content">
        <h4 className="concept__title">{props.title}</h4>
        <p className="concept__body">{props.body}</p>

        <button className="button">Lees Meer</button>
      </div>
    </div>

  )
}
export default Concept;
