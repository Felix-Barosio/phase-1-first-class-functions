const receivesAFunction = (callback) => callback();

function returnsANamedFunction(){
    return function my(){

    }
}

function returnsAnAnonymousFunction(){
    return () =>{
        
    }
}