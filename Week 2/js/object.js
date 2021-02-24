let carMF = 'Volkswagen';
let carModel = `Golf`;
let carEngine = '1.6';
let carColour = 'Red';
let carType = 'Hatchback'


let carMF1 = 'Nissan';
let carModel1 = `Navara`;
let carEngine1 = '2.5';
let carColour1 = 'Grey';
let carType1 = 'Pickup';

let car = {
    'mf': 'Ford',
    'model': `Fiesta`,
    'engine': '0.1',
    'colour': 'Pink',
    'type': 'Sedan'
}



var fleet = [

    car,

    {
        'mf': 'Volkswagen',
        'model': `Golf`,
        'engine': '1.6',
        'colour': 'Red',
        'type': 'Hatchback'
    },

    {
        'mf': 'Nissan',
        'model': `Navara`,
        'engine': '2.5',
        'colour': 'Grey',
        'type': 'Pickup'
    },

    {
        'mf': 'Ford',
        'model': `Fiesta`,
        'engine': '0.1',
        'colour': 'Pink',
        'type': 'Sedan'

    }


];



console.log(car);
console.log({ car });
console.log(`The colour of the car is ${car.colour}`);


// 

for (i = 0; i < fleet.length; i++) {

    const currentCar = fleet[i];
    const message = `${currentCar.mf} | ${currentCar.colour} | ${currentCar.engine}`;
    console.log(message);
}


for(const currentCar of fleet) {
    const message = `ForEach: ${currentCar.mf} | ${currentCar.colour} | ${currentCar.engine}`;
    console.log(message);
}

console.log(  getAllManufacturers(fleet).join('|')  );

function getAllManufacturers(listOfItemsToSearch) {

    let foundItems = [];

    for(const currentCar of fleet) {
      
        foundItems.push(currentCar.mf);
    }

    return foundItems;
}
