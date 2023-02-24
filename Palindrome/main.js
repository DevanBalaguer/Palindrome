function palindrome(str) {
    //remove all non-alphanumeric characters
     const newStr = str.replace(/[\W_]/gi, '').toLowerCase();
    //reverse string
    var splitString = newStr.split("");
    var reverseArray = splitString.reverse();
    var reverseString = reverseArray.join("");
    //check palindrone
     if (newStr === reverseString){
       return true;
     } else {
       return false;
     };
    }
    
    console.log(palindrome("Eye"));