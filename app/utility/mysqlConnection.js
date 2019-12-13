var config = require('../utility/config')
var mysql = require('mysql');


const mysqlConfig = config.app.dev.db;
var connection = mysql.createPool(mysqlConfig);

exports.getConnection = function () {
    return new Promise((resolve, reject) => {
        if (mysqlConfig == undefined) {
            reject("Please set environment variable");
        } else {
            resolve(connection);
        }
    });
}

exports.closeConnectionAndReject = function (reject, error) {
    connection.releaseConnection();
    reject(error);
}

exports.closeConnectionAndResolve = function (mysql, resolve, data) {
    mysql.releaseConnection();
    resolve(data);
}

exports.closeConnection = function () {
    connection.releaseConnection();
}
