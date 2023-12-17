const push = () => {
  let array = [1, 2, 3];
  array.push(4);
   // retorna [1, 2, 3, 4]
  console.log(array);
};

const unshift = () => {
  let array = [2, 3, 4];
  array.unshift(9);
  console.log(array);
  //return array; // retorna [1, 2, 3, 4]
};

const pop = () => {
  let array = [1, 2, 3, 4];
  array.pop(); // retorna [1, 2, 3]
  console.log(array);
};

const map = () => {
  let array = [1, 2, 3];
  const mappedArray = array.map((x) => x * x); // retorna [1, 4, 9]
  console.log(mappedArray);
};

const forEach = () => {
  let array = [1, 2, 3];
  array.forEach((item) => console.log(item));
};

const filter = () => {
  let array = [1, 2, 3, 4, 5];
  const filtered = array.filter((x) => x % 2 === 0); // retorna [2, 4]
  console.log(filtered);
};

const find = () => {
  let array = [1,4,2, 3, 3, 4];
  const founded = array.find((x) => x % 2 === 0); // retorna 2
  console.log(founded);
};

const every = () => {
  let array = [2,4, 6, 8];
  const booleanValue = array.every((x) => x % 2 === 0); // retorna true
  console.log(booleanValue);
};

const some = () => {
  let array = [1, 3, 5, 7];
  const booleanValue = array.some((x) => x % 2 === 0); // retorna true
  console.log(booleanValue);
};

const sortArray = () => {
  let array = [3, 1, 4, 1, 5, 9];
  array.sort(); // retorna [1, 1, 3, 4, 5, 9]

  console.log(array);
};

const reduceSum = () => {
  let array = [1, 2, 3, 4];
  const reducedValue =  array.reduce((accumulator, current) => accumulator + current, 0); // retorna 10
  console.log(reducedValue);
};


// push()
// unshift()
// pop();
// map();
// forEach();
// find();   
// every();
// some();
// sortArray();
reduceSum();
