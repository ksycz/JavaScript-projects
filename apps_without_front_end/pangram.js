// check if string is pangram (contains all letters from the alphabet)
function isPangram(string) {
    var regex = /([a-z])(?!.*\1)/g;
    if(new Set(string.toLowerCase().match(regex)).size === 26) {
      return true;
    } else {
      return false;
    }
}

{
    {
        {
            {
                {
                    <span></span>

                }
            }
        }
    }
}
// another solution

// function isPangram(str) {
//     var s = str.toLowerCase();
//     var letters = "zqxjkvbpygfwmucldrhsnioate";
//     for (var i = 0; i < 26; i++)
//         if (s.indexOf(letters.charAt(i)) == -1)
//             return false;
//     return true;
// }