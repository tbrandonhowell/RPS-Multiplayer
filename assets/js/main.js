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
$(".rpsImage").on("click", function() {
    $("#testnewparent").html("");
    if ($(this).attr("dataValue") == "rock") {
        console.log("rock");
        $('#rock').parentToAnimate('#testnewparent', 'fast');
    } else if ($(this).attr("dataValue") == "paper") {
        console.log("paper");
        $('#paper').parentToAnimate('#testnewparent', 'fast');
    } else if ($(this).attr("dataValue") == "scissors") {
        console.log("scissors");
        $('#scissors').parentToAnimate('#testnewparent', 'fast');
    }
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