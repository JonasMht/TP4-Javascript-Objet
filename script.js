//hello world

function Cours(nomP, nb_heures)
{
  this.nomP = nomP;
  this.nb_heures = nb_heures;
};

var AlgoProg = new Cours("Dame Caro", 90);
var MathElem = new Cours("Sir Teyssier", 150);


var elementCours = document.getElementById("Cours");

elementCours.innerHTML = "Prof: " + AlgoProg.nomP + "<br>Nombre Heures: " + AlgoProg.nb_heures;


var img = document.getElementById("meineWaifu");

var cond1 = false;


function f()
{
  var para = document.getElementById("para");
  para.style.color = "red";
  if (cond1)
  {
    img.src = "files/waifu.jpg";
    para.innerHTML += "<br>MiamMiam!";
    cond1 = false;
  }
  else
  {
    img.src = "files/waifu2.jpg";
    para.innerHTML += "<br>Slava Russia !";
    cond1 = true;
  }
}

img.addEventListener("click", function(){f()});

var images = document.getElementsByClassName("image");


for (let j = 0; j < images.length; j++) {
  let children = images[j].children;
  children[0].addEventListener('mouseover', function() {
    console.log(j);
    children[1].style.display = "block";
  });
}

for (let j = 0; j < images.length; j++) {
  let children = images[j].children;
  children[0].addEventListener('mouseout', function() {
    children[1].style.display = "none";
  });
}



/*
Cours Javascript 2
//Un objet
//Mehtode 1
var MonObjet =
{
  a: "Hello";
  b: 30;
  c: true;

  MyFunc: function()
  {
    return a;
  }
};

//Mehtode 1
function MonObjet (a, b, c)
{
  this.a = a;
  this.b = b;
  this.c = c;

  this.MyFunc = function()
  {
    return a;
  }
};

var InstanceObject = new MyObject("Hello", 30, true);

MonObjet.a == "Hello" == MonObjet.MyFunc() == MonObjet['a']

//obtenir des objets de la page
document.getElementById("id"); un element unique
document.getElemenstByTagName("tag"); exemple p h1 div etc (tableau de tout les elements toruvés)
document.getElementsByClassName("class"); (tableau de toout les elements trouvés)
// Attontion au s (ElementS)

// Changer le contenu html
element.innerHTML = "SomeSome";
// Obtenir le contenu html
element.innerHTML

//changer les attributs
element.attributes[0].name; //renvoie le nom du premier paramètre de l'élément ex id, class etc.
element.attributes[0].value; //renvoie la valeur attribuée au premier paramètre de l'élément.
//Définir un attribut
element.setAttribute("class","MyClassName")

//events
x.addEventListener("mouseover", function1);
x.addEventListener("click", function2);
x.addEventListener("mouseout", function3);
//...

//Le dom et les noeuds
document.querySelector("li.menu") // exemple // obtenir un élément de liste appelé menu
document.querySelectorAll("li.menu") // exemple // obtensir tout les list items contenant menu

//changer d'autres attributs
element.style.color = "blue";
element.src = "newImg.png";

//tableaux
tab.lenght // renvoie le nombre d'éléments du tabelau
*/
