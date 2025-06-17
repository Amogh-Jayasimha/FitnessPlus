import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import videobg from "../assets/video/signupgymvideo.mp4";

function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validateFirstName, setValidateFirstName] = useState("");
  const [validateLastName, setValidateLastName] = useState("");
  const [validatePhone, setValidatePhone] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [validatePassword, setValidatePassword] = useState("");

  const [accAlreadyExists, setAccAlreadyExists] = useState("");

  const navigate = useNavigate();

  const data = {
    firstName,
    lastName,
    phone,
    username: email,
    password,
  };

  const validate = () => {
    if (!firstName) {
      setValidateFirstName("Enter First Name");
      return false;
    }
    if (!lastName) {
      setValidateLastName("Enter Last Name");
      return false;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      setValidatePhone("Enter a valid 10-digit phone number");
      return false;
    }
    if (!email) {
      setValidateEmail("Enter Email");
      return false;
    }
    const emailRegex = /.+@.+\.[A-Za-z]+$/;
    if (!emailRegex.test(email)) {
      setValidateEmail("Enter a valid email");
      return false;
    }
    if (!password) {
      setValidatePassword("Enter Password");
      return false;
    }
    if (password.length < 4 || password.length > 10) {
      setValidatePassword("Password length must be between 4 and 10 characters");
      return false;
    }
    return true;
  };

  const onSignup = async () => {
    if (validate()) {
      try {
        await fetch("http://localhost:5001/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((response) => {
          response.json().then((resp) => {
            if (resp.loginstatus === "Already exists") {
              setAccAlreadyExists("Account Already Exists");
              return;
            }
            props.handleLogin(resp.username, true);
            navigate("/");
            alert("Sign up successful");
          });
        });
      } catch (err) {
        console.error("Error during signup", err);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        src={videobg}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <form
        className="signup"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "12px",
          width: "400px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          zIndex: 1,
          margin:"90px"
        }}
      >
        <h3 style={{ textAlign: "center" }}>Sign up</h3>

        {/* First Name and Last Name Row */}
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontFamily: "Alegreya", fontSize: "16px" }}>
              First Name:
            </label>
            <input
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
                setValidateFirstName("");
              }}
              value={firstName}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
            <p style={{ color: "red", fontSize: "12px" }}>{validateFirstName}</p>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontFamily: "Alegreya", fontSize: "16px" }}>
              Last Name:
            </label>
            <input
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
                setValidateLastName("");
              }}
              value={lastName}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
            <p style={{ color: "red", fontSize: "12px" }}>{validateLastName}</p>
          </div>
        </div>

        {/* Phone */}
        <label style={{ fontFamily: "Alegreya", fontSize: "16px" }}>Phone:</label>
        <input
          type="text"
          onChange={(e) => {
            setPhone(e.target.value);
            setValidatePhone("");
          }}
          value={phone}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        <p style={{ color: "red", fontSize: "12px" }}>{validatePhone}</p>

        {/* Email */}
        <label style={{ fontFamily: "Alegreya", fontSize: "16px" }}>Email:</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setValidateEmail("");
          }}
          value={email}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        <p style={{ color: "red", fontSize: "12px" }}>{validateEmail}</p>

        {/* Password */}
        <label style={{ fontFamily: "Alegreya", fontSize: "16px" }}>
          Password:
        </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setValidatePassword("");
          }}
          value={password}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        <p style={{ color: "red", fontSize: "12px" }}>{validatePassword}</p>

        {/* Sign Up Button */}
        <Button
          style={{
            borderRadius: "35px",
            backgroundColor: "#FF2625",
            padding: "10px",
            fontSize: "18px",
            width: "100%",
            marginTop: "20px",
          }}
          variant="contained"
          onClick={onSignup}
        >
          Sign Up
        </Button>
        <p style={{ color: "red", fontSize: "12px", textAlign: "center" }}>
          {accAlreadyExists}
        </p>
      </form>
    </div>
  );
}

export default Signup;
