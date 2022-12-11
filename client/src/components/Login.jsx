import "./Login.css";
import baseUrl from "../Url";

function Login() {
  if(localStorage.getItem("token")){
    window.location.href = "/home";
  }

  function handleLogin(e) {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
      password_digest: e.target[1].value,
    };
    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        alert("Incorrect username or password");
      })
      .then((data) => {
        localStorage.setItem("token", data.id);
        window.location.href = "/home";
      });
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form">
          <input type="text" placeholder="Enter your username" />
          <input type="password" placeholder="Enter your password" />
          <input type="submit" value="Login" />
          <p>Don't have an account? <span><a href="/signup">Sign Up</a></span></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
