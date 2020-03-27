import {
  GET_TODOS,
  SAVE_TODOS,
  DELETE_TODOS,
  UPDATE_TODOS
} from "../config/constants";
import { API } from "../config/api";

export const getTodos = () => {
  return {
    type: GET_TODOS,
    payload: async () => {
      const res = await API.get("/");
      const { data } = res.data;
      return data;
    }
  };
};

export const addTodos = value => {
  return {
    type: SAVE_TODOS,
    payload: async () => {
      await API.post("/", {
        name: value
      });
      const res = await API.get("/");
      const { data } = res.data;
      return data;
    }
  };
};

export const delTodos = id => {
  console.log(id);
  return {
    type: DELETE_TODOS,
    payload: async () => {
      await API.delete("/" + id);
      const res = await API.get("/");
      const { data } = res.data;
      return data;
    }
  };
};

export const editTodos = (name, id) => {
  return {
    type: UPDATE_TODOS,
    payload: async () => {
      await API.put("/" + id, {
        name
      });
      const res = await API.get("/");
      const { data } = res.data;
      return data;
    }
  };
};
