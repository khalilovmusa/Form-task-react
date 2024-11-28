// import { useState } from "react";
// import "./Form.css";

// const Form = () => {
//   const [formValue, setFormValue] = useState({
//     name: '',
//     surname: '',
//     email: '',
//     phoneNumber: '',
//     isDisplaying: false,
//     message: "Success"
//   });

//   const handleChange = (e) => {
//     setFormValue({
//       ...formValue,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormValue({
//       ...formValue,
//       isDisplaying: false
//     });
//     console.log(formValue);
//   };

//   return (
//     <>
//       <form method="GET" onSubmit={handleSubmit} className="form-wrapper">
//         <h1>Form</h1>
//         {formValue.isDisplaying && <p>{formValue.message}</p>}
//         <label htmlFor="name">Name:</label>
//         <input name="name" placeholder="Name" onChange={handleChange} />
//         <label htmlFor="surname">Surname:</label>
//         <input name="surname" placeholder="Surname" onChange={handleChange} />
//         <label htmlFor="phoneNumber">Phone number:</label>
//         <input name="phoneNumber" type="number" placeholder="Phone number" onChange={handleChange} />
//         <label htmlFor="email">Email:</label>
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//         <label htmlFor="comment">For comment:</label>
//         <textarea name="comment" onChange={handleChange}></textarea>
//         <button type="submit" className="button">Submit</button>
//       </form>
//     </>
//   );
// }

// export default Form;

import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    isDisplaying: false,
    message: "Success"
  });

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValue({
      ...formValue,
      isDisplaying: true
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <h1>Form</h1>
        {formValue.isDisplaying && <p>{formValue.message}</p>}
        <label htmlFor="name">Name:</label>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <label htmlFor="surname">Surname:</label>
        <input name="surname" placeholder="Surname" onChange={handleChange} />
        <label htmlFor="phoneNumber">Phone number:</label>
        <input name="phoneNumber" type="number" placeholder="Phone number" onChange={handleChange} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <label htmlFor="comment">For comment:</label>
        <textarea name="comment" onChange={handleChange}></textarea>
        <button type="submit" className="button">Submit</button>
      </form>
    </>
  );
}

export default Form;
