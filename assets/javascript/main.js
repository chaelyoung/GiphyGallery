//*** I'm having trouble getting all the codes together... I'm blanking out so I'm psuedocoding the portions that don't have codes ***//

// create a list of animal array named "topics"
var topics = ["dog", "cat", "ferret", "bunny", "gineau pig", "rat", "mice", "gerbil", "turtle", "fish", "frog", "goat", "pig", "snake", "cow", "sheep", "chicken", "llama", "donkey", "horse"];

// create a function that display buttons from 'topics' arrays

function renderButtons() {

    //add jquery sub-function to remove duplicate animal listing, if there are any

    $("#animalButtons").empty();

    //for loop for buttons, appending each to the end of the list

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("animalType");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("animalButtons").append(a);
    }
}

// create function for button to add new topics... in #animalForm div

// create function to display gifs of animals in "topics" array

function displayTopics() {

    //store gifs within #animalButtons div

    //set api-key to pull gifs

    //set display limit of only 10 gifs

    var topic = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=EL7gmdh6HERGwifmEVUfDvtCwNb12G5e&limit=10";

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);
    })

}

    //write code to pull data for ratings
    
    //write code to show different state of gifs (play, pause) when users hover mouse over

//Set function calls and methods below

renderButtons();
displayTopics();
