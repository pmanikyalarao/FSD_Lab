// Write a program using templating engine.

/*
Experiment: ExpressJS Templating Engine

Objective:
To create dynamic web pages using ExpressJS and EJS.

1. ExpressJS is used to create the server and define routes.
2. EJS is configured using app.set('view engine', 'ejs').
3. The home route renders home.ejs and passes the title variable.
4. The user route obtains the name using req.params.name.
5. res.render() passes data to an EJS template and sends
   the generated HTML to the browser.
6. The <%= %> syntax displays variable values in EJS.

Conclusion:
The program demonstrates how ExpressJS and EJS can
generate dynamic HTML pages using server-side data.
*/

const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    const title = "Welcome Page";
    res.render("home",{ title });
});

app.get("/user/:name",(req,res)=>{
    const name = req.params.name;
    res.render("user",{ name });
});

app.listen(PORT,()=>{
    console.log("Server is running at http://localhost:"+PORT);
});