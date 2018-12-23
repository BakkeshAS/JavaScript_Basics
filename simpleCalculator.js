function update(value) {
    //Type the code here.
	var butValue = value;
	var inValue = document.getElementById("screen").value;
	var outValue = inValue + butValue;
	document.getElementById("screen").value = outValue;
}

function result() {
    //Type the code here.
	var result;
	var inValue = document.getElementById("screen").value;
	var indexPlus = inValue.indexOf("+");
	var indexMinus = inValue.indexOf("-");
	var indexDivide = inValue.indexOf("/");
	var indexMultiply = inValue.indexOf("*");
	if (indexPlus != -1)
	{
		var inArray = inValue.split("+");
		result = parseInt(inArray[0]) + parseInt(inArray[1]);
		
	}
	else if (indexMinus != -1)
	{
		var inArray = inValue.split("-");
		result = parseInt(inArray[0]) - parseInt(inArray[1]);
	}
	else if (indexDivide != -1)
	{
		var inArray = inValue.split("/");
		result = parseInt(inArray[0]) / parseInt(inArray[1]);
	}
	else if (indexMultiply != -1)
	{
		var inArray = inValue.split("*");
		result = parseInt(inArray[0]) * parseInt(inArray[1]);
	}
	
	document.getElementById("screen").value = result;
}

function form_reset() {
    //Type the code here.
	document.getElementById("screen").value = "";
}
