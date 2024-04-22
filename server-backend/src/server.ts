const express = require("express");
const sql = require("mssql");
const cors = require("cors"); // Import CORS middleware

const app = express();

// Enable CORS middleware
app.use(cors());

// SQL Server configuration
const config = {
    user: "solarapp", // Database username
    password: "solar1234", // Database password
    server: "127.0.0.1", // Server IP address
    database: "solarbase", // Database name
    options: {
        trustedConnection: true,
        encrypt: false // Disable encryption
    }
}

// Connect to SQL Server
sql.connect(config, (err: any) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connection Successful!");
    }
});

// Define route for fetching user data based on email and password
app.get("/users", (request: { query: { email: any; password: any; }; }, response: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; send: (arg0: string) => void; }) => {
    // Get email and password from request query parameters
    const email = request.query.email;
    const password = request.query.password;

    // Construct SQL query with parameters
    const query = `SELECT * FROM Users WHERE email = '${email}' AND password = '${password}'`;

    // Execute the query
    new sql.Request().query(query, (err: any, result: { recordset: string | any[]; }) => {
        if (err) {
            console.error("Error executing query:", err);
            response.status(500).send("Internal Server Error");
        } else {
            // Check if any user records were returned
            if (result.recordset.length > 0) {
                // If records were found, send success message
                response.send("Login Successful");
            } else {
                // If no records were found, send failure message
                response.status(401).send("Login Failed");
            }
        }
    });
});

// Start the server on port 8081
app.listen(8081, () => {
    console.log("Listening on port 8081...");
});