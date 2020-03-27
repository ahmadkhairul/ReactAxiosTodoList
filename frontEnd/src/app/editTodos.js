import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { editTodos } from "../_actions/todos";
import { connect } from "react-redux";

const App = ({ data, editTodos }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(data.name);

  return (
    <>
      <IconButton aria-label="Edit" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Todos</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="todo"
            value={value}
            type="text"
            fullWidth
            onChange={event => {
              setValue(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              editTodos(value, data._id);
            }}
            color="primary"
          >
            Yes
          </Button>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = state => {
  return {
    // todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTodos: (name, id) => dispatch(editTodos(name, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
