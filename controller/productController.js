const  express = require("express");
const productRouter = express.Router();
const fs = require("fs");

//--------------------------------------------------------------------------
router.get( "/products" , (yeucau, trave) => {
    data = fs.readFileSync("../html/products.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/giadung" , (yeucau, trave) => {
   
    pageContent = "Hang gia dung";
    trave.send(pageContent);
});
//-------------------------------------------------------------------------
exports.productRouter = router;