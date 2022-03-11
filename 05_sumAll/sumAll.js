const sumAll = function(num1, num2) {
  let resault = 0;
  let bigNum;
  let smallNum;

  if (num1 >= 0 && typeof(num1) == 'number'  && typeof(num2) == 'number') {
    if (num1 > num2){
      bigNum = num1;
      smallNum = num2;

    } else {
      bigNum = num2;
      smallNum = num1;
    }

    for (; smallNum <= bigNum; smallNum++) {
      resault += smallNum;
    }

    return resault;

  } else {
    return 'ERROR'
  }



};

// Do not edit below this line
module.exports = sumAll;
