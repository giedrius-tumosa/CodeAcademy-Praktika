export default class Game {
  constructor(title, publisher, developer, releaseYear, description, genre, imageURL) {
    [this.title, this.publisher, this.developer, this.releaseYear, this.description, this.genre, this.imageURL] = [title, publisher, developer, releaseYear, description, genre, imageURL];
    return this.createGameObject();
  }
  createGameObject() {
    const newGame = {};
    this.title && (newGame.title = this.title);
    this.publisher && (newGame.publisher = this.publisher);
    this.developer && (newGame.developer = this.developer);
    this.releaseYear && (newGame.releaseYear = this.releaseYear);
    this.description && (newGame.description = this.description);
    this.genre && (newGame.genre = this.genre);
    this.imageURL && (newGame.imageURL = this.imageURL);

    return newGame;
  }
}
