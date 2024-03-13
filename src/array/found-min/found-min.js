/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here

function min(tab) {
    if (tab == [] || tab == null) {
        return null;
    }
    else {
        let value = tab[0];
        for (i = 1; i < tab.length; i++) {
            if (tab[i] < value) {
                value = tab[i];
            }
        }
        return value;
        // let sortTable = table.sort();
        // return sortTable[0];
    }
}

module.exports = min;


