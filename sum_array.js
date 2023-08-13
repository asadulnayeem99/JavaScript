
function summationArray(numbers){
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

var marks = [25, 54, 58, 68, 99, 100, 885, 45, 245, 54, 48];
var results = summationArray(marks);
console.log(results);
