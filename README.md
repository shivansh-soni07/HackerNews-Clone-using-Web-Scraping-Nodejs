Objective:

HackerNews (https://news.ycombinator.com/) is very popular website among developers for latest news and projects. However sorting of the items is done via their own algorithms and we want to build a clone which keeps getting the top 90 articles and shows them in reverse chronological order. 

Requirements:

Each news item will have the following fields - url, hacker news url, posted on, upvotes and comments. 
A script which crawls the first three pages, extracts the news items and adds in the database. If the news item already exists, it updates the upvote and comment counts
A user can signup or login to the dashboard
A dashboard where all news items are listed in reverse chronological order
A user can mark a news item as read or delete it. Deleted items are not shown in his/her panel but are not deleted from the database.


Solution - Done using  Tech Stack ( React , NodeJS, ExpressJS , Puppeteer,MongoDB)

Puppeteer is used for crawling the web pages of hackernews website and scraping data as required.
React is used for the Frontend UI. ExpressJS for API endpoint development. MongoDB to store user and news item information.

Demo Video

https://github.com/shivansh-soni07/HackerNews-Clone-using-Web-Scraping-Nodejs/assets/72219885/360e26db-53ba-49e8-a24f-2193316b47c2


