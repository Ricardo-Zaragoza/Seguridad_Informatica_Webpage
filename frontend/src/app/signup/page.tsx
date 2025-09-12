import NavBar from "../../app/components/NavBar"
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
          type="password" 
          name="password" 
          placeholder="Password" 
          required 
          className="login-input"
        />
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
};