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
    console.log("From Submitted", data);
  };

  return (
    <div className=".bg-success">
      <form onSubmit={submitForm}>
        <div className="inputboxes">
          <label htmlFor="name">Name : </label>
          <input
            onChange={getValues}
            type="name"
            name="name"
            placeholder="write your Name"
          />
        </div>
        <div className="inputboxes">
          <label htmlFor="name">E-mail : </label>
          <input
            onChange={getValues}
            type="e-mail"
            name="email"
            placeholder="write your email"
          />
        </div>
        <div className="inputboxes">
          <label htmlFor="dob">Date Of Birth : </label>
          <input onChange={getValues} type="date" name="dob" />
        </div>
        <div className="inputboxes">
          <label htmlFor="number">Mobile No : </label>
          <input onChange={getValues} type="number" name="number" />
        </div>
        <div className="inputboxes">
          <label>Gender : </label>

          <label htmlFor="gender"> Male </label>
          <input onChange={getValues} type="radio" name="gender" value="male" />

          <label htmlFor="gender"> Female</label>
          <input
            onChange={getValues}
            type="radio"
            name="gender"
            value="female"
          />
        </div>

        {/* <div className="inputboxes">
          <input onChange={getValues} name="save" type="checkbox" />
          <label htmlFor="gender">
            I hearby declare all information are correct
          </label>
        </div> */}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Registration;
