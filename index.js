const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");

// let server = http.createServer((req, res) => {
//     res.write("hello world");

//     res.end();
// }).listen(4000, (err) => {
//     console.log(err || "server run on port 4000")
// });
let server = http.createServer((req, res) => {
    if (req.url.includes("/")) {
        console.log(req.method)
        let data = JSON.stringify({ "data": "hello wosdsddcsdcsdrld" })
        res.writeHead(200, "Ok ,take this data", {
            'Content-Length': Buffer.byteLength(data),
            'Content-Type': 'text/html',
        });
        res.write(data);
        res.end();
    } else if (req.url.includes("/postdata")) {
        if (req.method === "POST") {
            let body = '';
            req.on('data', (chunk) => {
                console.log(chunk.toString())
                body += chunk;
            });
            req.on('end', () => {
                try {
                    const parsedBody = JSON.parse(body); // Assuming JSON data
                    console.log(parsedBody)
                    res.writeHead(200, "ok", {
                        'Content-Length': Buffer.byteLength(body),
                        'Content-Type': 'text/plain',
                    })
                    res.write(JSON.stringify({ success: true, status: 200, message: "", data: `hello ${parsedBody.name} ,your age is ${parsedBody.age}` }));
                    res.end();
                } catch (error) {
                    console.log(error)
                    res.writeHead(400, error.message)
                    res.end()
                }
            });
        }
    }
    else if (req.url.includes("/about")) {
        let data = fs.readFileSync("./about.html", "utf-8");
        res.write(data.toString());
        res.end();
    } else {
        let data = fs.readFileSync("./index.html", "utf-8");
        res.write(data.toString());
        res.end();
    }
}).listen(4000, (err) => {
    console.log(err || "server run on port 4000")
});
// http://locahost:4000/dislike

//  what is javascipt ?
//  is javascript syncronous ,and if yes then what about the asyncronous task which handled by the async await ,promises
// which vesion of javascript are u using es2023 ,
// diff btw es5 and es6,and mention 5 methods which are introduced in es5 and es6

// deep copy(completly diff) and shallow copy(refence) ;
// let obj = { name: "raj" };
// let a = obj; //shallow copy
// let b = JSON.stringify(obj); // deep copy
// obj.name = "naman"
// console.log(a, b);




// operating system
//   syncronous methods
// fs.writeFileSync("./data.js", "console.log('how are you')");
// fs.appendFileSync("./data.js", "\n console.log('hi')");
// let data = fs.readFileSync("./newfile.js", "utf-8");
// console.log(data.toString())
// fs.copyFileSync("./data.js", "./newfile.js")
// fs.linkSync("./newfile.js", "./newdatafile.js")
// fs.mkdirSync("./data")
// fs.renameSync("./newdatafile.js" ,"./data/newdatafile.js")
//  fs.unlinkSync("./data/newdatafile.js")
// fs.rmdirSync("./data")
// console.log("file readed successfully");

// async operations
// fs.mkdir("./data", (err) => {
//     console.log(err || "directory created successfully")
// })
// fs.writeFile("./data/data.js", "console.log('hi')", (err) => { console.log(err || "okay done") })
// fs.appendFile("./data/data.js", "\n console.log('ok')", (err) => { console.log(err || "okay done") })
// fs.readFile("./data/data.js", "utf-8", (err, data) => { console.log(err || data) })
// fs.readFile("./data/data.js", (err, data) => { console.log(err || data.toString()) })
// fs.copyFile("./data/data.js", "./data/newfile.js", (err) => { console.log(err || "okay done") });
// fs.link('data/data.js', "./hi.js", (err) => { console.log(err || "okay done") })
// fs.rename('data/data.js',"data/hello.js", (err) => { console.log(err || "okay done") })
// fs.unlink('./hi.js', (err) => { console.log(err || "okay done") })
// fs.rmdir('./data', (err) => { console.log(err || "okay done") })

// console.log(os.arch());
// console.log(os.availableParallelism());
// console.log(os.cpus());
// console.log(os.endianness());
// console.log(os.freemem() / 1024 / 1024 / 1024);
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.hostname())
// console.log(os.loadavg());
// console.log(os.machine());
// console.log(os.networkInterfaces());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.totalmem());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.version());

// let localpath = 'D:/desktop/backend/index.js';
// console.log(path.basename(localpath));
// console.log(path.delimiter);
// console.log(path.dirname(localpath))
// console.log(path.extname(localpath));
// console.log(path.format({ ext: ".js", dir: "c:user/backend", name: "index" }));
// console.log(path.isAbsolute(localpath));2
// console.log(path.join(localpath, "../../backend/hello.js"))
// console.log(path.normalize("backend/../hello.js"));
// console.log(path.parse(localpath));
// console.log(path.relative("d:/local/hello.js", "/index.js"))
// console.log(path.resolve("/../data/../hello.js"));


// domain.com/auth

// find the midian of a array /use only one loop//
// length not used
// create a select input feild with 2 options item1 and  item2 , and give one addOption button to add option in select input

// let ar = [22,33,44,55,66,66,77] ;similar elements
//what is javascript 
