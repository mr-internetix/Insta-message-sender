// import puppeteer from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth"

puppeteer.use(StealthPlugin())

export const initialize_browser = async () => {
  // initialize  browser
  const browser = await puppeteer.launch({
    headless: true, //true,
    defaultViewport: null,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      // "--window-size=1920,1080",
    ],
    ignoreHTTPSErrors: true,
    userDataDir: "./user_data",
  });

  //  intialize a page

  const page = await browser.newPage();

  return page;
};


// const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin())