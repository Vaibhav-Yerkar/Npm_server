// const http = require("http");
const express = require("express");

const app = express();
app.use(express.json());


const port = 8081;

const toDoList = ["learn", "apply things", "succed"];

//* http://localhost:8081/todos
app.get("/todos",(req,res)=>{
   //res.writeHead(200)
   //res.write(toDoList)
   res.status(200).send(toDoList);
});

app.post('/todos',(req,res)=>{
   let newtoDoItem = req.body.name;
   toDoList.push(newtoDoItem);
   res.status(201).send({ message : "Data added Successfully"});
});

app.delete('/todos',(req,res)=>{
   let dataToDelete =  req.body.name;
   toDoList.find((elem,index)=>{
      if(elem === dataToDelete){
         toDoList.splice(index,1);
         res.status(201).send({message : "Data deleted Successfully"});
      }
   });
});
app.all('/todos',(req,res)=>{
   res.status(501).send({message : "not Implemented yet"});
});

app.listen(port,()=>{
   console.log(`Server running - http://localhost:${port}/todos`);
})