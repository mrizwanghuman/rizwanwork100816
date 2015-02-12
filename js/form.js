function Validate () {
	if(document.registration_form.first.value =='')
	{
		alert ("Please fill in your first name");
		return false;
	}
	if(document.registration_form.last.value =='')
	{
		alert ("Please fill in your last name");
		return false;
	}
	if(document.registration_form.password.value =='')
	{
		alert ("Please fill in your password");
		return false;
	}
}