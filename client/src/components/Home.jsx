import "./Home.css";
import Letter from "./Letter";
import Nav from "./Nav";
import WriteLetter from "./WriteLetter";
import { useState, useEffect } from "react";
import baseUrl from "../Url";

function Home({ create, period, personal }) {
  const [letters, setLetters] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    setLetters([]);
    setIsEmpty(true);
    let url =  `${baseUrl}public_letters`;
    if (personal) {
      url = `${baseUrl}private_letters?id=${localStorage.getItem("token")}`;
    } else {
      switch (period) {
        case "week":
          url += "?period=week";
          break;
        case "month":
          url += "?period=month";
          break;
        default:
          url += "?period=all";
          break;
      }
    }

    if (!create) {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          alert("Something went wrong");
        })
        .then((data) => {
          console.log(data);
          if (data.length > 0) {
            setIsEmpty(false);
          }

          setLetters(data);
        });
    }
  }, [period, personal, create]);

  return (
    <div className="home">
      <Nav />
      {create !== true ? (
        <div className="letters">
          <h1>Letters</h1>
          <div className="letters-container">
            {isEmpty && <h2>There are no letters</h2>}
            {letters.map((letter,key) => (
              <Letter
                key={key}
                letter={letter}
                />
            ))}
          </div>
        </div>
      ) : (
        <WriteLetter />
      )}
    </div>
  );
}

export default Home;
