
//Dependencies
var friendsData = require("../data/friends");

// ROUTING API GET Requests and POST Requests
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

      app.post("/api/friends", function(req, res) {
        
        var newFriend = req.body;

        console.log(newFriend)
        console.log(matchFriends(newFriend))
        var matchFriend = matchFriends(newFriend)


        friendsData.push(newFriend);
        res.json(matchFriend)
      });
}

//Compare score with friends data
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
        var photo = friendsData[i].photo
        var friendInfo = {
            name: friendsData[i].name,
            photo: photo,
            scores: resultHere
        }
        scoreMatch.push(friendInfo)
    }

    sortScores(scoreMatch);
    // return first array index and matched friend
    return scoreMatch[0];

};


function sortScores(scoreMatch) {
   scoreMatch.sort(function(a,b){
       return (a.scores - b.scores)
   });
};