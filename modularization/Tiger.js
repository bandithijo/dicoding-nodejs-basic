class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    console.info('Grrrr!');
  }
}

module.exports = Tiger;
