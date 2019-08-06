//We want to make it so that we have 4 buttons for each pokemon and each button brings a certain amount of health down

// canvas size 1000,600
// we want to have at least 4 different move variables, each representing damage
// we want it so that when a button is pressed, health goes down, 
// we need two shapes, one to represent poke1 and poke2
// we need two rectangles to represent each pokemon's health bar

//         *EXTRA*
//make different animations for the pokemon moves
// assign variables for the different moves to go with the animations
// we want variable that assigns a type for the pokemon
// we want to assign types to the moves
//so that if a pokemon is hit by a supereffective attack then moveDamage*1.5

// let moveDamage1 = 10;
// let moveDamage2 = 20;
// let moveDamage3 = 30;
// let moveDamage4 = 40;

// let tackle = moveDamage1;
// let scratch = moveDamage1;
// let vineWhip = moveDamage2;
// let ember = moveDamage2;
// let razorLeaf = moveDamage3;
// let furySwipes = moveDamage3;
// let takeDown = moveDamage4;
// let dragonRage = moveDamage4;

let canvasWidth = 1000;
let canvasHeight = 600;
let healthWidth1 = 100;
let healthWidth2 = 100;
let healthStart1 = 150;
let healthStart2 = 750;


// if you want to declare a part of a class as an array 
// simply put it in square brackets when it's turn comes up

var bulbasaurMS =   [ Tackle, Vinewhip, Razorleaf, Takedown];
var charmanderMS =   [Scratch, Ember, Furyswipes, Dragonrage];

var pokemon1 = new Pokemon("Bulbasaur","Grass",[Tackle, Vinewhip, Razorleaf, Takedown],
    ["Fire", "Flying", "Poison", "Ice", "Bug"],
    ["Grass", "Water", "Electric", "Ground"]);
var Tackle = new Moves("Tackle", "Normal", 10);
var Vinewhip = new Moves("Vinewhip", "Grass", 20);
var Razorleaf = new Moves("Razorleaf", "Grass", 30);
var Takedown = new Moves("Takedown", "Normal", 40);

var pokemon2 = new Pokemon("Charmander", "Fire", [Scratch, Ember, Furyswipes, Dragonrage],
    ["Water", "Rock", "Ground"],["Grass", ""]);
var Scratch = new Moves("Scratch", "Normal", 10);
var Ember = new Moves("Ember", "Fire", 20);
var Furyswipes = new Moves("Furyswipes", "Normal", 30);
var Dragonrage = new Moves("Dragonrage", "Dragon", 40);


var dmg = 0


function setup(){
    createCanvas(canvasWidth,canvasHeight);
    background("gray");
}


function drawHealthBars(){
    fill("red")
    rect(healthStart1,500,healthWidth1,10);
    //First healthbar
    fill("red")
    rect(healthStart2,500,healthWidth2,10);
}

function draw(){ 
     background(20,0,135);
    fill("green");
    rect(0,450,1000,200);//The ground
    fill(255,255,255);
    rect(50,50,200,50);
    rect(465,100,175,60);


   //Charmander
     fill("orange");
    rect(750,300,100,150);//Body
    rect(730,225,85,85);//Head
    rect(860,350,15,80);//Tail Tip
    rect(855,375,20,40);//Tail Middle
    rect(850,400,25,45);//Tail End
    fill("red");
    rect(856.5,300,22.5,50)
    fill("yellow")
    rect(861,310,14,30)
    fill("red");
    rect(863,295,10,20)

    //Bulbasaur
    fill("green");
    rect(130,300,95,40);//Bulb
    fill(0,255,140);
    rect(125,340,150,110);//Body
    rect(225,300,100,100);//Head
    fill("red")
    drawHealthBars();
}

function keyPressed(){
    bulbasaurControls();
    charmanderControls();
}
 


function bulbasaurControls(){
    if(keyCode === 81 && healthWidth2> 0 ){
        healthWidth2 = healthWidth2-Tackle.damage;
    }   
   
    if(keyCode === 87 && healthWidth2> 0 ){
if(healthWidth2-VWdmg < 0)
    healthWidth2 = 0

    if(keyCode === 69 && healthWidth2> 0 ){
        var RLdmg = Razorleaf.damage
        
        
    if(pokemon2.type == "Fire")
       RLdmg *= 0.5
       healthWidth2 = healthWidth2-RLdmg;

       if(healthWidth2-RLdmg< 0)
        healthWidth2 = 0

       
    }
    if(keyCode === 82 && healthWidth2> 0 ){
        healthWidth2 = healthWidth2-Takedown.damage;
        if(healthWidth2-Takedown.damage < 0)
        healthWidth2 = 0
    }
    
 }
}



function charmanderControls(){
    //Charmander
if(keyCode === 85 && healthWidth1> 0 ){
  healthWidth1 = healthWidth1-Scratch.damage;
}   
//
if(keyCode === 73 && healthWidth1> 0 ) {
 var EBdmg = Ember.damage

if(pokemon1.type == "Grass") 
  EBdmg = Ember.damage*1.5
  healthWidth1 = healthWidth1-EBdmg;
  if(healthWidth1-EBdmg < 0)
  healthWidth1 = 0


} //
if(keyCode === 79 && healthWidth1> 0 ){
  healthWidth1 = healthWidth1-Furyswipes.damage;
  if(healthWidth1-Furyswipes.damage < 0)
  healthWidth1 = 0
}
if(keyCode === 80 && healthWidth1> 0 ){
  healthWidth1 = healthWidth1-Dragonrage.damage;
  if(healthWidth1-Dragonrage.damage < 0)
  healthWidth1 = 0
}
}

// function bulbasaurControls(){

// }






// function CharmanderControls(){

// }
   
//Bulbasaur
    //declare dmg variable here and set it equal to some number based on conditionals
    //only go through conditions if health is greater than 0


        //set dmg dealt equal to tackle dmg and check for resistance/weakness
        

        //set dmg = vinewhip's dmg and check for resistance/weakness
        
 //if dmg is greater than healthwidth2 dmg then set it equal to healthwidth2 or set it equal to 0
  