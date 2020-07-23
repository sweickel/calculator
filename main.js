function setEventListeners() {
	const domId = document.getElementById.bind(document);
	let first = "";
	let second = "";
	let operator = "";
	let solution = "";
	const firstEl = domId('first');
	const secondEl = domId('second');
	const operatorEl = domId('operator');
	const solutionEl = domId('solution');
	const clear = "clear";
	const equals = "equals";
	const decimal = "decimal";
	const negative = "negative";
	const add = "+";
	const subtract = "-";
	const sqrt = "sqrt";
	const Sqrt = "√"
	const percent = "percent";
	const per = "%";
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
		domId(numbers[i]).addEventListener('click', (event) => {
				number(numbers[i]);
		});
	}

	for (let i = 0; i < 4; i++) {
		domId(operators[i]).addEventListener('click', (event) => {
			addOperator(operators[i]);
		})
	}

	domId(equals).addEventListener('click', (event) => {
			answer();
		});

	domId(clear).addEventListener('click', (event) => {
			clearAll();
		});

	domId(decimal).addEventListener('click', (event) => {
			
			if (operator === "") {
				
				if (first.includes(dec)) {
					return false;
				} 
					else if (second.includes(dec)) {
						return false;
					}
			
				number(dec);
			}
		});

	domId(negative).addEventListener('click', (event) => {
			
			if (operator === "") {
				
				if (first.includes(subtract)) {
					first = first.split("-").pop();
				} 
					else if (!first.includes(subtract)) {
						first = (subtract + first);
					}						
				
				firstEl.textContent = first;
			
			} 

			else if (operator != "") {
				
				if (second.includes(subtract)) {
					second = second.split("-").pop();					
				} 
					else if (!second.includes(subtract)) {
						second = (subtract + second);
					}						
				
				secondEl.textContent = second;
			}		
	});

	domId(percent).addEventListener('click', (event) => {
		if (operator === "") {
			first += per;
			firstEl.textContent = first;
		} 
			else if (operator != "") {
				second += per;
				secondEl.textContent = second;
			}
	});

	domId(sqrt).addEventListener('click', (event) => {
		
		if (first === "") {
			operator = Sqrt;
			first += Sqrt;
			firstEl.textContent = first;			
		} 
			else {
				error();
			}
		
	});

	


	//global functions
	function clearAll() {
		first = "";
			firstEl.textContent = "";
			second = "";
			secondEl.textContent = "";
			operator = "";
			operatorEl.textContent = "";
			solution = "";
			solutionEl.textContent = "";
	}

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
		if (operator === Sqrt) {
				first += parseInt(num);
				firstEl.textContent = first;
			}

			else if (operator === "") {
				first += num;
				firstEl.textContent = first;
			}  

			else if (operator != "") {
				second += num;
				secondEl.textContent = second;
			}			
	}

	function percentage(num) {
		return num / 100; 
	}

	function squareRoot(num) {
		return Math.sqrt(num);
	}	

	function answer() {
		let a = parseInt(first);
		let b = parseInt(second);

		if (first.includes(per)) {
			a = percentage(a);
		}	

		else if (second.includes(per)) {
			b = percentage(b);
		}

		else if (operator === "+") {
			solution = a + b;
		} 		
			else if (operator === "-") {
				solution = a - b;
			} 

			else if (operator === "x") {
				solution = a * b;
			} 

			else if (operator === "/") {
				solution = a / b;
			} 

			else if (operator === "") {
				solution = a;
			}

			else if (operator === Sqrt) {
				solution = squareRoot(a);
			}

			else {
				error();
			} 
			
		solutionEl.textContent = solution;
		first = "";
		second = "";
		operator = "";
	}

	function error() {
		solutionEl.textContent = "An error has occured";
	}	
} 


//sets event listeners onload
window.addEventListener('load', (event) => {
	setEventListeners();
})