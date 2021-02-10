import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export default function ChatList(props) {
  return (
    <Paper>
      <List>
        {
            props.messages.map((message) => (
          <>
            <ListItem>
              <ListItemText  key={message.id}>
              {message.task}
              </ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
