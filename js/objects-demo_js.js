// intro to objects

// objects in programming are meant to represent real
// objects in business processes or logic

// arrays are numerically ordered lists
// objects are labeled lists

// objects are bundle together state and behavior into a single value

// object literal notation
var drink = {
    "type": "mineral water",
    "name": "topo chico",
    "volume": 12,
    "nutritionalFacts": {
        "calories": 0,
        "totalFat": 0,
        "sodium": "15",
        "protein": 0,
        "carbs": 0
    },
    "isCold": true,
    "isEmpty": false,
    "sip": function() {
        if(this.volume > 0) {
            this.volume--;
        }
        if(this.volume === 0) {
            this.isEmpty = true;
            this.getAnother();
        }
    },
    "getAnother": function() {
        this.volume = 12;
        this.isEmpty = false;
    }
};

console.log("My " + drink.name + " is " + drink.volume + "oz");
console.log("Sodium content is " + drink.nutritionalFacts.sodium)
var oragamiDragon = {};

// dot notation
oragamiDragon.texture = "scaly";
oragamiDragon.paperType = "kami";
oragamiDragon.author = "Joe Nakashima";
oragamiDragon.maker = "Nate Boster";
oragamiDragon.isCute = true;
oragamiDragon.canBreathFire = false;
oragamiDragon.favoriteVideoGame = prompt("What's your favorite video game?");

console.log(oragamiDragon);

var car = {};
car.make = "VW";
car.model = "Bug";
car.speed = 0;
car.honk = function() {
    return "beep beep";
};
car.accelerate = function() {
    this.speed++;
};
car.decelerate = function() {
    this.speed--;
};
car.stop = function() {
    this.speed = 0;
};
car.roadRage = function() {
    console.log("🛴")
    this.honk();
    this.accelerate();
    console.log("@#*(!@#*!");
    console.log("🚙");
    this.accelerate();
    this.accelerate();
    this.honk();
    this.honk();
};




console.log(car.speed);


console.log("My " + car.make + " " + car.model + " goes "
    + car.honk()
);


function makeDrink(name) {
    var drink = {};
    drink.type = prompt("What kind of beverage?");
    drink.name = name;
    drink.volume = prompt("How much volume?");
    drink.isEmpty = false;
    drink.sip = function() {
        if(this.volume > 0) {
            this.volume--;
        }
        if(this.volume === 0) {
            this.isEmpty = true;
        }
    };
    return drink;
}

var coke = makeDrink("coca cola");
coke.sip();

var bankAccount = {
    "accountNumber": 123456,
    "owner": [
        {
            "firstName": "Jane",
            "lastName": "Janeway",
            "isPrimary": true
        },
        {
            "firstName": "Bob",
            "lastName": "Bobberson",
            "isPrimary": false
        }
    ],
    "balance": 0,
    "deposit": function(amount) {
        this.balance += amount;
    },
    "withdrawal": function(amount) {
        this.balance -= amount;
    }
};

var movies = [
    {
        "title": "Fantasia",
        "rating": "G",
        "genre": "animated",
        "characters": [
            "Mickey Mouse",
            "Devil",
            "Fawns",
            "Nymphs",
            "Dinosaurs",
            "Sugar Plum Faeries"
        ],
        "duration": 120
    },
    {
        "title": "Titanic",
        "rating": "PG",
        "genre": "Drama",
        "characters": [
            "Jack",
            "Rose",
            "Captain"
        ],
        "duration": 180
    }
];

movies.forEach(function(movie) {
    console.log(movie.title + " is rated " + movie.rating);
});