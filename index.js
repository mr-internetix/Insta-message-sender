// login function import
import { Login_To_Insta } from "./helpers/insta.js";

// dot configs
import * as dotenv from "dotenv";
dotenv.config();

// calling function to login to insta
Login_To_Insta(process.env.username, process.env.password);
