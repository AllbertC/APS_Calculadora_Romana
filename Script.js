		
function somar() {
	let v1 = parseInt(romanoParaDecimal(document.querySelector('#n1').value))

	let v2 = romanoParaDecimal(document.querySelector('#n2').value)

	let v3 = (parseInt(v1)+parseInt(v2))

	let r = document.getElementById('resultado');

	r.innerHTML = parseInt(v3).toString()
	r.innerHTML ='Resultado:<br/>'+decimalParaRomano(v3).toString()
	console.log(v3)
			
}

function dividir() {
	let v1 = parseInt(romanoParaDecimal(document.querySelector('#n1').value))

	let v2 = romanoParaDecimal(document.querySelector('#n2').value)

	let v3 = (parseInt(v1)/parseInt(v2))

	let r = document.getElementById('resultado');

	r.innerHTML = parseInt(v3).toString()
	r.innerHTML = 'Resultado:<br/>'+decimalParaRomano(v3).toString()
	console.log(v3)
}

function multiplicar() {
	let v1 = parseInt(romanoParaDecimal(document.querySelector('#n1').value))

	let v2 = romanoParaDecimal(document.querySelector('#n2').value)

	let v3 = (parseInt(v1)*parseInt(v2))

	let r = document.getElementById('resultado');

	r.innerHTML = parseInt(v3).toString()
	r.innerHTML = 'Resultado:<br/>'+decimalParaRomano(v3).toString()
	console.log(v3)
}

function subtrair() {
	let v1 = parseInt(romanoParaDecimal(document.querySelector('#n1').value))

	let v2 = romanoParaDecimal(document.querySelector('#n2').value)

	let v3 = (parseInt(v1)-parseInt(v2))

	let r = document.getElementById('resultado');

	r.innerHTML = parseInt(v3).toString()
	r.innerHTML = 'Resultado:<br/>'+decimalParaRomano(v3).toString()
	console.log(v3)
}
        



function decimalParaRomano(num){
	var romanToNum = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};

	var roman = "";

	for (let key in romanToNum) {
		
		while (num>= romanToNum[key]){
			roman += key;
			num -= romanToNum[key];
		}
		
	}

	return roman;
}

	console.log(decimalParaRomano(1200))

	


	function romanoParaDecimal(str) {
		// Roman numeral symbol to number converter
		const convert = {
		  I: 1,
		  V: 5,
		  X: 10,
		  L: 50,
		  C: 100,
		  D: 500,
		  M: 1000,
		};
	  
		// initialize the sum
		let sum = 0;
	  
		// the previous symbol value
		let previous = 0;
	  
		// loop through Roman numeral symbols
		for (let i = 0; i < str.length; i++) {
		  // get the converted value and handle unknown symbols
		  const current = convert[str[i]] ?? 0;
	  
		  // add the current symbol value
		  sum += current;
	  
		  // if the left-side symbol is a subtractive notation
		  if (previous < current) {
			// undo the wrongly added number and subtract the left-side value
			sum -= previous + previous;
		  }
	  
		  // the current value is the left-side value for the next loop
		  previous = current;
		}
		
		return sum;
	  };
	  
	  
	  console.log(romanoParaDecimal('XXX'))