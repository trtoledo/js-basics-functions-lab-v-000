function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet(blockNumber){
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(departureBlock, arrivalBlock){
  return Math.abs(arrivalBlock - departureBlock) * 264
}

function calculatesFarePrice (departureBlock, arrivalBlock){
  //return distanceTravelledInFeet(departureBlock, arrivalBlock)

  switch (distanceTravelledInFeet(departureBlock, arrivalBlock) - 400) {
  case '<= 0':
    return 0;
    break;
  case '> 0 && 1600':
    return (distanceTravelledInFeet(departureBlock, arrivalBlock)- 400) * 0.02
    break;
  case '> 1600 && < 2100':
    return 25;
    break;
  case '< 2100':
    return "cannot travel that far";
    break;
}

}

// Code your solution in this file!
