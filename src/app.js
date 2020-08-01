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
    // Code here
    var c = 0;
    detailedPlayers = players.map((item) => {
        c++;
        let player = {
            name: item,
            strength: getRandomStrength(),
            image: "images/super-" + c + ".png"
        }
        if (c % 2 != 0) {
            player.type = "hero";
        }
        else {
            player.type = "villain";
        }
        // console.log(player);
        return player;
    });

    // console.log(detailedPlayers);
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    console.log(players, type);
    fragment = fragment + players.filter((player) => {
        console.log(player);
        return (player.type == type) ? true : false;
    }).map((player => {
        console.log(player);
        return `
        <div class="player">
            <img src="${player.image}" alt="">
            <div class="name">${player.name}</div>
            <div class="strength">${player.strength}</div>
        </div> `;
    })
    ).join("\n");

    console.log(fragment);
    return "" + fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}