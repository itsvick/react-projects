import React from "react";

export default function List(props) {
  const { people } = props;

  console.log("people", people);
  return people.map((person, index) => {
    return (
      <div className="card" key={index}>
        <img src={person.image} alt={person.name} />
        <div className="info">
          <h5>{person.name}</h5>
          <p>{person.age} years</p>
        </div>
      </div>
    );
  });
}
