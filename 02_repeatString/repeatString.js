const repeatString = function(inpString, n) {
    let outString = '';
    if (n == 0 || inpString == '') 
    {
        return '';
    } else if (n < 0)
    {
        return 'ERROR';
    } else 
    {
        while ( n > 0)
            {
                outString += inpString
                n--;
            }
            return outString;
    }
};

// Do not edit below this line
module.exports = repeatString;
