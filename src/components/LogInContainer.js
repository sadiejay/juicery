import "./LogIn.scss";

function LogInContainer() {
  return (
    <section className="LogInContainer">
      <div className="LogInContent">
        <h2>Welcome!</h2>
        <p className="signUpP">
          New to Juicerie?{" "}
          <a href="#" rel="noopener noreferrer" target="_blank">
            Sign up
          </a>
        </p>

        <form className="LogInContent--form">
          <input
            type="text"
            name="email"
            id="input--email"
            placeholder="email"
          ></input>
          <input
            type="text"
            name="password"
            id="input--password"
            placeholder="password"
          ></input>

          <a href="#" target='_blank' rel="noopener noreferrer" className="forgotP">forgot password?</a>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default LogInContainer;
