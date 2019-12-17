import React, { useState } from "react";

const useFormValidation = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChamge = event => {
    event.persist();
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values);
  };
  return { handleSubmit, handleChamge, values };
};

export default useFormValidation;
