/*jshint esversion: 6 */

const movieButton = document.querySelector("#movie-button");
const movieInfo = document.querySelector("#movie-info");
const countDown = document.querySelector("#countdown");

window.addEventListener("load", startCountdown);

function startCountdown() {
    countDown.textContent = " days till halloween";
}


let images = ["<img src='img/beetlejuice.jpg'></img>", "<img src='img/thing.jpg'></img>", "<img src='img/dead-die.jpg'></img>", "<img src='img/lovers.jpg'></img>", "<img src='img/pet.jpg'></img>", "<img src='img/seven.jpg'></img>", "<img src='img/hush.jpg'></img>", "<img src='img/ginger.jpg'></img>", "<img src='img/may.jpg'></img>", "<img src='img/train.jpg'></img>", "<img src='img/session.jpg'></img>", "<img src='img/hellhouse.jpg'></img>", "<img src='img/shop.jpg'></img>", "<img src='img/tucker.jpg'></img>"];


movieInfo.addEventListener("click", function (e) {
    let randomMovie = images[Math.floor(Math.random() * images.length)];
    movieInfo.classList.add("active");
    movieInfo.innerHTML = randomMovie;
});