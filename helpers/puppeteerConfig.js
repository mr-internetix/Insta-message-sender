import puppeteer from "puppeteer";

export const initialize_browser = async () => {
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

  return page;
};
