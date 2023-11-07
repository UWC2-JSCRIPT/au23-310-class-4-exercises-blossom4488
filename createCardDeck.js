/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  const deck = [];
  const suits = ["hearts", "spades", "clubs", "diamonds"];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 1; j <= 13; j++) {
      let displayVal = "";
      let val = 0;
      switch (j) {
        case 1:
          val = 11;
          displayVal = "Ace";
          break;
        case 11:
          val = 10;
          displayVal = "Jack";
          break;
        case 12:
          val = 10;
          displayVal = "Queen";
          break;
        case 13:
          (val = 10), (displayVal = "King");
          break;
        default:
          val = j;
          displayVal = j.toString();
      }
      const card = {
        val: val,
        displayVal: displayVal,
        suit: suits[i],
      };
      deck.push(card);
    }
  }
  return deck;
};

console.log(getDeck());

// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === "number";
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === "string";
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === "string";
console.log(`Random card has display value? ${cardHasDisplayVal}`);
