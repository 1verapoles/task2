/*Алгоритм такой: сначала проверяем от текущей ячейки ячейки слева, справа, снизу, сверху по условию, если там "+" и не были ли мы там уже. Если такая ячейка есть, то переходим в нее, если нет - то возвращаемся по пройденному пути на шаг назад*/
let A = [
    ['#','#','#','#','#','#','#','#','#'],  
    ['#','+','+','+','#','+','+','+','#'],  
    ['#','+','#','+','#','+','#','+','#'],  
    ['+','+','#','+','0','+','#','+','#'],  
    ['#','#','#','+','#','#','#','#','#'],  
    ['#','#','+','+','#','#','#','#','#'],  
    ['#','#','+','#','#','#','#','#','#'],  
    ['#','#','#','#','#','#','#','#','#']  
  ];

  
let rows = A.length;
let columns = A[0].length;
let endX = rows - 1;
let endY = columns - 1;
let newRow;
let newCol;
let Q = [];
let distance = Array(rows).fill().map(() => Array(columns).fill(-1));
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        if (A[i][j] === '0') {distance[i][j] = 0; Q.push([i,j]); 
          newRow = i; newCol = j; break;}
    }
}

function makeText(arr) {
  let result = [];
  for (let j = 0; j < arr.length - 1; j++) {
    let rowD = arr[j + 1][0] - arr[j][0];
    let colD = arr[j + 1][1] - arr[j][1];
    if (colD === -1) {result.push('left');}
    if (colD === 1) {result.push('right');}
    if (rowD === -1) {result.push('top');}
    if (rowD === 1) {result.push('bottom');}
}
console.log(result);
return result;
}



function checkIfEnd(newRow, newCol) {
  if (newRow === 0 || newCol === 0 || newRow === endX || newCol === endY) {
    return makeText(Q);
  }
}

while ((newRow !== 0 || newCol !== 0 || newRow !== endX || newCol !== endY) && Q.length > 0) {
if (A[newRow - 1][newCol] === "+" && distance[newRow - 1][newCol] === -1) {  
  distance[newRow - 1][newCol] = 0;
  Q.push([newRow - 1,newCol]);
  newRow = newRow - 1;
  checkIfEnd(newRow, newCol);
} else if (A[newRow + 1][newCol] === "+" && distance[newRow + 1][newCol] === -1) {  
  distance[newRow + 1][newCol] = 0;
  Q.push([newRow + 1, newCol]);
  newRow = newRow + 1;
  checkIfEnd(newRow, newCol);
} else if (A[newRow][newCol - 1] === "+" && distance[newRow][newCol - 1] === -1) {  
  distance[newRow][newCol - 1] = 0;
  Q.push([newRow, newCol - 1]);
  newCol = newCol - 1;
  checkIfEnd(newRow, newCol);
} else if (A[newRow][newCol + 1] === "+" && distance[newRow][newCol + 1] === -1) {  
  distance[newRow][newCol + 1] = 0;
  Q.push([newRow, newCol + 1]);
  newCol = newCol + 1;
  checkIfEnd(newRow, newCol);
} else {
  let intermed = Q.pop();
  newRow = intermed[0];
  newCol = intermed[1];
}
}
  

