/*jshint esversion: 6 */


const movieInfo = document.querySelector("#movie-info");
const movieLink = document.querySelector("#movie-link");
const countDown = document.querySelector("#countdown");

window.addEventListener("load", startCountdown);

function startCountdown() {
    let halloween = new Date("Oct 31, 2019 24:00:00").getTime();

    let setCountdown = setInterval(function () {
        let today = new Date().getTime();
        let timeRemaining = halloween - today;
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        countDown.textContent = `${days} days ${hours} hours ${minutes} minutes till Halloween`.toUpperCase();
    }, 1000);
}
// TODO: Figure out how to use a movie API to render images and links.
let images = [];
let links = [];
images[0] = "<img src='img/beetlejuice.jpg'></img>";
images[1] = "<img src='img/thing.jpg'></img>";
images[2] = "<img src='img/dead-die.jpg'></img>";
images[3] = "<img src='img/lovers.jpg'></img>";
images[4] = "<img src='img/pet.jpg'></img>";
images[5] = "<img src='img/seven.jpg'></img>";
images[6] = "<img src='img/hush.jpg'></img>";
images[7] = "<img src='img/ginger.jpg'></img>";
images[8] = "<img src='img/may.jpg'></img>";
images[9] = "<img src='img/train.jpg'></img>";
images[10] = "<img src='img/session.jpg'></img>";
images[11] = "<img src='img/hellhouse.jpg'></img>";
images[12] = "<img src='img/shop.jpg'></img>";
images[13] = "<img src='img/tucker.jpg'></img>";

links[0] = `<a href="https://www.imdb.com/title/tt0094721" target="_blank">Check It Out</a>`;
links[1] = `<a href="https://www.imdb.com/title/tt0084787" target="_blank">Check It Out</a>`;
links[2] = `<a href="https://www.imdb.com/title/tt8695030" target="_blank">Check It Out</a>`;
links[3] = `<a href="https://www.imdb.com/title/tt1714915" target="_blank">Check It Out</a>`;
links[4] = `<a href="https://www.imdb.com/title/tt0098084" target="_blank">Check It Out</a>`;
links[5] = `<a href="https://www.imdb.com/title/tt0114369" target="_blank">Check It Out</a>`;
links[6] = `<a href="https://www.imdb.com/title/tt5022702" target="_blank">Check It Out</a>`;
links[7] = `<a href="https://www.imdb.com/title/tt0210070" target="_blank">Check It Out</a>`;
links[8] = `<a href="https://www.imdb.com/title/tt0303361" target="_blank">Check It Out</a>`;
links[9] = `<a href="https://www.imdb.com/title/tt5700672" target="_blank">Check It Out</a>`;
links[10] = `<a href="https://www.imdb.com/title/tt0261983" target="_blank">Check It Out</a>`;
links[11] = `<a href="https://www.imdb.com/title/tt8707374" target="_blank">Check It Out</a>`;
links[12] = `<a href="https://www.imdb.com/title/tt0091419" target="_blank">Check It Out</a>`;
links[13] = `<a href="https://www.imdb.com/title/tt1465522" target="_blank">Check It Out</a>`;


movieInfo.addEventListener("click", function (e) {
    let randomMovie = Math.floor(Math.random() * images.length);
    movieInfo.classList.add("active");
    movieInfo.innerHTML = images[randomMovie];
    movieLink.innerHTML = links[randomMovie];
});