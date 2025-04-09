/*

You are at the court for a traffic ticket and there are 4 other people with you. You are told that everyone’s hearing is in alphabetical order and it takes 30 minutes for each hearing. All of the judges are free now and can see one person at a time. How long will it take for your hearing to end?

Your inputs are:

string - your name
int - number of judges
string - names of four other people separated by space

Example:
court(“Jules", 3, "Adam Betty Frank Mike”)
60

court(“Zane", 1, "Mark Hank Ana Vivian")
150

Write the fastest JavaScript routine (include a simple benchmark) that you possibly can. Submit when you can not get it any faster and explain your optimization journey.

*/
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
2. Return the result of the calculation directly

*/
