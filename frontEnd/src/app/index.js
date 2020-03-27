import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import EditTodos from "./editTodos";
import { getTodos, addTodos, delTodos } from "../_actions/todos";

const App = ({ todos, getTodos, addTodos, delTodos }) => {
  const [value, setValue] = useState("");
  const { data, loading, error } = todos;

  useEffect(() => {
    getTodos();
  }, []);

  if (loading) return <h1>Now Loading</h1>;
  if (error) return <h1>Error Occured</h1>;

  const handleSubmit = event => {
    event.preventDefault();
    addTodos(value);
    setValue("");
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          placeholder="Add todo"
          margin="normal"
          value={value}
          onChange={handleChange}
        />
      </form>
      <List>
        {data.map((todo, index) => (
          <ListItem key={index.toString()} dense button>
            {todo.name}
            <ListItemSecondaryAction>
              <EditTodos data={todo} />
              <IconButton
                aria-label="Delete"
                onClick={() => {
                  delTodos(todo._id);
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

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => dispatch(getTodos()),
    addTodos: value => dispatch(addTodos(value)),
    delTodos: id => dispatch(delTodos(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
