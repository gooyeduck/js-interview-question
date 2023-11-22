# JS Interview Questions
---

| Question | Answer |
| -------- | ------ |
| [What is closure in JavaScript?](#closure-in-javascript) | [Answer](#closure-in-javascript) |
| [Explain event delegation in JavaScript.](#event-delegation-in-javascript) | [Answer](#event-delegation-in-javascript) |
| [What are the differences between `let`, `var`, and `const`?](#differences-between-let-var-const) | [Answer](#differences-between-let-var-const) |

## Closure in JavaScript
Closure is a fundamental concept in JavaScript where a function retains access to its lexical scope, even after the function has finished executing. It means the function 'remembers' its surrounding scope's variables and parameters, even if it's called outside of that scope.

### Example:
```javascript
function outerFunction() {
  let outerVariable = 'I am from the outer function';
  
  return function innerFunction() {
    console.log(outerVariable);
  }
}

let newFunction = outerFunction();
newFunction(); // Output: I am from the outer function

```
<a name="closure-in-javascript"></a>

