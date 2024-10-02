function findItemInArray(inpArray, item)
{
    let location = [];
    let inpLength = inpArray.length;
    for (let i = 0; i < inpLength; i++)
    {
        if (inpArray[i] === item)
        {
            location.push(i);
        }
    }
    return location;
}

const removeFromArray = function(...args) {
    let inpArray = args[0];
    let inpLength = args.length;
    for (let i = 1; i < inpLength; i++)
    {
        let item = args[i];
        let location = findItemInArray(inpArray, item);
        let matchCount = location.length;
        if (matchCount === 0)
        {
            continue;
        } else if (matchCount === 1)
        {
            inpArray.splice(location[0],1);
        } else if (matchCount > 1)
        {
            /*
            let n = 1;
            while ( n > 0)
            {
                inpArray.splice(location[0],1);
                location = findItemInArray(inpArray, item);
                n = location.length;
            }
                */
            let spliceCount = 0;
            for (index of location)
            {
                inpArray.splice(index - spliceCount,1);
                spliceCount++;
            }
        }
    }
    return inpArray;
};

// Do not edit below this line
module.exports = removeFromArray;
