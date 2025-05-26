let express = require("express");

let router = express.Router();


router.get("/", (req, res) => {
    res.send("hello allproduct")
})
router.get("/getproduct", (req, res) => {
    res.send("getallproduct")
})

router.post("/post", (req, res) => {
    res.send("hello post method")
})
module.exports = router