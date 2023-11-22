# JS Interview Questions
---

| Question | Answer |
| -------- | ------ |
| [Question 1](#001) | [Answer](#001) |
| [Question 2](#001) | [Answer](#002) |

## Question 1
```javascript
function showModal() {
  console.log(showModal.timeout);
}

showModal();
showModal.timeout = 200;

showModal.timeout = 100;
showModal()

/*
* Output
*
* First output : undefined
* Second output : 100
*
*/

```

**First Output (First Function Call):** It shows undefined because showModal.timeout is not defined initially within the function, and no value has been assigned to it yet.

**Second Output (Second Function Call):** It displays 100 because before the second function call, showModal.timeout is explicitly set to 100. Hence, the function accesses and logs this updated value.


<a name="001"></a>

## Question 2
```javascript
function showVariable() {
  console.log("variable name is ", name);
  console.log("variable name is ", age);
  var name = "John Doe";
  let age = 99;
}

showVariable();

/*
* Output
*
* variable name is undefined
* ReferenceError: age is not defined
*
*/

```

First Log Statement (console.log("variable name is ", name)):

var variables are hoisted to the top of their scope but are initialized with undefined. So, var name gets hoisted but is undefined at this point. Printing it would result in undefined.
Second Log Statement (console.log("variable name is ", age)):

let variables are hoisted as well but are not initialized (unlike var which gets initialized with undefined). Accessing let variables before their declaration results in a ReferenceError. Therefore, trying to access age before its declaration throws an error.
Variable Declarations (var name = "John Doe"; let age = 99;):

name is a var variable, so it gets initialized to "John Doe" at this line.
age is a let variable, which is also initialized at this line and holds the value 99.
However, since age is accessed before its declaration using let, it will throw a ReferenceError. Meanwhile, name is accessed before its assignment, so it logs as undefined.

<a name="002"></a>

