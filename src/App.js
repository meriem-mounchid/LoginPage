import logo from './logo.svg';
import './App.css';
import profile from "./image/profile5.png";
import email from "./image/email.png";
import password from "./image/password.png";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="img">
           <div className="container-img">
             <img src={profile} alt="profile" className="profile"/>

           </div>

          </div>
          <div> 
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder="user name" className="name"/>
            </div>
            <div className="second-input">
              <img src={password} alt="password" className="password"/>
              <input type="text" placeholder="user name" className="name"/>
            </div>
            <div className="button-login">
              <button>Login</button>
            </div>
            <div>
              <p className="link">
                <a href="#">Forgot password?</a>Or<a href="#">Sing Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
