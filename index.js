// code away!
require("dotenv").config();
const server = require("./server.js");

const port = process.env.PORT || 4000;
const greeting = process.env.GREETING;

server.listen(port, () => {
  console.log(`${greeting} Running on PORT 4000. Go get it!`);
});
