const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];


// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    // Instead of forloop use Map method
    // Code her    
    detailedPlayers = players.map((x, i) => {

        return {
            name: x,
            strength: getRandomStrength(),
            image: "images/super-" + i + ".png",
            type: (i % 2 == 0) ? "hero" : "villain"

        }

    })
    return detailedPlayers;
}



// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
};

const buildPlayers = (players, type) => {
    let fragment = "";


    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    // let fragment1 = '';


    let data = players.map(function (x) {
            fragment = fragment +
                `<div class="player">
        <img src="${x.image}" alt="">
        <div class="name">${x.name}</div>
        <div class="strength">${x.strength}</div>
        </div>`

        }

    );

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML = buildPlayers(
        players,
        "villain"
    );
};

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
};