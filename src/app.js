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
    var i;
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(i = 0; i < (players.length); i++)
        {
            if(i%2==0)
            detailedPlayers[i] =
            {
                name: players[i],
                strength: getRandomStrength(),
                image:"images/super-"+(i+1)+".png",
                type:"hero"
            }
            else
            detailedPlayers[i] =
            {
                name: players[i],
                strength: getRandomStrength(),
                image: "images/super-"+(i+1)+".png",
                type:"villian"
            }
        }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    
    var power = Math.floor((Math.random() * 100) + 1);
    return power;
}

// Build player template
const buildPlayers = (players, type) => {
    
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    
        //accumulating HTML template using backticks
        let fragment = players.filter(player => player.type == type).map(player => 
        `<div class="player">
            <img src="${players[i].image}" alt="">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
        </div>`).join();
    

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