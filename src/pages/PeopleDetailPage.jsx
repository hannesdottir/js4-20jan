import React, { useEffect, useState } from "react";

export default function PeopleDetailPage(props) {
  const id = props.match.params.id;
  const [person, setPerson] = useState(null);

  function getPerson() {
    const url = `https://swapi.dev/api/people/${id}/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      People Detail Page
      {person && <h1>{person.name}</h1>}
    </div>
  );
}
