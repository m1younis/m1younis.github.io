
// Site elements loaded alongside particles.js config
particlesJS.load("particles", "assets/content/particles.json", () => {});
$("#main").fadeTo(1000, 1);
$("#subs").delay(1500).fadeTo(1000, 1);
$("#profiles").delay(1500).fadeTo(1000, 1);

// Site content file loaded
// Profile info text defined and updated every 3 secs
var i = 0, subs = [];

$.getJSON("assets/content/main.json", (data) => {
    subs = data.subs
});

setInterval(() => {
    $("#subs").fadeTo(500, 0).fadeTo(500, 1);
    setTimeout(() =>
        $("#subs").text(subs[i % subs.length]), 500);
    ++i;
}, 3000);
