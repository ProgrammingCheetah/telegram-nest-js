import { Dimensions, IDimensionOptions } from '../dimensions/dimensions';


export interface IPreviewOptions extends IDimensionOptions {
  url: string;
}

export class Preview extends Dimensions {
  private readonly _url: string;

  constructor(options: IPreviewOptions) {
    super(options);
    this._url = options.url;
  }

  get url() {
    return this._url;
  }

}
