import React from "react";
import "./Style.css";
import { useState } from "react";
function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    console.log(name);

    setNote((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const showTitle = () => {
    setExpand(true);
  };
  const hideTitle = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="outerdiv" onDoubleClick={hideTitle}>
        <div className="width">
          <div className="innerPart">
            <form>
              {expand ? (
                <input
                  type="text"
                  placeholder="Title"
                  autoComplete="off"
                  onChange={inputEvent}
                  value={note.title}
                  name="title"
                />
              ) : null}
            </form>
            <textarea
              className="my-2"
              placeholder="Write a note..."
              rows="3"
              onChange={inputEvent}
              value={note.content}
              name="content"
              onClick={showTitle}
            ></textarea>
          </div>
          <div className="add" onClick={addEvent}>
            {expand ? (
              <button>
                <i className="fa fa-plus"></i>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNote;
