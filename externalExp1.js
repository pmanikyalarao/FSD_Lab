// Write a program to define a route, Handling Routes, Route Parameters, Query Parameters and URL building. (ExpressJS)

/*
Real-World Application: ShopSmart Online Shopping Store

ShopSmart is an online shopping application built using ExpressJS.
Customers can visit the home page, view their profiles, and browse
products by category and product ID.

1. Home Route: Displays the welcome message to customers.
2. Route Parameters: Retrieve the customer's username, product
   category, and product ID from the URL using req.params.
3. Query Parameters: Retrieve search keywords and page numbers
   using req.query to display the appropriate search results.
4. URL Redirection: Redirects customers to their profile page
   using res.redirect().
5. URL Building: Dynamically constructs URLs with query parameters
   and displays them as clickable links.
6. Server: app.listen() starts the ExpressJS server on port 3000.

Concept to Remember:
Route parameters identify a specific resource in the URL path,
whereas query parameters provide additional information after '?'.
ExpressJS routes process customer requests and send appropriate
responses to the browser.
*/

const express = require("express");
const app = express();
const PORT = 3000;

// Basic route: Display the Home Page
app.get("/", (req,res) => {
  res.send("Welcome to the ExpressJS application.");
});

// Route parameter: Retrieve the username from the URL
app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Welcome ${username}! Nice to see you.`);
});

// Multiple route parameters: Retrieve category and product ID
app.get("/product/:category/:id", (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  res.send(`The product id is ${id} under ${category} category.`);
});

// Query parameters: Retrieve search text and page number
app.get("/search", (req, res) => {
  const { product, priceLimit } = req.query;
  res.send(
    `The user searching for the product ${product} under ${priceLimit} price.`,
  );
});

// URL redirection: Redirect the user to a profile page
app.get("/redirect-to-user", (req, res) => {
  const username = "admin";
  const url = `/user/${username}`;
  res.redirect(url);
});

// URL building: Construct a URL with query parameters
// app.get("/build-url",(req,res)=>{
//     const product = "phone";
//     const priceLimit = 50000;
//     res.send(`Build URL: <a href="/search?product=${product}&priceLimit=${priceLimit}">Search Product</a>`);
// });

// URL building: Construct a URL with query parameters
app.get("/build-url", (req, res) => {
  const username = "babloo";
  const query = "?page=2&sort=desc";
  const fullUrl = `/user/${username}${query}`;
  res.send(`Built URL: <a href="${fullUrl}">${fullUrl}</a>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
