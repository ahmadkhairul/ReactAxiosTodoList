const Todos = require("../model/todo");

exports.palindrome = async (req, res) => {
  try {
    const str = req.body.word;
    const clean = str => str.toLowerCase().replace(/[\W_]/g, "");

    const word = clean(str);
    const isPalindrome = string => {
      var rev = string
        .split("")
        .reverse()
        .join("");
      return string == rev;
    };

    const longestPalindrome = str1 => {
      var max_length = 0,
        maxp = "";

      for (var i = 0; i < str1.length; i++) {
        var subs = str1.substr(i, str1.length);

        for (var j = subs.length; j >= 0; j--) {
          var sub_subs_str = subs.substr(0, j);
          if (sub_subs_str.length <= 1) continue;

          if (isPalindrome(sub_subs_str)) {
            if (sub_subs_str.length > max_length) {
              max_length = sub_subs_str.length;
              maxp = sub_subs_str;
            }
          }
        }
      }
      return maxp;
    };

    const data = longestPalindrome(word);
    res.status(200).send({ status: true, message: data });
  } catch (err) {
    console.log(err);
    res.send({ status: false, error: err });
  }
};

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
