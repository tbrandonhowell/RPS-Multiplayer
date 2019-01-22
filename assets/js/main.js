// =================================
// FUNCTION: loadWaitGif() - puts random "waiting" gif in place each time the page is loaded
var loadWaitGif = function() {
    console.log("loadWaitGif() called");
    var randNum = Math.floor(Math.random() * 7) +1;
    $("#waiting1").attr("src", "assets/images/waiting/" + randNum + ".gif");
    var randNum = Math.floor(Math.random() * 7) +1;
    $("#waiting2").attr("src", "assets/images/waiting/" + randNum + ".gif");
}
// =================================



// =================================
// Initial Builds - Anything needed to create the page
loadWaitGif();
// =================================



// =================================
// TEMP: Build a user in local storage
window.localStorage.setItem('name', 'Billy Bob');
// =================================



// =================================
// Grab local storage name and put it in the modals if it is present
if (window.localStorage.getItem('testItem') !== "") { // if the local storage isn't empty, then
    $(".playerName").attr("value", window.localStorage.getItem('name')); // push the player name into the modal text fields
};
// =================================



// =================================
// EVENT: watch for click from the "play" section
$(document).on("click", ".rpsImage", function() { // watch for the click
    $("#yourMove").html("");
    if ($(this).attr("dataValue") == "rock") {
        console.log("rock");
        $('#rock').parentToAnimate('#yourMove', 'fast');
        $("#divRock").html('<img src="assets/images/rock.jpg" class="img-thumbnail rpsImage" id="rock" dataValue="rock">');
    } else if ($(this).attr("dataValue") == "paper") {
        console.log("paper");
        $('#paper').parentToAnimate('#yourMove', 'fast');
        $("#divPaper").html('<img src="assets/images/paper.jpg" class="img-thumbnail rpsImage" id="paper" dataValue="paper">');
    } else if ($(this).attr("dataValue") == "scissors") {
        console.log("scissors");
        $('#scissors').parentToAnimate('#yourMove', 'fast');
        $("#divScissors").html('<img src="assets/images/scissors.jpg" class="img-thumbnail rpsImage" id="scissors" dataValue="scissors">');
    }
    
    enemyPlay("paper");
});
// =================================



// =================================
// EVENT: watch for click from the "I'm out of here" button
$(".leaveButton").on("click", function() {
    console.log("leave click captured");
    location.replace("https://giphy.com/search/rock-paper-scissors");
});
// =================================



// =================================
// EVENT: watch for click from the "play again / new game" button
$(".newGameButton").on("click", function() {
    console.log("new game click captured");
    location.reload();
});
// =================================



// =================================
// TEMP, TESTING, ETC

// here's how to trigger the "play" bounce (utilizes an animate.css file pulled from elsewhere)
// from: https://stackoverflow.com/questions/46087953/how-do-i-add-an-animated-bounce-with-jquery
$(document).ready(function() {
    $("#effect").addClass("animated bounce");
});

// modal triggers for testing:
// $("#first-to-game").modal(); // trigger this modal if no one is waiting to play
// $("#second-to-game").modal(); // trigger this modal if another player is already waiting to play
// $("#lost-game").modal(); // trigger this modal if you lost
// $("#won-game").modal(); // trigger this modal if you won

// =================================



// =================================
// Load the competitor's move into their slot
// will need some sort of event listener to watch the DB for a change
// var enemyPlay = function(move) {
//     $("#waiting2").fadeTo(1000,0.30, function() {
//         $("#waiting2").attr("src","assets/images/" + move + ".jpg");
//     }).fadeTo(1000,1);
//     return false;
//   };

var enemyPlay = function(move) {
    console.log(move);
    $("#theirMove").html("");
    if (move == "rock") {
        $('#theirRock').parentToAnimate('#theirMove', 'fast');
        $("#divTheirRock").html('<img src="assets/images/rock.jpg" class="img-thumbnail rpsImage" id="theirRock" dataValue="rock">');
    } else if (move == "paper") {
        $('#theirPaper').parentToAnimate('#theirMove', 'fast');
        $("#divTheirPaper").html('<img src="assets/images/paper.jpg" class="img-thumbnail rpsImage" id="theirPaper" dataValue="paper">');
    } else if (move == "scissors") {
        $('#theirScissors').parentToAnimate('#theirMove', 'fast');
        $("#divTheirScissors").html('<img src="assets/images/scissors.jpg" class="img-thumbnail rpsImage" id="theirScissors" dataValue="scissors">');
    }
};
  

// enemyPlay("paper");

// $("#waiting2").attr("src","assets/images/rock.jpg");
// $("#waiting2").attr("src","assets/images/paper.jpg");
// $("#waiting2").attr("src","assets/images/scissors.jpg").fadeTo();
// =================================


// TODO: why did I duplicate thos code?
// =================================
// // EVENT: watch for click from the "play" section
// $(document).on("click", ".rpsImage", function() { // watch for the click
//     $("#testnewparent").html("");
//     if ($(this).attr("dataValue") == "rock") {
//         console.log("rock");
//         $('#rock').parentToAnimate('#testnewparent', 'fast');
//         $("#divRock").html('<img src="assets/images/rock.jpg" class="img-thumbnail rpsImage" id="rock" dataValue="rock">');
//     } else if ($(this).attr("dataValue") == "paper") {
//         console.log("paper");
//         $('#paper').parentToAnimate('#testnewparent', 'fast');
//         $("#divPaper").html('<img src="assets/images/paper.jpg" class="img-thumbnail rpsImage" id="paper" dataValue="paper">');
//     } else if ($(this).attr("dataValue") == "scissors") {
//         console.log("scissors");
//         $('#scissors').parentToAnimate('#testnewparent', 'fast');
//         $("#divScissors").html('<img src="assets/images/scissors.jpg" class="img-thumbnail rpsImage" id="scissors" dataValue="scissors">');
//     }
    
//     enemyPlay("paper");
// });
// =================================


// =================================
// FUNCTION: Reset play buttons (needed after the animations)
var resetButtons = function() {
    $("#divRock").empty();
    $("#divPaper").empty();
    $("#divScissors").empty();
    $("#divRock").html('<img src="assets/images/rock.jpg" class="img-thumbnail rpsImage" id="rock" dataValue="rock">');
    $("#divPaper").html('<img src="assets/images/paper.jpg" class="img-thumbnail rpsImage" id="paper" dataValue="paper">');
    $("#divScissors").html('<img src="assets/images/scissors.jpg" class="img-thumbnail rpsImage" id="scissors" dataValue="scissors">');
};
resetButtons();
// =================================
