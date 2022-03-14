import { validateEmail } from "../../utils/helpers";
import { Form, Button } from "react-bootstrap";
import React, {useState} from "react";
import "./styles.css";


function Contact() {
// Form variable
const [formInfo, setformInfo] = useState({name: "",email: "", message: "",});
const [wrongMessage, setWrongMessage] = useState("");
const { name, email, message } = formInfo;

  const Submit = (e) => {
    e.preventDefault();
    if (!wrongMessage) {
      console.log("Submit Form", formInfo);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setWrongMessage("Email is invalid.");
      } else {
        setWrongMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setWrongMessage(`${e.target.name} is required.`);
      } 
    }
    if (!wrongMessage) {
      setformInfo({ ...formInfo, [e.target.name]: e.target.value });
      console.log("Form: ", formInfo);
    }
  };

  return (
    <div class='center'>
    <div class="column portfolio">
    <div class="skills" >Contact Me</div>
    <Form className="form" onSubmit={Submit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Full Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onBlur={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onBlur={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="message">Message:</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows="5"
          onBlur={handleChange}
        />
      </Form.Group>
      {wrongMessage && (
        <div>
          <p className="error-text">{wrongMessage}</p>
        </div>
      )}
      <Button type="submit">
        Submit
      </Button>
    </Form>
    </div>  
    </div>
    );
}

export default Contact;