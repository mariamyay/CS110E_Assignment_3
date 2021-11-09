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
   console.log(prime);
   return prime;
}
isPrime(121);
