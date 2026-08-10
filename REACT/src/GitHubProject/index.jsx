import { useState, useEffect } from "react";
import axios from "axios";

import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import PersonCard from "./PersonCard";

function GithubProject() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users", {
          headers: {
            Accept: "application/vnd.github+json",
          },
        });
        setPeople(response.data);
      } catch (e) {
        console.error("Error is", e);
      }
    };

    getUserData();
  }, []);

  //lifecycle. githubProject

  return (
    <div>
      <TopNav setPeople={setPeople} />
      <InfoSection people={people} />
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}

export default GithubProject;
