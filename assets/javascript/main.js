var topics = ["dog", "cat", "ferret", "bunny", "gineau pig", "rat", "mice", "gerbil", "turtle", "fish", "frog", "goat", "pig", "snake", "cow", "sheep", "chicken", "llama", "donkey", "horse"];

// create a function that display buttons from 'topics' array



// function for button to add new topics



// function to display gifs of selected topic



function displayTopics() {

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

function renderButtons() {

    $("#animalButtons").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("animalType");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("animalButtons").append(a);
    }
}

renderButtons();
displayTopics();