const News = require('../models/newsModel');  
const mongoose = require('mongoose');
async function saveNewsData(newsData) {

    News.collection.drop((err) => {
        if (err) {
          console.error('Error dropping collection:', err);
        } else {
          console.log('Collection dropped successfully');
        }
      });

    for (const newsItem of newsData) {
        try {

            // console.log(newsItem);
            News.insertMany(newsItem).then(() => console.log("Inserted"))
            .catch(err => console.error('Error'));
        } catch (error) {
            console.error(`Error saving news item ${newsItem.id}:`, error);
        }


    }
}

module.exports = saveNewsData;
