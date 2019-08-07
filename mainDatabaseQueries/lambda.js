let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager2');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = async function (event, context, callback) {
    // You must always end/destroy the DB connection after it's used
    let Query = async () => { 
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
                    if (results) {
                        resolve(results)
                    }
                }
            )
        })
    };
    result = await Query();
    let headers =  {
        'content-type': [{
                key: 'Content-Type',
                value: 'application/json'
        }],
            'content-encoding': [{
                key: 'Content-Encoding',
                value: 'UTF-8'
        }]
    }
    console.log("response: " + JSON.stringify(result))
    return event;
}