function Pokemon(n,t,v,a,d){
	this.nombre = n;
	this.tipo = t;
	this.vida = v;
	this.ataque =  a;
	this.debilidad = d;
	this.datosCharizard = function(){//metodo de la clase Pokemon
		document.getElementById("efecto").innerHTML="<h1> Charizard</h1> <h3>Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente.</h3>";
	}
	this.datosPikachu = function(){
		document.getElementById("efecto").innerHTML="<h1> Pikachu</h1> <h3>Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose..</h3>";
	}
	this.datosSuicune = function(){
		document.getElementById("efecto").innerHTML="<h1> Suicune</h1> <h3>Recorre el mundo para purificar agua contaminada. Corre veloz con el viento del norte.</h3>";
	}
	this.datosEntei = function(){
		document.getElementById("efecto").innerHTML="<h1> Entei</h1> <h3>Un Pokémon que corre por la tierra. Dicen que siempre nace uno cuando aparece un nuevo volcán.</h3>";
	}
}
var pika,chart,suicu,ent,datos;
function inicio(){
	datos = document.getElementById("datosPokemon");
	pika = document.getElementById("Pikachu");
	chart = document.getElementById("Charizard");
	suicu = document.getElementById("Suicune");
	ent = document.getElementById("Entei");

	pika.addEventListener("click", pikachu);
	chart.addEventListener("click", charizard);
	suicu.addEventListener("click", suicune);
	ent.addEventListener("click", entei);
}

function pikachu(){
	var laImagen = document.getElementById("imagen");
	// acceder a los atributos
	var archivo = laImagen.getAttribute("src");
	// modificar los atributos
	laImagen.setAttribute("src", "img/025.png");
	var pikachu = new Pokemon("Pikachu","Eléctrico",100,55,"Tierra");
	datos.innerHTML="<b>Nombre: </b>"+pikachu.nombre+
														"<b><br></br>Tipo: </b>"+pikachu.tipo+
														"<b><br></br>Vida: </b>"+pikachu.vida+
														"<b><br></br>Ataque: </b>"+pikachu.ataque+
														"<b><br></br>Debilidad: </b>"+pikachu.debilidad;
	pikachu.datosPikachu();
	document.getElementById('efecto').style.display = "";
}

function charizard(){
	var laImagen = document.getElementById("imagen");
	// acceder a los atributos
	var archivo = laImagen.getAttribute("src");
	// modificar los atributos
	laImagen.setAttribute("src", "img/006.png");
	var charizard = new Pokemon("Charizard","Fuego",150,80,"Roca");
	datos.innerHTML="<b>Nombre: </b>"+charizard.nombre+
														"<b><br></br>Tipo: </b>"+charizard.tipo+
														"<b><br></br>Vida: </b>"+charizard.vida+
														"<b><br></br>Ataque: </b>"+charizard.ataque+
														"<b><br></br>Debilidad: </b>"+charizard.debilidad;
	charizard.datosCharizard();
	document.getElementById('efecto').style.display = "";
}

function suicune(){
	var laImagen = document.getElementById("imagen");
	// acceder a los atributos
	var archivo = laImagen.getAttribute("src");
	// modificar los atributos
	laImagen.setAttribute("src", "img/001.png");
	var suicune = new Pokemon("Suicune","Agua",200,130,"Eléctrico");
	datos.innerHTML="<b>Nombre: </b>"+suicune.nombre+
														"<b><br></br>Tipo: </b>"+suicune.tipo+
														"<b><br></br>Vida: </b>"+suicune.vida+
														"<b><br></br>Ataque: </b>"+suicune.ataque+
														"<b><br></br>Debilidad: </b>"+suicune.debilidad;
	suicune.datosSuicune();
	document.getElementById('efecto').style.display = "";
}

function entei(){
	var laImagen = document.getElementById("imagen");
	// acceder a los atributos
	var archivo = laImagen.getAttribute("src");
	// modificar los atributos
	laImagen.setAttribute("src", "img/002.png");
	var entei = new Pokemon("Entei","Fuego",250,180,"Roca");
	datos.innerHTML="<b>Nombre: </b>"+entei.nombre+
														"<b><br></br>Tipo: </b>"+entei.tipo+
														"<b><br></br>Vida: </b>"+entei.vida+
														"<b><br></br>Ataque: </b>"+entei.ataque+
														"<b><br></br>Debilidad: </b>"+entei.debilidad;
	entei.datosEntei();
	document.getElementById('efecto').style.display = "";
}

function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}