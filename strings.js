// Challenge #1

var numOfSandwiches = 8;
console.log("numOfSandwiches", numOfSandwiches);

// Challenge #2

var name = "April";
var string = "Hello " + name + "! How are you doing today?";
console.log("string:", string);

// Challenge #3

var DNA = "GCAT";
var RNA = DNA.replace("T", "U");
console.log("RNA:", RNA);

// Challenge #4

// var animal = "Goat";
var animal = "AlliGATor";
if (animal.toLowerCase() === "alligator") {
    console.log("small");
} else {
    console.log("wide");
};


var yarn =  "the better string";
var domString = "<h4>" + yarn + "</h4>";

var myDiv = document.getElementById('yarn-holder');
myDiv.innerHTML = domString;

// Challenge #5

var str = 'IBMWLOVEbmcatsbmw';
var string2 = str.replace(/[bmw]/gi, '');
var catString = document.getElementById('noBmw');
catString.innerHTML = '<h1>' + string2 + '</h1>';
