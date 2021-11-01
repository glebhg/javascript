const demoList = [1, 2, 3, 7, 7, 9, 9, 1, 2, 3];

function uniques(list) {
  var newList = [];
  for (var i = 0; i < list.length; i++)
    if (newList.indexOf(list[i]) === -1) newList.push(list[i]);
  return newList;
}
console.log(uniques(demoList));

//Use Set

const newList2 = [...new Set(demoList)];
console.log(newList2);
