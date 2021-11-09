function isPrime(number){
    let prime=true;
    if (number<=0||number===1){
        prime = false;
    }
    else if(Math.sqrt(number)<2){
        prime = true;
    }
    else{
        for(let i=2;i<=Math.sqrt(number);i++)
        if(number%i===0){
        prime = false;
        }
    }
    return prime;
}

function primeNumberArray(number1, number2){
    let result = [];
    for(let j=number1;j<=number2;j++){
        if(isPrime(j)===true){
            result.push(j);
        }

    }
    console.log(result);
    return result;
}
primeNumberArray(0,15);