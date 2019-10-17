

document.querySelector("#newGame").addEventListener("click", function () {
	window.location.reload()
})




function generate() {


	var numbers = [];


	for (var i = 0; i < 6; i++) {
		var add = true;
		var randomNumber = Math.floor(Math.random() * 48) + 1;
		for (var y = 0; y < 48; y++) {
			if (numbers[y] == randomNumber) {
				add = false;
			}
		}
		if (add) {
			numbers.push(randomNumber);
		} else {
			i--;
		}
	}

	var highestNumber = 0;
	for (var m = 0; m < numbers.length; m++) {
		for (var n = m + 1; n < numbers.length; n++) {
			if (numbers[n] < numbers[m]) {
				highestNumber = numbers[m];
				numbers[m] = numbers[n];
				numbers[n] = highestNumber;
			}
		}
	}

	return numbers

}

document.getElementById("play").addEventListener("click", function () {
	for (i=1; i<=4; i++) {
		document.getElementById(`p${i}`).value = generate();

	}
	

})

