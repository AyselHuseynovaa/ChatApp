import { useState } from "react";

export default (InitialValue) => {
  const [value, setValue] = useState(InitialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
