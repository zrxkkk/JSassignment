function printTriangle(n){
    for(let i=1; i<n+1; i++){
        s="";
        for(let j=1; j<=i; j++){
            s+="* "
        }
        console.log(s);
    }
}

printTriangle(5)