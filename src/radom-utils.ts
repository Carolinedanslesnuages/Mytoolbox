// Function to display a random quote
const displayRandomQuote = (): void => {
  // List of quotes
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

  // Generate a random index
  const randomIndex: number = Math.floor(Math.random() * quotes.length);

  // Select the target element
  const quoteElement: HTMLElement | null = document.getElementById("citation");

  // Check if the element exists before modifying its content
  if (quoteElement) {
    quoteElement.innerHTML = quotes[randomIndex];
  } else {
    console.error("The element with ID 'citation' was not found.");
  }
};

// Call the function to display a random quote
displayRandomQuote();
