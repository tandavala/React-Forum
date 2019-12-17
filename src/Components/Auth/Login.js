import React, { useState } from "react";
import useFormValidation from "./useFormValidation";

const initialState = {
  name: "",
  email: "",
  password: ""
};
const Login = props => {
  const { handledSubmit, handleChange, values } = useFormValidation(
    initialState
  );
  return <div>Login</div>;
};

export default Login;
