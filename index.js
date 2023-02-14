// login function import
import { Login_To_Insta, Search_Profile } from "./helpers/insta.js";
import { initialize_browser } from "./helpers/puppeteerConfig.js";

// dot configs
import * as dotenv from "dotenv";
dotenv.config();

const Run_Bot = async (user_name, password, target_profile) => {
  // starting browser and initailizing page
  let page = await initialize_browser();

  // calling function to login to insta
  await Login_To_Insta(page, user_name, password);

  // Searching profile
  await Search_Profile(page, target_profile);
};

Run_Bot(process.env.instausername, process.env.password, "miteshsoni01");
