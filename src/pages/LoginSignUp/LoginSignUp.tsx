import React, { useState } from "react";
import "./LoginSignUp.css";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import { Alert, Snackbar } from "@mui/material";
// import dotenv from "dotenv";
// dotenv.config();
const LoginSignUp: React.FC = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"error" | "success">(
    "error"
  );
  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleCloseNotification = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  return (
    <>
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <Snackbar
          open={openNotification}
          autoHideDuration={6000}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
        <div className="forms-container">
          <div className="signin-signup">
            {!isSignUpMode && <Login />}
            {isSignUpMode && (
              <SignUp
                setSnackbarMessage={setSnackbarMessage}
                setSnackbarSeverity={setSnackbarSeverity}
                setOpenNotification={setOpenNotification}
              />
            )}
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="contentt">
              <h3>New here?</h3>
              <p>
                When words fail, music speaks! Listen to your favorite artists
                now on OSTunes!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={toggleMode}
              >
                Sign up
              </button>
            </div>
            {/* ... */}
          </div>
          <div className="panel right-panel">
            <div className="contentt">
              <h3>One of us?</h3>
              <p>
                When words fail, music speaks! Listen to your favorite artists
                now on OSTunes!
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={toggleMode}
              >
                Sign in
              </button>
            </div>
            {/* ... */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
