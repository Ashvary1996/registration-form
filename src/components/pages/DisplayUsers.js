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
            <h3 className="mx-4 d-flex my-3 rounded-circle bg-grey ">
              <p>{index + 1}</p> <img className="pimg  " src={elem.pimg} />
            </h3>
            <h2 className="mx-4 text-center">Name : {elem.name}</h2>
            <h5 className="mx-4  text-center">Email : {elem.email}</h5>
            <h5 className="mx-4 text-center">Number : {elem.number}</h5>
            <h5 className="mx-4 text-center">Date of Birth : {elem.dob}</h5>
            <h5 className="mx-4 text-center">Gender : {elem.gender}</h5>
            <button
              className=" text-center btn btn-outline-danger"
              onClick={() => deleteItem(elem)}
            >
              Delete
            </button>
          </div>
        );
      })}

      {<h1>{!data.length ? `No Register User ` : ""}</h1>}
    </div>
  );
}

export default DisplayUsers;
