// Hint Variables
var remainingHintCount = 3;
var currentProblem = "One";
var hintText;
var hintOneCount = -1; // Count of how many times hint used per problem for hint tracking
var hintTwoCount = -1;
var hintThreeCount = -1;

// Part One Color Variables
var colorOne; // Should be:
var colorTwo; // Should be:
var colorThree; // Should be:
var colorFour; // Should be:

// Part Two Direction Variables
var directionOne; // Should be:
var directionTwo; // Should be:
var directionThree; // Should be:
var directionFour; // Should be:

// Hide additional problems until previous is solved
window.onload = function(){
    document.getElementById('part-two-container').style.display = 'none';
    $("#hints-remaining").text(remainingHintCount);
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
                "Hint 1",
                "Hint 2",
                "Hint 3"
            ];
            $('.hint-text').text(hintText[hintOneCount]);
            break;
        case "Two":

            break;
        default:
            break;
    }
    // Give hint
    
})



// Part One color order check
$("#check-color-btn").on("click",function(){
    // Grab value of each dropdown picker
    colorOne = $( "#color-1 option:selected" ).text();
    colorTwo = $( "#color-2 option:selected" ).text();
    colorThree = $( "#color-3 option:selected" ).text();
    colorFour = $( "#color-4 option:selected" ).text();
    console.log("Test:", colorOne);

    // Check for solution

    // Upon completion update problem number and make next problem visible

})