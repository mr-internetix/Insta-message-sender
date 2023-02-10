import fs from "fs";

export const Login_To_Insta = async (page, username, password) => {
  // seaching instagram
  await page.goto("https://www.instagram.com");

  if ((await page.$('input[name="username"]')) !== null) {
    // checking for directory
    fs.access("user_data", async (err) => {
      try {
        Promise.all([
          await page.waitForSelector('input[name="username"]'),

          // username
          await page.type('input[name="username"]', username, { delay: 5 }),

          // password
          await page.type('input[name="password"]', password, { delay: 4 }),

          // submit
          await page.click('button[type="submit"]'),

          // wait for new page
          await page.waitForNavigation(),

          // save the cookies in browser
          await page.click("text/Save Info", {
            delay: 4,
          }),
          // disable notification
          await page.waitForNavigation(),
          await page.click("text/Not Now", { delay: 4 }),
        ]);
      } catch (err) {
        console.log(err);
      }
    });
  } else {
    console.log("already logged in ");
  }
};

export const Search_Profile = async (page, username) => {
  console.log("searching profile");
};
