var marks = [25, 54, 58, 68, 99, 100, 885, 45, 245, 54, 48];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
  var element = marks[i];
  if (element > max) {
    max = element;
  }
}
console.log(max);
