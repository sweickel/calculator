function setEventListeners() {
	let first = "";
	let second = "";
	let operator = "";
	let solution = "";
	const firstEl = document.getElementById('first');
	const secondEl = document.getElementById('second');
	const operatorEl = document.getElementById('operator');
	const solutionEl = document.getElementById('solution');
	const clear = "clear";
	const equals = "equals";
	const decimal = "decimal";
	const negative = "negative";
	const add = "+";
	const subtract = "-";
	const sqrt = "sqrt";
	const percent = "percent";
	const divide = "/";
	const multiply = "x";
	const operators = [add, subtract, multiply, divide];
	const dec = ".";
	const zero = "0";
	const one = "1";
	const two = "2";
	const three = "3";
	const four = "4";
	const five = "5";
	const six = "6";
	const seven = "7";
	const eight = "8";
	const nine = "9";
	const numbers = [zero, one, two , three, four, five, six, seven, eight, nine];

	for (let i = 0; i < 10; i++) {
		document.getElementById(numbers[i]).addEventListener('click', (event) => {
				number(numbers[i]);
		});
	}

	for (let i = 0; i < 4; i++) {
		document.getElementById(operators[i]).addEventListener('click', (event) => {
				addOperator(operators[i]);
		})
	}

	document.getElementById(equals).addEventListener('click', (event) => {
			answer();
		});

	document.getElementById(clear).addEventListener('click', (event) => {
			first = "";
			firstEl.textContent = "";
			second = "";
			secondEl.textContent = "";
			operator = "";
			operatorEl.textContent = "";
			solution = "";
			solutionEl.textContent = "";
		});

	document.getElementById(decimal).addEventListener('click', (event) => {
			number(".");
		});

	function addOperator(op) {
		if (first === "") {
			solutionEl.textContent = "";
			secondEl.textContent = "";
			number(solution);
		}		
		operator = op;
		operatorEl.textContent = op;
	}

	function number(num) {
		if (operator === "") {
			first += num;
			firstEl.textContent = first;
		} else if (operator != "") {
			second += num;
			secondEl.textContent = second;
		}			
	}

	function answer() {
		const a = parseInt(first);
		const b = parseInt(second);
		if (operator === "+") {
			solution = a + b;
		} else if (operator === "-") {
			solution = a - b;
		} else if (operator === "x") {
			solution = a * b;
		} else if (operator === "/") {
			solution = a / b;
		} 
			solutionEl.textContent = solution;
			first = "";
			second = "";
			operator = "";
	}
} 



//sets event listeners onload
window.addEventListener('load', (event) => {
	setEventListeners();
})