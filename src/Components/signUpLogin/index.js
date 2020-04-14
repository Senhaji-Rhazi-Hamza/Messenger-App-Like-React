import React, { useState } from "react";

const styles = {
  signInLoginContainer: {
    height: "50vh",
    width: "30vw",
    border: "solid 1px",
    background: "#ebedf2",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "25px",
    opacity: "0.4",
    padding: "10px",
  },
  buttonSignUpLogin: {
    width: "60px",
    height: "20px",
  },
};

const SignUpLogin = ({logIn}) => {
  const [login, setLogin] = useState(true);

  const switchState = () => {
    setLogin(!login);
  };

  return (
    <div style={{ ...styles.signInLoginContainer }}>
      <div style={{ marginTop: "40px" }}>
        <label
          style={{
            display: "inline-block",
            width: "100px",
            textAlign: "right",
          }}
          htmlFor="email"
        >
          Email:{" "}
        </label>

        <input type="email" placeholder="Enter email" name="email"></input>
      </div>

      <div style={{ marginTop: "25px" }}>
        <label
          style={{
            display: "inline-block",
            width: "100px",
            textAlign: "right",
          }}
          htmlFor="password"
        >
          Password:{" "}
        </label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
        ></input>
      </div>

      <div style={{ marginTop: "30px", width: "50%" }}>
        <button
          style={{ ...styles.buttonSignUpLogin, float: "left" }}
          onClick={switchState}
        >
          Sign Up
        </button>
        {login && (
          <button style={{ ...styles.buttonSignUpLogin, float: "right" }} onClick ={() =>logIn()}>
            Login
          </button>
        )}
      </div>
      {!login && (
        <div>
          {/* <label style = {{ display: 'inline-block', width: '100px', textAlign: 'right' }} htmlFor="password">Password:  </label> */}
          <label htmlFor="rememberMe"> Remember me </label>
          <input type="checkbox" id="rememberMe" name="rememberMe"></input>
        </div>
      )}
    </div>
  );
};

export default SignUpLogin;
