import { useState } from "react";
import { Link } from 'react-router';

function Form() {
  const [formValues, setFormValues] = useState({
    userName: "",
    userComment: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("The form values are", formValues);
    // ! POST FORM DATA TO SERVER, SERVER TO DB
    // TODO: CHANGE TO RENDER 'SERVER URL' WHEN DEPLOYED
    try {
      fetch("http://localhost:8080/addcomms", {// localhost
        // fetch("https://week04-assignment-1-j3wt.onrender.com/addcomms", {// mk2
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ formValues })
      });
    } catch (fish) {
      console.error(fish);
    }
  }

  function handleInputChange(e) {
    console.log(formValues);
    setFormValues({
      ...formValues, [e.target.name]: e.target.value
    });
    // console.log(formValues);
  }

  return (
    <>
      <main>
        <h2>GUESTBOOK</h2>
        <form onSubmit={handleSubmit} id="commForm">
          <label htmlFor="userName">Name</label>
          <input
            onChange={handleInputChange}
            id="userName" name="userName"
            type="text"
            placeholder="first and last name"
            value={formValues.userName}
            required
          />
          <label htmlFor="userName">Comment</label>
          <textarea
            onChange={handleInputChange}
            id="userComment"
            name="userComment"
            type="text"
            placeholder="your message"
            rows="8"
            value={formValues.userComment}
            required
          >
          </textarea>
          <button type="submit" title="submit form">Submit</button>
        </form>
        <Link to="/posts" className="round" title="home page">link to comments</Link>
      </main>
    </>
  )
}

export default Form

/*
function Form() {
        form values with initial values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(e) {
    setFormValues({
      ...formValues, // the spread operator will merge all existing values
      [e.target.name]: e.target.value, // then we add the new value using the form field "name" attribute and the value this equates to a key: value pair which is why the semi-colon is used, we are adding the key value pair to the 'formValues' Object
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <p>Name value is: {formValues.name}</p>
        <p>Emaul value is: {formValues.email}</p>
        <p>Password value is: {formValues.password}</p>
        <button type="submit">Submit</button>
      </form>
      <section></section>
    </>
  );
}
*/