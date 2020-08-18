class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.currentCard.correctAnswer === this.guess) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
        return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
};

module.exports = Turn;
