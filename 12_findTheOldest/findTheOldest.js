const findTheOldest = function(people) {
    let peopleAge = people.map(person => ({
        name: person["name"],
        age: (person["yearOfDeath"] ? person["yearOfDeath"] : new Date().getFullYear()) - person["yearOfBirth"]
    }));

    peopleAge = peopleAge.reduce((person1, person2) => {
        return (person1.age > person2.age) ? person1 : person2;
    });

    return peopleAge;
};

// Do not edit below this line
module.exports = findTheOldest;
