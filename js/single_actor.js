// fetch the data
fetch("../actors.json")
    .then(res => res.json())
    .then(data => showMovies(data));

//populate the page
function showMovies(actor) {
    console.log(actor);
    document.querySelector("h2").textContent = `${actor.fullname}`;
    document.querySelector("h4").textContent = `${actor.movie}`;
}