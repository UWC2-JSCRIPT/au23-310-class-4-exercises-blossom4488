const blackjackDeck = getDeck();

// /**
//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
// class CardPlayer {}; //TODO
class CardPlayer {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  drawCard() {
    const getRandomCard = Math.floor(Math.random() * deck.length);
    this.hand.push(deck[getRandomCard]);
  }
}

// const deck = getDeck();

// // CREATE TWO NEW CardPlayers
// const dealer; // TODO
// const player; // TODO
const player = new CardPlayer("Player");
const dealer = new CardPlayer("Dealer");

// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
// const calcPoints = (hand) => {
//   // CREATE FUNCTION HERE

// }
const calcPoints = (hand) => {
  let totalPoints = 0;
  let isSoft = false;
  for (const card of hand) {
    totalPoints += card.val;
    // const { totalPoints, isSoft } = calcPoints(dealerHand);
  }
  for (const card of hand) {
    if (card.displayVal === "Ace" && totalPoints > 21) {
      totalPoints -= 10;
      isSoft = true;
    }
  }
  return { total: totalPoints, isSoft: isSoft };
};

// /**
//  * Determines whether the dealer should draw another card.
//  *
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */
// const dealerShouldDraw = (dealerHand) => {
//   // CREATE FUNCTION HERE

// }
const dealerShouldDraw = (dealerHand) => {
  let currentTotal = calcPoints(dealerHand).total;
  let isSoft = calcPoints(dealerHand).isSoft;
  if (currentTotal <= 16) {
    return true;
  } else if (currentTotal === 17 && isSoft) {
    return true;
  } else {
    return false;
  }
};

// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore
//  * @param {number} dealerScore
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
// const determineWinner = (playerScore, dealerScore) => {
//   // CREATE FUNCTION HERE

// }
const determineWinner = (playerScore, dealerScore) => {
  return `${playerScore} is player's score, ${dealerScore} is dealer's score and ${player.name} `;
};

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count
//  * @param {string} dealerCard
//  */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`;
};

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player
//  */
const showHand = (player) => {
  const displayHand = player.hand.map((card) => card.displayVal);
  console.log(
    `${player.name}'s hand is ${displayHand.join(", ")} (${
      calcPoints(player.hand).total
    })`
  );
};

// /**
//  * Runs Blackjack Game

const startGame = function () {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  let playerScore = calcPoints(player.hand).total;
  showHand(player);
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
  }
  if (playerScore > 21) {
    return "You went over 21 - you lose!";
  }
  console.log(`Player stands at ${playerScore}`);

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
  }
  if (dealerScore > 21) {
    return "Dealer went over 21 - you win!";
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
};

console.log(startGame());
