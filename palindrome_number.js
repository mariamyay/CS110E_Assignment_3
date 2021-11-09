function reverse(number){
    let strnumber = String(number);
    let result = [];
    for(let i=0;i<=strnumber.length-1;i++){
        result.unshift(strnumber[i]);
    }
    return Number(result.join(''));
}

function isPalindrome(number){
    if(reverse(number)===number){
        console.log(`The number ${number} is a palindrome.`)
    }
    else {
        console.log(`The number ${number} is not a palindrome.`)
    }
}

isPalindrome(6016);