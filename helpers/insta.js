import fs from "fs";

export const Login_To_Insta = async (page, username, password) => {
  // seaching instagram
  await page.goto("https://www.instagram.com");

  // if ((await page.$x('input[name="username"]')) !== null) {
  //   // checking for directory
  //   fs.access("user_data", async (err) => {
  try {
    Promise.all([
      await page.waitForSelector('input[name="username"]', { delay: 6 }),

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
};
// });
//   }
// };

export const Search_Profile = async (page, username) => {
  // goto to user's page
  await page.goto(`https://www.instagram.com/${username}`);

  // click on message
  // page.waitForSelector("div > ._ab9s");
  (
    await page.waitForSelector(
      'xpath///div[@role="button"][contains(text(),"Message")]'
    )
  ).click();

  // wait for navigation
  await page.waitForNavigation();

  //typing message

  while (true) {
    let message_box = await page.waitForSelector(
      'xpath///textarea[@placeholder="Message..."]'
    );
    await message_box.type("savdhaan rhe satark rhe :)", {
      delay: 5,
    });

    // presing enter
    await page.keyboard.press("Enter", { delay: 5 });
  }
};
