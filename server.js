var express=require('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req, res)=>{res.send("Welcome to  My Pradies");});
app.get("/product",(req, res)=>{var p={ "id":45, "title":"Gerbera","description":"Wedding Flower", "unitprice":14, "quatity":7000 };
                                       res.send(p);
});
app.listen(6969);
console.log("App is listening on port 6969");