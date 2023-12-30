import fs from 'fs';

function partOne(file) {
  const maxCombinations = { red: 12, green: 13, blue: 14 };
  const lines = fs.readFileSync(file, 'utf8').trim('').split('\r\n');
  let sum = 0;
  const sets = lines.map((line, index) => {
    const gameCount = index + 1;
    const result = line
      .split(':')[1]
      .split(';')
      .reduce((acc, set) => {
        // console.log('set', set);
        const items = set.split(',').reduce((iAcc, item) => {
          const color = item.trim('').split(' ')[1];
          const number = Number.parseInt(item.trim('').split(' ')[0]);
          return iAcc && (maxCombinations[color] > number);
        }, true);
        // console.log('items', items);
        return acc && items;
      }, true);
    console.log('game id', gameCount , result);
    if (result) sum += gameCount;
    console.log('cursum', sum);
    return result;
  });
//   console.log('set result', sets);
  console.log('sum', sum);
}

// partOne('./example1.txt');
partOne('./input1.txt');
