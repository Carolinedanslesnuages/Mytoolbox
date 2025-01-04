// Immediately-Invoked Function Expression (IIFE)

(function () {
  alert('Hello, ouvre la console');
  console.log('Bienvenue dans mon bac a sable');
})();

// Elle peut s'écrire de différentes façons
((d) => {
  console.log(d);
  console.log('Je suis aussi une IIFE');
  console.log('Mais je ne suis pas lisible');
})('arrow function : function anonymes');

// Une IIFE peut avoir un nom
(function bastienSayMyName() {
  (function marina() {
    console.log("Marinaaaaaa");
  })();
})();

// Déclaration de fonction
JeSuisUneDéclaration('Ma','Déclaration');

function JeSuisUneDéclaration(a, b) {
  console.log(a, b);
}

// Expression de fonction
const expressionFunction = (a) => {
  console.log(a);
};
expressionFunction('Je suis une expression de function');

// Utilisation des opérateurs unaires
!function () { console.log('!'); }();
+function (e) { console.log(e); }('+');
-function (f) { console.log(f); }('-');
~function (h) { console.log(h); }('~');
void function (i) { console.log(i); }('void');

// Utilisation d'async IIFE
!async function() {
  await christmasDay();
  await countdown(2021, 12, 25);
}();

// Affiche joyeux Noël dans la console si la date est OK
function christmasDay() {
  const christmasDay = '25/12/2021';
  const name = 'Caroline';
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formatDay = `${day}/${month}/${year}`;
  if (formatDay === christmasDay) {
    console.log(`Joyeux Noël ${name}`);
  }
}

function countdown(yr, m, d) {
  const montharray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const today = new Date();
  let todayy = today.getYear();
  if (todayy < 1000) todayy += 1900;
  const todaym = today.getMonth();
  const todayd = today.getDate();
  const todaystring = `${montharray[todaym]} ${todayd}, ${todayy}`;
  const futurestring = `${montharray[m - 1]} ${d}, ${yr}`;
  const difference = Math.round((Date.parse(futurestring) - Date.parse(todaystring)) / (24 * 60 * 60 * 1000)) * 1;
  if (difference === 0) console.log('yeah!');
  else if (difference > 0) console.log(`${difference} jours restant`);
}