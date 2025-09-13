import NavBar from "../../app/components/NavBar"
import './signup.css'
export default function SignUp(){
    return (
    <div className="login-page">
    <NavBar></NavBar>
    <div className="profile-box" />
    <form className="login-form">
        <input 
          type="text" 
          name="username" 
          placeholder="User name" 
          required 
          className="login-input"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="email@gmail.com" 
          required 
          className="login-input"
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          required 
          className="login-input"
        />
        <input
            type = "password"
            name = "confirm password"
            placeholder="confirm password"
            required
            className="login-input"
            >
        </input>
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
};