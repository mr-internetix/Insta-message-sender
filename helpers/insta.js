const puppeteer = require("puppeteer");

const loginToInsta = async () => {
  // initialize  browser

  const browser = await puppeteer.launch({
    headless: false, //true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  await page.goto("https://www.instagram.com");
};

loginToInsta();
