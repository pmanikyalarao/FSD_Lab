// Write a program to accept data, retrieve data and delete a specifiedresource using http methods. 
/*
Real-World Application: ShopSmart Online Store

ShopSmart allows an administrator to manage products using ExpressJS.

1. GET: Retrieves all products stored in the items array.
2. POST: Accepts a product ID and name through req.body,
   checks for missing or duplicate data, and adds the product.
3. DELETE: Retrieves the product ID using req.params.id,
   finds the product, and removes it from the array.
4. express.json(): Parses incoming JSON request data.
5. res.json(): Sends responses to the client in JSON format.

Concept to Remember:
GET means retrieve, POST means add, and DELETE means remove.
The items array stores data temporarily while the server runs.
*/

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [];

app.get("/items",(req,res)=>{
    res.json(items);
})

app.post("/items", (req,res)=>{
    const {id,name} = req.body;
    if(!id || !name){
        return res.status(400).json({message:"ID and Name are not found."})
    }
    const exist = items.find(q => q.id == id);
    if(exist){
        return res.status(409).json({ message: "Item with this ID already exists." });
    }
    items.push({id,name});
    res.status(201).json({message:"Item added successfully."});
});

app.delete("/items/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const index = items.findIndex(item => item.id==id);
    if(index == -1){
        return res.status(400).json({message: "Item Not found."});
    }
    items.splice(index,1);
    res.json({message:`Item with id ${id} deleted.`});
});

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});