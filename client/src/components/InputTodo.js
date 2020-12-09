import React, { Fragment, useState } from "react";

const InputTodo = () => {
  //description state only modified by setDescription()
  const [description, setDescription] = useState("Enter Todo Item...");

  //when "Add" button is clicked:
  const onSubmitForm = async (e) => {
    e.preventDefault(); //only try if explicit action taken
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body), //converts JS object/value to JSON string
      });

      //console.log(response); --> see in inspect console
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
