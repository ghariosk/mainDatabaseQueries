module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["Main"] = {
        host: process.env.EndPoint_rdsMain,
        port: process.env.Port_rdsMain,
        user: process.env.User_rdsMain,
        password: process.env.Password_rdsMain,
        database: "Main"
    };
};