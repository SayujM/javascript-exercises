const palindromes = function (text) {
    let string1 = '';
    let pattern = /[a-zA-Z0-9]/;
    for (let i = 0, length = text.length; i < length; i++)
    {
        if (pattern.test(text[i]))
        {
            string1 += text[i]
        }
    }
    string1 = string1.toLowerCase();
    let string2 = string1.split('').reverse().join('');
    if (string1 === string2)
    {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
