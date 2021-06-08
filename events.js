const Emitter = require("events");

const myEmiter = new Emitter();

// myEmiter.on("register", (data) => {
//   console.log(data);
// });

// myEmiter.emit("register", { name: "pravin" }); // sending data and emitting events

class Auth extends Emitter {
  register(username) {
    console.log("register successfully....", username);
    auth.emit("register", username);
  }
}

const auth = new Auth();
auth.on("register", (data) => {
  console.log(`sending mail to ${data}`);
});


auth.register("pravin");
