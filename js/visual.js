setTimeout(function(){
					  //location.reload();					  
					  },2000);
		function showP(){
			$pass=document.getElementById("pass");
			$acc=document.getElementById("accion");
		if($pass.type=="password"){
			$pass.type="text";
			$acc.value="OCULTAR"
		}else{
			$pass.type="password";
			$acc.value="MOSTRAR";
		}
		}