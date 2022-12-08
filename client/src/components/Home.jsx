import "./Home.css";
import Letter from "./Letter";
import Nav from "./Nav";
import WriteLetter from "./WriteLetter";


function Home({create, letters}) {

  return (
    <div className="home">
      <Nav />
      {create !== true ? (<div className="letters">
      <h1>Letters</h1>
        <div className="letters-container">
          {letters.map((letter) => (
            <Letter key={letter.id} letter={letter} />
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
