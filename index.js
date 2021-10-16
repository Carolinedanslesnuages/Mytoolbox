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
  

!async function(){
  await christmasDay()
  await countdown(2021,12,25)
}()
  

//Affiche joyeux Noel dans une console si la date est ok
function christmasDay() {
const christmasDay = '25/12/2021'
const name = 'Caroline'
const date = new Date()
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const formatDay = `${day}/${month}/${year}`
if(formatDay === christmasDay) {
  console.log(`Joyeux Noël ${name}`)
}
};

function countdown(yr,m,d){
  const  montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
  const  today=new Date()
  let  todayy=today.getYear()
  if (todayy < 1000)
  todayy+=1900
  const  todaym=today.getMonth()
  const  todayd=today.getDate()
  const  todaystring=montharray[todaym]+" "+todayd+", "+todayy
  const  futurestring=montharray[m-1]+" "+d+", "+yr
  const  difference=(Math.round((Date.parse(futurestring)-Date.parse(todaystring))/(24*60*60*1000))*1)
  if (difference==0)
  console.log('yeah!')
  else if (difference>0)
  console.log(`${difference} jours restant` )
  }



























