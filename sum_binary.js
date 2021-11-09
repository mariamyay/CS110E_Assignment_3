function sum(num1,num2)
{
    let array1 = [];
    for(let i=0;i<=num1.length-1;i++){
    array1.push(Number(num1[i]));}
    let array2 = [];
    for(let i=0;i<=num2.length-1;i++){
        array2.push(Number(num2[i]));}
    if(array1.length<array2.length){
        for(let i=array1.length; i<array2.length; i++){
            array1.unshift(0);}
    }
    else if(array2.length<array1.length){
        for(let i=array2.length; i<array1.length; i++){
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
       

       console.log(sumarray.join(''));
       return sumarray.join('');
             
}
sum('1011', '1011');