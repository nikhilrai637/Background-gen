var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
})); //Tell express to use bodyParser;
//This change shoulg reflect on git hub repo
app.set("view engine", "ejs");


var campgrounds = [{
    name: "Salmon Creek",
    image: "https://photosforclass.com/download/flickr-3753652230"
},
{
    name: " Granite Hill",
    image: "https://photosforclass.com/download/flickr-4812576807"
},
{
    name: "Mountain Goats Rest",
    image: "https://photosforclass.com/download/flickr-7121863467"
}


]


app.get('/', function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    
    res.render("campgrounds", {
        campgrounds: campgrounds
    });
});


app.post("/campgrounds", function (req, res) {
     //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    console.log(image);
    console.log(name);

    var newCampground ={name:name,image:image};
    campgrounds.push(newCampground);

    //redirect it to campgrounds get page
    res.redirect("/campgrounds");//When we redirect the default is to redirect get request 
 

});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});





app.listen(3000, function () {
    console.log("The server is listening at 3000");
});