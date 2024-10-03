const leapYears = function(inpYear) {
    if (inpYear % 100 == 0)
    {
        if ( inpYear % 400 == 0)
        {
            return true;
        }
    } else if (inpYear % 4 == 0)
    {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
