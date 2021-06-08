// npm modules
// const color = require("cli-color");
// console.log(color.blue("Pravin Vargad"));
// console.log(color.red("nodejs"));

// local modules

// const { register, login } = require("./auth");
// // import { register, login} from "./auth";

// register("pravinvargad");
// login("pravinv", "1998");

const path = require("path");

// dirname
// console.log(path.dirname(__filename));
// // file name
// console.log(path.basename(__filename));
// // extension of file
// console.log(path.extname(__filename));
// // parse method
// console.log(path.parse(__filename));
// // join method
// console.log(path.join(__filname, "order", "main.js"));

const fs = require("fs");

//create file
// fs.mkdir(path.join(__dirname, "test"), (err, _) => {
//   if (err) {
//     throw err;
//   }
//   console.log("file created");
// });

// write file

// fs.writeFile(
//   path.join(__dirname, "test", "test.txt"),
//   "this is sample text\n",
//   (err) => {
//     if (err) {
//       throw err;
//     }

//     fs.appendFile(
//       path.join(__dirname, "test", "test.txt"),
//       "more data to add",
//       (err) => {
//         if (err) {
//           throw err;
//         }

//         console.log("more data added");
//       }
//     );
//     console.log("file created");
//   }
// );

// read file

// fs.readFile(path.join(__dirname, "test", "test.txt"), "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }

//   //   console.log(data.toString());
//   console.log(data);
// });

// os module

const os = require("os");
// console.log(os.type()); // os type
// console.log(os.arch()); // cpu architecture
// console.log(os.cpus()); // cpu cores details
// console.log("free memory", os.freemem());
// console.log("total memory", os.totalmem());
console.log("up time: ", os.uptime()); // show when computer start
