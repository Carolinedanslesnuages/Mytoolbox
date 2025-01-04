# IIFE Utilitaires

Voici des exemples d'IIFE (Immediately-Invoked Function Expressions) que vous pouvez réutiliser dans vos projets JavaScript/TypeScript :

## Exemple d'IIFE classique
```javascript
(function () {
  alert('Hello, ouvre la console');
  console.log('Bienvenue dans mon bac à sable');
})();

((d) => {
  console.log(d);
  console.log('Je suis aussi une IIFE');
  console.log('Mais je ne suis pas lisible');
})('arrow function : function anonymes');


(function bastienSayMyName() {
  (function marina() {
    console.log("Marinaaaaaa");
  })();
})();

!async function() {
  await christmasDay();
  await countdown(2021, 12, 25);
}();