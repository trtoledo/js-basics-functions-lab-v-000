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
  let distanceAfter400Feet = distanceTravelledInFeet(departureBlock, arrivalBlock)

  switch (distanceAfter400Feet) {
  case '<= 400':
    return 0;
    break;
  case '> 400 && 2000':
    return (distanceAfter400Feet) * 0.02
    break;
  case '> 2000 && < 2500':
    return 25;
    break;
  case '< 2100':
    return "cannot travel that far";
    break;
}

}

// Code your solution in this file!
