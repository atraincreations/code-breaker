// Hint Variables
var remainingHintCount = 3;
var currentProblem = "One"; // Default first problem
var hintText;
var hintOneCount = -1; // Count of how many times hint used per problem for hint tracking
var hintTwoCount = -1; // -1 for easy incrimenting to first array index
var hintThreeCount = -1;

// Part One Color Variables
var colorOne; // Should be: Yellow
var colorTwo; // Should be: Green
var colorThree; // Should be: Blue
var colorFour; // Should be: Red

// Part Two Direction Variables
var directionOne; // Should be: South
var directionTwo; // Should be: East
var directionThree; // Should be: North
var directionFour; // Should be: West

// Part Three Direction Number Variables
var numberOne; // Should be: 22
var numberTwo; // Should be: 14
var numberThree; // Should be: 1
var numberFour; // Should be: 17

// Hide additional problems and initialize numbers
window.onload = function(){
    document.getElementById('part-two-container').style.display = 'none';
    document.getElementById('part-three-container').style.display = 'none';
    //document.getElementById('you-win').style.display = 'none';
    $("#hints-remaining").text(remainingHintCount);
}

// Hint Count Function
// Check count and increase and re-enable if required
function hintCountCheck() {
    if (remainingHintCount < 3 ) {
        remainingHintCount++;
        // update text in container
        $("#hints-remaining").text(remainingHintCount);
        $('.hint-text').text("");
        // If the count is now 1 that means we need to turn section back on
        if ( remainingHintCount == 1 ) {
            $('#hint-btn').prop('disabled', false); // re-enable button
            // update text in container
            $("#hints-remaining").text(remainingHintCount);
            $('.hint-text').text("");
        }
    }
}

// Hint tracking and insertion dependent upon current problem
$("#hint-btn").on("click",function(){
    console.log("Initializing hint..")
    remainingHintCount--;
    console.log("Remaining hints:", remainingHintCount);
    $("#hints-remaining").text(remainingHintCount);
    // Check remainingHintCount and disable if zero
    if ( remainingHintCount == 0 ) {
        $('#hint-btn').prop('disabled', true);
    }
    // Check problem number
    switch (currentProblem) {
        case "One":
            hintOneCount++;
            console.log(hintOneCount);
            hintText = [
                "Don't watch too close, it will hurt your eyes..",
                "I'm not just for ambience..",
                "It all starts with yellow."
            ];
            $('.hint-text').text(hintText[hintOneCount]);
            break;
        case "Two":
            hintTwoCount++;
            hintText = [
                "You can't drink your way out..",
                "Things always need to be put in order..",
                "Go check the kitchen.."
            ];
            $('.hint-text').text(hintText[hintTwoCount]);
            break;
        case "Three":
            hintThreeCount++;
            hintText = [
                "Children are the future..",
                "Never ask a kid for directions..",
                "Maybe kids really do know it all.."
            ];
        default:
            break;
    }
    // Give hint
    
})


// Y/G/B/R
// Part One color order check
$("#check-color-btn").on("click",function(){
    // Grab value of each dropdown picker
    colorOne = $( "#color-1 option:selected" ).text();
    colorTwo = $( "#color-2 option:selected" ).text();
    colorThree = $( "#color-3 option:selected" ).text();
    colorFour = $( "#color-4 option:selected" ).text();

    // Check for solution
    if (colorOne == "yellow" && colorTwo == "green" && colorThree == "blue" && 
        colorFour == "red") {
            $("#error").text("Complete!")
            // Upon completion update problem number and make next problem visible
            document.getElementById('part-two-container').style.display = 'block';
            currentProblem = "Two";
            hintCountCheck();
    } else {
        console.log("try again")
        $("#error").text("try again")
    }

})

// S/E/N/W
// Check direction order from bottles
$("#check-direction-btn").on("click",function(){
    // Grab input from each box
    directionOne = $( "#direction-1 option:selected" ).text();
    directionTwo = $( "#direction-2 option:selected" ).text();
    directionThree = $( "#direction-3 option:selected" ).text();
    directionFour = $( "#direction-4 option:selected" ).text();

    // Check for solution
    if (directionOne == "south" && directionTwo == "east" && directionThree == "north" && 
        directionFour == "west") {
            $("#error-two").text("Complete!")
            // Upon completion update problem number and make next problem visible
            document.getElementById('part-three-container').style.display = 'block';
            currentProblem = "Three";
            hintCountCheck();
    } else {
        console.log("try again");
        $("#error-two").text("try again");
    }

})

// 22/14/1/17
// Check direction number
$("#check-number-btn").on("click",function(){
    // Grab input from each box
    numberOne = $("#number-1").val();
    numberTwo = $("#number-2").val();
    numberThree = $("#number-3").val();
    numberFour = $("#number-4").val();

    // Check for solution
    if (numberOne == "22" && numberTwo == "14" && numberThree == "1" && numberFour == "17") {
            // GAME WON
            $("#error-three").text("Complete!")
            document.getElementById('you-win').style.display = 'block';
            $("#win-hints-remaining").text("You had", remainingHintCount, "left");
    } else {
        console.log("try again");
        $("#error-three").text("try again");
    }

})