import React, { useState } from "react";

function DisplayUsers() {
  const [data, setData] = useState(
    localStorage.getItem("saveData")
      ? JSON.parse(localStorage.getItem("saveData"))
      : []
  );
  const deleteItem = (clickedItem) => {
    let newItem = [...data];
    newItem = data.filter((elem) => {
      return elem.id !== clickedItem.id;
    });

    setData(newItem);
    console.log("Deleted =>", clickedItem);
    localStorage.setItem("saveData", JSON.stringify(newItem));
  };

  console.log(data);
  return (
    <div className="displaybox">
      {data.map((elem, index) => {
        return (
          <div className="box" key={index}>
            <img src={elem.src} alt="" />
            <h3>Name : {elem.name}</h3>
            <h4>Email : {elem.email}</h4>
            <h3>Number : {elem.number}</h3>
            <h3>Date of Birth : {elem.dob}</h3>
            <h3>Gender : {elem.gender}</h3>
            <button onClick={() => deleteItem(elem)}>Delete</button>
          </div>
        );
      })}

      {<h1>{!data.length ? `No Register User  ` : ""}</h1>}
    </div>
  );
}

export default DisplayUsers;
