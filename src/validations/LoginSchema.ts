import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .required("Required")
    .test(
      "is-valid-username-or-email",
      "Invalid username or email",
      (value) =>
        Yup.string().email().isValidSync(value) ||
        /^[a-zA-Z0-9_]+$/.test(value || "")
    ),
  password: Yup.string().required("Required"),
});

export default LoginSchema;
