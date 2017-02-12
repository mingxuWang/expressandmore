var express = require("express");
var swig = require("swig");
var path = require("path");
var app = express();

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname, "public")));


require("./routes")(app);

app.get("/",function(req,res){
  res.render("common/login");
});
app.get("*",function(req,res){
  res.render("common/404");
})
app.listen(7788,function(){
    console.log("Running~");
});
