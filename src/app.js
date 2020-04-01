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
const initPlayers = (players) => {
    let robj = {};
let detailedPlayers= players.map((obj,index) => {
    robj={
    "name" : obj,
    "image" : "images/super-" + (index+1) + ".png",
    "strength": getRandomStrength(),
    "type": (Math.floor(Math.random() * 99) % 2 == 0) ? "hero" : "villain"
    }
    console.log(obj);
   return robj;
})
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    //let fragment = '';
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    let fragment='';
    // here we using the map method
    let player= players.map((obj) => {
        let temp=` <div class="player">
        <img src="${obj.image}" alt="">
        <div class="name">${obj.name}</div>
        <div class="strength">${obj.strength}</div>
        </div>`;
        //here we using the filter method of getting players
        fragment= players.filter((obj)=>{
            return obj.type == type;
            //And here we joining the fragment and map using join method
        }).join(' '+temp);
    return temp; 
    })
    
    return player;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}