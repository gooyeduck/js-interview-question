function showVariable() {
  console.log("variable name is ", name);
  console.log("variable name is ", age);
  var name = "John Doe";
  let age = 99;
}

showVariable();

//variable name is undefined
// ReferenceError: age is not defined