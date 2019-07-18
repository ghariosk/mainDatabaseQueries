let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager2');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = async function (event, context, callback) {

    // You must always end/destroy the DB connection after it's used

    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param 
    // You must always end/destroy the DB connection after it's used

    let Test = async () => { 
        return new Promise((resolve,reject) => {
            rds.query({
            instanceIdentifier: 'Main',
            query: 'SELECT * FROM users;',
            inserts: [0]
            }, function (error, results, connection) {
                if (error) {
                    console.log("Error occurred");
                    throw error;
                } else {
                    console.log("Success")
                    
                    
                
                }

            connection.end();
            resolve(results)
        })
    })
    }



    // callback(null, { "message": "Successfully executed" });

    // let response = await {
    //     statusCode: "200",
    //     headers: {
    //         "x-custom-header" : "my custom header value"
    //     },
    //     body: JSON.stringify(Test)
    // };
    result = await Test();

    console.log("response: " + JSON.stringify(result))
    return callback(null, {body: JSON.stringify(result), header: "200"});
}