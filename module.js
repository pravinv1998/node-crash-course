// npm modules
// const color = require("cli-color");
// console.log(color.blue("Pravin Vargad"));
// console.log(color.red("nodejs"));

// local modules

const { register, login } = require("./auth");
// import { register, login} from "./auth";

register("pravinvargad");
login("pravinv", "1998");
