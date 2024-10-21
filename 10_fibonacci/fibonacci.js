const fibonacci = function(n) {
    let fibLength = parseInt(n);
    if ( fibLength < 0)
    {
        return "OOPS";
    } else if(fibLength === 0)
    {
        return 0;
    } else if (fibLength <= 2 )
    {
        return 1;
    } else
    {
        return fibonacci(fibLength - 1) + fibonacci(fibLength - 2);
    }

};

// Do not edit below this line
module.exports = fibonacci;
