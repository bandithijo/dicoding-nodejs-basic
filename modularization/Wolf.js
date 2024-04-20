class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    console.info('Owwooo!');
  }
}

module.exports = Wolf;
