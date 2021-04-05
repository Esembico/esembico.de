function calculate()
{
	input_value = document.getElementById("input-value").value;
	if (Number.isNaN(input_value)) return '';
	var len = input_value.length;
	var parity = len % 2;
	var sum = 0;
	for (var i = len-1; i >= 0; i--)
	{
		var d = parseInt(input_value.charAt(i));
		if (i % 2 != parity) { d *= 2 }
		if (d > 9) { d -= 9 }
		sum += d;
	}	 
	check_number = 10 - (sum % 10).toString();
	if (check_number == 10) {
		check_number = 0;
	}
	document.getElementById("check_number").innerHTML = check_number
		uic = input_value.concat(check_number);
		document.getElementById("uic").innerHTML = uic
return (sum % 10).toString();
}
