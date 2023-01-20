function nFactorial(n) {
    let sgn = (n<1) ? -1 : 1;
    let cal = (n<0) ? n*=-1 : n;
    if (n>1) { 
        cal *= nFactorial(--n);
    } else {cal=1}
    return cal*sgn;
}

console.log(nFactorial(-5));