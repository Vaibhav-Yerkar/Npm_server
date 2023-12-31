const http = require("http");

port = 8081;

//HTTP Methods :
/**
 >> GET : to get data from server
 >> POST : sending data to server
 >> DELETE : deleting data from database
 >> PATCH : updating certain fields
 >> PUT : Full update
 */

 const toDoList = ["learn", "apply things", "succed"];

http
 .createServer((req, res) => {
   const {method, url} = req;
   if(url ==="/todos"){
      if (method === "GET" ){
         res.writeHead(200, { "Content-Type": "text/html" }); 
         res.write(toDoList.toString());
      }else if(method === "POST"){
         let body ="";
         req
          .on("error",(err)=>{
            console.loh(err);
          }).on('data',(chunck)=>{
            body+=chunck;
            console.log(chunck);
          }).on('end',()=>{
            body=JSON.parse(body);
            let newTodoList = toDoList;
            newTodoList.push(body.item);
            console.log("data: ",body);
          })
      }else if(method === "DELETE"){
         let body = "";
         req
          .on('error',(err)=>{
            console.error(err);
          })
          .on('data',(chunck)=>{
            body+=chunck;
          })
          .on('end',()=>{
            body = JSON.parse(body);
            let itemToDelete = body.item;
            // for(let i=0;i<toDoList.length;i++){
            //    if(toDoList[i]==itemToDelete)
            //    {  toDoList.splice(i,1);
            //       break;
            //    }
            // }

            toDoList.find((elem,index)=>{
               if(elem === itemToDelete){
                  toDoList.splice(index,1);
               }
            })
          })
      }else{
         res.writeHead(501);
      }
   }else{
      res.writeHead (404);
   }
   res.end();
})
.listen(port, ()=>{
   console.log(`running node server on port : http://localhost:${port}`);
})