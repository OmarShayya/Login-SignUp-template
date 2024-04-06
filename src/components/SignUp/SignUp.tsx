import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Button, Grid, Typography, Box } from "@mui/material";
import { InputField } from "../InputeField";
import SignUpSchema from "../../validations/SignUpSchema";
import { useMutation } from "react-query";
import { createuser, verifyEmail } from "../../api/auth";
import { AxiosError } from "axios";
import { UploadImageNoCompress } from "../UploadImage/UploadImage";
import { EmailVerificationModal } from "./EmailVerification";

interface SignUpValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
  phoneNumber: string;
  areaCode: string;
  imageName: string;
}

const initialValues: SignUpValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  image: "",
  phoneNumber: "",
  areaCode: "",
  imageName: "",
};
interface SignUpProps {
  setSnackbarMessage: (message: string) => void;
  setSnackbarSeverity: (severity: "error" | "success") => void;
  setOpenNotification: (open: boolean) => void;
}
interface ApiErrorResponse {
  message?: string;
  errors?: { [key: string]: string };
}
const SignUp: React.FC<SignUpProps> = (props) => {
  // Now you can destructure your props directly
  const { setSnackbarMessage, setSnackbarSeverity, setOpenNotification } =
    props;

  const createUserMutation = useMutation("createUserMutation", createuser);
  const [validationErrors, setValidationErrors] = useState<any>(undefined);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const verifyMutation = useMutation("verifyEmail", verifyEmail);
  const [email, setEmail] = useState<string>();

  const handleVerify = (code: string) => {
    if (email) {
      verifyMutation.mutate(
        { code: Number(code), username: email },
        {
          onSuccess() {
            // Close the verification modal
            setShowVerificationModal(false);

            // Set the notification message
            setSnackbarMessage("Email has been verified");
            setSnackbarSeverity("success");
            setOpenNotification(true);

            // Redirect to the login page and refresh
            window.location.href = "/login";
          },
          onError(error) {
            const err = error as AxiosError<ApiErrorResponse>;
            // Now TypeScript knows that `err.response?.data` could have an `errors` property
            if (err.response?.data?.errors) {
              setValidationErrors(err.response?.data.errors);
            } else {
              setSnackbarMessage(
                err.response?.data?.message || "An error occurred"
              );
              setSnackbarSeverity("error");
              setOpenNotification(true);
            }
          },
        }
      );
    }
  };

  return (
    <Box sx={{ width: 500, mx: "auto" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          const {
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword,
            phoneNumber,
            areaCode,
            image,
            imageName,
          } = values;
          setEmail(email);
          if (password === confirmPassword)
            createUserMutation.mutate(
              {
                firstName,
                lastName,
                username,
                email,
                password,
                phoneNumber,
                areaCode,
                image,
                imageName,
                prime: false,
              },
              {
                onSuccess(response) {
                  setShowVerificationModal(true);
                },
                onError(error) {
                  const err = error as AxiosError<ApiErrorResponse>;
                  if (err.response?.data?.errors) {
                    setValidationErrors(err.response?.data.errors);
                  } else {
                    //setNotification(error?.response?.data?.message);
                  }
                },
              }
            );
          setSubmitting(false);
        }}
      >
        {({
          setFieldValue,
          errors,
          touched,
          isSubmitting,
          values,
          handleBlur,
          handleChange,
        }) => (
          <Form>
            <Typography variant="h6" mb={2} align="center" ml={-5}>
              Sign Up
            </Typography>
            <Grid container spacing={2}>
              {/* First Name and Last Name */}
              <Grid item xs={6}>
                <InputField
                  name="firstName"
                  formValue="firstName"
                  placeholder="First Name"
                  errors={errors}
                  touched={touched}
                  value={values.firstName}
                  width={200}
                  onChangeValue={handleChange}
                  onBlurValue={handleBlur}
                  validationErrors={validationErrors}
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  name="lastName"
                  formValue="lastName"
                  placeholder="Last Name"
                  errors={errors}
                  touched={touched}
                  value={values.lastName}
                  width={200}
                  onChangeValue={handleChange}
                  onBlurValue={handleBlur}
                  validationErrors={validationErrors}
                />
              </Grid>
              {/* Username and Email */}
              <Grid item xs={6}>
                <InputField
                  name="username"
                  formValue="username"
                  placeholder="Username"
                  errors={errors}
                  touched={touched}
                  value={values.username}
                  width={200}
                  onChangeValue={handleChange}
                  onBlurValue={handleBlur}
                  validationErrors={validationErrors}
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  name="email"
                  formValue="email"
                  placeholder="Email"
                  errors={errors}
                  touched={touched}
                  value={values.email}
                  width={200}
                  onChangeValue={handleChange}
                  onBlurValue={handleBlur}
                  validationErrors={validationErrors}
                />
              </Grid>
              {/* Password and Confirm Password */}
              <Grid item xs={6}>
                <InputField
                  name="password"
                  formValue="password"
                  placeholder="Password"
                  type="password"
                  errors={errors}
                  touched={touched}
                  value={values.password}
                  width={200}
                  onChangeValue={handleChange}
                  onBlurValue={handleBlur}
                  validationErrors={validationErrors}
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  name="confirmPassword"
                  formValue="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  errors={errors}
                  touched={touched}
                  value={values.confirmPassword}
                  width={200}
                  onChangeValue={handleChange}
                  onBlurValue={handleBlur}
                  validationErrors={validationErrors}
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  type="phone"
                  formValue="phoneNumber"
                  name="Phone Number"
                  value={
                    values &&
                    (values.areaCode
                      ? values.areaCode.concat(
                          values.phoneNumber ? values.phoneNumber : ""
                        )
                      : "")
                  }
                  areaCode="areaCode"
                  phoneNumber="phoneNumber"
                  setfieldValue={setFieldValue}
                  required={true}
                  errors={errors}
                  placeholder="Type Here"
                  validationErrors={validationErrors}
                />
              </Grid>

              {/* Image Upload */}
              <Grid item xs={12}>
                <UploadImageNoCompress
                  name="image"
                  value={values.image}
                  setfieldValue={setFieldValue}
                />
              </Grid>
              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  sx={{ width: "458px", backgroundColor: "#ff1493" }}
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <EmailVerificationModal
        open={showVerificationModal}
        onVerify={(code) => handleVerify(code)}
      />
    </Box>
  );
};

export default SignUp;
