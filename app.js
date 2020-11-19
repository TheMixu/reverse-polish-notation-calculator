const stack = [];
let currentNum = '';

function enter(){
  stack.push(currentNum);
  document.getElementById('output').textContent = '';
  let string = '';
  for(let i = 0; i < stack.length; i += 1) {
    string += `${stack[i]  } `;
  }
  document.getElementById('stack').textContent = string;
  currentNum = '';
}

function pushNumber(number){
  currentNum += number;
  document.getElementById('output').textContent = `${currentNum}`;
}

function turn(){
  if(Number(currentNum) > 0){
    currentNum = (`-${currentNum}`);
  } else if (Number(currentNum) < 0) {
    currentNum = (`${Math.abs(currentNum)}`);
  }
  document.getElementById('output').textContent = `${currentNum}`;
}

function calculate (operand) {
  if(stack.length < 2 ){
    alert('not enough operands');
    return;
  }
  const operands = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b,
    '%': (a,b) => a % b,
  };
  const right = stack.pop();
  const left = stack.pop();
  const result = operands[operand](parseFloat(left), parseFloat(right));
  stack.push(parseFloat(result));
  let string = '';
  for(let i = 0; i < stack.length; i += 1) {
    string += `${stack[i]  } `;
  }
  document.getElementById('stack').textContent = string;
}

function clear(full){
  if(full){
    document.getElementById('stack').textContent = '';
    for (let i = 0; i < stack.length; i += 1) {
      stack.pop();
    }
  }
  document.getElementById('output').textContent = '';
  currentNum = '';
}

document.getElementById('r1-1').addEventListener('click', () => clear(false));
document.getElementById('r1-3').addEventListener('click', () => clear(true));
document.getElementById("r5-4").addEventListener('click', enter);
window.addEventListener('keydown', (event)=> {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }
 
  switch(event.key) {
    case "1":
      pushNumber('1');
      break;
    case "2":
      pushNumber('2');
      break;
    case "3":
      pushNumber('3');
       break;
    case "4":
      pushNumber('4');
      break;
    case "5":
      pushNumber('5');
      break;
    case "6":
      pushNumber('6');
      break;
    case "7":
      pushNumber('7');
      break;
    case "8":
      pushNumber('8');
      break;
    case "9":
      pushNumber('9');
      break;
    case "0":
      pushNumber('0');
     break;
    case "Enter":
      enter();
      break;
    case "-":
      calculate('-');
      break;
    case "+":
      calculate('+');
      break;
    case "/":
      calculate('/');
      break;
    case "*":
      calculate('*');
      break;
    case "Backspace":
      clear(false);
      break;
    default: 
      return;
  }
  // Consume the event so it doesn't get handled twice
  event.preventDefault();
}, true);
document.getElementById("r5-1").addEventListener('click', turn);
