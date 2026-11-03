// Write a program to show the working of middleware 
/*
Real-World Application: ShopSmart Middleware

ShopSmart uses middleware to log incoming requests and demonstrate
an administrator access check.

1. Global middleware logs the HTTP method and requested URL.
2. The checkAdmin middleware reads the admin query parameter.
3. If admin is "true", next() allows the request to continue.
4. Otherwise, the server returns status 403 Forbidden.
5. The public route is available without the admin check.
6. The admin route runs its final handler only after checkAdmin
   calls next().

Concept to Remember:
Middleware runs during the request-response cycle.
next() passes control to the next handler, while sending a
response ends the request when access is denied.
*/


const express = require("express");
const app = express();
const PORT = 3000;

app.use((req,res,next)=>{
    console.log(`[LOG] ${req.method} - ${req.url}`);
    next();
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});

const checkAdmin = (req,res,next)=>{
    const check = req.query.admin;
    if(check == 'true'){
        console.log("Admin access granted.");
        next();
    }
    else{
        res.status(404).send("Access Denied. Admins only.");
    }
};

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the public route</h1>");
});

app.get("/admin", checkAdmin, (req, res) => {
  res.send("<h1>Welcome to the Admin route.</h1>");
});
