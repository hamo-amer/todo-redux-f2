import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { editTask } from "../js/actions";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const EditForm = ({ oldTodo, editTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(oldTodo.text);

  useEffect(() => {
    setText(oldTodo.text);
  }, [isOpen, oldTodo.text]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (text.trim() === "") {
    //   return alert("Please ...");
    // }
    const newTodo = { ...oldTodo, text: text };
    editTask(newTodo);
    toggleModal();
  };

  return (
    <Fragment>
      <button onClick={toggleModal}>EDIT</button>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={toggleModal}>
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button type="submit"> Confirm </button>
          <button onClick={toggleModal}> Cancel </button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default connect(null, { editTask })(EditForm);
