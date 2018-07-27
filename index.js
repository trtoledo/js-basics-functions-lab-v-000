function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet(blockNumber){
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(departureBlock, arrivalBlock){
  return Math.abs(arrivalBlock - departureBlock) * 264


}

// Code your solution in this file!
