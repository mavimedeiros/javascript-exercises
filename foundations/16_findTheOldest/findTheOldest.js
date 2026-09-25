// Find person with greatest age
// Find the oldest person if yearOfDeath is undefined. The person is alive to this day so use current year date.
// Find the oldest person if yearOfDeath is undefined for the oldest person. Oldest person found is still alive.
// If year of death is undefined define current year as to find their age.

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// const findTheOldest = function(people) {
//     return people.sort(function(a, b) {
//         const firstPerson = getAge(a.yearOfDeath, a.yearOfBirth);
//         const nextPerson = getAge(b.yearOfDeath, b.yearOfBirth);
//         return firstPerson < nextPerson ? b : a;
//     });
// };


const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
