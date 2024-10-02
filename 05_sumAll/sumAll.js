const sumAll = function(inp1, inp2) {
    let min, max, temp;

    if (typeof(inp1) === 'number' && Number.isInteger(inp1))
    {
        if (typeof(inp2) === 'number' && Number.isInteger(inp2))
        {
            if (inp1 > 0 && inp2 > 0)
            {
                min = inp1;
                max = inp2;
                if ( max < min)
                {
                    temp = min;
                    min = max;
                    max = temp;
                }
                /*For returning the sum, I am choosing to go with a loop 
                rather n*(n+1)/2 formula to accommodate ranges that don't start from 1 */
                let sumIntegers = 0;
                for (let i = min; i <= max; i++)
                {
                    sumIntegers +=i;
                }
                return sumIntegers;
            }
        }
    } 
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
