
import { useState, useEffect } from "react";
import baseUrl from "../Url";
function Letter({ letter }) {
  const [mine, setMine] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token") == letter.user_id) {
      setMine(true);
    }
  }, []);

  return (
    <div className="letter">
      <span className="title">{mine ? "You" : letter.user.name}</span>
      {mine && <span className="delete" onClick={
        ()=>{
          if(!window.confirm("Are you sure you want to delete this letter?")){
            return;
          }
          fetch(`${baseUrl}public_letters/${letter.id}`,{
            method: "DELETE"
          }
          )
          .then((res)=>{
            if(res.ok){
              return res.json();
            }
            alert("Something went wrong");
          })
          .then((data)=>{
            window.location.reload();
          })

        }
      }><i className="fa-solid fa-square-minus"></i></span>}
      <br/>
      <p>
        {
          //preserving the new line
          letter.text.split("\n").map((item, i) => {
            return (
              <>
                {item}
                <br />
              </>
            );
          })
        }
      </p>
      <span>{new Date(letter.date).toDateString()}</span>
    </div>
  );
}

export default Letter;
