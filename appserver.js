const  express = require("express");
const PORT = process.env.PORT || 80;
const appServer = express();
const router = express.Router();
const fs = require("fs");

const bodyParser = require('body-parser');


// ------------------- Routing
router.use((yeucau, trave, ketiep) => {
   console.log("REQ: ", Date.now()); 
   ketiep();
});

router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("./html/main.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/home" , (yeucau, trave) => {
    data = fs.readFileSync("./html/home.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/products" , (yeucau, trave) => {
    data = fs.readFileSync("./html/products.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/login" , (yeucau, trave) => {
    appServer.use(express.static(__dirname + '/public')); //link css
    data = fs.readFileSync("./view/login.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

//---------------midleware---------
appServer.use(bodyParser.json());
/* appServer.use(session({secret: 'some secrets'})); */
// -------------------------

//------------------config
appServer.use(express.static('public')); //link css
//---------------------

appServer.use("/", router);
// ----------- RUN / Launching !!!

const productRouter = require("./controller/productController.js").productRouter;
appServer.use("/products", productRouter);
// ----------- RUN / productRouter in controller !!! 

appServer.listen( PORT );

console.log("Web da mo tai " + PORT);
