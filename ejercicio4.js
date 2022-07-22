const MAX_NUMBER_ELECTION = 6;
const MIN_NUMBER_ELECTION = 1;
let cpuNumElection1 = 0
let cpuNumElection2 = 0
for (let i = 0; i <= 6000; i++) {
  cpuNumElection1 = Math.floor((Math.random() * MAX_NUMBER_ELECTION - MIN_NUMBER_ELECTION + 1) + MIN_NUMBER_ELECTION);
  cpuNumElection2 = Math.floor((Math.random() * MAX_NUMBER_ELECTION2 - MIN_NUMBER_ELECTION2 + 1) + MIN_NUMBER_ELECTION);
  const array = [cpuNumElection1 + cpuNumElection2]
}
console.log("")
