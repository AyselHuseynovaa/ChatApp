import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import UseInputState from "./UseInputState";
import { colors } from "@material-ui/core";


export default function Form({ addMessage }) {
  const [value, handleChange, reset] = UseInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(value);
    reset();
  };
  return (
    <Paper>
      <form
       onSubmit={handleSubmit}>
        <TextField
        placeholder="Message"
       style={{width:"89.2%"}}
         value={value}
          onChange={handleChange} />
          <button   onChlick={handleSubmit} style={{padding:"0.4rem", color:"white" ,backgroundColor:"#023e8a", border:"2px solid #023e8a"}} >Send</button>
      </form>
    </Paper>
  );
}
