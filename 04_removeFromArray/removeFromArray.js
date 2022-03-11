// In this exercise we write a fucntion that takes an array (as an argument) and some other
// arguments then remove the other arguments from that array.
const removeFromArray = function() {

    // We use this to convert The arguments object to an array.
    // So we have the array argument that get passed as the first item in the new array
    // So index of that array sould be 0.
    const args = [].slice.call(arguments)

    // In this for loop we start our counter from 1, cuz remember the first item (which have the index 0)
    // is the array the get passed as the argument that we need to remove the items from it.
    // We use .legth Method to check the legth of our new array.
    for (let ctr = 1; ctr < args.length; ctr++){

        // we also check if the other arguments that got passed are in the array so we use the .includes Method.
        if (args[0].includes(args[ctr])){

            // we get the index of the item with .indexOf method and store it in an variable.
            // Using the .splice method we remove the item from the array the got passed.
            index = args[0].indexOf(args[ctr])
            args[0].splice(index, 1);
        }
    }

    // In the end we return the new array and we are done :D
    return args[0];

};

// Do not edit below this line
module.exports = removeFromArray;
