import React,{useState} from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import ChatList from "./ChatList"
import Form from "./Form";

export default function ChatApp() {

const initialMassege=[
    {id:1,task:"hello"}
]
const [messages,setMessage]=useState(initialMassege)
const addMessage=newMessage=>{
  setMessage(
    [...messages, {id:2,task:newMessage}
  ]
  )
}
  return (
    <Paper
      style={{
        margin: 0,
        padding: 0,
      }}
      elevation={0}
    >
      <AppBar
        color="primary"
        position="static"
        style={{ height: "60px",  }}
      >
        <Toolbar>
          <Typography>Message App</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
        <Form addMessage={addMessage}/>
      <ChatList messages={messages}/>
        </Grid>
      </Grid>


     
    </Paper>
  );
}
