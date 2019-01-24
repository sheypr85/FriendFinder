var friendsData = require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

      app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);


        res.json(friendsData)
      });
}


function compareScores(a, b) {
    var result = 0;
    for(var i = 0; i < a.length; i++) {
       result = result + Math.abs(a[i]- b[i]);
    }
    return result;
}


function matchFriends(newFriend){
    var scoreMatch = [];
    for (var i = 0; i < friendsData.length; i++) {
        var resultHere = compareScores(friendsData[i].scores, newFriend.scores)
        var friendInfo = {
            name: friendsData[i].name,
            scores: resultHere
        }
        scoreMatch.push(friendInfo)
    }
    console.log(scoreMatch);
    sortScores(scoreMatch);
    console.log(scoreMatch)
}

function sortScores(scoreMatch) {
   scoreMatch.sort(function(a,b){
       return (a.scores - b.scores)
   })
}



var newFriend = {
        name: "Hector",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
          2,
          3,
          3,
          4,
          2,
          5,
          3,
          3,
          3,
          2
        ]
}


var friendsData = [
    {
      name: "John",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
        5,
        4,
        3,
        4,
        5,
        3,
        1,
        5,
        4,
        3
      ]
    },
    {
        name: "Sandra",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
          4,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          1
        ]
      },
      {
        name: "Kirk",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
          5,
          5,
          4,
          5,
          4,
          3,
          5,
          5,
          5,
          5
        ]
      },
      {
        name: "Maria",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
          2,
          3,
          3,
          4,
          2,
          3,
          3,
          3,
          3,
          2
        ]
      },
      {
        name: "Shey",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
          1,
          1,
          3,
          4,
          2,
          3,
          5,
          3,
          3,
          2
        ]
      },
  ];