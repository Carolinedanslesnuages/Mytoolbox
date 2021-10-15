// Immediately-Invoked Function Expression (IIFE)

// En javascript ceci est une IIFE, c'est à dire une expression de fonction invoquable immédiatement
(function () {
  alert(' Hello, ouvre la console')
  console.log('Bienvenue dans mon bac a sable')
})();

//Elle peut s'écrire de différente façon 
((d) => {
  console.log(d)
  console.log('Je suis aussi une IIFE' )
  console.log('Mais je ne suis pas lisible')
})('arrow function : function anonymes');

// Une IIFE peut avoir un nom. Cependant, Elle ne peut pas être invoqué à nouveau après l’exécution :

(function bastienSayMyName() {
  (function marina() {
    console.log("Marinaaaaaa")
  })();
})();


 // Contrairement aux déclarations de fonction, les expressions de fonction ne sont pas hissées(Hoisting).
  //Elle ne sont disponibles que lorsque l'interpréteur JavaScript traite cette ligne de code.
  //Lorsque que l'on défini une fonction le moteur javascript l'ajoute à l'objet global. 
  //C'est pour ça que la fonction suivante peut être exécutée n'importe dans mon script. 
  JeSuisUneDéclaration('Ma','Déclaration')


  function JeSuisUneDéclaration (a,b) {
    console.log(a,b)
  }


  // mais que celle ci, bien qu'elle ne soient pas immédiatemment invoquable, elle ne sera disponible qu'une fois
  //interprété par le moteur JS

  const expressionFunction = (a) => {
    console.log(a)
  }
  expressionFunction('Je suis une expression de function')


//On peut remplacer les parenthèses par les opérateurs unaires
// ces opérateurs peuvent affecter les données renvoyées 

!function () {
  console.log('!')  
}();

+function (e) {
  console.log(e)
}('+');

-function (f) { console.log(f)}('-');

~function (h) {
  console.log(h)
}('~');

void function (i) {
   console.log(i)
  }('void');
  
