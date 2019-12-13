
var { userLoginModels } = require("../model");
const jwt = require("jsonwebtoken");

exports.userLoginController = function (req, res, next) {
    let responseData = req
    if (responseData !== undefined && responseData !== null) {
        return new Promise((resolve, reject) => {
            userLoginModels().then(responsData => {
                res.send(responsData)
                resolve(resolve)
            }).catch(errors => {
                res.send(errors)
                reject(errors)
            });
        });
    } else {

    }
}


exports.userTokenController = function (req, res, next) {
    let responseData = req
    if (responseData !== undefined && responseData !== null) {
        const encryptOptions = {
            expiresIn: "2 days",
            algorithm: "HS256"
        };
        let type = req.body.type
        let data = req.body
        let token = req.body.token
        try {
            if (type === "generate") {
                res.send({ token: jwt.sign( data, "Psss@123", encryptOptions) })
            }

            if (type === "decode") {
                res.send({ token: jwt.decode(token, "Psss@123", encryptOptions) })
            }

            res.send({ token: jwt.verify(token, "Psss@123", encryptOptions) })

        } catch (error) {

            return false;

        }
    } else {

    }
}




