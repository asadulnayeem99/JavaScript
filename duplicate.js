var marks = [45, 58, 68, 25, 54, 58, 68, 99, 100, 885, 45, 245, 54, 48];

var unique = [];
for (var i = 0; i < marks.length; i++) {
  var element = marks[i];
  var index = unique.indexOf(element);
  if (index == -1) {
    unique.push(element);
  }
}
console.log(unique);
console.log(marks.indexOf(17));