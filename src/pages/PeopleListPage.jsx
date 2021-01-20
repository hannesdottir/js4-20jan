import React, { useEffect, useState } from "react";
import PeopleListItem from "../components/PeopleListItem";

export default function PeopleListPage() {
  const [peopleList, setPeopleList] = useState(null);
  function getPeopleList() {
    const url = "https://swapi.dev/api/people/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPeopleList(data.results));
  }

  useEffect(() => {
    getPeopleList();
  }, []);

  return (
    <div>
      <h1>People List Page</h1>
      {peopleList &&
        peopleList.map((person) => {
          const id = person.url
            .replace("http://swapi.dev/api/people/", "")
            .replace("/", "");
          return <PeopleListItem person={person} id={id} />;
        })}
    </div>
  );
}
