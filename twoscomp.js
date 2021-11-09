function inverse(number){
    let numArray = number.split('');
    let result = [];
    for(i=0;i<=numArray.length-1;i++){
        if(numArray[i]==1){
            result.push(0);
        }
        else{
            result.push(1);
        }
    }
    return result.join('');
}
function sum(num1,num2)
{
    let array1 = [];
    for(let i=0;i<=num1.length-1;i++){
    array1.push(Number(num1[i]));}
    let array2 = [];
    for(let i=0;i<=num2.length-1;i++){
        array2.push(Number(num2[i]));}
    if(array1.length<array2.length){
        for(let i=array1.length+1; i<=array2.length; i++){
            array1.unshift(0);}
    }
    else if(array2.length<array1.length){
        for(let i=array2.length+1; i<=array1.length; i++){
            array2.unshift(0);}
    }
    let carry=0;
    let sumarray=[];
    for(let i=array2.length-1; i>=0;i--){
        if(array1[i]+array2[i]===2){      
            sumarray[i]=carry;
            carry=1;
        }
        else if(array1[i]+array2[i]+carry===2){
            sumarray[i]=0;
            carry=1;
        }
        else{
            sumarray[i]=array1[i]+array2[i]+carry;
            carry=0;
        }
    }
    if(array1[0]+array2[0]+carry>=2){
        sumarray.unshift(1);
        }
       

       return sumarray.join('');
             
}
function negativeBinary(number){
    let negative = sum(inverse(number), '1');
    console.log(negative);
    return negative;
}
negativeBinary('10001');