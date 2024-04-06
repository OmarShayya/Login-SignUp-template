import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Snackbar,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { InputField } from "../InputeField";
import LoginSchema from "../../validations/LoginSchema";
import { useMutation } from "react-query";
import {
  ResetPasswordService,
  SendPasswordResetCodeService,
  login,
} from "../../api/auth";
import { storeLoginResponse } from "../../utils/main-utils";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import ResetPasswordDialog, {
  ResetPasswordFormValues,
} from "./ResetPasswordDialog";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";
interface LoginValues {
  usernameOrEmail: string;
  password: string;
}

// export interface PasswordReset {
//   username: string;
//   newPassword: string;
//   code: number;
// }

export interface ApiErrorResponse {
  message?: string;
  errors?: { [key: string]: string };
}

const Login: React.FC = () => {
  const initialValues: LoginValues = { usernameOrEmail: "", password: "" };
  const loginMutation = useMutation(login);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const forgotEmail = useRef<HTMLInputElement>(null);
  const [showResetPasswordDialog, setShowResetPasswordDialog] =
    useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"error" | "success">(
    "error"
  );
  const [resetUsernameOrEmail, setResetUsernameOrEmail] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<any>(undefined);
  const dispatch = useDispatch();
  const handleCloseNotification = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  const handleCloseForgotPasswordDialog = () => {
    setEmailError("");
    setOpenDialog(false);
  };

  const { mutate: sendPasswordResetCode } = useMutation(
    SendPasswordResetCodeService,
    {
      onSuccess: () => {
        // When the reset email is successfully sent, close the first dialog
        setOpenDialog(false);
        // Show a success message
        setSnackbarMessage("Password reset code sent");
        setSnackbarSeverity("success");
        setOpenNotification(true);
        // Open the reset password dialog
        setShowResetPasswordDialog(true);
      },
      onError: (err: AxiosError<ApiErrorResponse>) => {
        if (err.response?.data?.errors) {
          setValidationErrors(err.response?.data.errors);
        }
        setEmailError(err.response?.data?.message || "An error occurred");
        setSnackbarMessage("Failed to send password reset code");
        setSnackbarSeverity("error");
        setOpenNotification(true);
      },
    }
  );

  const handleSendResetEmail = async () => {
    const email = forgotEmail.current?.value;
    if (email) {
      setResetUsernameOrEmail(email);
      setEmailError("");
      sendPasswordResetCode({ username: email });
    } else {
      setEmailError("Email is required");
    }
  };

  const resetPasswordMutation = useMutation(ResetPasswordService, {
    onSuccess: () => {
      setSnackbarMessage("Password reset successfully");
      setSnackbarSeverity("success");
      setOpenNotification(true);
      setShowResetPasswordDialog(false);
    },
    onError: (err: AxiosError<ApiErrorResponse>) => {
      if (err.response?.data?.errors) {
        setValidationErrors(err.response?.data.errors);
      }
      setSnackbarMessage(
        err.response?.data?.message || "Failed to reset password"
      );
      setSnackbarSeverity("error");
      setOpenNotification(true);
    },
  });

  const handleResetPassword = (values: ResetPasswordFormValues) => {
    const email = resetUsernameOrEmail;
    if (email) {
      resetPasswordMutation.mutate({
        ...values,
        code: Number(values?.code),
        username: email,
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
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
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          const loginData = {
            username: values.usernameOrEmail,
            password: values.password,
          };
          loginMutation.mutate(loginData, {
            onSuccess: (response) => {
              storeLoginResponse(response);
              localStorage.setItem(
                "Tokens",
                JSON.stringify({
                  accessToken: response.accessToken,
                  refreshToken: response.refreshToken,
                  creationDate: new Date(),
                })
              );
              dispatch(
                loginSuccess({
                  user: {
                    areaCode: response.user?.areaCode,
                    email: response.user?.email,
                    firstName: response.user?.email,
                    id: response.user?.id,
                    image: response?.user.image,
                    lastName: response.user?.lastName,
                    phoneNumber: response?.user?.phoneNumber,
                    prime: response.user?.prime === 1,
                    username: response?.user?.username,
                  },
                  tokens: {
                    accessToken: response.accessToken,
                    refreshToken: response.refreshToken,
                  },
                })
              );
              localStorage.setItem("user", JSON.stringify(response.user));
              navigate("/");
            },
            onError: (err) => {
              const error = err as AxiosError<ApiErrorResponse>;
              if (error.response?.data?.errors) {
                setValidationErrors(error.response?.data.errors);
              }
              setSnackbarMessage("Login Failed");
              setSnackbarSeverity("error");
              setOpenNotification(true);
            },
          });
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Grid
              container
              spacing={2}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid item xs={12}>
                <Typography variant="h6" align="center">
                  Login
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  required
                  placeholder="Username, Email"
                  name="Username or Email"
                  formValue="usernameOrEmail"
                  onChangeValue={handleChange}
                  onBlurValue={handleBlur}
                  // error={touched.usernameOrEmail && Boolean(errors.usernameOrEmail)}
                  errors={errors}
                  validationErrors={validationErrors}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  required
                  name="password"
                  placeholder="Password"
                  type="password"
                  formValue="password"
                  onChangeValue={handleChange}
                  onBlurValue={handleBlur}
                  //error={touched.password && Boolean(errors.password)}
                  errors={errors}
                  touched={touched}
                  validationErrors={validationErrors}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  style={{ width: "400px" }}
                  sx={{ backgroundColor: "#ff1493" }}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => {
                    setOpenDialog(true);
                  }}
                  color="secondary"
                >
                  Forgot Password
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <Dialog open={openDialog} onClose={handleCloseForgotPasswordDialog}>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your username or email address here. You will receive a
            verification code.
          </DialogContentText>
          <TextField
            autoFocus
            error={!!emailError}
            margin="dense"
            label="Username or email"
            type="email"
            fullWidth
            variant="standard"
            inputRef={forgotEmail}
            helperText={emailError || ""}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ backgroundColor: "#ff1493" }}
            onClick={handleCloseForgotPasswordDialog}
          >
            Cancel
          </Button>
          <Button
            sx={{ backgroundColor: "#ff1493" }}
            onClick={handleSendResetEmail}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <ResetPasswordDialog
        open={showResetPasswordDialog}
        onClose={() => setShowResetPasswordDialog(false)}
        onResetPassword={handleResetPassword}
      />
    </Container>
  );
};

export default Login;
