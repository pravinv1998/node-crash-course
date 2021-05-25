const color = require("cli-color");
const register = (username) => {
  console.log(`User ${color.blue(username)} is authenticated!`);
};

const login = (username, password) => {
  console.log(
    `username ${color.green(username)} and password ${color.green(password)}`
  );
};

module.exports = {
  register,
  login,
};
