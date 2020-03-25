import React, { useState } from "react";
import EditTodos from "./editTodos";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(["Tidur", "Rebahan"]);

  const handleSumbit = event => {
    event.preventDefault();
    setTodos([...todos, value]);
    setValue("");
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  const deleteTodo = index => {
    const newtodos = todos.splice(index, 1);
    setTodos(newtodos);
  };

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <form onSubmit={handleSumbit}>
        <TextField
          variant="outlined"
          placeholder="Add todo"
          margin="normal"
          value={value}
          onChange={handleChange}
        />
      </form>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index.toString()} dense button>
            {todo}
            <ListItemSecondaryAction>
              <EditTodos data={todo} />
              <IconButton
                aria-label="Delete"
                onClick={() => {
                  deleteTodo(index.toString());
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default App;
