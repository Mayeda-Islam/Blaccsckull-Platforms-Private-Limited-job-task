// p1 and p2 are two persons:
// P1 thinks even numbers are lucky for him and randomly rolls a dice once and
// cuts a square from a sheet of paper with side value = value on dice only when
// there is an even number
// P2 who doesn't believe in luck however rolls the dice twice and cuts a
// rectangle with length as first roll value and breadth as second roll value.

//calculate the average of area cut by P1
let totalAreaP1 = 0;
let totalCountP1 = 0;
const calculateAverageAreaByP1 = () => {
  for (i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
      totalAreaP1 += i * i;
    }
    totalCountP1++;
  }
  return totalAreaP1 / totalCountP1;
};

let totalAreaP2 = 0;
let totalCountP2 = 0;

const calculateAverageAreaByP2 = () => {
  for (i = 1; i <= 6; i++) {
    for (j = 1; j <= 6; j++) {
      totalAreaP2 += i * j;
      totalCountP2++;
    }
  }
  return totalAreaP2 / totalCountP2;
};

const p1AverageArea = calculateAverageAreaByP1();
const p2AverageArea = calculateAverageAreaByP2();
console.log(p1AverageArea, p2AverageArea);
p1AverageArea === p2AverageArea
  ? "P1 and P2 cut the same average area."
  : p1AverageArea > p2AverageArea
  ? "cuts a larger average area."
  : "P2 cuts a larger average area.";
