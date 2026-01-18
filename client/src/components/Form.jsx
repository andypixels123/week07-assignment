import { useState } from "react";
import { Link } from 'react-router';

const d = new Date();
const y = d.getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const m = months[d.getMonth()];
// console.log(`${m} ${y}`);

function Form() {
  const [formValues, setFormValues] = useState({
    userName: "",
    userComment: "",
    date: `${m} ${y}`
  });

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("form values - ", formValues);
    // todo: change to render 'server url' for deployment
    try {
      // fetch("http://localhost:8080/addcomms", {
        fetch("https://week07-assignment-jzhp.onrender.com/addcomms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ formValues })
      });
    } catch (error) {
      console.error(error);
    }
  }

  function handleInputChange(e) {
    // console.log(formValues);
    setFormValues({
      ...formValues, [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <main>
        <nav><Link to="/posts" className="round" title="view comments page">view comments</Link></nav>
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
      </main>
    </>
  )
}

export default Form;