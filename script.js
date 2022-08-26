//requesting the json data from a local file
const actors = "actors.json";


// fetching the data
fetch(actors)
    //request and return the data 
    .then(function (res) {
        return res.json()
    })
    //passing the data to the specific funcion 
    .then(function (data) {
        handleActors(data)
    })

function handleActors(data) {
    //aplying the dinamic content to each one of the object from the json

    data.forEach(showActor);
}

function showActor(actor) {
    //Step 1: Chose the template's content
    const template = document.querySelector("template").content;

    //Step 2: Make a clone
    const clone = template.cloneNode(true);

    //Step 3:Change the content of the clone
    clone.querySelector("h2").textContent = actor.fullname;
    clone.querySelector("button").addEventListener("click", function () {
        console.log("pop up");
        document.querySelector(".pop_up").classList.add("open")
        document.querySelector(".pop_up h3").textContent = actor.fullname;
        document.querySelector(".pop_up h4").textContent = actor.movie;
    });


    // Step 4:Chose the new parent element
    const parent = document.querySelector("main");

    // Step 5: Add (append) the clone to the DOM
    parent.appendChild(clone);


    /* console.log("popUp working");
    document.
    }) */
}