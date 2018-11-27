// seek and destroy

// create two arrays
let first = [25, 67, 84, 100, 564, 542, 54],
    second = [86, 542, 84, 54, 101, 444, 29];

function filterFun(a, b) {
    // filter all elements in the array
    return a.filter((val) => {
    // return items that are in both arrays
        return !b.includes(val);
    });
}

console.log(filterFun(first, second));