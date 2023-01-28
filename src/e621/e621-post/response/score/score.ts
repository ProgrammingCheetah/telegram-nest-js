export interface IScoreOptions {
  up: number;
  down: number;
  total: number;
}

export class Score {
  private readonly _up: number;
  private readonly _down: number;
  private readonly _total: number;

  constructor(options: IScoreOptions) {
    this._up = options.up;
    this._down = options.down;
    this._total = options.total;
  }

  get up() {
    return this._up;
  }

  get down() {
    return this._down;
  }

  get total() {
    return this._total;
  }

  isPositive() {
    return this.total > 0;
  }

}
