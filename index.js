const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let winLose = arr.find(el => el.result === "W")
  return !!winLose ? winLose.year : undefined;
}