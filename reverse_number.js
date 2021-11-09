function reverse(number){
    let strnumber = String(number);
    let result = [];
    for(let i=0;i<=strnumber.length-1;i++){
        result.unshift(strnumber[i]);
    }
    console.log(Number(result.join('')));
    return Number(result.join(''));
}
reverse(1011);