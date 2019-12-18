import React from "react";
import { __values } from "tslib";

function validateLogin() {
  let errors = {};

  // Email Errors
  if (!__values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email adress";
  }
  // Password Erros
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  return errors;
}

export default validateLogin;
