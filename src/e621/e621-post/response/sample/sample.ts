import { Dimensions, IDimensionOptions } from '../dimensions/dimensions';

export interface ISampleOptions extends IDimensionOptions {
  has: boolean;
  url: string;
  alternates: {};
}

export class Sample extends Dimensions {
  private readonly _has: boolean;
  private readonly _url: string;
  private readonly _alternates: {};

  constructor(options: ISampleOptions) {
    super(options);
    this._has = options.has;
    this._url = options.url;
    this._alternates = options.alternates;
  }

  get has() {
    return this._has;
  }

  get url() {
    return this._url;
  }

  get alternates() {
    return this._alternates;
  }


}
