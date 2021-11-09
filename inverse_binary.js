function inverse(number){
    let numArray = number.split('');
    let result = [];
    for(let i=0;i<=numArray.length-1;i++){
        if(numArray[i]==1){
            result.push(0);
        }
        else{
            result.push(1);
        }
    }
    console.log(result.join(''));
    return result.join('');
}
inverse('1101');