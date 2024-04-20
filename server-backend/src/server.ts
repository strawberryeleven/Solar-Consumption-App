const express = require("express");
const sql = require("mssql");

const app = express();

// SQL Server configuration
var config = {
    "user": "solarapp", // Database username
    "password": "solar1234", // Database password
    "server": "127.0.0.1", // Server IP address
    "database": "solarbase", // Database name
    "options": {
        "encrypt": false // Disable encryption
    }
}

// Connect to SQL Server
sql.connect(config, (err: any) => {
    if(err) {
        console.log(err);
    }
    else {console.log("Connection Successful!");}
});

// Define route for fetching data from SQL Server
app.get("/", (request: any, response:any) => {
    // Execute a SELECT query
    new sql.Request().query("SELECT * FROM Users", (err: any, result: any) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000...");
});