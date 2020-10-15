function Verify()
{
	Name = document.getElementById("name").value;
	Email = document.getElementById("email").value;
	Message = document.getElementById("message").value;
	
	if(Name.length==0||Email.length==0||Message.length==0)
	{
		
		document.getElementById("Error").innerHTML= "Please fill all Data";
		return;
	}
	
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!Email.match(mailformat))
	{
        document.getElementById("Error").innerHTML= "Please Enter Valid Mail";
        return;
	}
	else{
	document.getElementById("Error").innerHTML='Done';	
	}
 return;
}