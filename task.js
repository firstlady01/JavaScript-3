  function parameters(number){
    let output= [];

for(i=1; i <= number ; i++){
    if( i %5==0 && i%3==0 && i%2==0){
        output.push ("yu-gi-oh");

    }else if(i%5==0 && i % 3==0) {
        output.push ("gi-oh");

    }else if (i%5==0 && i % 2==0){
        output.push ("yu-oh");

    }else if (i%3==0 && i % 2==0){
        output.push("yu-gi");

    }else if  (i % 5==0){
        output.push ("oh");

    } else if (i % 3==0){
        output.push ("gi");

        }else if (i % 2==0){
            output.push("yu"); 

             }else {
             output.push(i);
}
        }
        return output;
    }
    console.log(parameters(100));
    console.log(parameters(30));    
    
