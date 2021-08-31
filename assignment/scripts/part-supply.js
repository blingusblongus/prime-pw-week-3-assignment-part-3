console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 4, -6, 0, 7, 11];

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
let removed = supplyChanges.pop();
console.log(removed);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');

for(let i=0; i<supplyChanges.length; i++){
  let val = supplyChanges[i];
  if(val > 0){
    console.log(`Added ${val} parts.`);
  }else if(val === 0){
    console.log('No Change');
  }else if(val < 0){
    val *= -1; // not technically asked for in the question, but reads better
    console.log(`Removed ${val} parts.`);
  }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');

for(let el of supplyChanges){
  if(el > 0){
    console.log(`Added ${el} parts.`);
  }else if(el === 0){
    console.log('No Change');
  }else if(el < 0){
    el *= -1; // not technically asked for in the question, but reads better
    console.log(`Removed ${el} parts.`);
  }
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');

let count = 0;
while(count<supplyChanges.length){
  let val = supplyChanges[count];
  if(val > 0){
    console.log(`Added ${val} parts.`);
  }else if(val === 0){
    console.log('No Change');
  }else if(val < 0){
    val *= -1; // not technically asked for in the question, but reads better
    console.log(`Removed ${val} parts.`);
  }
  count++;
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');

let total = 0;
for(let el of supplyChanges){
  total += el;
}
console.log(total);
