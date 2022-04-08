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
    let detailedPlayers = [];
    players.map((player, i) =>{
        let character = {};
        character.name=player;
        character.strength=getRandomStrength();
        character.image=`images/super-${i+1}.png`;
        character.type=getRandomStrength() % 2 === 0 ? "hero" : "villain";
        detailedPlayers.push(character);
    });

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';
    fragment=players.filter((player) => player.type.toLowerCase() === type.toLowerCase())
        .map((player, i) => {
            return `<div class="player">
                <img src="${player.image}" alt="">
                <div class="name">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>`;
        })
        .join("");
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}