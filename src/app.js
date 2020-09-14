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

    // Instead of forloop use Map method
    // Code here

    
    const initPlayers = (PLAYERS) => {
        let detailedPlayers =  PLAYERS.map((player ,i) => {
                   return {
                          name: player,
                         strength:getRandomStrength(),
                         image :"images/super-" +(i+1)+ ".png",
                         type  :(i / 2 == 0) ?"hero" : "villain",
                        }
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

    for (i = 0; i < players.length; i++) {
        player = `<div class="player">
                    <img src="${players[i].image}" alt="">
                    <div class="name">${players[i].name}</div>
                    <div class="strength">${players[i].strength}</div>
                </div>`;
        if (players[i].type == type){
            fragment = fragment + player;
        }    
    }
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