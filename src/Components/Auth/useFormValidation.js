import React from "react";

function useFormValidation(initialState) {
  const [values, setValues] = React.useState(initialState);

  const handleChange = event => {
    event.persist();
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ values });
  };

  return { handleSubmit, handleChange, values };
}

export default useFormValidation;
