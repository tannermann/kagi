const HEARING_TIME_MINS = 30;
const MY_NAME = "Tanner";
const OTHER_DEFENDANTS = "Vladimir Raghu Norman Stephen";
const NUM_JUDGES = 3;

const court = (myName: string, numJudges: number, otherDefendants: string): number => {
  const sortedDefendants = [...otherDefendants.split(" "), myName].sort();

  const myHearingSlot = sortedDefendants.indexOf(myName) + 1;
  return Math.ceil(myHearingSlot / numJudges) * HEARING_TIME_MINS;
};

console.log(court(MY_NAME, NUM_JUDGES, OTHER_DEFENDANTS));

// Benchmarking
const benchmark = (fn: Function, ...args: [string, number, string]) => {
  const start = performance.now();
  const result = fn(...args);
  const end = performance.now();
  console.log(`Result: ${result}`);
  console.log(`Execution time: ${end - start} ms`);
};
benchmark(court, MY_NAME, NUM_JUDGES, OTHER_DEFENDANTS);

/*

First iteration:
1. Sort defendents by name
2. Get my hearing index
3. Get hearing slot in human terms (+1)
4. Find out how long court will be in total (determine it isn't needed)
5. Find out how many 30 mins chunks court will need to remain open while adjudication occurs (determine it isn't needed)
6. Find out how long I have to spend in court

Second iteration:
1. Removed unnecessary variables: notMeDefendants, allDefendants

Third iteration:
1. Return the result of the calculation directly

*/
