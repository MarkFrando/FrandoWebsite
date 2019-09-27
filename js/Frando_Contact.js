function validateForm(){	
	var name = document.getElementById("firstName").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var subType = document.getElementById("subType");
	var emailEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var phoneEx = /^[0-9]+-[0-9]+-[0-9]/;
	var subTypeEx = false;

	if(name == "" || name == null){
		alert("Please enter your 'First Name' before submitting the form.");
		return false;
	}
	if(email == "" || email == null){
		alert("Please enter your 'E-mail Address' before submitting the form.");
		return false;
	}else{
		if(emailEx.test(email) == false){
			alert("Enter a valid 'E-mail Address' (a@b.com)");
			return false;
		}
	}
	if(phone == "" || phone == null){
		alert("Please enter your 'Phone Number' before submitting the form.")
		return false;
	}else{
		if(phoneEx.test(phone) == false){
			alert("Enter a valid 'Phone Number'");
			return false;
		}
	}
	if(message == "" || message == null){
		alert("Please enter a 'Message/Comment' before submitting");
		return false;
	}
	for(i=0;i<subType.length;i++){
		if(subType[i].checked == true){
			var subTypeEx = true;
		}
	}
	if(subTypeEx == false){
		alert("Please enter your 'Gender' before submitting the form.");
		return false;
	}
}