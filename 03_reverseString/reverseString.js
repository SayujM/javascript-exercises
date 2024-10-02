const reverseString = function(inpString) {
    let outString = '';
    let strLength = inpString.length;

    if (inpString == '')
    {
        return '';
    } else
    {
        for ( let i = strLength-1; i >= 0; i--)
            {
                outString += inpString[i];
            }
            return outString;
    }

};

// Do not edit below this line
module.exports = reverseString;
