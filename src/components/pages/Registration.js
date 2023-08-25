import React, { useState } from "react";

function Registration() {
  const [data, setData] = useState([]);
  const [saveData, setSave] = useState(
    localStorage.getItem("saveData")
      ? JSON.parse(localStorage.getItem("saveData"))
      : []
  );

  const getValues = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();

    const newdata = { ...data, id: Date.now() };
    saveData.push(newdata);

    setSave(saveData);
    localStorage.setItem("saveData", JSON.stringify(saveData));
    document.getElementById("form").reset();

    console.log("From Submitted", data);
  };

  return (
    <div className="regContainer .bg-success">
      <h1>
        <b>Registration Form</b>
      </h1>
      <form id="form" onSubmit={submitForm}>
        <div className="inputboxes">
          <label htmlFor="name">Name : </label>
          <input
            onChange={getValues}
            type="name"
            name="name"
            placeholder="your name"
          />
        </div>

        <div className="inputboxes">
          <label htmlFor="name">E-mail : </label>
          <input
            onChange={getValues}
            type="e-mail"
            name="email"
            placeholder=" email address"
          />
        </div>

        <div className="inputboxes">
          <label htmlFor="dob">Date of Birth : </label>
          <input onChange={getValues} type="date" name="dob" />
        </div>

        <div className="inputboxes">
          <label htmlFor="number">Mobile No : </label>
          <input onChange={getValues} type="number" name="number" />
        </div>

        <div className="inputboxes">
          <label>Gender : </label>

          <label htmlFor="gender" className="mx-3">
            {" "}
            Male{" "}
          </label>
          <input
            className="radio"
            onChange={getValues}
            type="radio"
            name="gender"
            value="male"
          />

          <label className="mx-2" htmlFor="gender">
            Female
          </label>
          <input
            className="radio"
            onChange={getValues}
            type="radio"
            name="gender"
            value="female"
          />
        </div>

        <div className="inputboxes">
          <label htmlFor="gender" className="mx-3">
            Image Url :
          </label>
          <input
            className=""
            onChange={getValues}
            type="input"
            name="pimg"
            placeholder=" your profile image"
          />
        </div>

        <br />
        <button className="submit  ">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
