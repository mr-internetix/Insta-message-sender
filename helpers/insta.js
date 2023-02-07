import puppeteer from "puppeteer";

export const Login_To_Insta = async (username, password) => {
  // initialize  browser

  const browser = await puppeteer.launch({
    headless: false, //true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  // goto to instagram
  await page.goto("https://www.instagram.com");

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
  ]);
};
