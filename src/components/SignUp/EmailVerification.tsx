import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { InputField } from "../InputeField"; // Adjust the path as necessary

// Yup validation schema
const VerificationSchema = Yup.object().shape({
  code: Yup.string()
    .required("Verification code is required")
    .length(8, "Verification code must be 8 characters long"), // Adjust length as per your code setup
});

// Props for the EmailVerificationModal component
interface EmailVerificationModalProps {
  open: boolean;
  onVerify: (code: string) => void;
}

export const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
  open,
  onVerify,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => {}} // Empty function so the dialog cannot be closed by the user
      disableEscapeKeyDown // Prevents closing the dialog using the escape key
      // disableBackdropClick // Prevents closing the dialog by clicking outside of it
      PaperProps={{
        style: {
          borderRadius: 8, // Rounded corners
          padding: "20px",
          width: "600px", // Increased width to 600px
          maxWidth: "none", // This ensures that the custom width applies
        },
      }}
      aria-labelledby="verification-code-dialog-title"
    >
      <DialogTitle
        id="verification-code-dialog-title"
        style={{ textAlign: "center" }}
      >
        Verify Your Email
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ textAlign: "center" }}>
          A verification code has been sent to your email. Please enter the code
          below to verify your account.
        </DialogContentText>
        <Formik
          initialValues={{ code: "" }}
          validationSchema={VerificationSchema}
          onSubmit={(values, actions) => {
            onVerify(values.code);
            actions.setSubmitting(false);
          }}
        >
          {({
            isSubmitting,
            values,
            handleBlur,
            handleChange,
            errors,
            touched,
          }) => (
            <Form>
              <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                <InputField
                  name="code"
                  formValue="code"
                  placeholder="Enter your verification code"
                  errors={errors}
                  touched={touched}
                  value={values.code}
                  width={490}
                  onChangeValue={handleChange}
                  onBlurValue={handleBlur}
                />
              </div>
              <DialogActions
                style={{ justifyContent: "center", paddingTop: "20px" }}
              >
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={isSubmitting}
                  fullWidth
                >
                  Verify
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};
