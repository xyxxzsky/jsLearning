function fibonacci(n){
    if(n>1){
        return fibonacci(n-2) + fibonacci(n-1)
    }
    return 1
}

module.exports = fibonacci