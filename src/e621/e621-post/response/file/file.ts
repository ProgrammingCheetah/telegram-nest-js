import { Dimensions, IDimensionOptions } from '../dimensions/dimensions';


interface IFile extends IDimensionOptions {
  ext: string;
  size: number;
  md5: string;
  url: string;
}

export class File extends Dimensions {
  private readonly _ext: string;
  private readonly _size: number;
  private readonly _url: string;

  constructor(options: IFile) {
    super(options);
    this._ext = options.ext;
    this._size = options.size;
    this._url = options.url;
  }

  get ext() {
    return this._ext;
  }

  get type() {
    return this._ext;
  }

  get size() {
    return this._size;
  }

  get url() {
    return this._url;
  }
}

