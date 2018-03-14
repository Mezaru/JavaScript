let movieData = require("./data");
let $ = require("jQuery");

function renderMovie(movie) {
    $("#image").attr("src", movie.image);
    // let image = document.getElementById("image");
    // image.setAttribute("src", movie.image);

    $("#title").text(movie.title);
    // let title = document.getElementById("title");
    // title.innerText = movie.title;

    $("#description").text(movie.description);
    // let description = document.getElementById("description");
    // description.innerText = movie.description;


    $("#actors").html(function (actor){
        actor = "";
        for (let index = 0; index < movie.actors.length; index++) {
        actor += "<li>" + movie.actors[index] + "</li>";
    }
    return actor;
    });
    // let actors = document.getElementById("actors");
    // let actor = "";
    // for (let index = 0; index < movie.actors.length; index++) {
    //     actor += "<li>" + movie.actors[index] + "</li>";
    // }
    // actors.innerHTML = actor;
}

function changeStarRating(rating) { 
    for (let i = 1; i <= 5; i++) {
        let star = $("#star" + i);
        if (i <= rating){
            star.addClass("filled");
          } else {
            star.removeClass("filled");
          }
    }
}


for (let index = 1; index <= 5; index++) {
    $("#star" + index).click(function(){
        changeStarRating(index);
    });
}
renderMovie(movieData);