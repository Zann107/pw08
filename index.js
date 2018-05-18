var p01 = document.querySelector("#one");
var p02 = document.querySelector("#two");
var p03 = document.querySelector("#trid");
var p04 = document.querySelector("#foor");
var p05 = document.querySelector("#five");
var text = document.querySelector(".text");


p01.addEventListener("mouseover",function(){text.innerHTML ="<h1> Info personelle<h1> <p>NAME : SCOTT-MULLER AMEGAN <br>Adresse : 2 ALLEE DES MYOSOTIS <br>Ville : AUBERVILLIERS (93300) <br>Email : AMEGANSCOTT@GMAIL.COM <br>Tel :06.08.94.02.24</p> "});
p01.addEventListener("mouseout",function(){text.innerHTML ="<h1>Amegan Scott<h1>";});

p02.addEventListener("mouseover",function(){text.innerHTML ="formation"});
p02.addEventListener("mouseout",function(){text.innerHTML ="<h1>Amegan Scott<h1>";});


p03.addEventListener("mouseover",function(){text.innerHTML ="Experience"});
p03.addEventListener("mouseout",function(){text.innerHTML ="<h1>Amegan Scott<h1>";});


p04.addEventListener("mouseover",function(){text.innerHTML ="<h1>Compétence<h1> En cour d'acquisition"});
p04.addEventListener("mouseout",function(){text.innerHTML ="<h1>Amegan Scott<h1>";});

p05.addEventListener("mouseover",function(){text.innerHTML ='<h1>Mes projet personelle<h1><br><a href="https://beta.simplonline.co/userspace/profile">Mon Simplonco</a><br><a href="https://github.com/Zann107">Mon github</a>'}); 







console.log(document);




