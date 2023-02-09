import path from "path";
import fs from "fs";

fs.access("user_data", (err) => {
  if (err) {
    console.log("there is error");
  } else {
    console.log("folder exists");
  }
});
// console.log(path.resolve("user_data"));
