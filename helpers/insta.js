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
  // goto to user's page
  await page.goto(`https://www.instagram.com/${username}`);

  // wait for navigation
  await page.waitForNavigation();

  // click on message
  let message_btn = (
    await page.$xx('//div[@role="button"][contains(text(),"Message")]')
  )[0];
  // await message_btn.click();
  console.log(message_btn);

  // wait for navigation
  await page.waitForNavigation();

  //typing message

  let message_box = await page.$x("//textarea[placeholder='Message...']");
  await message_box.type("Hi i am Bot ! wanna be my friend", { delay: 5 });

  // presing enter
  await page.keyboard.press("Enter", { delay: 5 });
};
