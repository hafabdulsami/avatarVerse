/////////////////////////////////// PACKAGES ///////////////////////////////////

var express = require("express");
var app = express();
var sql = require("mssql");
const cors = require("cors");
app.use(cors());
app.use(express.json());

/////////////////////////////////// IMPORT  ///////////////////////////////////

const config = require("./DataBase/dbConfig");
const transporter = require("./MailConfig");

/////////////////////////////////// FUNCTION CALL ///////////////////////////////////

const generateRandomString = () => {
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  var randomString = "";
  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
};

const mailOptions = (Email, RandomString) => {
  var Email = {
    from: "avatarverse999@outlook.com",
    to: Email,
    subject: "Verification Code",
    text: "Your verification code is: " + RandomString,
  };
  return Email;
  // html: '<p>This is a <b>test email</b> sent from <i>Node.js</i>.</p>'
};

/////////////////////////////////// POST CALL ///////////////////////////////////

app.post("/addData", function (req, res) {
  const EmployeeID = req.body.EmployeeID;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;

  const Age = req.body.Age;
  const Gender = req.body.Gender;

  var m = parseInt(Age);
  sql.query(
    `INSERT INTO EmployeeDemo (EmployeeID, FirstName, LastName, Age, Gender) VALUES ('${EmployeeID}', '${FirstName}','${LastName}','${parseInt(
      Age
    )}','${Gender}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Inserted");
        console.log("done");
      }
    }
  );
});

app.post("/Test",function(req,res){
  console.log(req.body.data)
  res.send(true);
})


app.post("/CheckData", function (req, res) {
  //console.log(req.body.email);
  var Random = generateRandomString();
  transporter.sendMail(mailOptions(req.body.email, Random), (error, info) => {
    if (error && error.response.includes("550 5.1.1")) {
      //response = error
      console.log(error);
      console.log("doesNot exist")
      res.send("NOT Exist");
    } else if (error) {
      console.log(error);
      console.log("error on server side")
      res.send(error)
    } else {
      //mailOptions(req.body.Email);
      console.log("Send")
      //console.log(info.response);
      res.send({
        Type: "Send",
        Code: Random
      });
    }
  });
});

/////////////////////////////////// GET CALL ///////////////////////////////////

app.get("/myname", function (req, res) {
  sql
    .query("SELECT * FROM EmployeeDemo")
    .then((result) => {
      res.send(result.recordset);
    })
    .catch((err) => {
      console.log("Failed to execute query", err);
    });
});

/////////////////////////////////// SERVER ///////////////////////////////////

var server = app.listen(5000, function () {
  ///Server is connect
  console.log("Server is running..");

  ///Database is connected
  sql
    .connect(config)
    .then(() => {
      console.log("Connected to SQL Server");
    })
    .catch((err) => {
      console.log("Failed to connect to SQL Server", err);
    });
});
