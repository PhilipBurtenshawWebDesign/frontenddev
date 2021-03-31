// Initialising
var counter = 0;

//Statment
console.log(`I am on step ${counter}`);

//increment
//counter++;
//console.log(`I am on step ${counter}`);

// block of statements
//counter++;
//console.log(`I am on step ${counter}`);

//counter++;
//console.log(`I am on step ${counter}`);

/*
//console.log(`I am on step ${counter++}`);
//console.log(`I am on step ${counter++}`);
//console.log(`I am on step ${counter++}`);
//console.log(`I am on step ${counter++}`);
console.log(`I am on step ${counter++}`);
*/
var topOfStairs = 10;
let step = 0;

do {

   // console.log(`I am on stair ${step}`);
    step++;
} while (step < topOfStairs)

step = 0;
while (step < topOfStairs) {

  //  console.log(`I am on stair ${step}`);
    step++;

}
let midWay = parseInt(topOfStairs/2);

for(step = 0; step < topOfStairs; step++) {

    console.log(`I am on stair ${step}`);

    if (step === midWay ) {
        console.log(`I at at the midway point ${midWay}`);
    }

    var remainder = 9 % 2; //modulo

    /*
    let stepType = 'Odd';
    if (remainder == 0 ) {
        stepType = 'Even';
    } else {
        stepType = 'Odd';
    }
    */
   // ternary operator 

   let stepType = step % 2 == 0 ? ' even' : 'odd';


   console.log(`I am on an ${stepType} step`);



}
