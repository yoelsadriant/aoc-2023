import fs from 'fs';

function partOne(file) {
  const lines = fs.readFileSync(file, 'utf8').trim('').split('\r\n');
  console.log(lines);
  const sum = 0;
  const outputNumbers = lines.map((line) => {
    const first = line.split('').find((char) => !Number.isNaN(Number(char)));
    const last = line.split('').findLast((char) => !Number.isNaN(Number(char)));
    const result = first + last;
    sum += Number.parseInt(result);
    return first + last;
  });
  console.log(sum);
  return sum;
}

// partOne('./example1.txt')
// partOne('./input1.txt')

function partTwo(file) {
  const lines = fs.readFileSync(file, 'utf8').trim('').split('\r\n');
  console.log(lines);
  const numberMapping = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let sum = 0;
  const outputNumbers = lines.map((line) => {
    const regexFirst = Object.keys(numberMapping).join('|')
    const regexLast = regexFirst.split('').reverse().join('')
    const matcherFirst = new RegExp(`${regexFirst}|\\d`, 'g')
    const matcherLast = new RegExp(`${regexLast}|\\d`, 'g');
    const firstFind = line.match(matcherFirst)[0];
    const lastFind = line.split('').reverse().join('').match(matcherLast)[0].split('').reverse().join('');
    const firstNumber = numberMapping[firstFind]? numberMapping[firstFind] : firstFind;
    const lastNumber = numberMapping[lastFind]? numberMapping[lastFind] : lastFind;
    const result = `${firstNumber}${lastNumber}`;
    sum += Number.parseInt(result);
    return result;
  });
  console.log(sum);
  return sum;
}

// partTwo('./example2.txt');
// partTwo('./input2.txt');
