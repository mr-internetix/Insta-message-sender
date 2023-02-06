const puppeteer = require("puppeteer");

const Login_To_Insta = async (email, password) => {
  // initialize  browser

  const browser = await puppeteer.launch({
    headless: false, //true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  Promise.all([
    // goto new page
    await page.goto("https://www.instagram.com"),
    // username
    await page.type('input[name="username"]', email, { delay: 5 }),
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
  ]);
};

module.exports = Login_To_Insta;
