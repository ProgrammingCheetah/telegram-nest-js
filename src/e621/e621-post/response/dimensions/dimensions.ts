export interface IDimensionOptions {
  width: number;
  height: number;
}

export class Dimensions {
  private readonly _width: number;
  private readonly _height: number;

  constructor({ width, height }: IDimensionOptions) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
}
