import './Login.css';
import baseUrl from '../Url';

export default function SignUp(){

      function handleSignUp(e){
            e.preventDefault();
            if(e.target.password.value !== e.target['conf-password'].value){
                  alert('Passwords do not match');
                  return;
            }
            const user = {
                  name: e.target.username.value,
                  password_digest: e.target.password.value,
                  email: e.target.email.value
            }

            fetch(`${baseUrl}users`, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(user)
            })
            .then(res => {
                  return res.json();
            })
            .then(data => {
                  if(data.errors){
                        alert(data.errors[0]);
                        console.log(data.errors);
                        return;
                  }
                  localStorage.setItem('token', data.id);
                  window.location.href = '/home';
            })
      }

      return(
            <div className="login">
                  <h1>Sign Up</h1>
                  <form onSubmit={handleSignUp}>
                        <div className="form">
                              <input type="text" name='username' placeholder="Enter your username" />
                              <input type="email" name='email' placeholder="Enter your email" />
                              <input type="password" name='password' placeholder="Enter your password" />
                              <input type="password" name='conf-password' placeholder="Confirm your password" />
                              <input type="submit" value="Sign Up" />
                              <p>Already have an account? <a href='/login'>Log in</a></p>
                        </div>
                  </form>
            </div>

      )
}
