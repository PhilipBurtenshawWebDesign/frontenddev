var coloursOfTheRainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet', 'Green'];

// iterators start with the letter i
var sizeOfList = coloursOfTheRainbow.length;

for (i = 0; i < sizeOfList; i++) {

    console.log(`Colour is: ${coloursOfTheRainbow[i]}`);
}
// More efficient way
// See this link for more examples : https://flaviocopes.com/javascript-loops-map-filter-reduce-find/
const r2 = coloursOfTheRainbow.find((item) => item === 'Green');


const result = findElementInSimpleList(coloursOfTheRainbow, 'Green');

if (result) console.log('found colour');


function findElementInSimpleList(listOfItemsToSearch, itemToSearch) {

    let found = false;

    const sizeOfSearch = listOfItemsToSearch.length;
    for (i = 0; i < sizeOfSearch; i++) {

        console.log(`Searching for ${itemToSearch.toLowerCase()}`);

        if (itemToSearch.toLowerCase() === listOfItemsToSearch[i].toLowerCase()) {
            console.log('I found the item');
            found = true;
            break;
        }

    }
    return found ? 1 : 0;
}


var foundItems = getAllMatchedElements(coloursOfTheRainbow, 'Green');
console.log(foundItems.join(','));

function getAllMatchedElements(listOfItemsToSearch, itemToSearch) {

    let foundItems = [];
    const sizeOfSearch = listOfItemsToSearch.length;
    for (i = 0; i < sizeOfSearch; i++) {
        if (itemToSearch.toLowerCase() === listOfItemsToSearch[i].toLowerCase()) {

            // useful when you are retrieving objects - grab the object and push onto the array
            const foundItem = listOfItemsToSearch[i];
            foundItems.push(foundItem);
        }
    }
    return foundItems;
}