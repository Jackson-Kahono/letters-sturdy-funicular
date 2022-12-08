import './Login.css';
import { useEffect } from 'react';

export default function SignUp(){
      useEffect(() => {
            if(localStorage.getItem('token')){
                  window.location.href = '/';
            }
      }, []);

      function handleSignUp(e){
            e.preventDefault();
            if(e.target[1].value !== e.target[2].value){
                  alert('Passwords do not match');
                  return;
            }
            const user = {
                  username: e.target[0].value,
                  password: e.target[1].value
            }

            fetch('http://localhost:3000/api/users', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(user)
            })
            .then(res => {
                  if(res.ok){
                        return res.json();
                  }
                  alert('Username already exists');
            })
            .then(data => {
                  localStorage.setItem('token', data.token);
                  window.location.href = '/';
            })
      }

      return(
            <div className="login">
                  <h1>Sign Up</h1>
                  <form onSubmit={handleSignUp}>
                        <div className="form">
                              <input type="text" placeholder="Enter your username" />
                              <input type="password" placeholder="Enter your password" />
                              <input type="password" placeholder="Confirm your password" />
                              <input type="submit" value="Sign Up" />
                              <p>Already have an account? <a href='/login'>Log in</a></p>
                        </div>
                  </form>
            </div>

      )
}
