<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>BossInfoNet Inscription</title>
<link rel="stylesheet" type="text/css" href="css/styles.css"/>
<script type="text/javascript" src="docjs/jquery.js"></script>
<script src="script.js" type="text/javascript" ></script>
<script src="docjs/validekeyup.js" type="text/javascript" ></script>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>
</head>
<body>
<div id="container">

	<header> 
	
   <a id="logo"><img src="image/bosinfone.jpg" width="250px" height="50px" alt="bosinfone" </a>    
		<nav>
			<ul>
				<li><a href="#" class="current">Accueil</a></li>
				<li><a href="#" class="current">Cours</a></li>
				<li><a href="#" class="current">Forum</a></li>
				<li><a href="#" class="current">Blog</a></li>
				<li><a href="#" class="current">Apropos</a></li>
			</ul>
		</nav>
			<span><a href="inscription.html" class="renvoie">s'inscrire</a></span>
			<span><a href="connexion.html" class="renvoie">Connexion</a></span>
	</header>
	<section>
	<article>
		<h1 id="h1-inscription">Inscription</h1>
		<form id="myForm-inscription" name="myForminscription" method="post" action="Accueil.html" onsubmit="function()">
			<div id="registre">
				<label class="myForm-labl" for="lastName">Nom :</label><br /><br />
				<input name="lastName" id="lastName" type="text" placeholder="Nom" />
				<span class="erreur-sms">  Nom doit comporter au moins 4 caractères</span>
				<br /><br />
				
				<label class="myForm-labl" for="firstName">Prenom :</label><br></br>
				<input name="firstName" id="firstName" type="text" placeholder="Prenom"/>
				<span class="erreur-sms" >Prénom doit comporter au moins 4 caractères</span>
				<br></br>
				
				<label class="myForm-labl" for="login"> Pseudo :</label><br></br>
				<input name="login" id="login" type="text" placeholder="Pseudo"/>
				<span class="erreur-sms">Pseudo doit comporter au moins 4 caractères</span>
				<br></br>
				
				<label class="myForm-labl" for="adresse-email">Adresse email :</label><br></br>
				<input name="email" id="adresse-email" type="text" placeholder="Adresse email"/>
				<span class="erreur-sms">Veuillez enter une adresse email valide</span>
				<br></br>
				
				<label class="myForm-labl" for="mdpi">Mot de passe :</label><br></br>
				<input name="mdpi" id="mdpi" type="password" placeholder="Mot de passe"/>
				<span class="erreur-sms">Le mot de passe doit comporter au moins 8 caractères</span>
				<br></br>

				<label class="myForm-labl" for="mdpi2">Confirmation du mot de passe :</label><br></br>
				<input name="mdpi2" id="mdpi2" type="password" placeholder="Confirmer"/>
				<span class="erreur-sms">Le mot de passe doit comporter au moins 8 caractères</span>
				<br></br><br></br>
			<input type="submit" value="Inscription" id="inscrire" /> 
			</div>
			
		</form>
	</article>
	</section>

	<footer>
		<section id="section-footer">

			<section id="footer-block">
				<aside class="">
					<nav>
						<ul>
							<li><a href="#" class="current">Accueil</a></li>
							<li><a href="#" class="current">Cours</a></li>
							<li><a href="#" class="current">Forum</a></li>
							<li><a href="#" class="current">Blog</a></li>
							<li><a href="#" class="current">Apropos</a></li>
						</ul>
					</nav>
					</aside>
					
					
				
				<aside id="reseaufooter">
					<ul>
						<li><a href="#"><img src="image/facebook-logo.png" alt="facebook"  /></a></li>
						<li><a href="#"> <img src="image/6a00d8341bfcb953ef019b01708a6c970d.png" alt="6a00d8341bfcb953ef019b01708a6c970d" /></a></li>
						<li><a href="#"><img src="image/logo-youtube-305x305.png" alt="logo-youtube-305x305" /></a></li>
						<li><a href="#"><img src="image/gmail.jpg" alt="gmail"/></a></li>
					</ul>
				</aside>
					<aside class="copywrite">
								<p>BOSSINFONET  &copy; 2016 <a href="#">BossInfoNet.com</a> </p>
					</aside>
			</section>

		</section>
	</footer>
</div>
</body>
</html>