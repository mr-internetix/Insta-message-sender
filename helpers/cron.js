import * as cron from "node-cron";

const RunEveryDay = () => {
  cron.schedule(
    "0 59 23 * * *",
    async () => {
      try {
        console.log(" i will run in every 24 hours");
      } catch (error) {
        console.log(error);
      }
    },
    {
      scheduled: true,
      timezone: "Asia/Kolkata",
    }
  );
};

export default RunEveryDay;
