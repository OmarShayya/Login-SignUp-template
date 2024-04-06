import * as Yup from "yup";

const ResetPasswordSchema = Yup.object().shape({
  code: Yup.string().required("Reset code is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("New password is required"),
});

export default ResetPasswordSchema;
