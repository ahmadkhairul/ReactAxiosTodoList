const Todos = require("../model/todo");

exports.get = async (req, res) => {
  try {
    const data = await Todos.find();
    res.status(200).send({ status: true, message: "get success", data });
  } catch (err) {
    console.log(err);
    res.send({ status: false, error: err });
  }
};

exports.detail = async (req, res) => {
  try {
    const data = await Todos.findById(req.params.id);
    res.status(200).send({ status: true, message: "detail succes", data });
  } catch (err) {
    console.log(err);
    res.send({ status: false, error: err });
  }
};

exports.create = async (req, res) => {
  try {
    const todos = new Todos({
      name: req.body.name,
      done: false
    });

    const data = await todos.save();
    res.status(200).send({ status: true, message: "create success", data });
  } catch (err) {
    console.log(err);
    res.send({ status: false, error: err });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await Todos.findByIdAndUpdate(req.params.id, {
      $set: req.body
    });
    res.status(200).send({ status: true, message: "update succes", data });
  } catch (err) {
    console.log(err);
    res.send({ status: false, error: err });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await Todos.findByIdAndRemove(req.params.id);
    res.status(200).send({ status: true, message: "delete success", data });
  } catch (err) {
    console.log(err);
    res.send({ status: false, error: err });
  }
};
