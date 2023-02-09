import puppeteer from "puppeteer";
import fs from "fs";

export const Login_To_Insta = async (username, password) => {
  // initialize  browser

  const browser = await puppeteer.launch({
    headless: false, //true,
    defaultViewport: null,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--window-size=1920,1080",
    ],
    ignoreHTTPSErrors: true,
    userDataDir: "./user_data",
  });

  //  intialize a page

  const page = await browser.newPage();

  // checking for directory
  fs.access("user_data", async (err) => {
    // goto to instagram
    await page.goto("https://www.instagram.com");

    try {
      Promise.all([
        await page.waitForSelector('input[name="username"]'),

        // username
        await page.type('input[name="username"]', username, { delay: 5 }),
        // await page.type("#username", process.env.Email),
        //await page.type('#username',credentials.email),

        // password
        await page.type('input[name="password"]', password, { delay: 4 }),
        // await page.type("#username", process.env.password),
        //await page.type('#password',credentials.password),

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
};
