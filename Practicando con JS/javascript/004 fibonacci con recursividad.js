function nFibonacci(n){
    //Hecho por adalsus

    var resul = 0;
    if (typeof(n)!=='number') {
        if (n['p']===1) {
            pl_exe = {
                p: n['p'],
                n_fibo_a: 1,
                n_fibo: n['n_fibo'],
                posiFibo: n['posiFibo'],
                nf: n['nf']
            };
        } else {
            pl_exe = {
                p: n['p'],
                n_fibo_a: n['n_fibo_a'],
                n_fibo: n['n_fibo'],
                posiFibo: n['posiFibo'],
                nf: n['nf']
            };
        }
    } else {
        var pl_exe = {
            p: 0,
            n_fibo_a: 0,
            n_fibo: 0,
            posiFibo : 0,
            nf : n+1
        };
    }
    if (pl_exe['posiFibo']<=pl_exe['nf']) {
        pl_exe['p'] += 1;
        pl_exe['n_fibo_a'] += pl_exe['n_fibo']; 
        pl_exe['n_fibo'] += pl_exe['n_fibo_a'];
        pl_exe['posiFibo'] += 2;
        if (pl_exe['posiFibo']>pl_exe['nf']) {
            if ( (pl_exe['nf']-1)%2 === 1 ){
                resul = pl_exe['n_fibo_a'];
            } else {
                resul = pl_exe['n_fibo'];
            }
        }

        resul += nFibonacci(pl_exe);  //uso la recursividad

    } else {
        return resul;
    }
    
    return resul;
}

console.log(nFibonacci(12));