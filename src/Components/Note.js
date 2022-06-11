import React from "react";
import "./Style.css";
const Note = (props) => {
  return (
    <>
      <div className="note">
        <div className="title">
          <h3>{props.title}</h3> <hr />
        </div>
        <div className="text">
          <p>{props.content}</p>
        </div>
        <div className="delete">
          <button
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;
