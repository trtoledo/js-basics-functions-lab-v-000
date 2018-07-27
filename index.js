function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet(blockNumber){
  return distanceFromHqInBlocks(blockNumber) * 264;
}
// Code your solution in this file!
