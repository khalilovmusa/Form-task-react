import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
  });

  const [succesMessage, setSuccessMessage] = useState({
    isDisplaying: false,
    message: "Success"
  })

  const [errorMessage, setErrorMessage] = useState({ isDisplaying: false, message: "Error" })

  const handleChange = (e) => {
    setFormValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    const emailInput = document.querySelector(".email-input").value;
    if (emailInput.split(".")[1] === "ru") {
      setSuccessMessage({ isDisplaying: true, message: "Success" });
      setErrorMessage({ isDisplaying: false, message: "Error" });
    } else {
      setErrorMessage({ isDisplaying: true, message: "Error" });
      setSuccessMessage({ isDisplaying: false, message: "Success" });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <h1>Form</h1>
        {succesMessage.isDisplaying && <p>{succesMessage.message}</p>}
        {errorMessage.isDisplaying && <p className="error">{errorMessage.message}</p>}
        <label htmlFor="name">Name:</label>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <label htmlFor="surname">Surname:</label>
        <input name="surname" placeholder="Surname" onChange={handleChange} />
        <label htmlFor="phoneNumber">Phone number:</label>
        <input name="phoneNumber" type="number" placeholder="Phone number" onChange={handleChange} />
        <label htmlFor="email">Email:</label>
        <input className="email-input" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <label htmlFor="comment">For comment:</label>
        <textarea name="comment" onChange={handleChange}></textarea>
        <button type="submit" className="button">Submit</button>
      </form>
    </>
  );
}

export default Form;
