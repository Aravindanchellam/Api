var createError = require('http-errors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
var rfs = require('rotating-file-stream');
var cors = require('cors');
var mysql = require('mysql');
app.use(cors());
var { userRoutes } = require("./app/routes/index")

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.use("/user", userRoutes);
app.use("/auth", userRoutes);



// var pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'devopolis-public.cacmcg7ruluq.us-east-1.rds.amazonaws.com',
//     user: 'devopolis',
//     password: 'yy4CqcbiZLtFQyG5Vmcm',
//     database: 'fundopolisdev'
// });

// pool.getConnection(function (err, connection) {
//     if (err) throw err; // not connected!
//     // Use the connection
//     connection.query("SELECT `userID`,`username`,`email` FROM `user` WHERE `username`='ls-test-user-240';", function (error, results, fields) {
//         console.log("results", results)
//         // When done with the connection, release it.
//         connection.release();
//         // Handle error after the release.
//         if (error) throw error;
//         // Don't use the connection here, it has been returned to the pool.
//     });
// });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



