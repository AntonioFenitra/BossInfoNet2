

/*script d'inscription*/
$(function(){
	$("#inscrire").click(function(){
		valid = true;
	if($("#lastName").val() == ""){
		$("#lastName").next(".erreur-sms").fadeIn().text("veuillez entrer voter Nom");
		valid = false;
	}else if(!$("#lastName").val().match(/^[a-z]+$/i)){
		$("#lastName").next(".erreur-sms").fadeIn().text("veuillez entrer un Nom valide");
		valid = false;
	}else if($("#lastName").val().length<4){
		$("#lastName").next(".erreur-sms").fadeIn().text("veuillez entrer au minimum 4 caractères ");
		valid = false;
	}else{
		$("#lastName").next(".erreur-sms").fadeOut();
	}	
	if($("#firstName").val() == ""){
		$("#firstName").next(".erreur-sms").fadeIn().text("veuillez entrer voter Prenom");
		valid = false;
	}else if(!$("#firstName").val().match(/^[a-z]+$/i)){
		$("#firstName").next(".erreur-sms").fadeIn().text("veuillez entrer un Prénom valide");
		valid = false;
	}else if($("#firstName").val().length<4){
		$("#firstName").next(".erreur-sms").fadeIn().text("veuillez entrer  au minimum 4 caractères ");
		valid = false;
	}else
	{
		$("#firstName").next(".erreur-sms").fadeOut();
	}
	if($("#login").val() == ""){
		$("#login").next(".erreur-sms").fadeIn().text("veuillez entrer voter Psseudo");
		valid = false;
	}else if(!$("#login").val().match(/^[a-z0-9]+$/i)){
		$("#login").next(".erreur-sms").fadeIn().text("veuillez entrer un Psseudo valide");
		valid = false;
	}else if($("#login").val().length<4){
		$("#login").next(".erreur-sms").fadeIn().text("veuillez entrer  au minimum 4 caractères ");
		valid = false;
	}else
	{
		$("#login").next(".erreur-sms").fadeOut();
	}
	if($("#adresse-email").val() ==""){
		$("#adresse-email").next(".erreur-sms").fadeIn().text("veuillez entrer votre adresse email");
		valid = false;
	}else if (!$("#adresse-email").val().match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/)){
		$("#adresse-email").next(".erreur-sms").fadeIn().text("veuillez entrer une adresse email valide");
		valid = false;
	}else{
		$("#adresse-email").next(".erreur-sms").fadeOut();
	}
	
	if($("#mdpi").val() ==""){
		$("#mdpi").next(".erreur-sms").fadeIn().text("Entrer votre mot de passe");
		valid = false;
	}else if (!$("#mdpi").val().match(/^[a-z0-9._-]+$/i)){
		$("#mdpi").next(".erreur-sms").fadeIn().text("veuillez entrer un mot de passe valide");
		valid = false;
	}else if($("#mdpi").val().length<8){
		$("#mdpi").next(".erreur-sms").fadeIn().text("veuillez entrer  au minimum 8 caractères ");
		valid = false;
	}else{
		$("mdpi").next(".erreur-sms").fadeOut();
	}
	$(function(){
		$("#lastName").keyup(function(){
		valid = true;
	if(!$("#lastName").val().match(/^[a-z]+$/i)){
		$("#lastName").next(".erreur-sms").fadeIn().text("veuillez entrer un Nom valide");
		valid = false;
	}else if($("#lastName").val().length<4){
		$("#lastName").next(".erreur-sms").show().text("veuillez entrer  au minimum 4 caractères");
		valid = false;
	}else
	{
		$("#lastName").next(".erreur-sms").hide().text("");
	}
	return valid; 
		
		});
		
				$("#firstName").keyup(function(){
		valid = true;
	if(!$("#firstName").val().match(/^[a-z]+$/i)){
		$("#firstName").next(".erreur-sms").fadeIn().text("veuillez entrer un Prénom valide");
		valid = false;
	}else if($("#firstName").val().length<4){
		$("#firstName").next(".erreur-sms").show().text("veuillez entrer  au minimum 4 caractères");
		valid = false;
	}else
	{
		$("#firstName").next(".erreur-sms").hide().text("");
	}
	return valid; 
		
		});
		
				$("#login").keyup(function(){
		valid = true;
	if(!$("#login").val().match(/^[a-z0-9]+$/i)){
		$("#login").next(".erreur-sms").fadeIn().text("veuillez entrer un Psseudo valide");
		valid = false;
	}else if($("#login").val().length<4){
		$("#login").next(".erreur-sms").show().text("veuillez entrer  au minimum 4 caractères");
		valid = false;
	}else
	{
		$("#login").next(".erreur-sms").hide().text("");
	}
	return valid; 
		
		});
		
				$("#adresse-email").keyup(function(){
		valid = true;
		if(!$("#adresse-email").val().match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/)){
		$("#adresse-email").next(".erreur-sms").show().text("veuillez entrer un email valide ex: rakoto@gmail.com");
		valid = false;
	}
	else
	{
		$("#adresse-email").next(".erreur-sms").hide().text("");
	}
	return valid; 
		
		});
		
		
		$("#mdpi").keyup(function(){
		valid = true;
		if(!$("#mdpi").val().match(/^[a-z0-9]+$/i)){
		$("#mdpi").next(".erreur-sms").show().text("veuillez entrer une mot de passe valide");
		valid = false;
		}else if($("#mdpi").val().length < 8){
		$("#mdpi").next(".erreur-sms").show().text("veuillez entrer au minimum 8 caractères ");
		valid = false;
		} 
		else
		{
			$("#mdpi").next(".erreur-sms").hide().text("");
		}
		return valid;
		});

		
		
		
		});
	
	return valid;
	});
});

//fonction connexion

function fonction1(){
	var adresse1= document.getElementById('adresse1').value;
	var passeword1=document.getElementById('passeword1').value;
	
	if ( adresse1=="" || passeword1=="" ){
		alert('veuillez ecrire votre mot de passe ou adresse dans le formulaire.');
		return false;
	}else if ($("#passeword1").val().length<8 ){
		alert('veuillez ecrire votre mot de passe au minimume 8 caractère.');
		return false;
	}else{
		return true;
	}
}

//fixser le menu

//losqu'on click sur un menu ---->on retire la classe active-------->j'ajoute la classe active a l'onglet actuel

 choix = document.querySelectorAll('.choix a')
 for (var i=0;i<choix.length;i++)
	choix[i].addEventListener('click', function(e){
	var li =this.parentNode
	var div = this.parentNode.parentNode.parentNode
	
	if(li.classList.choisir('active')){
		return false
	}
	// ON RETIRE LA CLASSE ACTIVE SUR LE MENUE
	div.querySelector('.choix .active').classList.remove('active')
	//j'ajoute la class active au enu selectioner
	li.classList.add('active')
});

choix1 = document.querySelectorAll('.choix1 a')
 for (var i=0;i<choix1.length;i++)
choix1[i].addEventListener('click', function(a){
	
	var li =this.parentNode
	var civ = this.parentNode.parentNode.parentNode
	
	if(li.classList.choisir('active1')){
		return false
	}
	// ON RETIRE LA CLASSE ACTIVE SUR LE MENUE
	div.querySelector('.choix1 .active1').classList.remove('active1')
	//j'ajoute la class active au enu selectioner
	li.classList.add('active1')
})


