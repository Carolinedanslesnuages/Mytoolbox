# Utility Functions Repository

Bienvenue dans le dépôt contenant diverses fonctions utilitaires en JavaScript/TypeScript. Ce dépôt est conçu pour être un bac à sable de démonstrations et d'explorations de différentes techniques et concepts.

## Contenu

### 1. **Translation Utility**

#### `translateObjectKeys`
Cette fonction permet de traduire les clés d'un objet en utilisant un dictionnaire de correspondances.

```typescript
export function translateObjectKeys<T>(obj: { [key: string]: any }, dict: { [key: string]: string }): { [key: string]: any } {
  const translatedObj: { [key: string]: any } = {};

  for (const [key, value] of Object.entries(obj)) {
    const translatedKey = dict[key] || key;
    translatedObj[translatedKey] = value;
  }

  return translatedObj;
}
```

**Usage :**

```typescript
const obj = { firstName: "John", lastName: "Doe" };
const dict = { firstName: "prenom", lastName: "nom" };
console.log(translateObjectKeys(obj, dict));
// Output: { prenom: "John", nom: "Doe" }
```

---

### 2. **Immediately-Invoked Function Expressions (IIFE)**
Ce dépôt inclut plusieurs exemples d'IIFE (fonctions immédiatement invoquées), démontrant différentes syntaxes et styles d'écriture.

Exemples :

```javascript
(function () {
  alert('Hello, ouvre la console');
  console.log('Bienvenue dans mon bac a sable');
})();

((d) => {
  console.log(d);
  console.log('Je suis aussi une IIFE');
})("arrow function : function anonymes");
```

---

### 3. **Fonctions et Opérateurs Unaires**
Ce dépôt explore l'utilisation de fonctions nommées, d'expressions de fonction et des opérateurs unaires pour invoquer des fonctions.

Exemple :

```javascript
!function () { console.log('!'); }();
+function (e) { console.log(e); }('+');
```

---

### 4. **Async IIFE**
Un exemple d'IIFE asynchrone est également inclus, démontrant l'utilisation d'`async`/`await` dans ce contexte.

```javascript
!async function() {
  await christmasDay();
  await countdown(2021, 12, 25);
}();
```

---

### 5. **Gestion des dates et événements**
#### `christmasDay` et `countdown`
Des fonctions utilitaires pour vérifier si une date correspond à Noël et pour effectuer un compte à rebours.

Exemple :

```javascript
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
```

---

### 6. **Citation aléatoire**
Une fonction pour afficher une citation aléatoire parmi une liste prédéfinie.

#### `displayRandomQuote`

```typescript
const displayRandomQuote = (): void => {
  const quotes: string[] = [
    "Dieu est amour mais l’amour est classé X. - Guy Bedos",
    "Le silence oblitère tout. - Paul Austère",
    "Le silence est un aveu. - Euripide",
    "Les femmes désirent ce qu'elles aiment, les hommes aiment ce qu'ils désirent. - Sacha Guitry",
    "La nécessité de rechercher le véritable bonheur est le fondement de notre liberté. - John Locke",
    "Moins on en sait mieux on colporte. - Grégoire Lacroix",
    "Il est des silences, parfois, qui blessent plus sûrement qu’une injure. - Philippe Besson",
    "Cela pèse lourd, une absence. Bien plus lourd qu’une disparition. Parce que avec les morts, on sait qu’ils ne reviendront pas. Tandis que les lointains nous font espérer. - Philippe Besson",
    "Tout vrai regard est un désir. - Alfred de Musset",
    "La vie est un sommeil, l’amour en est le rêve, Et vous aurez vécu, si vous avez aimé. - Alfred de Musset",
    "Le souvenir est le parfum de l'âme. - Georges Sand",
    "Le mieux serait que tu me demandes ce que tu veux savoir. Et si tu es perplexe que tu ne sais pas ce que tu dois me demander parce que tu ne sais pas ce que tu veux savoir, demande-moi autre chose. - Daniel Glattauer"
  ];

  const randomIndex: number = Math.floor(Math.random() * quotes.length);
  const quoteElement: HTMLElement | null = document.getElementById("citation");

  if (quoteElement) {
    quoteElement.innerHTML = quotes[randomIndex];
  } else {
    console.error("The element with ID 'citation' was not found.");
  }
};

displayRandomQuote();
```

---

## Comment contribuer

- Forkez ce dépôt.
- Créez une branche pour vos modifications : `git switch -c feature/your-feature-name`.
- Soumettez une pull request avec vos modifications.

---

## Licence
Ce dépôt est publié sous une licence [MIT](LICENSE).

---

## Auteur
Créé par carolinedanslesnuages.

