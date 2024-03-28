export function LoginForm() {
  return (
    <div className="login-form">
      <form action="">
        <h1>Login</h1>
        <p>
          Already have an account? Login in or
          <a href="signup.html">Sign Up</a>
        </p>

        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label htmlFor="psw">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <label htmlFor="psw-repeat">Repeat Password</label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        />

        <label>
          <input
            type="checkbox"
            checked={true}
            name="remember"
            style={{ marginBottom: "15px" }}
          />
          Remember me
        </label>

        <p>
          By creating an account you agree to our
          <a href="#">Terms & Privacy</a>.
        </p>

        <div className="buttons">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <button type="submit" className="signupbtn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
