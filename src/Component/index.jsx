import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string()
    .matches("^[a-zA-Z0-9_-]+$", "No special character are allowed!")
    .min(3, "Username must be at least 3 characters")
    .max(25, "Username must not exceed 25 characters!")
    .required("Username field is required"),
  email: Yup.string()
    .email("Enter valid email!")
    .required("Email field is required"),
  mobile: Yup.string()
    .matches("^[0-9]{10}$", "Phone number must be of 10 digits")
    .required("Mobile field is required"),
  dob: Yup.date().required("Date field is required"),
  gender: Yup.string().required("Gender field is required"),
  password: Yup.string().required("Password field is required"),
  confirm_password: Yup.string()
    .required("Confirm Password field is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  check_box: Yup.boolean().required("Checkbox field is required"),
});
