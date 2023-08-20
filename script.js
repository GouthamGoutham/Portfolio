function fn_validate(){
	var u_name = document.getElementById("u_name").value;
	var pass = document.getElementById("pass").value;
	var U_alert_msg = document.getElementById("alert_U");
	var P_alert_msg = document.getElementById("alert_P");
	U_alert_msg.style.display = "none";
	P_alert_msg.style.display = "none";
	U_alert_msg.innerHTML = '';
	P_alert_msg.innerHTML = '';
	var is_uname_num = isNaN(u_name);
	if((u_name=='')&&(pass=='')){
		U_alert_msg.style.display = "block";
		U_alert_msg.innerHTML = 'Username and password should not be empty';
		return false;
	}
	else if(pass=='' && u_name!=''){
		P_alert_msg.style.display = "block";
		P_alert_msg.innerHTML = 'Password should not be empty';
		return false;
	}
	else if(u_name=='' && pass!=''){
		U_alert_msg.style.display = "block";
		U_alert_msg.innerHTML = 'Username should not be empty';
		return false;
	}
	else if(is_uname_num==false){
		U_alert_msg.style.display = "block";
		U_alert_msg.innerHTML = 'Username should not starts with a Number';
		return false;
	}
	else if(u_name=='Goutham'&&pass=='Goutham@1234'){
		window.location.href = "Portfolio/portfolio.html";
	}
	else if(u_name!='Goutham'||pass!='Goutham@1234'){
		U_alert_msg.style.display = "block";
		U_alert_msg.innerHTML = 'Incorrect Username & password. Please enter the valid password';
		return false;
	}
	else{
		U_alert_msg.style.display = "block";
		U_alert_msg.innerHTML = 'Something went wrong.Please contact "Goutham"';
		return false;
	}
}


function Init(){
	var U_alert_msg = document.getElementById("alert_U");
	var P_alert_msg = document.getElementById("alert_P");
	U_alert_msg.style.display = "none";
	P_alert_msg.style.display = "none";
	
}

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#pass');

  togglePassword.addEventListener('click', function (e){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
}); 

Init();