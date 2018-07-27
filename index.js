function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) * 264;
}
// Code your solution in this file!
