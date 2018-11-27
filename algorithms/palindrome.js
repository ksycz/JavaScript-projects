// 1st method for palindrome - return true if string is palindrome
function palindrome1(word) {
    // we convert string into array, reverse the array and join it into string
    let reversed =  word.split('').reverse().join('');
    // if word is equal to reversed it is true, if not - false
    return word === reversed ? true : false;
}

console.log(palindrome1("kajak")); // true

// return the palindrome
function FirstReverse(str) {
    let reversed = str.split('').reverse().join('')
        return reversed;
}

// 2nd method for palindrome - we compare first and last letter
function palindrome2(str) {
    // we define variables for first and last letters
    let first = 0,
    last = str.length - 1;
    // we use while to go over all letters when the index of last letters is bigger than the index of the first letter
    while (last > first) {
        if (str[first].toLowerCase() !== str[last].toLowerCase()) return false;
        first++;
        last--;
    }
    // 4
    return true;
}

console.log(palindrome2("kajok")); // false