let friendData = require("../data/friends");

module.exports = (app) => {
    app.get("api/friends", (req, res) => {
        res.json(friendData)
    });

    app.post('/api/friends', (req, res) => {
     let newUser = req.body;
     let bestMatch = {};

     for (let i = 0; i < newUser.scores.length; i++) {
       newUser.scores[i] = parseInt(newUser.scores[i]);
     }
     let bestMatchIndex = 0;
     let bestMatchDifference = 40;

     for (let i = 0; i < friendData.length; i++) {
       let difference = 0;

       for (let j = 0; j < friendData[i].scores.length; j++) {
         let positiveNumber = Math.abs(friendData[i].scores[j] - newUser.scores[j]);
         difference += positiveNumber;
       }

       if (difference < bestMatchDifference) {
         bestMatchIndex = i;
         bestMatchDifference = difference;
       }
     }

     bestMatch = friendData[bestMatchIndex];

     friendData.push(newUser);

     res.json(bestMatch);
   });

 };