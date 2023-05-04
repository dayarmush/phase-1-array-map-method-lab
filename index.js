const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let partOne;
  let partTwo;
  let partThree;
  const theMap = tutorials.map(cases => {
    const words = cases.split(' ')
    const capitalized = words.map( word => {
      partOne = word.slice(0, 1).toUpperCase();
      partTwo = word.slice(1);
      return partThree = partOne + partTwo;
     })
     return capitalized.join(' ')
  })
  return console.log(theMap);
}

titleCased()