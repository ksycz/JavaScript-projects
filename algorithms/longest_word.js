// First method

function LongestWord(sentence) { 
    // I get rid of special characters
    sentence = sentence.replace(/[^\w]/g, ' ');
    // I convert string into array
    let words = sentence.split(/\s+/);
    // I define variables for storing results
    maxLength = 0,
    word = '';
    // I check if the next word is longest than the previous word
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            word = words[i];
            maxLength = words[i].length;
        }
    }
    return word;
    }

// Second method
function LongestWord(sen) { 
    var trimmed = sen.replace(/[^\w]/g, ' ');
    var words = trimmed.split(/\s+/);
    var longestWord = words.sort(function(a, b) {return b.length - a.length;})[0];
    return longestWord;
  }

// Third method - with recursion
function longestWordUsingRecursive(str) {
    // I change the sentence to array
    str = str.split(' ');
    // I check array length - it contains one word so it is the longest one
    if (str.length === 1) {
        return [str[0], str[0].length];
    }
    // I compare the length of two first words, if the first is longer than the second one...
    if (str[0].length >= str[1].length) {
    // ...I remove the second word (shorter)
        str.splice(1, 1);
    // I join words into one sentence
        return longestWordUsingRecursive(str.join(' '));
    }

    // I check if the first word is shorter than the second one, if first word is shorter, then I remove the first word. After that I join words again and I use recursive function.
    if (str[0].length <= str[1].length) {
        return longestWordUsingRecursive(str.slice(1, str.length).join(' '));
    }
    return str.length;
}

console.log(longestWordUsingRecursive(sentence));