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
	const Sqrt = "√";
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
	const numbers = [zero, one, two , three, four, five, six, seven, eight, nine, Sqrt];
	
	//add event listener for each #
	for (let i = 0; i < numbers.length; i++) {
		domId(numbers[i]).addEventListener('click', (event) => {
				number(numbers[i]);
		});		
	}

	for (let i = 0; i < 10; i++) {
		document.addEventListener("keydown", (event) => {
			if (event.keyCode === (96 + i) || event.keyCode === (48 + i)) {
				number(numbers[i]);
			}
		});
	}
	
	//add event listeners for operators (+,-,x,/)
	for (let i = 0; i < 4; i++) {
		domId(operators[i]).addEventListener('click', (event) => {
			addOperator(operators[i]);
		});	
	}

	document.addEventListener('keydown', (event) => {
			
			if (event.keyCode === 107) {
				addOperator("+");
			}	
				else if (event.keyCode === 109) {
					addOperator("-");
				}			

				else if (event.keyCode === 106) {
					addOperator("x");
				}

				else if (event.keyCode === 111) {
					addOperator("/");
				}

				else if (event.keyCode === 13) {
					answer();
				}
});	
	
	//event listener for equals
	domId(equals).addEventListener('click', (event) => {
			answer();
		});
	
	//clears texts and clears element variable
	domId(clear).addEventListener('click', (event) => {
			clearEl();
			clearText();
			solution = "";
		});
	
	//decimal event listener
	domId(decimal).addEventListener('click', (event) => {
			addDecimal();			
	});
	
	//negative-postive event listener
	domId(negative).addEventListener('click', (event) => {
			addNegative();					
	});
	
	//percent event listener
	domId(percent).addEventListener('click', (event) => {
			addPercent();
	});

	document.addEventListener("keydown", (event) => {

	});

	//--global functions--//
	
	//clears elements for first number, second number, and operator
	function clearEl() {
			first = "";			
			second = "";			
			operator = "";			
	}
	
	//clears all text on display
	function clearText() {
			firstEl.textContent = "";
			secondEl.textContent = "";
			operatorEl.textContent = "";
			solutionEl.textContent = "";
	}
	
	//adds operator(+,-,x,/)
	function addOperator(op) {
		if (first === "") {
			solutionEl.textContent = "";
			secondEl.textContent = "";
			number(solution);
		}

		operator = op;
		operatorEl.textContent = op;
	}

	function addDecimal() {
		if (operator === "") {
				if (first.includes(dec)) {
					return false;
				}	
					else if (first === "") {
						first += "0";
					}	
		}	
			else if (operator != "") {
				if (second.includes(dec)) {
					return false;
			} 
				else if (second === "") {
					second += "0";
				}
		}
		number(dec);
	}

	function addNegative() {
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
	}

	function addPercent() {
		if (operator === "") {
			if (first != "") {
				first += per;
				firstEl.textContent = first;
			}	
				else {
					error();
				}						
		} 
			else if (operator != "") {
				if (second != "") {
					second += per;
					secondEl.textContent = second;
				}	
					else {
						error();	
					}								
			}
	}

	//function that adds each number to a string and shows it on display
	function number(num) {		
		if (first === "") {
			clearText();
		}

		if (operator === "") {			
			first += num;
			firstEl.textContent = first;			
		}  

			else if (operator != "") {		
				second += num;
				secondEl.textContent = second;
			}
					
	}

	//--Calculation functions--//
	function percentage(num) {
		return num / 100; 
	}

	function squareRoot(num) {
		return Math.sqrt(num.slice(1));
	}

	//calculates solution
	function answer() {
		let a = first;
		let b = second;

		if (first.includes(per)) {
			a = percentage(parseInt(a));
		}	
			else if (first.includes(dec)) {
				a = parseFloat(a);
			}

			else if (first.includes(Sqrt)) {
				a = squareRoot(a);
			}

			else {
				a = parseInt(first);
			}		

		if (second.includes(per)) {
			b = percentage(parseInt(second));
		}	
			else if (second.includes(dec)) {
				b = parseFloat(b);
			}

			else if (second.includes(Sqrt)) {
				b = squareRoot(b);
			}

			else {
				b = parseInt(b);
			}

		if (operator === "+") {
			solution = (a + b);
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

			else {
				error();
			}


		solutionEl.textContent = solution;
		clearEl();
	}

	function error() {
		solutionEl.textContent = "An error has occured";
	}	
} 


//sets event listeners onload
window.addEventListener('load', (event) => {
	setEventListeners();
})