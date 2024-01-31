const puppeteer = require("puppeteer");
const saveNewsData = require("./controllers/updateData");

const scrapeNews = async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    const MAX_PAGE_LENGTH = 3;
    let newsData = [];
    for (let i = 1; i <= MAX_PAGE_LENGTH; i++) {
      await page.goto(`https://news.ycombinator.com/?p=${i}`);
      await page.waitForSelector(".subtext .score", { visible: true });

      let rank, title, url, hacker_url, score, author, age, commentsCount;

      newsData.push(
        await page.evaluate(() => {
          const data = Array.from(
            document.querySelectorAll(".athing "),
            (e) => {
              let randomValue =
                Math.floor(Math.random() * (5 - -30 + 1)) + -30;
              const id = e.getAttribute("id");
              const convertTimeToMinutes = (timeString) => {
                const timeAgoRegex = /(\d+)\s+(\w+)\s+ago/; // Regex to match the time ago format
                const match = timeString.match(timeAgoRegex);

                if (match) {
                  const amount = parseInt(match[1]);
                  const unit = match[2];

                  const unitToMinutes = {
                    minute: 1,
                    minutes: 1,
                    hour: 60,
                    hours: 60,
                    day: 1440,  
                    days: 1440,
                   
                  };

                  if (unit in unitToMinutes) {
                    const minutesAgo = amount * unitToMinutes[unit];
                    return minutesAgo;
                  } else {
                    return null;  
                  }
                } else {
                  return null;  
                }
              };

              const scoreElement = document.querySelector(`.score#score_${id}`);
              const score = scoreElement ? scoreElement.textContent : "N/A";
              let cnt = parseInt(score) + randomValue;
              cnt = Math.max(0, cnt);
              const commentCount = e.nextElementSibling.querySelector(
                `.subtext .age a[href*="item?id=${id}"]`
              ).innerText;
              const sitestr = e.querySelector(".title a").href;
              const domain = new URL(sitestr).hostname.replace("www.", "");
              hacker_url = `https://news.ycombinator.com/from?site=${domain}`;

              const age = e.nextElementSibling.querySelector(
                `.subtext .age a[href*="item?id=${id}"]`
              ).innerText;
              const time = convertTimeToMinutes(age);
              return {
                id: id,
                rank: e.querySelector(".title .rank").innerText,
                title: e.querySelector(".title a").innerText,
                url: e.querySelector(".title a").href,
                hacker_url: hacker_url,
                score: score,
                age: age,
                time: time,
                commentsCount: cnt,
              };
            }
          );
          return data;
        })
      );
    }
    // console.log(newsData);

    saveNewsData(newsData);
    await browser.close();
  } catch (error) {
    console.error("Error during scraping:", error);
  }
};

module.exports = scrapeNews;
