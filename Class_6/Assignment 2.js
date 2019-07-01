var inpArray = [1, 2, 2, 3, 4, 2, 2, 4];



function clearDupes(inpArray) {

  const undupArray = [];
  const count = inpArray.length;

  for (let i = 0; i < count; i++){
    if (inpArray[i] === inpArray[i + 1]) {
      continue;
    }
    undupArray.push(inpArray[i]);
  }
  return undupArray;
}