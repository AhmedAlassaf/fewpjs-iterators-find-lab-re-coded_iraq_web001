const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let winCheck = arr.find(el => el.result === "W")
  return !!winCheck ? winCheck.year : undefined;
}