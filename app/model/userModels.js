var mysqlConnection = require("../utility/mysqlConnection");

exports.userLoginModels = function () {
    return new Promise((resolve, reject) => {
        try {
            mysqlConnection.getConnection().then(pool => {
                const query = "SELECT `userID`,`username`,`email` FROM `user` WHERE `username`='ls-test-user-240';";
                pool.query(query, function (err, rows) {
                    if (!err) {
                        resolve(rows[0]);
                    } else {
                        reject(err);
                    }
                })
            })
        } catch (error) {
            reject(error)
        }
    })
}