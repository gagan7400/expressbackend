const express = require("express");
const app = express();// instance of express  ; 
const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "./variables.env") })
let port = process.env.PORT || 4000
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "./public")))

let data = [
    { id: 1, name: "raj" },
    { id: 2, name: "elon" },
    { id: 3, name: "john", fees: 40000 },
]
app.get("/", (req, res) => {
    res.send("all data")
})
app.get("/getdetails/:id", (req, res) => {
    let { id } = req.params;
    let { name } = data.find((a) => { return a.id == id });
    res.send({ name })
});

app.get("/random", (req, res) => {
    let key = req.query;
    let result;
    console.log(key)
    for (let i in key) {
        result = data.find((a) => { return a[i] == key[i] })
    }
    res.send(JSON.stringify(result))
})

app.listen(port, (err) => {
    console.log(err || "serve run on port " + port)
})

























// const express = require("express");
// const app = express();
// const fs = require("fs")
// const cookieParser = require("cookie-parser");
// const path = require("path");
// app.use(cookieParser())

// // app.use((req, res, next) => {
// //     console.log(req.method, "hello")
// //     next()
// // })

// // app.all('/secret', (req, res, next) => {
// //     console.log('Accessing the secret section ...')
// //     next() // pass control to the next handler
// // })

// app.use(express.json())
// // app.get("/", (req, res) => {
// //     res.send("hello world get")
// // })

// // let auth = (req, res, next) => {
// //     try {
// //         let token = req.headers.token;
// //         if (token === "xyz") {
// //             next()
// //         } else {
// //             res.send("pls provide token")
// //         }
// //     } catch (error) {
// //         console.log(error)
// //         res.send(error)
// //     }
// // };
// // // app.use(auth)

// // app.post("/new", (req, res) => {
// //     try {
// //         console.log(req.body)
// //         fs.writeFileSync("./data.json", JSON.stringify(req.body))
// //         res.send({ data: "Data submitted successfully" })
// //     } catch (error) {
// //         console.log(error)
// //         res.send(error)
// //     }
// // })


// // app.put("/update", (req, res) => {
// //     fs.writeFileSync("./data.json", JSON.stringify(req.body))
// //     res.send("put method")
// // })
// // app.delete("/:firstname-:lastname", (req, res) => {
// //     console.log(req.params)
// //     res.send("delete method")
// // })

// // app.route("/product").get((req, res) => {
// //     res.send("hello product page")
// // }).post((req, res) => {
// //     let data = req.body;
// //     res.send(JSON.stringify(data))
// // })
// // let productRouters = require("./productRoutes");



// // app.use("/items", productRouters);



// // let middleware = (req, res, next) => {
// //     console.log(req.body)
// //     if (req.body.name == "raj") {
// //         next()
// //     } else {
// //         res.send("who are you ?")
// //     }
// // }

// app.get("/", (req, res) => {
//     console.log(req.cookies);
//     throw new Error("something gone")
// })

// let filepath = path.join(__dirname, '/public');
// let staticpath = path.join(__dirname, '/static');

// app.use(express.static(filepath))
// app.use(express.static(staticpath))

// app.use((req, res, next) => {
//     res.send("hello not found")
// })


// app.use((err, req, res, next) => {
//     console.error(err.message)
//     res.status(500).send({ success: false, message: err.message ? err.message : "something happend in the system" })
// })


// app.listen(4000, (err) => {
//     console.log(err || "Server Run on Port : 4000")
// })

