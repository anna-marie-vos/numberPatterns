

const rolledNumbers = [
  [1,19,25,30,32,36,9],
  [12,16,17,25,38,39,6],
  [1,9,16,26,33,36,2],
  [1,2,11,26,28,34,9],
  [2,14,15,24,27,29,8],
  [2,13,23,26,27,32,3],
  [20,23,30,32,35,39,10],
  [1,2,9,11,26,36,10],
]
console.log('hello');

function frequency(numbers){
  //loops through all the numbers an counts how many times the number appeared
  // typical numbersCount data type = [{1:0},{2:0}]
  const numbersCount = [{1:0}]
  numbers.map(function(sequence){
    return sequence.map(function(ball){
      return numbersCount.map(function(recordedCount){
        const currentRecordedNum = parseInt(Object.keys(recordedCount)[0])
        console.log('recordedCount.key', " ball ", ball );
        if(currentRecordedNum === ball){
          console.log('object[key]',recordedCount[currentRecordedNum]);
        //   recordedCount[ball] +=1
        //   console.log('numbersCount: ', numbersCount);
        // } else {
        //   numbersCount.push({ball:1})
        //
        }
      })
    })
  })
}

frequency(rolledNumbers)
