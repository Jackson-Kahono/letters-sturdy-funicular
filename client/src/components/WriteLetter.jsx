import { useState } from "react";

function WriteLetter() {
  const [personal, setPersonal] = useState(false);
  const handleCreate = (e) => {
    e.preventDefault();
    const letter = {
      text: e.target[0].value,
      date: e.target[1].value,
    };
    fetch("http://localhost:3000/api/letters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(letter),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        alert("Something went wrong");
      })
      .then((data) => {
        window.location.href = "/";
      });
  };

  const chosen = {
    border: "1px dashed #4CAF50",
  };
  return (
    <div className="letter">
      <h1>Letter</h1>
      <div className="create">
        <form onSubmit={handleCreate}>
          <div className="form">
            <textarea placeholder="Write your letter here" />
            <div className="choose">
              <div className="pers" onClick={
                  () => setPersonal(true)
              } style={
                  personal ? chosen : null
              }>Personal</div>
              <div className="pub" onClick={
                  () => setPersonal(false)
              } style={
                  personal ? null : chosen
              }>Public</div>
            </div>
            {personal &&
            <input
              type="date"
              onChange={(e) => {
                if (e.target.value < new Date().toISOString().slice(0, 10)) {
                  alert("Date must be in the future");
                }
              }}
            />}
            <label>When do you want to receive it?</label>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default WriteLetter;
