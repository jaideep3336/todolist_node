const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine","ejs");

var dataArray = ["buy fruits ","buy vegetables"];
app.get("/",function(req,res){
    // var days = "";
    var dayName = "";
    
    var newDate = new Date();
    var dayNumber = newDate.getDay();
    var currentDate = newDate.getDate();
    switch(dayNumber){
        case 0:
            dayName = "sunday";
            break;
            case 1:
                dayName = "monday"
                break;
                case 2:
                    dayName = "tuesday";
                    break; 
                    case 3:
                    dayName = "wednesday";
                    break;
                    case 4: 
                    dayName = "thursday";
                    break;
                     case 5:
                    dayName = "friday";
                    break;
                    case 5:
                    dayName = "saturday";
                    break;
                    default:
                        console.log(" this is logging because of error")
                    
                   
    }
    var options = {weekday:"long",
day:"numeric",
month:"long"
}
   var h1Text=  newDate.toLocaleDateString("en-US",options);
  
    // res.render("list",{typeOfDay: dayName,
    // typeOfDate: currentDate})
    res.render("list",{h1Text: h1Text,item:dataArray })
       
        })
       

app.post("/",function(req,res){
    
     var data = req.body.item;
    dataArray.push(data);
    res.redirect("/");
   
})


app.listen(3003,function(){
    console.log("it is in port 300")
})