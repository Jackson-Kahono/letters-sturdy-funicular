import "./Home.css";
import Letter from "./Letter";
import Nav from "./Nav";


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
        <div className="letter">
          <h1>Letter</h1>
          <div className="create">
            <form>
              <div className="form">
                <textarea placeholder="Write your letter here" />

                <input type="date"/>
                <label>When do you want to receive it?</label>
                <input type="submit" value="Send" />
                </div>
            </form>
          </div>
    </div>
      )}
    </div>
  );
}

export default Home;
