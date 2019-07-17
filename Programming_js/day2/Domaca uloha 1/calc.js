		function Enable() {
			if (document.getElementById('round').checked = true) {
				document.getElementById('hore').disabled = false;
				document.getElementById('dole').disabled = false;
			}else {
				document.getElementsByName('horedole').disabled = true;
			}
		}

		function Spocitaj() {
			let number1 = Number(document.getElementById('textinput1').value);
			let number2 = Number(document.getElementById('textinput2').value);
		
			if (document.getElementById('round').checked == true && document.getElementById('hore').checked == true){
			    document.getElementById('textoutput1').value = Math.ceil(number1 + number2);
			} else if (document.getElementById('round').checked == true && document.getElementById('dole').checked == true){
				document.getElementById('textoutput1').value = Math.floor(number1 + number2);
			} else if (document.getElementById('round').checked == true) {
				alert('Vyber, ci zaokruhlit nahor alebo nadol!');
			} else {
				document.getElementById('textoutput1').value = number1 + number2;
			}
		}

		function Odcitaj() {
			let number3 = Number(document.getElementById('textinput3').value);
			let number4 = Number(document.getElementById('textinput4').value);

			if (document.getElementById('round').checked == true && document.getElementById('hore').checked == true){
			    document.getElementById('textoutput2').value = Math.ceil(number3 - number4);
			} else if (document.getElementById('round').checked == true && document.getElementById('dole').checked == true){
				document.getElementById('textoutput2').value = Math.floor(number3 - number4);
			} else if (document.getElementById('round').checked == true) {
				alert('Vyber, ci zaokruhlit nahor alebo nadol!');
			} else {
				document.getElementById('textoutput1').value = number3 - number4;
			}
		}
		
		function Vynasob() {
			let number5 = Number(document.getElementById('textinput5').value);
			let number6 = Number(document.getElementById('textinput6').value);

			if (document.getElementById('round').checked == true && document.getElementById('hore').checked == true){
			    document.getElementById('textoutput3').value = Math.ceil(number5 * number6);
			} else if (document.getElementById('round').checked == true && document.getElementById('dole').checked == true){
				document.getElementById('textoutput3').value = Math.floor(number5 * number6);
			} else if (document.getElementById('round').checked == true) {
				alert('Vyber, ci zaokruhlit nahor alebo nadol!');
			} else {
				document.getElementById('textoutput3').value = number5 * number6;
			}
		}	
				
		function Vydel() {
			let number7 = Number(document.getElementById('textinput7').value);
			let number8 = Number(document.getElementById('textinput8').value);

			if (document.getElementById('round').checked == true && document.getElementById('hore').checked == true){
			    document.getElementById('textoutput4').value = Math.ceil(number7 / number8);
			} else if (document.getElementById('round').checked == true && document.getElementById('dole').checked == true){
				document.getElementById('textoutput4').value = Math.floor(number7 / number8);
			} else if (document.getElementById('round').checked == true) {
				alert('Vyber, ci zaokruhlit nahor alebo nadol!');
			} else {
				document.getElementById('textoutput4').value = number7 / number8;
			}
		}
			 
	