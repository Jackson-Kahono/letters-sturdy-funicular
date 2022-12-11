import { useState } from "react";
import baseUrl from "../Url";

function WriteLetter() {
  const [personal, setPersonal] = useState(false);
  const handleCreate = (e) => {
    e.preventDefault();
    let letter = {};
    if (!personal) {
      letter = {
        text: e.target.text.value,
        date: new Date().toLocaleDateString(),
        user_id: localStorage.getItem("token"),
      };
    }
    else{
      letter = {
        text: e.target.text.value,
        date: e.target.date.value,
        user_id: localStorage.getItem("token"),
      };
    }
    let url = ""
    // let url = "http://localhost:3000/";
    if (personal) {
      url = baseUrl + "private_letters";
    } else {
      url = baseUrl + "public_letters";
    }
    fetch(url, {
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
        window.location.href = "/home";
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
            <textarea name="text" placeholder="Write your letter here" onKeyDown={
              (e)=>{
                //preserving the new line
                if(e.key=== "Enter"){
                  e.preventDefault();
                  e.target.value += "\n";
                }
              }
            }/>
            <div className="choose">
              <div
                className="pers"
                onClick={() => setPersonal(true)}
                style={personal ? chosen : null}
              >
                Personal
              </div>
              <div
                className="pub"
                onClick={() => setPersonal(false)}
                style={personal ? null : chosen}
              >
                Public
              </div>
            </div>
            {personal && (
              <>
                <input
                  type="date"
                  name="date"
                  onChange={(e) => {
                    if (
                      e.target.value < new Date().toISOString().slice(0, 10)
                    ) {
                      alert("Date must be in the future");
                    }
                  }}
                />
                <label>When do you want to receive it?</label>
              </>
            )}
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default WriteLetter;
