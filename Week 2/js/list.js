let  dwarf1 = 'Doc';
let  dwarf2 = 'Bashful';

// Javascript - array

let dwarves = ['Doc','Bashful', 'Happy'];

console.log(dwarves[0]);
console.log(dwarves[1]);
console.log(dwarves[2]);

dwarves[3] = 'Sneezy' // pushing on to end of array
dwarves[dwarves.length] = 'Happy' // pushing on to end of array
dwarves.push('Dopey');

dwarves.pop(); // removes from the end
dwarves.shift(); // removes from the start

dwarves.unshift('Grumpy');

dwarves.splice(1,0,'Doc');

console.log(dwarves.join(','));

const countDwarves = dwarves.length;

for(i = 0; i < countDwarves; i++) {

    console.log(`The dwarf at position ${i} is called ${dwarves[i]}`);
}

while (dwarves.length > 0) {

    let popped = dwarves.pop();
    console.log(`${popped} just popped off`)
}
console.log(`Length of dwarves is ${dwarves.length}`);
console.log(dwarves.join(''));