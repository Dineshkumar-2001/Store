const db = require("../DataBase/db");

// const signIn = (req, res) => {
//   console.log("req", req);
//   console.log("req.body", req.body);
// };
module.exports = {
  signIn: function (req, res) {
    console.log("req.body", req.body);
    const name = req.body.username;
    console.log("req.body.name", name);

    const Get_value = `select * from Person_details where Name = '${name}'`;

    db.query(Get_value, (err, result) => {
      console.log(result);

      if (err) {
        console.log(err);
      } else {
        res.send({ message: "success", results: result });
      }
    });
  },
};
