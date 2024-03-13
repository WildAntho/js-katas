/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here

function getLikes(table) {
    if (table.length === 0) {
        return "Be the first to like this";
    }
    else {
        if (table.length === 1) {
            return table[0] + " likes this";
        }
        else if (table.length === 2) {
            return table[0] + " and " + table[1] + " like this";
        }
        else {
            let tableLength = table.length - 1;
            return table[0] + " and " + tableLength + " other people like this";

        }
    }
}


module.exports = getLikes;
