//callback functions

function callBack(){
    return 'This is a function callback'
}

function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction(){
    return function fn(){
        'This returns a named function'
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        'An anonymous function is returned'
    }
}