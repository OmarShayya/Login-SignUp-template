// ResetPasswordDialog.tsx
import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import ResetPasswordSchema from "../../validations/ResetPasswordSchema";

interface ResetPasswordDialogProps {
  open: boolean;
  onClose: () => void;
  onResetPassword: (values: ResetPasswordFormValues) => void;
}

export interface ResetPasswordFormValues {
  code: string;
  newPassword: string;
}

const ResetPasswordDialog: React.FC<ResetPasswordDialogProps> = ({
  open,
  onClose,
  onResetPassword,
}) => {
  const initialValues: ResetPasswordFormValues = {
    code: "",
    newPassword: "",
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Reset Password</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={ResetPasswordSchema}
        onSubmit={(values, { setSubmitting }) => {
          onResetPassword(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <DialogContent>
              <Field
                as={TextField}
                name="code"
                label="Reset Code"
                fullWidth
                error={touched.code && !!errors.code}
                helperText={touched.code && errors.code}
                style={{ marginBottom: "20px" }}
              />
              <Field
                as={TextField}
                type="password"
                name="newPassword"
                label="New Password"
                fullWidth
                error={touched.newPassword && !!errors.newPassword}
                helperText={touched.newPassword && errors.newPassword}
                mb={2}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="submit" disabled={isSubmitting}>
                Reset Password
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default ResetPasswordDialog;
